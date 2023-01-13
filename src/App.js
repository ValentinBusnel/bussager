import { Route, Routes } from "react-router-dom";
import Homes from "./screens/Homes";
import { createTheme, ThemeProvider } from "@mui/material";
import Private from "./screens/private/Private";
import PrivateHome from "./screens/private/privateHome/PrivateHome";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6D22FF",
    },
    secondary: {
      main: "#1b1c1e",
      elevation: "#252525",
      white: "#FFFFFF",
      grey: "#7E7E7E",
    },
    white: {
      main: "#FFFFFF",
    },
    grey: {
      main: "#7E7E7E",
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
