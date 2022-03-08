import "./App.css";
import MainPage from "./pages/MainPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <MainPage />
      <ToastContainer/>
    </div>
  );
}

export default App;
