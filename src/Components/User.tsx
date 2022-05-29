import React, { FC } from 'react';
import UserModel from '../types/models';

// interface Props {
//     name: string,
//     age: number
// }

interface Props {
    user: UserModel
    addUser: (user: UserModel) => void
}

const User: FC<Props> = ({ user, addUser }) => {

    return (
        <div>
            <h2>Hello {user.name} with email {user.email}</h2>

            <button onClick={() => addUser(user)}>add me</button>
        </div>
    );
};

export default User;