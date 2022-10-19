import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Music from './components/Music';
import Video from './components/Video';
import Shows from './components/Shows';

import App from './App';

ReactDOM.render(

    <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/video' element={<Video/>}/>
            <Route path='/shows' element={<Shows/>}/>
        </Routes>
    </Router>,
    
    document.getElementById('root')
    
)