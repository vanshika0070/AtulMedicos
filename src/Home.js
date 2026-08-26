import Banner from "./Banner";
import Why from "./Why";
import Products from "./Products";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Contactsection from "./Contactsection";
import FAQs from "./FAQs";

function Home() {
  return (
    <>
      <Banner />
      <Products from="home" />
      <Services/> 
      <Why /> 
      <Testimonial/>
      <Contactsection/>
      <FAQs/>
    </>
  );
}

export default Home;