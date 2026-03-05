


import { useNavigate } from "react-router-dom";

export default function Boshsahifa() {
  const navigate = useNavigate();

  return (
    <div
    
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginTop: "100px" }}>Assalomu alaykum, Men</h1>
      <h1>Ro'ziqulov Foziljonman</h1>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <p style={{ color: "gray" }}>
          Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan ishchi. Veb- <br />saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy <br /> mahsulot muvaffaqiyatiga erishish maqsadimdir.
        </p>
      </div>

      <button
        onClick={() => navigate("/haqida")}
        style={{
          width: "170px",
          height: "50px",
          borderRadius: "10px",
          backgroundColor: "#39965F",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Loyihalar
      </button>
    </div>
  );
}
