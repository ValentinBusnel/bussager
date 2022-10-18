import { Route, Routes } from "react-router-dom";
import Homes from "./pages/Homes";
import SignInContainer from "./components/SignInContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homes />} />
      </Routes>
    </>
  );
}

export default App;
