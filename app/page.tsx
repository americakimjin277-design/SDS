export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f2f3f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans KR", sans-serif',
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "760px",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.72)",
          border: "1px solid rgba(255, 255, 255, 0.85)",
          borderRadius: "24px",
          padding: "72px 40px",
          boxShadow: "0 16px 40px rgba(18, 26, 33, 0.08)",
          backdropFilter: "blur(4px)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.85rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#6b7280",
            fontWeight: 700,
          }}
        >
          SDS PLATFORM
        </p>
        <h1
          style={{
            margin: "20px 0 36px",
            fontSize: "clamp(2rem, 5vw, 3.6rem)",
            lineHeight: 1.15,
            color: "#111827",
            fontWeight: 800,
          }}
        >
          SDS: 소설의 새로운 기준
        </h1>
        <button
          type="button"
          style={{
            border: "none",
            borderRadius: "999px",
            padding: "14px 34px",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#1f2937",
            background: "#c7ebc4",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(118, 170, 111, 0.25)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
        >
          시작하기
        </button>
      </section>
    </main>
  );
}