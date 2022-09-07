import Layout from "./component/layout";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./style/App.css";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Layout />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
