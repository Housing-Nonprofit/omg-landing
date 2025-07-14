import React, { useState } from "react";
import { BrowserRouter, Route, Routes  } from "react-router"
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function App() {

  const [currentLang, setCurrentLang] = useState("EN")

  function updateLanguage() {
    if (currentLang === "ES") {
      setCurrentLang("EN")
    }
    else {
      setCurrentLang("ES")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage updateLanguage={updateLanguage} lang={currentLang} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
