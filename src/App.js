
import React from 'react';
import'./App.css';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import'./App.css';
import Navbar from './components/Navbar';
import home from './pages/mainPage/home';
import  reports from './pages/report';
import profile from './pages/profile';
import assessment from './pages/assessment';
import grievance from './pages/grievance';
import task from './pages/task';
import Layout from './components/Layout';


function App() {
  return (
    <>
   <Router>
        <Navbar/>
        <Layout/>
        <Routes>
        <Route path='/' exact component={home} />
        <Route path='/reports' component={reports} />
          <Route path='/profile' component={profile} />
          <Route path='/assessment'  component={assessment} />
          <Route path='/grievance' component={grievance} />
          <Route path='/task' component={task} />
          
          
        </Routes>
       
      </Router>
 </>
      
  );
}

export default App;



/*<Router>
        <Navbar/>
        <Routes>
        <Route path='/' exact component={home} />
        <Route path='/reports' component={reports} />
          <Route path='/profile' component={profile} />
          <Route path='/assessment' component={assessment} />
          <Route path='/grievance' component={grievance} />
          <Route path='/task' component={task} />
          
          
        </Routes>
      </Router>
      */