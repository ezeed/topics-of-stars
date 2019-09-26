import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchUser = ({ size, color }) => {
  const { username, updateUsername } = useContext(UserContext);
  const [localUsername, setLocalUsername] = useState(username);

  return (
    <div className="centered">
      <div className="field has-addons">
        <div
          className="control has-icons-left"
          onKeyPress={event =>
            event.key === "Enter" && updateUsername(localUsername)
          }
        >
          <input
            className={`input ${color} ${size}`}
            type="text"
            placeholder="GitHub User"
            value={localUsername}
            onChange={event => setLocalUsername(event.target.value)}
          />
          <span className="icon is-medium is-left">
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </div>
        <div className="control">
          <button
            onClick={() => updateUsername(localUsername)}
            className={`button ${color} ${size}`}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

SearchUser.defaultProps = {
  size: "is-large",
  color: "is-black"
};

export default SearchUser;
