import React from 'react';
import { IUser } from 'memegram-commons/models/User.model';

export const UserInfo = ({ user }: { user: IUser }) => {
  return (
    <div>
      <h6>
        <img
          className="rounded-circle"
          src={user?.img || process.env.REACT_APP_IMG_USER_GENERIC}
          alt="user"
          width="30"
        />{' '}
        <strong>{user?.username}</strong>
      </h6>
    </div>
  );
};
