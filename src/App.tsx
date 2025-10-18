import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "../../ui-design-system";
import "./App.scss";
import { Form } from "./components/Form";
import Navbar from "./components/Navbar";
import { Components } from "./components/Components";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path={"/forms"} element={<Form />}/>
          <Route path={"/components"} element={<Components />}/>
          <Route path={"*"} element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
