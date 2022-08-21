import { Header, SectionA } from "../components";
import lottie from "lottie-web";
import maintance from "../icons/maintance.json";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function Maintance() {
    const navigation = useNavigate()
    
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.querySelector("#maintenance"),
      animationData: maintance,
    });
  },[]);

  return (
    <main className="maintenance" >
       <h1 className="maintenanceTitle"> We'll be back soon!</h1>
       <p className="maintenanceMessage">Sorry for the inconvenience!</p>
      <div className="maintenanceLottie" id="maintenance" ></div>
      <p onClick={() =>{
        navigation('/')
      }} className="maintenanceBtn">Go Back</p>
    </main>
  );
}
