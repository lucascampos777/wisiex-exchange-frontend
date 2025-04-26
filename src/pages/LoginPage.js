import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/authContext';
// import { setAuthToken } from '../contexts/authContext';

function LoginPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const response = await axios.post('auth/login', { name });
      const { token } = response.data;
      auth.login(token)
      navigate('/orders');
    } catch (err) {
      console.error('Login error', err);
      toast.error('Failed to login');
    }
  };

  return (
    <section className="section is-flex is-justify-content-center is-align-items-center" style={{ minHeight: '100vh' }}>
      <div className="box" style={{ width: 400 }}>
        <h1 className="title has-text-centered">Login</h1>

        <form onSubmit={handleLogin}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary is-fullwidth">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;