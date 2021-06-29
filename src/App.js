import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import "./App.css"

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
