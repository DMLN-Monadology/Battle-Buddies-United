import React from 'react';
import ReactDOM from 'react-dom';


class UsersIndex extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      former: "",
      individualsMode: false,
      blindReset: false,
      prevBarHeights: {stian: "0px", cassie:"0px", jake:"0px", pat:"0px", scott:"0px", brenna:"0px"},
      statChosen: "allPvEKills"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.statChosen != prevState.statChosen) {
      this.setState({blindReset: false})
      this.setState({prevBarHeights: window.prevBarHeights})
      console.log(prevState.prevBarHeights);
      console.log(window.prevBarHeights);
    };
  }

  componentWillMount() {
    this.props.fetchUsers();
    window.prevBarHeights = {
      stian: "0px", cassie:"0px", jake:"0px", pat:"0px", scott:"0px", brenna:"0px"
    }
  }


  activateStatBanner(stat) {
    return (event) => {
      event.preventDefault();
      this.setState({blindReset: true});
      this.setState({individualsMode: false});
      this.setState({statChosen: stat});
      let prev = this.state.selected
      this.setState({former: prev});
      this.setState({selected: ""});
    }
  }

  setIndividualsMode() {
    return (event) => {
      event.preventDefault();
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
      nameVal: "stian",
      username: "GWL_Monadology",
      color: "#5A9386",
      pic: "https://s-media-cache-ak0.pinimg.com/originals/f6/83/87/f6838706af8603e7296b7118b41b4b25.jpg",
      allPvEKills: stianStat.kills.basic.value,
      kdr: stianStat.killsDeathsRatio.basic.value,
      precisionKills: stianStat.precisionKills.basic.value,
      precisionRate: (stianStat.precisionKills.basic.value/stianStat.kills.basic.value)*100,
      abilitiesRate: (stianStat.abilityKills.basic.value/stianStat.kills.basic.value)*100,
      avgKillDistance: stianStat.averageKillDistance.basic.value,
      longestKillDistance: stianStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: stianStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: stianStat.averageLifespan.basic.value,
      abilityKills: stianStat.abilityKills.basic.value,
      avgResurrection: stianStat.resurrectionsPerformed.pga.value,
      featsCount: stianStat.activitiesCleared.basic.value,
      avgAssists: stianStat.assists.pga.value,
      favouriteWep: stianStat.weaponBestType.basic.displayValue,
      prevBarHeight: this.state.prevBarHeights.stian
    };
    const brenna = {
      id: 2,
      name: "Brenna",
      nameVal: "brenna",
      username: "Aleu1794",
      color: "#78B41A",
      pic: "https://i1.wp.com/destinynews.net/wp-content/uploads/2014/01/1-VrOpJjE.jpg",
      allPvEKills: brennaStat.kills.basic.value,
      kdr: brennaStat.killsDeathsRatio.basic.value,
      precisionKills: brennaStat.precisionKills.basic.value,
      precisionRate: (brennaStat.precisionKills.basic.value/brennaStat.kills.basic.value)*100,
      abilitiesRate: (brennaStat.abilityKills.basic.value/brennaStat.kills.basic.value)*100,
      avgKillDistance: brennaStat.averageKillDistance.basic.value,
      longestKillDistance: brennaStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: brennaStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: brennaStat.averageLifespan.basic.value,
      abilityKills: brennaStat.abilityKills.basic.value,
      avgResurrection: brennaStat.resurrectionsPerformed.pga.value,
      featsCount: brennaStat.activitiesCleared.basic.value,
      avgAssists: brennaStat.assists.pga.value,
      favouriteWep: brennaStat.weaponBestType.basic.displayValue,
      prevBarHeight: this.state.prevBarHeights.brenna
    };
    const jake = {
      id: 3,
      name: "Jake",
      nameVal: "jake",
      username: "DeltaZero117",
      color: "#BEA243",
      pic : "http://excitelt.com/i/2017/02/destiny-titan-wallpapers-android.png",
      allPvEKills: jakeStat.kills.basic.value,
      kdr: jakeStat.killsDeathsRatio.basic.value,
      precisionKills: jakeStat.precisionKills.basic.value,
      precisionRate: (jakeStat.precisionKills.basic.value/jakeStat.kills.basic.value)*100,
      abilitiesRate: (jakeStat.abilityKills.basic.value/jakeStat.kills.basic.value)*100,
      avgKillDistance: jakeStat.averageKillDistance.basic.value,
      longestKillDistance: jakeStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: jakeStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: jakeStat.averageLifespan.basic.value,
      abilityKills: jakeStat.abilityKills.basic.value,
      avgResurrection: jakeStat.resurrectionsPerformed.pga.value,
      featsCount: jakeStat.activitiesCleared.basic.value,
      avgAssists: jakeStat.assists.pga.value,
      favouriteWep: jakeStat.weaponBestType.basic.displayValue,
      prevBarHeight: this.state.prevBarHeights.jake
    };
    const cassie = {
      id: 4,
      name: "Cassie",
      nameVal: "cassie",
      username: "Vasi_0713",
      color: "#CE3D45",
      pic: "https://s-media-cache-ak0.pinimg.com/originals/fc/ff/c9/fcffc9ebbec9417b601cb8c4d6074d3b.jpg",
      allPvEKills: cassieStat.kills.basic.value,
      kdr: cassieStat.killsDeathsRatio.basic.value,
      precisionKills: cassieStat.precisionKills.basic.value,
      precisionRate: (cassieStat.precisionKills.basic.value/cassieStat.kills.basic.value)*100,
      abilitiesRate: (cassieStat.abilityKills.basic.value/cassieStat.kills.basic.value)*100,
      avgKillDistance: cassieStat.averageKillDistance.basic.value,
      longestKillDistance: cassieStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: cassieStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: cassieStat.averageLifespan.basic.value,
      abilityKills: cassieStat.abilityKills.basic.value,
      avgResurrection: cassieStat.resurrectionsPerformed.pga.value,
      featsCount: cassieStat.activitiesCleared.basic.value,
      avgAssists: cassieStat.assists.pga.value,
      favouriteWep: cassieStat.weaponBestType.basic.displayValue,
      prevBarHeight: this.state.prevBarHeights.cassie
    };
    const scott = {
      id: 5,
      name: "Scott",
      nameVal: "scott",
      username: "BobaFettLives21",
      color: "#77A0E0",
      pic: "http://www.wallpapermade.com/images/wallpapers/originals/destiny-titan-guardian-wallpaper-5860.jpg",
      allPvEKills: scottStat.kills.basic.value,
      kdr: scottStat.killsDeathsRatio.basic.value,
      precisionKills: scottStat.precisionKills.basic.value,
      precisionRate: (scottStat.precisionKills.basic.value/scottStat.kills.basic.value)*100,
      abilitiesRate: (scottStat.abilityKills.basic.value/scottStat.kills.basic.value)*100,
      avgKillDistance: scottStat.averageKillDistance.basic.value,
      longestKillDistance: scottStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: scottStat.averageLifespan.basic.displayValue,
      avgLifeSpanValue: scottStat.averageLifespan.basic.value,
      abilityKills: scottStat.abilityKills.basic.value,
      avgResurrection: scottStat.resurrectionsPerformed.pga.value,
      featsCount: scottStat.activitiesCleared.basic.value,
      avgAssists: scottStat.assists.pga.value,
      favouriteWep: scottStat.weaponBestType.basic.displayValue,
      prevBarHeight: this.state.prevBarHeights.scott
    };
    const pat = {
      id: 6,
      name: "Patty Pat Pat",
      nameVal: "pat",
      username: "Pat84571",
      color: "#BC8B67",
      pic: "http://hdqwalls.com/wallpapers/destiny-warlock-guardian.jpg",
      allPvEKills: patStat.kills.basic.value,
      kdr: patStat.killsDeathsRatio.basic.value,
      precisionKills: patStat.precisionKills.basic.value,
      precisionRate: (patStat.precisionKills.basic.value/patStat.kills.basic.value)*100,
      abilitiesRate: (patStat.abilityKills.basic.value/patStat.kills.basic.value)*100,
      avgKillDistance: patStat.averageKillDistance.basic.value,
      longestKillDistance: patStat.longestKillDistance.basic.value,
      avgLifeSpanDisplay: patStat.averageLifespan.basic.displayValue, // string
      avgLifeSpanValue: patStat.averageLifespan.basic.value,
      abilityKills: patStat.abilityKills.basic.value,
      avgResurrection: patStat.resurrectionsPerformed.pga.value,
      featsCount: patStat.activitiesCleared.basic.value,
      avgAssists: patStat.assists.pga.value,
      favouriteWep: patStat.weaponBestType.basic.displayValue, // string
      prevBarHeight: this.state.prevBarHeights.pat
    };



    let buddies = [brenna, jake, cassie, stian, scott, pat];
    let individualsModeClass = "";
    if (this.state.individualsMode) {individualsModeClass = "Current"}

    let banners
    if (this.state.individualsMode) {
      banners = buddies.map( buddy => {
        let classes = "banner " + buddy.name;
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
                    <th>Mean Assists</th>
                    <th>{buddy.avgAssists.toFixed(2).toString()}</th>
                  </tr>
                  <tr>
                    <th>Precision Rating</th>
                    <th>{buddy.precisionRate.toFixed(2).toString() + "%"}</th>
                  </tr>
                  <tr>
                    <th>Abilities Rating</th>
                    <th>{buddy.abilitiesRate.toFixed(2).toString() + "%"}</th>
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
                    <th>Mean Resurrections Rate</th>
                    <th>{buddy.avgResurrection.toFixed(2).toLocaleString()}</th>
                  </tr>
                  <tr>
                    <th>Mean Life Expectancy</th>
                    <th>{buddy.avgLifeSpanDisplay}</th>
                  </tr>
                  <tr>
                    <th>Feats Accomplished</th>
                    <th>{buddy.featsCount.toLocaleString()}</th>
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
  } else if (this.state.blindReset){
    banners = buddies.map(buddy => {
      return (
        <div className="banner" key={buddy.id}>

        </div>
      )
    })

  } else {
    let current_stat = this.state.statChosen
    let all_stats = []

    buddies.map( buddy => {
      all_stats.push(buddy[current_stat])
    });

    let max_figure = Math.max.apply(Math, all_stats)

    banners = buddies.map( buddy => {
      let height = (buddy[current_stat] / max_figure) * 550
      let datum
      if (current_stat == "avgLifeSpanValue") {
        datum = buddy.avgLifeSpanDisplay
      } else {
        datum = buddy[current_stat]
        if (datum > 1000) {
          datum = datum.toLocaleString();
        } else {
          datum = datum.toFixed(2);
        }
      }
      let classes = "banner stat " + buddy.name;
      if (this.state.former == buddy.name) {
        classes += " former"
      }
      let styleSheet = document.styleSheets[0];
      let a = "150px"
      let keyframes = `@-webkit-keyframes "${buddy.nameVal}" {
        0% {height: ${buddy.prevBarHeight};}
        15% {height: ${buddy.prevBarHeight};}
        100% {height: ${height};}
      }`;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      let barStyles = {height: height, backgroundColor: buddy.color, animation: `${buddy.nameVal} 3s`}
      let datumStyles = {color: buddy.color}

      window.prevBarHeights[buddy.nameVal] = (height.toString() + "px")
      return (
        <div className={classes} id={buddy.name} key={buddy.id}>
          <p className="statDatum" style={datumStyles}>{datum}</p>
          <div className="statBar" style={barStyles}></div>
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
          <li className={this.state.statChosen == "allPvEKills" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title Kills" onClick={this.activateStatBanner("allPvEKills")}>Kills</p>
            <p className="Right">]</p>
          </li>
          <li className={this.state.statChosen == "kdr" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title KDR" onClick={this.activateStatBanner("kdr")}>KDR</p>
            <p className="Right">]</p>
          </li>
          <li className={this.state.statChosen == "avgAssists" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title Life" onClick={this.activateStatBanner("avgAssists")}>Mean Assists</p>
            <p className="Right">]</p>
          </li>
          <li className={this.state.statChosen == "precisionRate" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title Precision" onClick={this.activateStatBanner("precisionRate")}>Precision Rating</p>
            <p className="Right">]</p>
          </li>
          <li className={this.state.statChosen == "abilitiesRate" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title Abilities" onClick={this.activateStatBanner("abilitiesRate")}>Abilities Rating</p>
            <p className="Right">]</p>
          </li>
          <li className={this.state.statChosen == "avgResurrection" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title ResurrectionsRate" onClick={this.activateStatBanner("avgResurrection")}>Mean Resurrections Rate</p>
            <p className="Right">]</p>
          </li>
        </ul>
        <ul className="NavigationMenu">
          <li className={this.state.statChosen == "avgKillDistance" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title AvgDistance" onClick={this.activateStatBanner("avgKillDistance")}>Mean Kill Distance</p>
            <p className="Right">]</p>
          </li>
          <li className={this.state.statChosen == "longestKillDistance" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title RecDistance" onClick={this.activateStatBanner("longestKillDistance")}>Record Kill Distance</p>
            <p className="Right">]</p>
          </li>
          <li className={this.state.statChosen == "avgLifeSpanValue" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title Life" onClick={this.activateStatBanner("avgLifeSpanValue")}>Mean Life Expectancy</p>
            <p className="Right">]</p>
          </li>
          <li className={this.state.statChosen == "featsCount" ? "Current" : ""}>
            <p className="Left">[</p>
            <p className="Title Life" onClick={this.activateStatBanner("featsCount")}>Feats Accomplished</p>
            <p className="Right">]</p>
          </li>

        </ul>
      </div>
    )
  }

}

export default UsersIndex;
