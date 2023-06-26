import React from 'react';
import * as ReactDOMClient  from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './components/home/Home';
import { NotFound } from './components/notFound/NotFound';
import { About } from './components/about/About';
import { Competencies } from './components/competencies/Competencies';
import { MyProjects } from './components/myProjects/MyProjects';
import { Contact } from './components/contact/Contact';
import { HashRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container as Element);

root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/competencies" element={<Competencies />}/>
          <Route path="/myprojects" element={<MyProjects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
  </Routes>
  </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
