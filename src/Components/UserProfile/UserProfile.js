import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";

const UserProfile = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();
  };

  if (!isAuthenticated) {
    return null; // If not authenticated, do not render anything
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <i className="bi bi-person"></i>
      </Dropdown.Toggle>

      {isAuthenticated && (
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/dashboard">
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default UserProfile;
