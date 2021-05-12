import React, {useEffect} from 'react';
import UserInformations from 'src/containers/UserInformations';
import UserPassword from 'src/pages/UserPage/UserPassword';
import SubscribeInformations from 'src/containers/SubscribeInformations';
import DeleteUser from 'src/containers/DeleteUser';
import DisconnectUser from 'src/containers/DisconnectUser';

import './style.scss';

const UserPage = () => {
    return (
        <div className="userpage">
            <UserInformations />
            <UserPassword />
            <SubscribeInformations />
            <DeleteUser />
            <DisconnectUser />
        </div>
    );
};

export default UserPage;
