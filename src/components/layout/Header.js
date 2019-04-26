import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = props => {
  const { branding } = props;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light
    bg-danger nb-3 py-0"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact/add" className="nav-link">
                Add <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/about" className="nav-link">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
