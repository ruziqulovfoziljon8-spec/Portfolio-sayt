import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        display: "flex",
        borderBottom: "2px solid white",
        backgroundColor: "#1B1B1B",
        alignItems: "center",
      }}
    >
      <h3 style={{ marginLeft: "70px", color: "white" }}>FOZILJON.UZ</h3>

      <div
        style={{
          marginLeft: "800px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <button onClick={() => navigate("/")} style={btnStyle}>
          Bosh sahifa
        </button>

        <button onClick={() => navigate("/haqida")} style={btnStyle}>
          Haqida
        </button>

        <button onClick={() => navigate("/loyihalar")} style={btnStyle}>
          Loyihalar
        </button>

        <button onClick={() => navigate("/boglanish")} style={btnStyle}>
          Bog'lanish
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  border: "none",
  backgroundColor: "#1B1B1B",
  display: "flex",
  flexDirection: "column",
  color: "white",
  cursor: "pointer",
};
