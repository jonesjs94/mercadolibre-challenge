import React, {useState} from 'react';
import UserInfo from '../components/UserInfo.jsx';
import PurchaseList from '../components/PurchaseList.jsx';

function Profile() {
  return (
    <div>
      <UserInfo />
      <PurchaseList />
    </div>
  )
}

export default Profile;