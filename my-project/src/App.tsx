import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Boshsahifa from "./bosh sahifa/Boshsahifa";
import Haqida from "./bosh sahifa/Haqida";
import Loyihalar from "./bosh sahifa/Loyihalar";
import Boglanish from "./bosh sahifa/Boglanish";



export default function App() {
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "20px", color: "white" }}>
          <Routes>
            <Route path="/" element={<Boshsahifa />} />
            <Route path="/haqida" element={<Haqida />} />
            <Route path="/loyihalar" element={<Loyihalar />} />
            <Route path="/boglanish" element={<Boglanish />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
