import { useState } from "react";
import { useNavigate } from "react-router-dom";

import html from "../assets/images/html.png";
import scc from "../assets/images/css.svg";
import js from "../assets/images/js.png";
import figma from "../assets/images/figma.png";
import vector from "../assets/images/Vector.png";
import talwind from "../assets/images/tailwind.png";
import swiper from "../assets/images/swiper.png";
import sss from "../assets/images/222.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import dowloa1 from "../assets/images/download 1.png";
import dowload2 from "../assets/images/dowload2.png";

const tools = [
  { name: "HTML", img: html },
  { name: "CSS", img: scc },
  { name: "JS", img: js },
  { name: "Figma", img: figma },
  { name: "Vector", img: vector },
  { name: "Tailwind", img: talwind },
  { name: "Swiper", img: swiper },
  { name: "Other", img: sss },
];

export default function Haqida() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "200vh",
        backgroundColor: "black",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Men haqimda</h2>
      <div
        style={{
          width: "120px",
          height: "8px",
          backgroundColor: "#39965F",
          borderRadius: "10px",
          margin: "10px 0",
        }}
      ></div>
      <p style={{color:'gray'}}>
        Men Ro'ziqulov Foziljon veb dasturchisiman. Yoshim 21 da, Buxoro
        viloyati Qorakol tumanida <br /> tug'ilganman. Qiziqarli, ko’p
        funksionallika ega bo’lgan va kuchli dizaynga ega bo’lgan dasturlar{" "}
        <br /> yaratishga qiziqaman.
      </p>

      <p style={{color:'gray'}}>
        Mening vazifam veb saytni foydalanuvchilarga qulay, sayt dizayni
        foydalanuvchilarga jalb qiluvchi <br />
        lekin ayni paytda tezkor bo'lishini taminlashdir va saytni moslashuvchan
        kodlar bilan yaratishdir! <br />
        Mening maqsadim veb sayt foydalanuvchilariga barcha qismlarini intuitiv
        va qulay bo'lishga harakat <br /> qilishga qaratilgan. Agar sizga men
        yaratgan loyihalarim qiziq bo’lsa Loyihalar sahifasiga tashrif <br />{" "}
        buyurishingiz mumkin :)
      </p>

      <button
        onClick={() => navigate("/loyihalar")}
        style={{
          width: "181px",
          height: "45px",
          backgroundColor: "#39965F",
          color: "white",
          borderRadius: "10px",
          border: "none",
          margin: "20px 0",
          cursor: "pointer",
        }}
      >
        Bog'lanish
      </button>

      <h2>Asbob-uskunalar</h2>
      <div
        style={{
          width: "120px",
          height: "8px",
          backgroundColor: "#39965F",
          borderRadius: "10px",
          margin: "10px 0",
        }}
      ></div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {tools.map((tool, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              width: "250px",
              height: "125px",
              borderRadius: "12px",
              backgroundColor: "#1B1B1B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
            }}
          >
            {hovered === index ? (
              <span
                style={{
                  color: "#39965F",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {tool.name}
              </span>
            ) : (
              <img
                src={tool.img}
                alt={tool.name}
                style={{ width: "60px", height: "60px" }}
              />
            )}
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "120px" }}>Men nimalar qila olaman</h2>
      <div
        style={{
          width: "120px",
          height: "8px",
          backgroundColor: "#39965F",
          borderRadius: "10px",
          margin: "10px 0",
        }}
      ></div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "300px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            margin: "20px",
          }}
        >
          {" "}
          {/* SEO */}{" "}
          <div
            style={{
              width: "500px",
              height: "130px",
              backgroundColor: "#1B1B1B",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              padding: "20px",
              gap: "20px",
              color: "white",
            }}
          >
            {" "}
            <img
              src={image1}
              alt="seo"
              style={{ width: "50px", height: "50px" }}
            />{" "}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {" "}
              <h5 style={{ margin: 0 }}>SEO</h5>{" "}
              <p style={{ margin: 0, fontSize: "14px" }}>
                {" "}
                Qidiruv tizimining natijalarida sayt <br /> reytingini
                yaxshilash{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* Dizayn */}{" "}
          <div
            style={{
              width: "500px",
              height: "130px",
              backgroundColor: "#1B1B1B",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              padding: "20px",
              gap: "20px",
              color: "white",
            }}
          >
            {" "}
            <img
              src={image2}
              alt="design"
              style={{ width: "50px", height: "50px" }}
            />{" "}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {" "}
              <h5 style={{ margin: 0 }}>Dizayn</h5>{" "}
              <p style={{ margin: 0, fontSize: "14px" }}>
                {" "}
                Kuchli dizayn va kichik detallargacha <br /> e’tibor berish{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* Sifat */}{" "}
          <div
            style={{
              width: "500px",
              height: "130px",
              backgroundColor: "#1B1B1B",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              padding: "20px",
              gap: "20px",
              color: "white",
            }}
          >
            {" "}
            <img
              src={image3}
              alt="quality"
              style={{ width: "50px", height: "50px" }}
            />{" "}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {" "}
              <h5 style={{ margin: 0 }}>Sifat</h5>{" "}
              <p style={{ margin: 0, fontSize: "14px" }}>
                {" "}
                Yuqori darajada saytlarni sifatli ishlab <br /> chiqish{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* Tezkorlik */}{" "}
          <div
            style={{
              width: "500px",
              height: "130px",
              backgroundColor: "#1B1B1B",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              padding: "20px",
              gap: "20px",
              color: "white",
            }}
          >
            {" "}
            <img
              src={image4}
              alt="speed"
              style={{ width: "50px", height: "50px" }}
            />{" "}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {" "}
              <h5 style={{ margin: 0 }}>Tezkorlik</h5>{" "}
              <p style={{ margin: 0, fontSize: "14px" }}>
                {" "}
                Qisqa muddat ichida tezkor sayt ishlab <br /> chiqish{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>

      <h3>Mijozlar</h3>
      <div
        style={{
          width: "120px",
          height: "8px",
          backgroundColor: "#39965F",
          borderRadius: "10px",
          margin: "10px 0",
        }}
      ></div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {[dowloa1, dowload2].map((img, idx) => (
          <div
            key={idx}
            style={{
              width: "250px",
              height: "125px",
              borderRadius: "12px",
              backgroundColor: "#1B1B1B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={img}
              alt={`client${idx}`}
              style={{ width: "80px", height: "80px" }}
            />
          </div>
        ))}
        <div
          style={{
            width: "250px",
            height: "125px",
            borderRadius: "12px",
            backgroundColor: "#1B1B1B",
          }}
        ></div>
        <div
          style={{
            width: "250px",
            height: "125px",
            borderRadius: "12px",
            backgroundColor: "#1B1B1B",
          }}
        ></div>
      </div>
    </div>
  );
}
