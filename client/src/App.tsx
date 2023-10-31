import './App.css'
import Header from './components/header/Header'
import Signin from './components/registration/Signin'
import Signup from './components/registration/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import TaskManager from './pages/taskManagement/TaskManager';
import Settings from './components/sidebar/Settings';



function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<Settings />} />
          <Route
            path='/signin'
            element={<Signin />}
          />
          <Route
            path='/signup'
            element={<Signup />}
          />
          <Route
            path='/taskmanager'
            element={<TaskManager />}
          />
        </Routes>
    </div>
  )
}

export default App
