import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from '../../pages/Home/Home'
import Catalog from '../../pages/Catalog/Catalog'
import Header from '../Header/Header';



function App() {

 
    return (
<>
            
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />  
              
          
            </Routes>
            </>
  );
}

export default App;
