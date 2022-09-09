import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
                <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>} />
                <Route path={'/skills'} element={<Skills/>} />
                <Route path={'/projects'} element={<Projects/>} />
                <Route path={'/contacts'} element={<Contacts/>} />
            </Routes>
                <Footer/>
        </div>
    );
}


export default App;
