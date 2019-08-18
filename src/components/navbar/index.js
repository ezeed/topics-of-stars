import React, { useContext } from "react";

import { UserContext } from "../../context/user";
import SearchUser from "../search-user";

const NavBar = () => {
  const { username } = useContext(UserContext);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://www.youtube.com/user/Pazos64">
          <span className="logo">
            Topic of <strong>Stars</strong>
          </span>
        </a>
      </div>
      {username && (
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <SearchUser size="is-medium" color="is-primary" />
            </div>
          </div>
        </div>
      )}
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


    <div className="control has-addons has-icons-left">
      <div className="control">
        <input
          className="input is-primary is-large"
          type="text"
          placeholder="GitHub User"
        />
        <span className="icon is-medium is-left">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </div>
      <div className="control">
        <a className="button is-info">
          <FontAwesomeIcon icon={faSearch} />
        </a>
      </div>
    </div>
    </div>
*/
