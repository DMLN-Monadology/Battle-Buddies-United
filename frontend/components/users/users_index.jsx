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
      statChosen: "allPvEKills"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate ran");
    console.log(prevState.statChosen);
    console.log(this.state.statChosen);
    if (this.state.statChosen != prevState.statChosen) {
      this.setState({blindReset: false})
    };
  }

  // componentWillMount() {
  //   this.props.fetchUsers();
  // }


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
    // if (!this.props.users.BBU) {
    //   return (
    //     <div id="loading">loading! retrieving user data</div>
    //   )
    // };

    const stian = {
      id: 1,
      name: "Stian",
      username: "GWL_Monadology",
      color: "#5A9386",
      pic: "https://s-media-cache-ak0.pinimg.com/originals/f6/83/87/f6838706af8603e7296b7118b41b4b25.jpg",
      allPvEKills: 10000,
      kdr: 10.00,
      precisionKills: 1000,
      precisionRate: 10.0,
      abilitiesRate: 10.0,
      avgKillDistance: 100,
      longestKillDistance: 1000,
      avgLifeSpanDisplay: "10m30s",
      avgLifeSpanValue: 1000,
      abilityKills: 1000,
      avgResurrection: 10.0,
      featsCount: 100,
      avgAssists: 10,
      favouriteWep: "auto rifle"
    };
    const brenna = {
      id: 2,
      name: "Brenna",
      username: "Aleu1794",
      color: "#78B41A",
      pic: "https://i1.wp.com/destinynews.net/wp-content/uploads/2014/01/1-VrOpJjE.jpg",
      allPvEKills: 17000,
      kdr: 17.00,
      precisionKills: 1700,
      precisionRate: 10.7,
      abilitiesRate: 10.7,
      avgKillDistance: 170,
      longestKillDistance: 1700,
      avgLifeSpanDisplay: "10m30s",
      avgLifeSpanValue: 1700,
      abilityKills: 1700,
      avgResurrection: 10.7,
      featsCount: 170,
      avgAssists: 17,
      favouriteWep: "auto rifle"
    };
    const jake = {
      id: 3,
      name: "Jake",
      username: "DeltaZero117",
      color: "#BEA243",
      pic : "http://excitelt.com/i/2017/02/destiny-titan-wallpapers-android.png",
      allPvEKills: 11000,
      kdr: 11.00,
      precisionKills: 1100,
      precisionRate: 10.1,
      abilitiesRate: 10.1,
      avgKillDistance: 110,
      longestKillDistance: 1100,
      avgLifeSpanDisplay: "10m30s",
      avgLifeSpanValue: 1100,
      abilityKills: 1100,
      avgResurrection: 10.1,
      featsCount: 110,
      avgAssists: 11,
      favouriteWep: "auto rifle"
    };
    const cassie = {
      id: 4,
      name: "Cassie",
      username: "Vasi_0713",
      color: "#CE3D45",
      pic: "https://s-media-cache-ak0.pinimg.com/originals/fc/ff/c9/fcffc9ebbec9417b601cb8c4d6074d3b.jpg",
      allPvEKills: 18000,
      kdr: 18.00,
      precisionKills: 1800,
      precisionRate: 10.8,
      abilitiesRate: 10.8,
      avgKillDistance: 180,
      longestKillDistance: 1800,
      avgLifeSpanDisplay: "10m30s",
      avgLifeSpanValue: 1800,
      abilityKills: 1800,
      avgResurrection: 10.8,
      featsCount: 180,
      avgAssists: 18,
      favouriteWep: "auto rifle"
    };
    const scott = {
      id: 5,
      name: "Scott",
      username: "BobaFettLives21",
      color: "#77A0E0",
      pic: "http://www.wallpapermade.com/images/wallpapers/originals/destiny-titan-guardian-wallpaper-5860.jpg",
      allPvEKills: 14000,
      kdr: 14.00,
      precisionKills: 1400,
      precisionRate: 10.4,
      abilitiesRate: 10.4,
      avgKillDistance: 140,
      longestKillDistance: 1400,
      avgLifeSpanDisplay: "10m30s",
      avgLifeSpanValue: 1400,
      abilityKills: 1400,
      avgResurrection: 10.4,
      featsCount: 140,
      avgAssists: 14,
      favouriteWep: "auto rifle"
    };
    const pat = {
      id: 6,
      name: "Patty Pat Pat",
      username: "Pat84571",
      color: "#BC8B67",
      pic: "http://hdqwalls.com/wallpapers/destiny-warlock-guardian.jpg",
      allPvEKills: 15000,
      kdr: 15.00,
      precisionKills: 1500,
      precisionRate: 10.5,
      abilitiesRate: 10.5,
      avgKillDistance: 150,
      longestKillDistance: 1500,
      avgLifeSpanDisplay: "10m30s",
      avgLifeSpanValue: 1500,
      abilityKills: 1500,
      avgResurrection: 10.5,
      featsCount: 150,
      avgAssists: 15,
      favouriteWep: "auto rifle"
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
    let all_stats = [];

    buddies.map( buddy => {
      all_stats.push(buddy[current_stat])
    });

    let max_figure = Math.max.apply(Math, all_stats)

    banners = buddies.map( buddy => {
      let classes = "banner " + buddy.name;
      let percentage = (buddy[current_stat] / max_figure) * 100
      let cssStyles = {height: (percentage.toString() + "%"), backgroundColor: buddy.color}
      return (
        <div className={classes} id={buddy.name} key={buddy.id}>
          <div className="statBar" style={cssStyles}></div>
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
