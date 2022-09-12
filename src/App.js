import "./App.css";
import MainPage from "./pages/mainPage";
import { Provider } from "react-redux"
import { store } from "./redux/store/store"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
