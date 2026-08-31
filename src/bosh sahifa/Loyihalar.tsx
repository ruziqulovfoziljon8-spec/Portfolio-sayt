import { useState } from "react";
import type { CSSProperties } from "react";
import NotesApp from "../assets/images/notes 1.png";
import Pizza from "../assets/images/pizza111.png";
import blog from "../assets/images/blog111.png";
import MovieApp from "../assets/images/movie11.png";
import barber from "../assets/images/barber11.png";
import service from "../assets/images/service11.png";
import { useLanguage } from "../context/LanguageContext";

interface Project {
  title: string;
  image: string;
  live: string;
  status: string;
  tags: string[];
  description: { uz: string; en: string };
}

const projects: Project[] = [
  {
    title: "Pizza Delivery",
    image: Pizza,
    live: "https://pizza-project-six-ashy.vercel.app/",
    status: "Active",
    tags: ["Vite", "TailwindCSS", "ReactJS", "Redux"],
    description: {
      uz: "🍕 Pizza Delivery – Bu loyiha React va Redux Toolkit yordamida yaratilgan bo'lib, foydalanuvchilarga pittsa buyurtma qilish imkonini beradi.",
      en: "🍕 Pizza Delivery – This project is built with React and Redux Toolkit, letting users order pizza online.",
    },
  },
  {
    title: "Smart Notes",
    image: NotesApp,
    live: "https://notes-item.vercel.app/",
    status: "Active",
    tags: ["React", "Context API", "Framer Motion"],
    description: {
      uz: "📝 Smart Notes – Muhim qaydlarni saqlash uchun mo'ljallangan ilova. Context API orqali ma'lumotlar boshqariladi.",
      en: "📝 Smart Notes – An app designed for saving important notes. Data is managed through the Context API.",
    },
  },
  {
    title: "Personal Blog",
    image: blog,
    live: "https://maqola-sayt.vercel.app/blog",
    status: "Active",
    tags: ["Next.js", "TypeScript", "Sanity"],
    description: {
      uz: "✍️ Personal Blog – Next.js va Sanity CMS yordamida qurilgan zamonaviy blog platformasi. SEO optimizatsiya qilingan.",
      en: "✍️ Personal Blog – A modern blog platform built with Next.js and Sanity CMS, optimized for SEO.",
    },
  },
  {
    title: "Movie App",
    image: MovieApp,
    live: "https://movie-app-one-pink.vercel.app/",
    status: "Active",
    tags: ["React", "API", "Movies"],
    description: {
      uz: "🎬O'zingizga yoqadigan Filmlarni Qiyinchiliksiz toping! Ushbu ilova orqali filmlar haqida ma'lumot olishingiz mumkin.",
      en: "🎬 Find movies you'll love with ease! This app lets you get information about movies effortlessly.",
    },
  },
  {
    title: "Barber Master",
    image: barber,
    live: "https://barber-shop-beta-coral.vercel.app/",
    status: "Active",
    tags: ["TailwindCSS", "Barber", "Booking"],
    description: {
      uz: "💈 Barber Master – Onlayn navbat olish va sartaroshlar xizmatidan foydalanish uchun qulay platforma.",
      en: "💈 Barber Master – A convenient platform for booking appointments and using barber services online.",
    },
  },
  {
    title: "Premium Service",
    image: service,
    live: "https://avto-service-pi.vercel.app/",
    status: "Active",
    tags: ["React", "Services", "UI/UX"],
    description: {
      uz: "⚙️ Premium Service – Mijozlarga yuqori sifatli xizmat ko'rsatish va buyurtmalarni boshqarish tizimi.",
      en: "⚙️ Premium Service – A system for delivering high-quality service to clients and managing orders.",
    },
  },
];

const Loyihalar = () => {
  const { t, lang } = useLanguage();

  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const query = search.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div style={containerStyle} className="projects-container">
      <style>
        {`
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }

          .icon-box { transition: all 0.3s ease !important; }
          .icon-box:hover { background-color: #39965F !important; transform: scale(1.1); color: white !important; }
          
          .project-card { transition: all 0.4s ease !important; }
          .project-card:hover { border-color: #39965F !important; transform: translateY(-5px); }
          
          .close-btn:hover { background-color: #ff4d4d !important; }

          @media (max-width: 1100px) {
            .projects-grid { grid-template-columns: repeat(2, 1fr); }
            .header-title { font-size: 2.5rem !important; }
          }

          @media (max-width: 768px) {
            .projects-grid { grid-template-columns: 1fr; gap: 20px; }
            .header-title { font-size: 2rem !important; }
            .projects-container { padding: 40px 15px !important; }
            .project-img-wrapper { height: 220px !important; }
            .modal-content { width: 95% !important; margin: 10px; }
            .modal-img { height: 200px !important; }
          }

          @media (max-width: 480px) {
             .header-title { font-size: 1.8rem !important; }
             .search-input { width: 100% !important; font-size: 14px !important; }
             .project-title { font-size: 1.2rem !important; }
          }
        `}
      </style>

      <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
        <div style={headerSectionStyle}>
          <h1 style={titleStyle} className="header-title">
            {t("projects_title_prefix")}{" "}
            <span style={{ color: "#39965F" }}>
              {t("projects_title_highlight")}
            </span>
          </h1>
          <input
            type="text"
            placeholder={t("projects_search_placeholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={inputStyle}
            className="search-input"
          />
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} style={cardStyle} className="project-card">
                <div
                  className="project-img-wrapper"
                  style={{
                    ...imageWrapperStyle,
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  <div style={actionButtonsStyle}>
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="icon-box"
                      style={iconBoxStyle}
                    >
                      👁️
                    </div>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-box"
                      style={iconBoxStyle}
                    >
                      🔗
                    </a>
                  </div>
                </div>

                <div style={infoSectionStyle}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3 style={projectTitleStyle} className="project-title">
                      {project.title}
                    </h3>
                    <div style={statusWrapperStyle}>
                      <span style={statusDotStyle}></span>
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#39965F",
                          fontWeight: "700",
                        }}
                      >
                        {t("projects_status_active")}
                      </span>
                    </div>
                  </div>
                  <div style={tagsWrapperStyle}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={tagStyle}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={notFoundContainerStyle}>
            <div style={notFoundIconStyle}>📭</div>
            <h3 style={notFoundTitleStyle}>{t("projects_not_found_title")}</h3>
            <p style={notFoundDescStyle}>
              {t("projects_not_found_desc_prefix")}
              <span style={{ color: "#39965F", fontWeight: "600" }}>
                {search}
              </span>
              {t("projects_not_found_desc_suffix")}
            </p>
          </div>
        )}
      </div>

      {selectedProject && (
        <div style={modalOverlayStyle} onClick={() => setSelectedProject(null)}>
          <div
            style={modalContentStyle}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={modalHeaderStyle}>
              <h2 style={{ margin: 0, fontSize: "1.2rem" }}>
                {selectedProject.title}
              </h2>
              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
                style={closeButtonStyle}
              >
                ✕
              </button>
            </div>
            <img
              src={selectedProject.image}
              alt=""
              style={modalImageStyle}
              className="modal-img"
            />
            <div style={{ padding: "20px" }}>
              <p style={modalDescStyle}>{selectedProject.description[lang]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const containerStyle: CSSProperties = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#080808",
  color: "#fff",
  padding: "60px 20px",
  fontFamily: "'Inter', sans-serif",
};

const headerSectionStyle: CSSProperties = {
  textAlign: "center",
  marginBottom: "50px",
};
const titleStyle: CSSProperties = {
  fontSize: "3rem",
  fontWeight: "800",
  marginBottom: "20px",
};
const inputStyle: CSSProperties = {
  width: "100%",
  maxWidth: "450px",
  padding: "14px 20px",
  borderRadius: "12px",
  border: "1px solid #222",
  backgroundColor: "#111",
  color: "white",
  outline: "none",
};

const cardStyle: CSSProperties = {
  backgroundColor: "#111",
  borderRadius: "20px",
  border: "1px solid #222",
  overflow: "hidden",
};

const imageWrapperStyle: CSSProperties = {
  position: "relative",
  height: "250px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const actionButtonsStyle: CSSProperties = {
  position: "absolute",
  top: "15px",
  right: "15px",
  display: "flex",
  gap: "10px",
};

const iconBoxStyle: CSSProperties = {
  width: "38px",
  height: "38px",
  backgroundColor: "rgba(0,0,0,0.7)",
  backdropFilter: "blur(8px)",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  textDecoration: "none",
  color: "#fff",
};

const infoSectionStyle: CSSProperties = { padding: "18px" };
const projectTitleStyle: CSSProperties = {
  fontSize: "1.4rem",
  margin: 0,
  fontWeight: "700",
};
const statusWrapperStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};
const statusDotStyle: CSSProperties = {
  width: "7px",
  height: "7px",
  borderRadius: "50%",
  backgroundColor: "#39965F",
  boxShadow: "0 0 8px #39965F",
};

const tagsWrapperStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "12px",
};
const tagStyle: CSSProperties = {
  color: "#39965F",
  fontSize: "13px",
  fontWeight: "600",
};

const modalOverlayStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.92)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000,
};

const modalContentStyle: CSSProperties = {
  backgroundColor: "#111",
  width: "100%",
  maxWidth: "650px",
  borderRadius: "20px",
  border: "1px solid #222",
  overflow: "hidden",
  position: "relative",
};

const modalHeaderStyle: CSSProperties = {
  padding: "15px 25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #222",
};

const closeButtonStyle: CSSProperties = {
  background: "#222",
  border: "none",
  color: "#fff",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  cursor: "pointer",
};

const modalImageStyle: CSSProperties = {
  width: "100%",
  height: "320px",
  objectFit: "cover",
};
const modalDescStyle: CSSProperties = {
  color: "#aaa",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: 0,
};

const notFoundContainerStyle: CSSProperties = {
  textAlign: "center",
  padding: "80px 20px",
  border: "1px dashed #222",
  borderRadius: "20px",
  backgroundColor: "#0d0d0d",
  marginTop: "20px",
};

const notFoundIconStyle: CSSProperties = {
  fontSize: "4rem",
  marginBottom: "15px",
  animation: "pulse 2s infinite",
};

const notFoundTitleStyle: CSSProperties = {
  fontSize: "1.6rem",
  fontWeight: "700",
  margin: "0 0 12px 0",
  color: "#fff",
  letterSpacing: "0.5px",
};

const notFoundDescStyle: CSSProperties = {
  fontSize: "0.95rem",
  color: "#666",
  maxWidth: "450px",
  margin: "0 auto",
  lineHeight: "1.6",
};

export default Loyihalar;
