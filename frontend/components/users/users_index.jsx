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
        <div>
          <h2>kills</h2>
          <p>Stian: {this.props.users.BBU.members.table.Stian.table.stats.kills.basic.value.toLocaleString()}</p>
          <p>Cassie: {this.props.users.BBU.members.table.Cassie.table.stats.kills.basic.value.toLocaleString()}</p>
          <p>Scott: {this.props.users.BBU.members.table.Scott.table.stats.kills.basic.value.toLocaleString()}</p>
          <p>Jake: {this.props.users.BBU.members.table.Jake.table.stats.kills.basic.value.toLocaleString()}</p>
          <p>Brenna: {this.props.users.BBU.members.table.Brenna.table.stats.kills.basic.value.toLocaleString()}</p>
          <p>Pat: {this.props.users.BBU.members.table.Pat.table.stats.kills.basic.value.toLocaleString()}</p>
        </div>
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
