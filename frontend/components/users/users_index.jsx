import React from 'react';
import ReactDOM from 'react-dom';


class UsersIndex extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Stian",
      former: ""
    };
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  toggleBanner(name) {
    return (event) => {
      event.preventDefault();
      let prev = this.state.selected
      if (name == this.state.selected) {
        this.setState({former: prev})
        this.setState({selected: ""})
      } else {
        this.setState({former: prev})
        this.setState({ selected: name })
      }
    };
  };

  render() {
    if (!this.props.users.BBU) {
      return (
        <div id="loading">loading! retrieving user data</div>
      )
    };
    const stian = {
      id: 1,
      name: "Stian",
      pic: "https://s-media-cache-ak0.pinimg.com/originals/f6/83/87/f6838706af8603e7296b7118b41b4b25.jpg",
      allPvEKills: this.props.users.BBU.members.table.Stian.table.stats.kills.basic.value,
      kdr: this.props.users.BBU.members.table.Stian.table.stats.killsDeathsRatio.basic.displayValue,
      precisionKills: this.props.users.BBU.members.table.Stian.table.stats.precisionKills.basic.value,
      avgKillDistance: this.props.users.BBU.members.table.Stian.table.stats.averageKillDistance.basic.value,
      longestKillDistance: this.props.users.BBU.members.table.Stian.table.stats.longestKillDistance.basic.value,
      avgLifeSpan: this.props.users.BBU.members.table.Stian.table.stats.averageLifespan.basic.displayValue,
      abilityKills: this.props.users.BBU.members.table.Stian.table.stats.abilityKills.basic.value,
      favouriteWep: this.props.users.BBU.members.table.Stian.table.stats.weaponBestType.basic.displayValue
    };
    const brenna = {
      id: 2,
      name: "Brenna",
      pic: "https://i1.wp.com/destinynews.net/wp-content/uploads/2014/01/1-VrOpJjE.jpg",
      allPvEKills: this.props.users.BBU.members.table.Brenna.table.stats.kills.basic.value,
      kdr: this.props.users.BBU.members.table.Brenna.table.stats.killsDeathsRatio.basic.displayValue,
      precisionKills: this.props.users.BBU.members.table.Brenna.table.stats.precisionKills.basic.value,
      avgKillDistance: this.props.users.BBU.members.table.Brenna.table.stats.averageKillDistance.basic.value,
      longestKillDistance: this.props.users.BBU.members.table.Brenna.table.stats.longestKillDistance.basic.value,
      avgLifeSpan: this.props.users.BBU.members.table.Brenna.table.stats.averageLifespan.basic.displayValue,
      abilityKills: this.props.users.BBU.members.table.Brenna.table.stats.abilityKills.basic.value,
      favouriteWep: this.props.users.BBU.members.table.Brenna.table.stats.weaponBestType.basic.displayValue
    };
    const jake = {
      id: 3,
      name: "Jake",
      pic : "http://excitelt.com/i/2017/02/destiny-titan-wallpapers-android.png",
      allPvEKills: this.props.users.BBU.members.table.Jake.table.stats.kills.basic.value,
      kdr: this.props.users.BBU.members.table.Jake.table.stats.killsDeathsRatio.basic.displayValue,
      precisionKills: this.props.users.BBU.members.table.Jake.table.stats.precisionKills.basic.value,
      avgKillDistance: this.props.users.BBU.members.table.Jake.table.stats.averageKillDistance.basic.value,
      longestKillDistance: this.props.users.BBU.members.table.Jake.table.stats.longestKillDistance.basic.value,
      avgLifeSpan: this.props.users.BBU.members.table.Jake.table.stats.averageLifespan.basic.displayValue,
      abilityKills: this.props.users.BBU.members.table.Jake.table.stats.abilityKills.basic.value,
      favouriteWep: this.props.users.BBU.members.table.Jake.table.stats.weaponBestType.basic.displayValue
    };
    const cassie = {
      id: 4,
      name: "Cassie",
      pic: "https://s-media-cache-ak0.pinimg.com/originals/fc/ff/c9/fcffc9ebbec9417b601cb8c4d6074d3b.jpg",
      allPvEKills: this.props.users.BBU.members.table.Cassie.table.stats.kills.basic.value,
      kdr: this.props.users.BBU.members.table.Cassie.table.stats.killsDeathsRatio.basic.displayValue,
      precisionKills: this.props.users.BBU.members.table.Cassie.table.stats.precisionKills.basic.value,
      avgKillDistance: this.props.users.BBU.members.table.Cassie.table.stats.averageKillDistance.basic.value,
      longestKillDistance: this.props.users.BBU.members.table.Cassie.table.stats.longestKillDistance.basic.value,
      avgLifeSpan: this.props.users.BBU.members.table.Cassie.table.stats.averageLifespan.basic.displayValue,
      abilityKills: this.props.users.BBU.members.table.Cassie.table.stats.abilityKills.basic.value,
      favouriteWep: this.props.users.BBU.members.table.Cassie.table.stats.weaponBestType.basic.displayValue
    };
    const scott = {
      id: 5,
      name: "Scott",
      pic: "http://www.wallpapermade.com/images/wallpapers/originals/destiny-titan-guardian-wallpaper-5860.jpg",
      allPvEKills: this.props.users.BBU.members.table.Scott.table.stats.kills.basic.value,
      kdr: this.props.users.BBU.members.table.Scott.table.stats.killsDeathsRatio.basic.displayValue,
      precisionKills: this.props.users.BBU.members.table.Scott.table.stats.precisionKills.basic.value,
      avgKillDistance: this.props.users.BBU.members.table.Scott.table.stats.averageKillDistance.basic.value,
      longestKillDistance: this.props.users.BBU.members.table.Scott.table.stats.longestKillDistance.basic.value,
      avgLifeSpan: this.props.users.BBU.members.table.Scott.table.stats.averageLifespan.basic.displayValue,
      abilityKills: this.props.users.BBU.members.table.Scott.table.stats.abilityKills.basic.value,
      favouriteWep: this.props.users.BBU.members.table.Scott.table.stats.weaponBestType.basic.displayValue
    };
    const pat = {
      id: 6,
      name: "Patty Pat Pat",
      pic: "http://hdqwalls.com/wallpapers/destiny-warlock-guardian.jpg",
      allPvEKills: this.props.users.BBU.members.table.Pat.table.stats.kills.basic.value,
      kdr: this.props.users.BBU.members.table.Pat.table.stats.killsDeathsRatio.basic.displayValue, // string
      precisionKills: this.props.users.BBU.members.table.Pat.table.stats.precisionKills.basic.value,
      avgKillDistance: this.props.users.BBU.members.table.Pat.table.stats.averageKillDistance.basic.value,
      longestKillDistance: this.props.users.BBU.members.table.Pat.table.stats.longestKillDistance.basic.value,
      avgLifeSpan: this.props.users.BBU.members.table.Pat.table.stats.averageLifespan.basic.displayValue, // string
      abilityKills: this.props.users.BBU.members.table.Pat.table.stats.abilityKills.basic.value,
      favouriteWep: this.props.users.BBU.members.table.Pat.table.stats.weaponBestType.basic.displayValue // string
    };
    let StianStat = (
      <div id="StianStat">
        <p>kills: 200k</p>
        <p>deaths: 15k</p>
      </div>
    )
    let buddies = [brenna, jake, cassie, stian, scott, pat]

    return (
      <div>
        <div className="Header" >
          <img src="http://res.cloudinary.com/dmuuruew8/image/upload/v1489278658/Screen_Shot_2017-03-11_at_4.27.36_PM_hs0wlv.png"/>
        </div>
        <div className="BannersContainer">
          {
            buddies.map( buddy => {
              let classes = "banner"
              if (this.state.selected == buddy.name) {
                classes += " selected"
              } else if (this.state.former == buddy.name) {
                classes += " former"
              }
              return (
                <div className={classes} id={buddy.name} key={buddy.id} onClick={this.toggleBanner(buddy.name)}>
                  <img src={buddy.pic}></img>
                  <div className="statsheet">
                    <h4>All-Time PvE Statistics</h4>
                    <table>
                      <tbody>
                        <tr>
                          <th>Kills</th>
                          <th>{buddy.allPvEKills.toLocaleString()}</th>
                        </tr>
                        <tr>
                          <th>KDR</th>
                          <th>{buddy.kdr}</th>
                        </tr>
                        <tr>
                          <th>Precision Rating</th>
                          <th>{(buddy.precisionKills/buddy.allPvEKills*100).toFixed(2).toString() + "%"}</th>
                        </tr>
                        <tr>
                          <th>Abilities Rating</th>
                          <th>{(buddy.abilityKills/buddy.allPvEKills*100).toFixed(2).toString() + "%"}</th>
                        </tr>
                        <tr>
                          <th>Mean Kill Distance</th>
                          <th>{buddy.avgKillDistance.toFixed(2).toLocaleString()}</th>
                        </tr>
                        <tr>
                          <th>Record Kill Distance</th>
                          <th>{buddy.longestKillDistance.toLocaleString()}</th>
                        </tr>
                        <tr>
                          <th>Mean Life Expectancy</th>
                          <th>{buddy.avgLifeSpan}</th>
                        </tr>
                        <tr>
                          <th>Choice Weapon</th>
                          <th>{buddy.favouriteWep}</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            }
          )
        }
        </div>
      </div>
    )
  }

}

export default UsersIndex;