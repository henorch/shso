import React from 'react';
import logo from './logo.svg';
import imgadm from './assets/admin/Adenekan_Adedolapo.jpg';
import './App.css';
import HomeComponent from './routes/home/home.route';
import Home2 from './routes/home2/home2.route';
import Footer from './footer/footer.component';

function App() {
    return <
        div className='App'
    ><Home2/>
    <Footer/>
    </div>
}

export default App;
