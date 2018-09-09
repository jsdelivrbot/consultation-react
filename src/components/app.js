import React, { Component } from 'react';
import UsersList from '../container/users_list'
import UserDetail from '../container/user_detail';

export default class App extends Component {
  render() {
    return (
        <div>
          <UsersList/>
          <UserDetail/>
        </div>
    );
  }
}
