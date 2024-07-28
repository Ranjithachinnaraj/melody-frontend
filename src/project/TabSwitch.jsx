// import { useState } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LibraryPage from "./LibraryPage";
import SearchPage from './SearchPage';

 
function TabSwitch({ pageTab }) {


    switch (pageTab) {
        case "Home":
            return <HomePage />;
        case "Library":
            return <LibraryPage />;
        case "About":
            return <AboutPage />;
        case "Search":
            return <SearchPage />;
        default:
            return <HomePage />;
    }
}

export default TabSwitch;