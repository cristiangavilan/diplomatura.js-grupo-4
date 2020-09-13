import React from 'react';
import { IUserBase } from 'memegram-commons/models/User.model';

// IMG POR DEFAULT
const REACT_APP_IMG_USER_GENERIC =
  'https://upload.wikimedia.org/wikipedia/commons/d/d2/Crystal_Clear_kdm_user_female.svg';

export const UserInfo = ({ user }: { user: IUserBase }) => {
  return (
    <div>
      <h6>
        <img className="rounded-circle" src={user?.img || REACT_APP_IMG_USER_GENERIC} alt="user" width="30" />{' '}
        <strong>{user?.username}</strong>
      </h6>
    </div>
  );
};
