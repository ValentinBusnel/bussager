import { Route, Routes } from "react-router-dom";
import Homes from "./Pages/Homes";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homes />} />
      </Routes>
    </>
  );
}

export default App;
