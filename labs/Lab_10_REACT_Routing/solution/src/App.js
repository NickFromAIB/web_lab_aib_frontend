import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Person from './components/Person';
import Navigation from './Navigation';
import './App.css';

const App = () => {
  const people = [];

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main people={people} />} />
          <Route path="/about" element={<About />} />
          <Route path="/person/:id" element={<Person people={people} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
