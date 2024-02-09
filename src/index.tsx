import React from 'react';
import * as ReactDOM from 'react-dom';
// Pages 

import Home from './pages/home/Home.tsx';
import  Statics  from './pages/statics/Statics.tsx';
import EditSong from './pages/edit/Edit.tsx';

import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route  path="/" element={<Home/>} />
            <Route path="/editSong/:id" element={<EditSong/>} />
            <Route path="/statics" element={<Statics/>} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>,document.getElementById('root') as HTMLElement

)
// const root = ReactDOM.c(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
  
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
