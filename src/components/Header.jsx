function Header({ right }) {
  return (
    <header
      className="topbar"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="topbar-inner">
        <a
          href="#subjects"
          className="brand"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {/* Logo hình ảnh lấy từ thư mục public/ */}
          <img
            src="/logo.png"
            alt="OH! STUDY Logo"
            style={{
              height: "70px",
              maxWidth: "min(180px, 60vw)",
              width: "auto",
              objectFit: "contain",
            }}
            onError={(e) => {
              // Fallback nếu chưa tải ảnh: hiển thị logo chữ để không bị lỗi vỡ ảnh
              e.currentTarget.style.display = "none";
              if (e.currentTarget.nextSibling) {
                e.currentTarget.nextSibling.style.display = "inline-flex";
              }
            }}
          />
          <span
            className="brand-fallback"
            style={{
              display: "none",
              alignItems: "center",
              fontWeight: 800,
              fontSize: "20px",
              color: "#2563eb",
            }}
          >
            <span
              style={{
                backgroundColor: "#dbeafe",
                padding: "2px 8px",
                borderRadius: "8px",
                marginRight: "4px",
              }}
            >
              OH!
            </span>{" "}
            STUDY
          </span>
        </a>

        {/* Slogan pastel nhỏ nhắn */}
        <span
          style={{
            fontSize: "13px",
            color: "#60a5fa",
            fontWeight: 600,
            display: "none",
          }}
          className="header-slogan"
        >
          Small steps, Big dreams! ✨
        </span>
      </div>

      {/* Khu vực nút bên phải (ví dụ: Nút Thoát bài làm) */}
      {right && <div className="topbar-actions">{right}</div>}
    </header>
  );
}

export default Header;
