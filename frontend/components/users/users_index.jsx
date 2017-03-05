import React from 'react';


class UsersIndex extends React.Component  {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    let killstat;
    if (this.props.users.BBU) {
      killstat = (
        <p>{this.props.users.BBU.mergedAllCharacters.merged.allTime.kills.basic.value}</p>
      )
    }
    if (!this.props.users.BBU) {
      return (
        <div>loading! users data not here</div>
      )
    };
    return (
      <div>
        <h1>You in UsersIndex Component now</h1>
        {killstat}
      </div>
    )
  }

}

export default UsersIndex;
