import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AuthContextContainer from "./context/Auth/AuthContainer";
import Routes from "./routes/Routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextContainer>
          <Routes />
        </AuthContextContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
