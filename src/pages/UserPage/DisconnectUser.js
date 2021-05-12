import React from 'react';
import {useHistory} from 'react-router-dom';

const DisconnectUser = ({logout}) => {
    const history = useHistory();
    const handleLogout = () => {
        logout();
        history.push("/");
      }
    return (
        <div className="userpage">
            <div className="userpage__informations__disconnected">
                <button onClick={handleLogout}>Se déconnecter</button>
            </div>
        </div>
    );
};

export default DisconnectUser;