import { Route, Routes } from "react-router-dom";
import Homes from "./pages/Homes";
import SignInContainer from "./components/SignInContainer";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B9476",
      green: "#1B9476",
      grey: "#7E7E7E",
      white: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Homes />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
