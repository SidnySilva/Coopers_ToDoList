import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppProvider } from "./context";
import { Router } from "./routes/Router";

function App() {
  return (
    <div className="App">
      <AppProvider>
         <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        /> 
        <Router /> 
      </AppProvider>
    </div>
  );
}

export default App;
