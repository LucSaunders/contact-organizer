import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-info mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        {/* <p className="navbar-brand text-light">{branding}</p> */}
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home text-light" />
                <span style={{ color: 'white' }}> Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                {' '}
                <i className="fas fa-plus text-light" />
                <span style={{ color: 'white' }}> Add</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about/" className="nav-link">
                {' '}
                <i className="fas fa-question text-light" />
                <span style={{ color: 'white' }}> About </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'Contact Organizer App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
