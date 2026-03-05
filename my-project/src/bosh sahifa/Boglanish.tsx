
import frame1 from "../assets/images/Frame1.png";
import frame3 from "../assets/images/Frame3.png";
import frame4 from "../assets/images/Frame4.png";


export default function Boglanish() {
  return (
    <div>
      <h3 style={{ margin: "20px" }}>Bog'lanish</h3>
      <div
        style={{
          width: "120px",
          height: "8px",
          backgroundColor: "#39965F",
          borderRadius: "10px",
          margin: "20px",
        }}
      ></div>

      <div style={{width:'100%',height:'250px',display:'flex',gap:'20px',margin:'20px'}}>
        <div style={{width:'300px',height:'200px' ,backgroundColor:'#1B1B1B',borderRadius:'15px',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
          <img src={frame1} alt="" />
          <h5>E-pochta</h5>
               <a
                href="mailto:ruziqulovfoziljon8@gmail.com"
                style={{ color: "#4ea1ff", textDecoration: "none" }}
              >
                ruziqulovfoziljon8@gmail.com
              </a>
        </div>
        <div style={{width:'300px',height:'200px' ,backgroundColor:'#1B1B1B',borderRadius:'15px',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
          <img src={frame3} alt="" />
          <h5>Telegram</h5>
                        <a
                href="https://t.me/roziqulovv_01"
                target="_blank"
                style={{ color: "#4ea1ff", textDecoration: "none" }}
              >
                @roziqulovv_01
              </a>
        </div>
        <div style={{width:'300px',height:'200px' ,backgroundColor:'#1B1B1B',borderRadius:'15px',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
          <img src={frame4} alt="" />
          <h5>Telefon raqam</h5>
                        <a
                href="tel:+998948170520"
                style={{ color: "#4ea1ff", textDecoration: "none" }}
              >
                +998 (94) 817-05-20
              </a>
        </div>

      </div>

      <h3 style={{margin:'20px'}}>So’rov yuborish</h3>
            <div
        style={{
          width: "120px",
          height: "8px",
          backgroundColor: "#39965F",
          borderRadius: "10px",
          margin: "20px",
        }}
      ></div>

      <div style={{width:'95%',height:'420px',backgroundColor:'#1B1B1B',margin:'20px',borderRadius:'10px'}}>

        <div style={{width:'100%',height:'100px',gap:'20px',display:'flex'}}>

        <div>
          <p>Ismingiz*</p>
          <input className="form-control, text-white" style={{width:'500px',height:'45px',backgroundColor:'#1B1B1B',color:'white',borderRadius:'10px'}} type="text" placeholder="Ismingiz"/>

        </div>

       <div>
          <p>Manzilingiz*</p>
          <input  className="form-control, text-white" style={{width:'500px',height:'45px',backgroundColor:'#1B1B1B',color:'white',borderRadius:'10px'}} type="text" placeholder="Email@example.com" />
       </div>

        </div>

              <div style={{width:'100%',height:'250px'}}>
                <p>Izohingiz*</p>
        <input  className="form-control, text-white" style={{width:'100%',height:'200px',backgroundColor:'#1B1B1B',color:'white',borderRadius:'10px'}} type="text" placeholder="Xabarlaringiz"/>
      </div>

      <button style={{width:'200px',height:'50px',backgroundColor:'#39965F',borderRadius:'10px',border:'none',color:"white"}}>Yuborish</button>
      </div>

    </div>
  );
}
