import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import asyncComponent from "./AsyncComponent";





const Navbar = asyncComponent(()=> import("./Component/Navbar"));
const Footer = asyncComponent(()=> import("./Component/Footer"));
const Home  = asyncComponent(()=> import("./Pages/Home"));
const Baby  = asyncComponent(()=> import("./Pages/Baby"));
const Mother  = asyncComponent(()=> import("./Pages/Mother"));
const DietSection  = asyncComponent(()=> import("./Pages/Diet"));
const Feedback  = asyncComponent(()=> import("./Pages/Feedback"));
const Immunization = asyncComponent(()=> import("./Pages/immunization"));
const Hygiene  = asyncComponent(()=> import("./Pages/hygine"));
const Exercise = asyncComponent(()=> import("./Pages/exercise"));
const Wellbeing  = asyncComponent(()=> import("./Pages/wellbeing"));
const Lbw  = asyncComponent(()=> import("./Pages/Lbw"));
const Dos  = asyncComponent(()=> import("./Pages/Dos"));
const Mental = asyncComponent(()=> import("./Pages/Mental"));
const Physical  = asyncComponent(()=> import("./Pages/Physical"));
const Emotional = asyncComponent(()=> import("./Pages/Emotional"));
const Product  = asyncComponent(()=> import("./Pages/name"));
const OrderSummary  = asyncComponent(()=> import("./Pages/OrderSummary"));


function App() {
  return (
    <Router>
      <Navbar />
      <div className="Container-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baby" element={<Baby />} />
          <Route path="/mother" element={<Mother />} />
          <Route path="/diet" element={<DietSection />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/immunization" element={<Immunization />} /> {/* Corrected route */}
          <Route path="/hygine" element={<Hygiene />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/wellbeing" element={<Wellbeing />} />
          <Route path="/Lbw" element={<Lbw />} />
          <Route path="/Dos" element={<Dos/>}/>
          <Route path="/Physical"element={<Physical/>}/>
          <Route path="/Emotional" element={<Emotional/>}/>
          <Route path="/Mental" element={<Mental/>}/>
          <Route path="/name" element={<Product />}/>
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
