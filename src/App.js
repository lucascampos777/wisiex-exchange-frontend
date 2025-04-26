import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import LoginPage from './pages/LoginPage';
import axios from 'axios';
import OrdersPage from './pages/OrdersPage';
import { AuthProvider, useAuth } from './contexts/authContext';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/orders" element={<PrivateRoute><OrdersPage /></PrivateRoute>} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
