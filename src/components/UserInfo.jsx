import React, {useState} from 'react';
import UserImage from './UserImage.jsx';

function UserInfo() {
  return (
    <div className="user">
      <UserImage />

      <p className="user__fullname"></p>
      <p className="user__level"></p>
      <p className="user__warning"></p>
    </div>
  )
}

export default UserInfo;