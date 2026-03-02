import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Dashbord from "./pages/Dashbord.jsx";
import Upload from "./pages/Upload.jsx";
import MyFile from "./pages/MyFile.jsx";
import Subscription from "./pages/Subscription.jsx";
import Transaction from "./pages/Transaction.jsx"

function App() {
  

  return <BrowserRouter>

  <Routes>

    <Route path = "/" element = {<Landing/>}  />
    <Route path = "/dashboard" element = {<Dashbord/>}  />
    <Route path = "/upload" element = {<Upload/>}  />
    <Route path = "/my-files" element = {<MyFile/>}  />
    <Route path = "/subscription" element = {<Subscription/>}  />
    <Route path = "/transactions" element = {<Transaction/>}  />
    
  </Routes>
  
  
  
  
  </BrowserRouter>
}

export default App;
