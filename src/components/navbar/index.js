import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user";

const NavBar = () => {
  const { username, updateUsername } = useContext(UserContext);
  const [localUsername, setLocalUsername] = useState(username);

  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://www.youtube.com/user/Pazos64">
          <span>
            Topic of <strong>Stars</strong>
          </span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Username"
                  value={localUsername}
                  onChange={event => setLocalUsername(event.target.value)}
                />
              </div>
              <div className="control">
                <button
                  onClick={() => updateUsername(localUsername)}
                  className="button is-primary"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

/* TODO: Github Integration
<div className="navbar-menu">
  <div className="navbar-start" />
  <div className="navbar-end">
    <div className="navbar-item">
      <div className="buttons">
        <button className="button is-primary">
          <strong>Sign up with Github</strong>
        </button>
      </div>
    </div>
  </div>
</div>
*/
