import React from 'react';
import { IUser } from 'memegram-commons/models/User.model';

export const UserInfo = ({ user }: { user: IUser }) => {
  return (
    <div>
      <h6>
        {/* {!user.img && (
          <img className="rounded-circle" src={process.env.REACT_APP_IMG_USER_GENERIC} alt="user" width="30" />
        )}
        {user.img && <img className="rounded-circle" src={user.img} alt="user" width="30" />} */}
        <strong>{user?.username}</strong>
      </h6>
    </div>
  );
};
