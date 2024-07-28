// import HomePage from "./project/HomePage"; 
 
// import ParentComp from "./task/ParentComp";
// import AboutPage from "./project/AboutPage";
// import WelcomePage from "./project/WelcomePage";
import HomePage from "./project/HomePage";
import LoginPage from "./project/LoginPage";
import MainApp from "./project/MainApp";
import { useState } from "react";
import WelcomePage from "./project/WelcomePage";
// import TabSwitch from "./project/TabSwitch";
// import MainApp from "./project/MainApp";

function App() {
  const [tab, setTab] = useState("");

  switch (tab) {
    case "main":
      return <MainApp/>
    default:
      return <LoginPage setTab={setTab}/>
  }

}

export default App;