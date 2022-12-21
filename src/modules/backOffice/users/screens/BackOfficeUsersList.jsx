import React from 'react';
import Style from '../styles/backOfficeUsers.module.css';
import UsersList from '../components/usersList';

const BackOfficeUsersList = () => {
  return (
    <div className={Style.container}>
      <UsersList />
    </div>
  )
}

export default BackOfficeUsersList
