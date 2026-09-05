import "./Breadcrumb.css";
import Pharmacy from "./Pharmacy";
import Services from "./Services";
import Why from "./Why";
import Pharmacist from "./Pharmacist";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="separator">/</span>
        <span className="current">About</span>
      </div>

      <Pharmacy />     
      <Services /> 
      <Pharmacist /> 
      <Why /> 
    </>
  );
}

export default Contact;



