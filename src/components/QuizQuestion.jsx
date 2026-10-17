import React, { useState } from "react";
import { Card, Button, Typography, Space, Tag, Alert } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function QuizQuestion({
  question,
  index,
  total,
  mode,
  answers,
  isCorrect,
  isAnswered,
  onChooseMultiple,
  onChoosePairValue,
  onAssignPair,
  onClearPair,
  onPrev,
  onNext,
  cleanExplanation,
}) {
  const [activePairLabel, setActivePairLabel] = useState(null);

  // Phân loại dạng câu hỏi
  const isTrueFalse = (() => {
    if (question?.type !== "drag_drop" || !question.pairs?.length) return false;
    const values = question.pairs.map((p) => p.right.trim().toLowerCase());
    return (
      values.every((v) => v === "đúng" || v === "sai") &&
      new Set(values).size === 2
    );
  })();

  const currentAnswer = answers[question.id];
  const inputLocked = mode === "instant" && isAnswered;
  const reveal = isAnswered && mode === "instant";
  const placedPairLabels = Array.isArray(currentAnswer) ? currentAnswer : [];
  const pairLabels =
    question.labels ?? question.pairs?.map((pair) => pair.right) ?? [];

  return (
    <section className="quiz-wrap" style={{ width: "100%", maxWidth: 750, boxSizing: "border-box", margin: "0 auto", padding: "0 16px" }}>
      <Card
        bordered={false}
        style={{
          borderRadius: 24,
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          padding: 12,
        }}
      >
        <Tag
          color="blue"
          style={{ borderRadius: 8, fontWeight: 700, marginBottom: 12 }}
        >
          {isTrueFalse
            ? "ĐÚNG / SAI"
            : question.type === "drag_drop"
              ? "GHÉP CẶP"
              : "TRẮC NGHIỆM"}
        </Tag>
        <Title
          level={3}
          style={{ color: "#0f172a", marginTop: 4, lineHeight: 1.4 }}
        >
          {question.question}
        </Title>

        {/* 1. Dạng câu hỏi Đúng / Sai */}
        {isTrueFalse ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 20,
            }}
          >
            {question.pairs.map((pair, pIdx) => {
              const selected = currentAnswer?.[pIdx];
              return (
                <div
                  key={pIdx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    borderRadius: 14,
                    border: "1.5px solid #f1f5f9",
                    backgroundColor: "#fafafa",
                  }}
                >
                  <Text
                    strong
                    style={{ fontSize: 14, flex: 1, paddingRight: 16 }}
                  >
                    {pair.left}
                  </Text>
                  <Space>
                    {["Đúng", "Sai"].map((val) => {
                      const isActive = selected === val;
                      const isCorrectChoice = reveal && pair.right === val;
                      const isWrongChoice =
                        reveal && isActive && selected !== pair.right;
                      return (
                        <Button
                          key={val}
                          type={isActive && !reveal ? "primary" : "default"}
                          disabled={inputLocked}
                          onClick={() => onChoosePairValue(pIdx, val)}
                          style={{
                            borderRadius: 10,
                            fontWeight: 700,
                            minWidth: 70,
                            borderColor: isCorrectChoice
                              ? "#52c41a"
                              : isWrongChoice
                                ? "#ff4d4f"
                                : undefined,
                            background: isCorrectChoice
                              ? "#f6ffed"
                              : isWrongChoice
                                ? "#fff2f0"
                                : undefined,
                            color: isCorrectChoice
                              ? "#389e0d"
                              : isWrongChoice
                                ? "#cf1322"
                                : undefined,
                          }}
                        >
                          {val}
                          {isCorrectChoice && <CheckCircleFilled />}
                          {isWrongChoice && <CloseCircleFilled />}
                        </Button>
                      );
                    })}
                  </Space>
                </div>
              );
            })}
          </div>
        ) : question.type === "drag_drop" ? (
          /* 2. Dạng câu hỏi Kéo Thả / Ghép cặp */
          <div style={{ marginTop: 20 }}>
            {/* Ngân hàng nhãn */}
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Text strong>Ngân hàng nhãn:</Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Nhấp chọn nhãn rồi nhấp vào ô cần đặt
                </Text>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {pairLabels.map((label, lIdx) => {
                  const isUsed = placedPairLabels.some(
                    (item) => item?.tokenIndex === lIdx,
                  );
                  return (
                    <Button
                      key={lIdx}
                      shape="round"
                      disabled={inputLocked || isUsed}
                      type={activePairLabel === lIdx ? "primary" : "default"}
                      onClick={() =>
                        setActivePairLabel(
                          activePairLabel === lIdx ? null : lIdx,
                        )
                      }
                      style={{ fontWeight: 600 }}
                    >
                      {label}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Các ô nhận */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {question.pairs.map((pair, pIdx) => {
                const placed = placedPairLabels[pIdx]?.label;
                const isPairCorrect = reveal && placed === pair.right;
                const isPairWrong =
                  reveal && placed !== undefined && placed !== pair.right;
                return (
                  <div
                    key={pIdx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 14px",
                      border: "1px solid #e2e8f0",
                      borderRadius: 12,
                    }}
                  >
                    <Text strong style={{ flex: 1 }}>
                      {pair.left}
                    </Text>
                    <div
                      onClick={() => {
                        if (activePairLabel !== null && !inputLocked) {
                          onAssignPair(pIdx, activePairLabel);
                          setActivePairLabel(null);
                        }
                      }}
                      style={{
                        minWidth: 160,
                        padding: "6px 14px",
                        borderRadius: 10,
                        border: `2px ${isPairCorrect ? "solid #52c41a" : isPairWrong ? "solid #ff4d4f" : placed ? "solid #3b82f6" : activePairLabel !== null ? "dashed #60a5fa" : "dashed #cbd5e1"}`,
                        backgroundColor: isPairCorrect
                          ? "#f6ffed"
                          : isPairWrong
                            ? "#fff2f0"
                            : placed
                              ? "#eff6ff"
                              : "#fff",
                        cursor: inputLocked ? "default" : "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: 600,
                          color: isPairCorrect
                            ? "#389e0d"
                            : isPairWrong
                              ? "#cf1322"
                              : placed
                                ? "#1d4ed8"
                                : "#94a3b8",
                        }}
                      >
                        {placed || "Kéo / Đặt vào đây"}
                      </Text>
                      {isPairWrong && (
                        <Text style={{ color: "#389e0d", fontSize: 12 }}>
                          → {pair.right}
                        </Text>
                      )}
                      {placed && !inputLocked && (
                        <Button
                          type="text"
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            onClearPair(pIdx);
                          }}
                        >
                          ×
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* 3. Dạng trắc nghiệm nhiều lựa chọn */
          <Space
            direction="vertical"
            size={10}
            style={{ width: "100%", marginTop: 20 }}
          >
            {(question.options ?? []).map((option, i) => {
              const selected = Array.isArray(currentAnswer)
                ? currentAnswer.includes(i)
                : currentAnswer === i;
              const correctOption =
                reveal &&
                (Array.isArray(question.answer)
                  ? question.answer.includes(i)
                  : question.answer === i);
              const wrongSelection = reveal && selected && !correctOption;

              let btnType = selected && !reveal ? "primary" : "default";
              let customStyle = {
                borderRadius: 14,
                height: "auto",
                padding: "14px 18px",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: 600,
                borderColor: correctOption
                  ? "#52c41a"
                  : wrongSelection
                    ? "#ff4d4f"
                    : undefined,
                background: correctOption
                  ? "#f6ffed"
                  : wrongSelection
                    ? "#fff2f0"
                    : undefined,
                color: correctOption
                  ? "#389e0d"
                  : wrongSelection
                    ? "#cf1322"
                    : undefined,
              };

              return (
                <Button
                  key={i}
                  block
                  type={btnType}
                  disabled={inputLocked}
                  onClick={() => onChooseMultiple(i)}
                  style={customStyle}
                >
                  <span style={{ whiteSpace: "normal", flex: 1 }}>
                    {option}
                  </span>
                  {correctOption && (
                    <CheckCircleFilled style={{ color: "#389e0d" }} />
                  )}
                  {wrongSelection && (
                    <CloseCircleFilled style={{ color: "#cf1322" }} />
                  )}
                </Button>
              );
            })}
          </Space>
        )}

        {/* Khung phản hồi tức thì: Không tiết lộ đáp án đúng nếu làm sai */}
        {reveal && (
          <div style={{ marginTop: 20 }}>
            {isCorrect ? (
              <Alert
                type="success"
                showIcon
                message="Chính xác rồi! Tuyệt vời!"
                description={cleanExplanation(question.explanation)}
                style={{ borderRadius: 14 }}
              />
            ) : (
              <Alert
                type="error"
                showIcon
                description={cleanExplanation(question.explanation)}
                message="Chưa chính xác!"
                style={{ borderRadius: 14 }}
              />
            )}
          </div>
        )}
      </Card>

      {/* Điều hướng câu hỏi */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Button
          icon={<ArrowLeftOutlined />}
          disabled={index === 0}
          onClick={onPrev}
          style={{ borderRadius: 12 }}
        >
          Quay lại
        </Button>
        <Text type="secondary" style={{ fontSize: 13 }}>
          {mode === "instant"
            ? "Chọn đáp án để kiểm tra"
            : "Có thể xem lại trước khi nộp"}
        </Text>
        <Button
          type="primary"
          icon={<ArrowRightOutlined />}
          iconPosition="end"
          onClick={onNext}
          style={{ borderRadius: 12 }}
        >
          {index === total - 1 ? "Nộp bài 🎉" : "Tiếp theo"}
        </Button>
      </div>
    </section>
  );
}
