import "./App.css";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>

      <Navbar />
      <Outlet/>
      <Footer />
   
   
   
    </>
  );


}

export default App;