import React from "react";
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';
import Shop from "./Shop";
import { Routes, Route} from 'react-dom';

    const App= () => {
        return (
            <div>
                <h1 className="text-center text-3x1 font-bold">
                    Halaman Login
                </h1>
                <Routes>
                    <Route path='/' element={<Signin />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/shop' element={<Shop />}/>
                </Routes>
            </div>
        );
    }
export default Shop;
