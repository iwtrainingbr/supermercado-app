import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Suspense} from "react";
import Loading from "./components/Loading";

const mercadoAppTheme = createTheme({
  palette: {
    primary: {
      main: '#63854F'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={mercadoAppTheme}>
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Routes/>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
