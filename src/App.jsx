import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import Cart from './components/Cart';
//import Home from './components/Home';
//import LoginPage from './components/Login';
//import RegisterPage from './components/Register';
import Pizza from './components/Pizza';

const App = () => {
    return (
        <div>
            <Navbar />
            {/* <Home /> */}
            {/* <RegisterPage /> */}
            {/* <LoginPage /> */}
            {/* <Cart /> */}
            <Pizza />
            <Footer />
        </div>
    );
};

export default App;