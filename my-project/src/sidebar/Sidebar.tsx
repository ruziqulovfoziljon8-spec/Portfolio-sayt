
import frame1 from '../assets/images/Frame1.png'
import frame2 from '../assets/images/Frame2.png'
import frame3 from '../assets/images/Frame3.png'
import frame4 from "../assets/images/Frame4.png";
import ozim from "../assets/images/ozim.png"



export default function Sidebar() {
  return (
    <div
      style={{
        width: "300px",
        height: "105vh",
        backgroundColor: "#1B1B1B",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div style={{ gap: "20px", display: "flex", flexDirection: "column" }}>
        <img style={{width:'90%',height:'400px',margin:'10px',borderRadius:'10px'}} src={ozim} alt="" />
        <h4 style={{ color: "white",marginLeft:'10px' }}>Foziljon Ro'ziqulov</h4>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            borderBottom: "1px solid gray",
            marginLeft:'10px'
          }}
        >
          <h6
            style={{
              width: "120px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Veb dasturchi
          </h6>
          <h6
            style={{
              width: "50px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Odam
          </h6>
          <h6
            style={{
              width: "80px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {" "}
            Dasturchi
          </h6>
          <br /> <br />
          <h6
            style={{
              width: "70px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            frontend
          </h6>
          <h6
            style={{
              width: "60px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            N1 bot
          </h6>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "10px",
            color: "white",
          }}
        >
          {/* Email */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={frame1} alt="email" style={{ width: "24px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>E-pochta</span>
              <a
                href="mailto:ruziqulovfoziljon8@gmail.com"
                style={{ color: "#4ea1ff", textDecoration: "none" }}
              >
                ruziqulovfoziljon8@gmail.com
              </a>
            </div>
          </div>

          {/* Github */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={frame2} alt="github" style={{ width: "24px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Github</span>
              <a
                href="https://github.com/ruziqulovfoziljon8-spec"
                target="_blank"
                style={{ color: "#4ea1ff", textDecoration: "none" }}
              >
                github.com/ruziqulovfoziljon8-spec
              </a>
            </div>
          </div>

          {/* Telegram */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={frame3} alt="telegram" style={{ width: "24px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Telegram</span>
              <a
                href="https://t.me/roziqulovv_01"
                target="_blank"
                style={{ color: "#4ea1ff", textDecoration: "none" }}
              >
                @roziqulovv_01
              </a>
            </div>
          </div>

          {/* Telefon */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={frame4} alt="phone" style={{ width: "24px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Telefon raqam</span>
              <a
                href="tel:+998948170520"
                style={{ color: "#4ea1ff", textDecoration: "none" }}
              >
                +998 (94) 817-05-20
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
