import React from "react";
import {
  Alert,
  Button,
  Card,
  List,
  Progress,
  Space,
  Tag,
  Typography,
} from "antd";
import { ReloadOutlined, SmileOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const compactTagStyle = {
  alignSelf: "flex-start",
  height: "fit-content",
  padding: "2px 8px",
  borderRadius: 999,
};

function stripOptionPrefix(option = "") {
  return String(option).replace(/^[A-Z][.:)]\s*/i, "");
}

export default function ResultScreen({
  questions,
  answers,
  correctCount,
  wrongQuestions,
  onRetryAll,
  onRetryWrong,
  onLeave,
  cleanExplanation,
  isCorrectAnswer,
}) {
  const percent = questions.length
    ? Math.round((correctCount / questions.length) * 100)
    : 0;

  return (
    <section className="result-screen" style={{ width: "100%", maxWidth: 800, boxSizing: "border-box", margin: "0 auto", padding: "24px 16px" }}>
      <Card
        bordered={false}
        style={{
          borderRadius: 28,
          width: "100%",
          boxSizing: "border-box",
          textAlign: "center",
          padding: "16px 12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <SmileOutlined
          style={{ fontSize: 48, color: "#3b82f6", marginBottom: 8 }}
        />
        <br />
        <Text
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: "#2563eb",
            letterSpacing: 1,
          }}
        >
          BUỔI ÔN TẬP HOÀN TẤT
        </Text>
        <Title level={2} style={{ marginTop: 4, color: "#1e3a8a" }}>
          Em làm tốt lắm! 🎉
        </Title>
        <Paragraph type="secondary">
          Mỗi câu hỏi là một bước tiến nhỏ đó nha.
        </Paragraph>

        <div style={{ margin: "20px 0" }}>
          <Progress
            type="circle"
            percent={percent}
            size={140}
            strokeColor="#60a5fa"
          />
        </div>

        <Title level={3} style={{ color: "#1e293b" }}>
          {correctCount} / {questions.length} câu đúng
        </Title>

        <Space
          wrap
          className="result-actions"
          style={{ justifyContent: "center", marginTop: 12, marginBottom: 20 }}
        >
          <Button
            icon={<ReloadOutlined />}
            onClick={onRetryAll}
            style={{ borderRadius: 12, fontWeight: 600 }}
          >
            Làm lại từ đầu
          </Button>
          <Button
            type="primary"
            onClick={onLeave}
            style={{ borderRadius: 12, fontWeight: 600 }}
          >
            Về trang chọn bài
          </Button>
          {wrongQuestions.length > 0 && (
            <Button
              type="primary"
              danger
              icon={<ReloadOutlined />}
              onClick={onRetryWrong}
              style={{ borderRadius: 12, fontWeight: 700 }}
            >
              Luyện lại các câu sai ({wrongQuestions.length} câu)
            </Button>
          )}
        </Space>

        {/* Ôn lại chi tiết từng câu */}
        <div style={{ textAlign: "left", marginTop: 32 }}>
          <Title level={4}>Ôn lại chi tiết câu trả lời</Title>
          <List
            dataSource={questions}
            renderItem={(item, i) => {
              const val = answers[item.id];
              const isCorrect = isCorrectAnswer(item, val);
              return (
                <List.Item style={{ padding: "16px 0" }}>
                  <Card
                    size="small"
                    style={{
                      width: "100%",
                      borderRadius: 16,
                      borderColor: isCorrect ? "#bbf7d0" : "#fecaca",
                    }}
                  >
                    <div
                      className="review-question-row"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 8,
                      }}
                    >
                      <Text strong className="review-question-text" style={{ fontSize: 15 }}>
                        Câu {i + 1}. {item.question}
                      </Text>
                      <Tag
                        color={isCorrect ? "success" : "error"}
                        style={compactTagStyle}
                      >
                        {isCorrect ? "Đúng" : "Sai"}
                      </Tag>
                    </div>

                    {/* Hiển thị chi tiết trắc nghiệm */}
                    {item.type !== "drag_drop" && (
                      <div style={{ marginTop: 8, fontSize: 13 }}>
                        <div style={{ marginBottom: 4 }}>
                          <Text type="secondary">Bạn đã chọn: </Text>
                          {val === undefined ? (
                            <Tag color="default" style={compactTagStyle}>
                              Chưa trả lời
                            </Tag>
                          ) : (
                            (Array.isArray(val) ? val : [val]).map((choice) => (
                              <Tag
                                key={choice}
                                color={isCorrect ? "success" : "error"}
                                style={compactTagStyle}
                              >
                                {String.fromCharCode(65 + choice)}. {stripOptionPrefix(item.options?.[choice])}
                              </Tag>
                            ))
                          )}
                        </div>
                        <div>
                          <Text type="secondary">Đáp án đúng: </Text>
                          {(Array.isArray(item.answer)
                            ? item.answer
                            : [item.answer]
                          ).map((choice) => (
                            <Tag
                              key={choice}
                              color="success"
                              style={compactTagStyle}
                            >
                              {String.fromCharCode(65 + choice)}. {stripOptionPrefix(item.options?.[choice])}
                            </Tag>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Hiển thị chi tiết Đúng/Sai hoặc Kéo thả */}
                    {item.type === "drag_drop" && (
                      <div
                        style={{
                          marginTop: 8,
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                        }}
                      >
                        {item.pairs?.map((p, pIdx) => {
                          const chosen = val?.[pIdx]?.label ?? val?.[pIdx];
                          const rowRight = chosen === p.right;
                          return (
                            <div
                              key={pIdx}
                              style={{
                                fontSize: 13,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: 10,
                              }}
                            >
                              <Text>{p.left}</Text>
                              <Space>
                                <Tag
                                  color={rowRight ? "success" : "error"}
                                  style={compactTagStyle}
                                >
                                  Chọn: {chosen || "Chưa chọn"}
                                </Tag>
                                {!rowRight && (
                                  <Tag color="success" style={compactTagStyle}>
                                    Đáp án: {p.right}
                                  </Tag>
                                )}
                              </Space>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {cleanExplanation(item.explanation) && (
                      <Alert
                        style={{ marginTop: 12, borderRadius: 10 }}
                        type="info"
                        showIcon
                        message={cleanExplanation(item.explanation)}
                      />
                    )}
                  </Card>
                </List.Item>
              );
            }}
          />
        </div>
      </Card>
    </section>
  );
}
