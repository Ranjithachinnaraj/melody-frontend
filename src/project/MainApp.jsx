import { useState } from "react";
import TabSwitch from "./TabSwitch";
import Footer from "./Footer";
function MainApp() {
    const [pageTab,setPageTab]=useState("Home")

    return (
        <>
            <TabSwitch pageTab={pageTab}/>
            <Footer setPageTab={setPageTab}></Footer>
        </>
    );
}

export default MainApp;