import Image from "next/image";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
export default function Home() {
  return (
<>
<NavBar/>

      {/* New Grid Layout Section */} 

      <div className="grid-container">
        <div className="grid-item item1"></div>
        <div className="grid-item item2"></div>
        <div className="grid-item item3"></div>
        <div className="grid-item item4"></div>
        <div className="grid-item item5">
          <div className="thick">Why join us</div>
        </div>
        <div className="grid-item item6"></div>
        <div className="grid-item details">
          <div className="grid-item item7"></div>
          <div className="grid-item item8"></div>
          <div className="grid-item item9"></div>
        </div>
      </div>
      <Footer/>
      </>
  );
}
