/*import React, { useState, useEffect } from 'react';
//import bg from './pages/assets/bg.png';
// import Sidebar from './components/widgets/Sidebar';
import Dashboard from './pages/Dashboard';
//import Notes from './page/Notes';
import Signup from './pages/signUp';
import SignIn from './pages/signIn';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/widgets/Navbar';
//import Layout from './pages/widgets/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
//import NoteDetail from './page/NoteDetail';
//import ProtectedRoute from './pages/widgets/ProtectedRoute';
//import { useDispatch, useSelector } from 'react-redux';
//import { getCurrentUser } from './store/features/userSlice';
import NotFound from './pages/NotFound';


function App() {


  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  // const user = "asasa";
  console.log(user);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch])


  return (
    <Router>
      <div className="md:overflow-x-auto overflow-x-hidden bg-primary">
        <section>
          <div>
            <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<SignIn />} />
              <Route path="*" element={< NotFound />} />
            </Routes>
          </div>
        </section>

      </div>
    </Router>
  );
}

export default App;*/

