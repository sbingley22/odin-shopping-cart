import './App.css'
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="navigation-bar">
        <h1>Hello from the main page of the app!</h1>
        <nav>
          <ul>
            <li>
              <Link to="home">Home page</Link>
            </li>
            <li>
              <Link to="shop">Shop page</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='app-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
