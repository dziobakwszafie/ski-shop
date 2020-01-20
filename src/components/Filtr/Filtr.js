import React, { Component } from "react";

class Filtr extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: allUsers
    };
  }

  render() {
    return (
      <div>
        <input onInput={this.filterUsers.bind(this)} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default Filtr;
