import React, { useMemo, useState } from "react";
import { Button, ConfigProvider } from "antd";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import LessonSelector from "./components/LessonSelector";
import QuizQuestion from "./components/QuizQuestion";
import ResultScreen from "./components/ResultScreen";
import { subjects } from "./data/subjects";
import "./App.css";

function isAnswered(question, value) {
  if (question?.type === "drag_drop") {
    return (
      Array.isArray(value) &&
      value.length === question.pairs?.length &&
      value.every((v) => v !== undefined)
    );
  }
  if (Array.isArray(question?.answer)) {
    return Array.isArray(value) && value.length >= question.answer.length;
  }
  return value !== undefined;
}

function isCorrectAnswer(question, value) {
  if (question?.type === "drag_drop") {
    return (
      Array.isArray(value) &&
      value.length === question.pairs?.length &&
      question.pairs.every(
        (pair, i) => (value[i]?.label ?? value[i]) === pair.right,
      )
    );
  }
  if (Array.isArray(question?.answer)) {
    return (
      Array.isArray(value) &&
      [...value].sort().join(",") === [...question.answer].sort().join(",")
    );
  }
  return value === question?.answer;
}

function cleanExplanation(text = "") {
  const value = text.trim();
  if (/^(?:các\s+)?đáp án đúng\s*:/i.test(value)) return "";
  return value;
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function shuffleQuestions(items) {
  return shuffleArray(items.map((question) => {
    if (question.type === "drag_drop") {
      const pairs = shuffleArray(question.pairs ?? []);
      return { ...question, pairs, labels: shuffleArray(pairs.map((pair) => pair.right)) };
    }
    if (!Array.isArray(question.options)) return { ...question };
    const shuffledOptions = shuffleArray(
      question.options.map((option, originalIndex) => ({ option, originalIndex })),
    );
    const newIndexByOriginal = new Map(
      shuffledOptions.map(({ originalIndex }, newIndex) => [originalIndex, newIndex]),
    );
    const answer = Array.isArray(question.answer)
      ? question.answer.map((oldIndex) => newIndexByOriginal.get(oldIndex))
      : newIndexByOriginal.get(question.answer);
    return {
      ...question,
      options: shuffledOptions.map(({ option }) => option),
      answer,
    };
  }));
}

export default function App() {
  const [subjectId, setSubjectId] = useState(subjects[0]?.id ?? "");
  const [lessonId, setLessonId] = useState("all");
  const [mode, setMode] = useState("instant");
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState(null);

  const subject = subjects.find((item) => item.id === subjectId) || subjects[0];
  const lessons = Array.isArray(subject?.lessons) ? subject.lessons : [];

  const selectedQuestions = useMemo(() => {
    const selected =
      lessonId === "all"
        ? lessons
        : lessons.filter((l) => String(l.id) === lessonId);
    return selected.flatMap((lesson) =>
      (Array.isArray(lesson.questions) ? lesson.questions : []).map((q) => ({
        ...q,
        lessonTitle: lesson.title,
      })),
    );
  }, [lessons, lessonId]);

  const questions = activeQuestions ?? selectedQuestions;
  const question = questions[index];
  const answered = question
    ? isAnswered(question, answers[question.id])
    : false;
  const answeredCorrectly =
    question && answered
      ? isCorrectAnswer(question, answers[question.id])
      : false;
  const correctCount = questions.filter((q) =>
    isCorrectAnswer(q, answers[q.id]),
  ).length;
  const wrongQuestions = questions.filter(
    (q) => !isCorrectAnswer(q, answers[q.id]),
  );

  function reset() {
    setIndex(0);
    setAnswers({});
    setFinished(false);
  }

  function start() {
    if (!selectedQuestions.length) return;
    reset();
    setActiveQuestions(shuffleQuestions(selectedQuestions));
    setStarted(true);
  }

  function leave() {
    setStarted(false);
    setActiveQuestions(null);
    reset();
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3b82f6",
          borderRadius: 16,
          fontFamily: "'Nunito', sans-serif",
        },
      }}
    >
      <main
        className="page-shell"
        style={{
          backgroundColor: "#f0f4f9",
          minHeight: "100vh",
          paddingBottom: 40,
        }}
      >
        {/* Header luôn hiển thị */}
        <Header
          right={
            started ? (
              <Button onClick={leave} style={{ borderRadius: 10 }}>
                Thoát
              </Button>
            ) : null
          }
        />

        {/* 1. Màn hình chọn bài */}
        {!started && (
          <LessonSelector
            subjects={subjects}
            subjectId={subjectId}
            setSubjectId={setSubjectId}
            lessonId={lessonId}
            setLessonId={setLessonId}
            mode={mode}
            setMode={setMode}
            onStart={start}
          />
        )}

        {/* 2. Màn hình làm bài */}
        {started && !finished && question && (
          <div
            style={{ width: "100%", maxWidth: 850, boxSizing: "border-box", margin: "0 auto", padding: "16px" }}
          >
            <ProgressBar
              subjectTitle={subject?.title}
              lessonTitle={question.lessonTitle}
              current={index}
              total={questions.length}
            />
            <QuizQuestion
              key={question.id}
              question={question}
              index={index}
              total={questions.length}
              mode={mode}
              answers={answers}
              isCorrect={answeredCorrectly}
              isAnswered={answered}
              cleanExplanation={cleanExplanation}
              onChooseMultiple={(val) =>
                setAnswers((prev) => {
                  if (!Array.isArray(question.answer)) {
                    return { ...prev, [question.id]: val };
                  }
                  const selected = prev[question.id] ?? [];
                  const updated = selected.includes(val)
                    ? selected.filter((item) => item !== val)
                    : [...selected, val];
                  return { ...prev, [question.id]: updated };
                })
              }
              onChoosePairValue={(pIdx, val) => {
                setAnswers((prev) => {
                  const currentArr = [
                    ...(prev[question.id] ??
                      Array(question.pairs.length).fill(undefined)),
                  ];
                  currentArr[pIdx] = val;
                  return { ...prev, [question.id]: currentArr };
                });
              }}
              onAssignPair={(pIdx, tokenIndex) => {
                const label = question.labels?.[tokenIndex] ?? question.pairs[tokenIndex]?.right;
                if (!label) return;
                setAnswers((prev) => {
                  const currentArr = [
                    ...(prev[question.id] ??
                      Array(question.pairs.length).fill(undefined)),
                  ];
                  const oldIdx = currentArr.findIndex(
                    (it, index) => it?.tokenIndex === tokenIndex && index !== pIdx,
                  );
                  if (oldIdx >= 0) currentArr[oldIdx] = undefined;
                  currentArr[pIdx] = { tokenIndex, label };
                  return { ...prev, [question.id]: currentArr };
                });
              }}
              onClearPair={(pIdx) => {
                setAnswers((prev) => {
                  const currentArr = [
                    ...(prev[question.id] ??
                      Array(question.pairs.length).fill(undefined)),
                  ];
                  currentArr[pIdx] = undefined;
                  return { ...prev, [question.id]: currentArr };
                });
              }}
              onPrev={() => setIndex((i) => Math.max(0, i - 1))}
              onNext={() => {
                if (index < questions.length - 1) setIndex((i) => i + 1);
                else setFinished(true);
              }}
            />
          </div>
        )}

        {/* 3. Màn hình kết quả & Ôn lại */}
        {started && finished && (
          <ResultScreen
            questions={questions}
            answers={answers}
            correctCount={correctCount}
            wrongQuestions={wrongQuestions}
            onRetryAll={start}
            onRetryWrong={() => {
              setActiveQuestions(shuffleQuestions(wrongQuestions));
              reset();
              setStarted(true);
            }}
            onLeave={leave}
            cleanExplanation={cleanExplanation}
            isCorrectAnswer={isCorrectAnswer}
          />
        )}
      </main>
    </ConfigProvider>
  );
}
