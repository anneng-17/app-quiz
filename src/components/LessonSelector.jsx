import React from "react";
import { Card, Row, Col, Radio, Button, Typography, Divider } from "antd";
import {
  BookOutlined,
  RocketOutlined,
  CheckOutlined,
  HeartFilled,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export default function LessonSelector({
  subjects,
  subjectId,
  setSubjectId,
  lessonId,
  setLessonId,
  mode,
  setMode,
  onStart,
}) {
  const currentSubject =
    subjects.find((s) => s.id === subjectId) || subjects[0];
  const lessons = Array.isArray(currentSubject?.lessons)
    ? currentSubject.lessons
    : [];
  const selectedLesson = lessons.find((l) => String(l.id) === lessonId);
  const totalQuestions = lessons.reduce(
    (sum, l) => sum + (Array.isArray(l.questions) ? l.questions.length : 0),
    0,
  );

  return (
    <section
      className="home-wrap"
      style={{ width: "100%", maxWidth: 850, boxSizing: "border-box", margin: "0 auto", padding: "24px 16px" }}
    >
      {/* Banner chào mừng */}
      <Card
        className="welcome-card"
        bordered={false}
        style={{
          background: "linear-gradient(135deg, #e0f2fe 0%, #e0e7ff 100%)",
          borderRadius: 24,
          marginBottom: 24,
        }}
      >
        <div
          className="welcome-content"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#2563eb",
                letterSpacing: 1,
              }}
            >
              YOUR LITTLE STUDY SPACE
            </Text>
            <Title level={2} style={{ color: "#1e3a8a", marginTop: 4 }}>
              Chào bạn! Hôm nay mình học một chút nhé! ✨
            </Title>
            <Paragraph style={{ color: "#475569" }}>
              Chọn môn học, chọn bài ôn tập và cùng tiến bộ từng ngày.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              onClick={onStart}
              style={{ borderRadius: 14, fontWeight: 700 }}
            >
              Bắt đầu ngay →
            </Button>
          </div>
          <div style={{ fontSize: 60, padding: 12 }}>🎧</div>
        </div>
      </Card>

      {/* Chọn môn học */}
      <Title level={4} style={{ marginBottom: 12 }}>
        Chọn môn học
      </Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {subjects.map((item) => {
          const count = (item.lessons || []).reduce(
            (sum, l) => sum + (l.questions?.length ?? 0),
            0,
          );
          return (
            <Col xs={24} sm={12} key={item.id}>
              <Card
                hoverable
                style={{
                  borderRadius: 18,
                  borderColor: subjectId === item.id ? "#3b82f6" : "#e2e8f0",
                  backgroundColor: subjectId === item.id ? "#eff6ff" : "#fff",
                }}
                onClick={() => {
                  setSubjectId(item.id);
                  setLessonId("all");
                }}
              >
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <BookOutlined style={{ fontSize: 24, color: "#3b82f6" }} />
                  <div>
                    <Text strong style={{ fontSize: 16 }}>
                      {item.title}
                    </Text>
                    <div>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        {item.lessons?.length || 0} bài học · {count} câu hỏi
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Thiết lập buổi ôn tập */}
      <Card
        bordered={false}
        style={{ borderRadius: 24, boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}
      >
        <Title level={4}>Thiết lập bài luyện tập</Title>
        <Radio.Group
          value={lessonId}
          onChange={(e) => setLessonId(e.target.value)}
          style={{ width: "100%" }}
        >
          <Row gutter={[12, 12]}>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  borderRadius: 14,
                  borderColor: lessonId === "all" ? "#3b82f6" : "#f1f5f9",
                }}
              >
                <Radio value="all">
                  <b>Tất cả bài học</b>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Toàn bộ ngân hàng · {totalQuestions} câu
                  </div>
                </Radio>
              </Card>
            </Col>
            {lessons.map((lesson) => (
              <Col xs={24} sm={12} key={lesson.id}>
                <Card
                  size="small"
                  style={{
                    borderRadius: 14,
                    borderColor:
                      lessonId === String(lesson.id) ? "#3b82f6" : "#f1f5f9",
                  }}
                >
                  <Radio value={String(lesson.id)}>
                    <b>{lesson.title}</b>
                    <div style={{ fontSize: 12, color: "#64748b" }}>
                      {lesson.questions?.length ?? 0} câu hỏi
                    </div>
                  </Radio>
                </Card>
              </Col>
            ))}
          </Row>
        </Radio.Group>

        <Divider />

        <Title level={5}>Chế độ kiểm tra đáp án</Title>
        <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
          <Radio.Button
            value="instant"
            style={{ borderRadius: "12px 0 0 12px", padding: "0 16px" }}
          >
            <CheckOutlined /> Hiện đáp án ngay
          </Radio.Button>
          <Radio.Button
            value="deferred"
            style={{ borderRadius: "0 12px 12px 0", padding: "0 16px" }}
          >
            <HeartFilled /> Hiện sau khi nộp
          </Radio.Button>
        </Radio.Group>

        <div
          className="selector-footer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <div>
            <Text strong>{currentSubject?.title}</Text>
            <br />
            <Text type="secondary">
              {selectedLesson?.title ?? "Tất cả bài học"}
            </Text>
          </div>
          <Button
            type="primary"
            size="large"
            icon={<RocketOutlined />}
            onClick={onStart}
            style={{ borderRadius: 14 }}
          >
            Bắt đầu ôn tập
          </Button>
        </div>
      </Card>
    </section>
  );
}
