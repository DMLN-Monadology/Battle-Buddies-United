import React from 'react';
import ReactDOM from 'react-dom';


class UsersIndex extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      former: "",
      individualsMode: false,
      statChosen: "allPvEKills"
    };
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  activateStatBanner(stat) {
    return (event) => {
      this.setState({individualsMode: false})
      this.setState({statChosen: stat})
      let prev = this.state.selected
      this.setState({former: prev});
      this.setState({selected: ""});
    }
  }

  setIndividualsMode() {
    return (event) => {
      let prev = this.state.selected
      if (this.state.individualsMode) {
        this.setState({former: prev});
        this.setState({selected: ""});
      }
      this.setState({individualsMode: true});
      this.setState({statChosen: ""});
    }
  };

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
    const stianStat = this.props.users.BBU.members.table.Stian.table.stats
    const brennaStat = this.props.users.BBU.members.table.Brenna.table.stats
    const jakeStat = this.props.users.BBU.members.table.Jake.table.stats
    const cassieStat = this.props.users.BBU.members.table.Cassie.table.stats
    const scottStat = this.props.users.BBU.members.table.Scott.table.stats
    const patStat = this.props.users.BBU.members.table.Pat.table.stats

    const stian = {
      id: 1,
      name: "Stian",
      username: "GWL_Monadology",
      color: "yellow",
      pic: "https://s-media-cache-ak0.pinimg.com/originals/f6/83/87/f6838706af8603e7296b7118b41b4b25.jpg",
      allPvEKills: stianStat.kills.basic.value,
      kdr: stianStat.killsDeathsRatio.basic.value,
      precisionKills: stianStat.precisionKills.basic.value,
      avgKillDistance: stianStat.averageKillDistance.basic.value,
      longestKillDistance: stianStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: stianStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: stianStat.averageLifespan.basic.value,
      abilityKills: stianStat.abilityKills.basic.value,
      avgResurrection: stianStat.resurrectionsPerformed.pga.value,
      featsCount: stianStat.activitiesCleared.value,
      avgAssists: stianStat.assists.pga.value,
      favouriteWep: stianStat.weaponBestType.basic.displayValue
    };
    const brenna = {
      id: 2,
      name: "Brenna",
      username: "Aleu1794",
      color: "green",
      pic: "https://i1.wp.com/destinynews.net/wp-content/uploads/2014/01/1-VrOpJjE.jpg",
      allPvEKills: brennaStat.kills.basic.value,
      kdr: brennaStat.killsDeathsRatio.basic.value,
      precisionKills: brennaStat.precisionKills.basic.value,
      avgKillDistance: brennaStat.averageKillDistance.basic.value,
      longestKillDistance: brennaStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: brennaStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: brennaStat.averageLifespan.basic.value,
      abilityKills: brennaStat.abilityKills.basic.value,
      avgResurrection: brennaStat.resurrectionsPerformed.pga.value,
      featsCount: brennaStat.activitiesCleared.value,
      avgAssists: brennaStat.assists.pga.value,
      favouriteWep: brennaStat.weaponBestType.basic.displayValue
    };
    const jake = {
      id: 3,
      name: "Jake",
      username: "DeltaZero117",
      color: "yellow",
      pic : "http://excitelt.com/i/2017/02/destiny-titan-wallpapers-android.png",
      allPvEKills: jakeStat.kills.basic.value,
      kdr: jakeStat.killsDeathsRatio.basic.value,
      precisionKills: jakeStat.precisionKills.basic.value,
      avgKillDistance: jakeStat.averageKillDistance.basic.value,
      longestKillDistance: jakeStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: jakeStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: jakeStat.averageLifespan.basic.value,
      abilityKills: jakeStat.abilityKills.basic.value,
      avgResurrection: jakeStat.resurrectionsPerformed.pga.value,
      featsCount: jakeStat.activitiesCleared.value,
      avgAssists: jakeStat.assists.pga.value,
      favouriteWep: jakeStat.weaponBestType.basic.displayValue
    };
    const cassie = {
      id: 4,
      name: "Cassie",
      username: "Vasi_0713",
      color: "brown",
      pic: "https://s-media-cache-ak0.pinimg.com/originals/fc/ff/c9/fcffc9ebbec9417b601cb8c4d6074d3b.jpg",
      allPvEKills: cassieStat.kills.basic.value,
      kdr: cassieStat.killsDeathsRatio.basic.value,
      precisionKills: cassieStat.precisionKills.basic.value,
      avgKillDistance: cassieStat.averageKillDistance.basic.value,
      longestKillDistance: cassieStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: cassieStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: cassieStat.averageLifespan.basic.value,
      abilityKills: cassieStat.abilityKills.basic.value,
      avgResurrection: cassieStat.resurrectionsPerformed.pga.value,
      featsCount: cassieStat.activitiesCleared.value,
      avgAssists: cassieStat.assists.pga.value,
      favouriteWep: cassieStat.weaponBestType.basic.displayValue
    };
    const scott = {
      id: 5,
      name: "Scott",
      username: "BobaFettLives21",
      color: "blue",
      pic: "http://www.wallpapermade.com/images/wallpapers/originals/destiny-titan-guardian-wallpaper-5860.jpg",
      allPvEKills: scottStat.kills.basic.value,
      kdr: scottStat.killsDeathsRatio.basic.value,
      precisionKills: scottStat.precisionKills.basic.value,
      avgKillDistance: scottStat.averageKillDistance.basic.value,
      longestKillDistance: scottStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: scottStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: scottStat.averageLifespan.basic.value,
      abilityKills: scottStat.abilityKills.basic.value,
      avgResurrection: scottStat.resurrectionsPerformed.pga.value,
      featsCount: scottStat.activitiesCleared.value,
      avgAssists: scottStat.assists.pga.value,
      favouriteWep: scottStat.weaponBestType.basic.displayValue
    };
    const pat = {
      id: 6,
      name: "Patty Pat Pat",
      username: "Pat84571",
      color: "brown",
      pic: "http://hdqwalls.com/wallpapers/destiny-warlock-guardian.jpg",
      allPvEKills: patStat.kills.basic.value,
      kdr: patStat.killsDeathsRatio.basic.value,
      precisionKills: patStat.precisionKills.basic.value,
      avgKillDistance: patStat.averageKillDistance.basic.value,
      longestKillDistance: patStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: patStat.averageLifespan.basic.displayValue, // string
      avgLifeSpanValue: patStat.averageLifespan.basic.value,
      abilityKills: patStat.abilityKills.basic.value,
      avgResurrection: patStat.resurrectionsPerformed.pga.value,
      featsCount: patStat.activitiesCleared.value,
      avgAssists: patStat.assists.pga.value,
      favouriteWep: patStat.weaponBestType.basic.displayValue // string
    };
    let buddies = [brenna, jake, cassie, stian, scott, pat];
    let individualsModeClass = ""
    if (this.state.individualsMode) {individualsModeClass = "Current"}
    let banners
    if (this.state.individualsMode) {
      banners = buddies.map( buddy => {
        let classes = "banner " + buddy.name
        if (this.state.selected == buddy.name) {
          classes += " selected"
        } else if (this.state.former == buddy.name) {
          classes += " former"
        }
        return (
          <div className={classes} id={buddy.name} key={buddy.id} >
            <img src={buddy.pic} onClick={this.toggleBanner(buddy.name)}></img>
            <div className="statsheet">
              <h3>{buddy.name}</h3>
              <h4>All-Time PvE Statistics</h4>
              <table>
                <tbody>
                  <tr>
                    <th>Kills</th>
                    <th>{buddy.allPvEKills.toLocaleString()}</th>
                  </tr>
                  <tr>
                    <th>KDR</th>
                    <th>{buddy.kdr.toFixed(2).toString()}</th>
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
                    <th>{buddy.avgLifeSpanDisplay}</th>
                  </tr>
                  <tr>
                    <th>Mean Resurrections Rate</th>
                    <th>{buddy.avgResurrection.toFixed(2).toLocaleString()}</th>
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
  } else {
    let current_stat = this.state.statChosen
    let all_stats = []

    buddies.map( buddy => {
      all_stats.push(buddy[current_stat])
    });

    let max_figure = Math.max.apply(Math, all_stats)

    banners = buddies.map( buddy => {
      let classes = "banner " + buddy.name
      if (this.state.former == buddy.name) {
        classes += " former"
      }
      let percentage = (buddy[current_stat] / max_figure) * 100
      let cssHeight = {height: (percentage.toString() + "%")}
      return (
        <div className={classes} id={buddy.name} key={buddy.id}>
          <div className="statBlinds"></div>
          <div className="statBar" style={cssHeight}></div>
        </div>
      )
    })
  }
    return (
      <div>
        <div className="Header" >
          <img src="http://res.cloudinary.com/dmuuruew8/image/upload/v1489278658/Screen_Shot_2017-03-11_at_4.27.36_PM_hs0wlv.png"/>
        </div>
        <div className="BannersContainer">
          { banners }
        </div>
        <ul className="Menu">
          <li className={individualsModeClass}>
            <p className="Left">[</p>
            <p className="Title Individuals" onClick={this.setIndividualsMode()}>View by Individuals</p>
            <p className="Right">]</p>
          </li>
        </ul>
        <ul className="NavigationMenu">
          <li>
            <p className="Left">[</p>
            <p className="Title Kills" onClick={this.activateStatBanner("allPvEKills")}>Kills</p>
            <p className="Right">]</p>
          </li>
          <li>
            <p className="Left">[</p>
            <p className="Title KDR">KDR</p>
            <p className="Right">]</p>
          </li>
          <li>
            <p className="Left">[</p>
            <p className="Title Precision">Precision Rating</p>
            <p className="Right">]</p>
          </li>
          <li>
            <p className="Left">[</p>
            <p className="Title Abilities">Abilities Rating</p>
            <p className="Right">]</p>
          </li>
          <li>
            <p className="Left">[</p>
            <p className="Title Life">Mean Assists</p>
            <p className="Right">]</p>
          </li>
          <li>
            <p className="Left">[</p>
            <p className="Title ResurrectionsRate">Mean Resurrections Rate</p>
            <p className="Right">]</p>
          </li>
        </ul>
        <ul className="NavigationMenu">
          <li>
            <p className="Left">[</p>
            <p className="Title AvgDistance">Mean Kill Distance</p>
            <p className="Right">]</p>
          </li>
          <li>
            <p className="Left">[</p>
            <p className="Title RecDistance">Record Kill Distance</p>
            <p className="Right">]</p>
          </li>
          <li>
            <p className="Left">[</p>
            <p className="Title Life">Mean Life Expectancy</p>
            <p className="Right">]</p>
          </li>
          <li>
            <p className="Left">[</p>
            <p className="Title Life">Feats Accomplished</p>
            <p className="Right">]</p>
          </li>

        </ul>
      </div>
    )
  }

}

export default UsersIndex;
