import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NavBar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//BrowserRouter stores our current location in the address bar of the browser and it also allows to navigate using the browser's built-in history stack
//Destination for our users to land: HomePage.jsx
