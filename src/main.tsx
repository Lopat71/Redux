import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import { GlobalStyle } from "./styles/global.styles";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <GlobalStyle /> {}
    <App />
  </Provider>
);
