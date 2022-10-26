import { Route, Routes } from "react-router-dom";
import Homes from "./pages/Homes";
import { createTheme, ThemeProvider } from "@mui/material";
import Private from "./pages/private/Private";
import PrivateHome from "./pages/private/privateHome/PrivateHome";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B9476",
      green: "#1B9476",
      grey: "#7E7E7E",
      white: "#FFFFFF",
      black: "#101010",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
