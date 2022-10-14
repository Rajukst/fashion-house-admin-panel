import Sidebar from "./components/Sidebar/Sidebar";
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
   <div>
    <BrowserRouter>
    <Sidebar></Sidebar>
    </BrowserRouter>
   </div>
  );
}

export default App;
