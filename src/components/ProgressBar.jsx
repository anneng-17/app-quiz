import React from "react";
import { Progress, Tag, Typography } from "antd";

const { Text, Title } = Typography;

export default function ProgressBar({
  subjectTitle,
  lessonTitle,
  current,
  total,
}) {
  const percent = Math.round(((current + 1) / total) * 100);

  return (
    <div className="quiz-meta-wrap" style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <div>
          <Text type="secondary" style={{ fontSize: 12, fontWeight: 700 }}>
            {subjectTitle} · {lessonTitle}
          </Text>
          <Title level={3} style={{ margin: 0, color: "#1e3a8a" }}>
            Cùng bắt đầu nhé! 🌟
          </Title>
        </div>
        <Tag
          color="blue"
          style={{ borderRadius: 12, padding: "4px 12px", fontWeight: 700 }}
        >
          Câu {current + 1} / {total}
        </Tag>
      </div>
      <Progress percent={percent} showInfo={false} strokeColor="#60a5fa" />
    </div>
  );
}
