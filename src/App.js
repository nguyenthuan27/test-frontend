import Layout from "./component/layout";
import { Provider } from "react-redux";
import store from "./store/store";
import "./style/App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
