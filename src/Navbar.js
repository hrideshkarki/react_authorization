import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logMeIn, isLoggedIn, user, logMeOut }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={require('./images/3d.jpg')} alt="Project Logo" style={{ height: '50px', width: '100px' }}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <button>Home</button>
                </Link>
              </li>

              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <p className="nav-link">
                      Welcome, {user.username}
                    </p>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/todo">
                      <button>ToDo</button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      <button onClick={logMeOut}>Sign Out</button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                     <button> Sign Up </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      <button onClick={logMeIn}>Sign In</button> 
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
