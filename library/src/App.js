
import {Routes , Route} from "react-router"
import Connexion from "./pages/auth/login";
import Register from "./pages/auth/register";
import UserRoute from "./privateRoute/userRoute";
import UserDash from "./pages/user/userHome";
import AdminDash from './pages/admin/adminHome'
import AdminRoute from "./privateRoute/adminRoute"
import Home from "./pages/user/Home";
import Panier from "./component/panier";

import NavBar from './component/navBar'
import Search from "./component/filterBook";
import Footer from "./component/footer"; 
import Stat from "./pages/admin/stat";
function App() {
  
  return (
    <div >
      <NavBar/>
    
      <Routes>
        <Route path="/login" element={<Connexion/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route  path="/" element={<Home/>}/>
      
     
     
     
      {/* route for the simple user */}
      
      
      
      <Route element={<UserRoute/>}>
        <Route path="/useDash" element={<UserDash/>}/>
        <Route  path="/Shopping" element={<Panier/>}/>

        <Route  path="/search" element={<Search/>}/>
      </Route>
      {/* // route for connected admin */}
  <Route element={<AdminRoute/>}>
    <Route path="/adminDash" element={<AdminDash/>}/>
    <Route path="/Order" element={<Stat/>}/>
  </Route>
      </Routes>

      <br></br>
      <br></br>
      <br></br>
      

     <Footer/>
      
    </div>
  );
}

export default App;
