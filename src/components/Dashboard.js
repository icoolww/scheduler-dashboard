import React, { Component } from "react";

import Loading from "./Loading";
import Panel from "./Panel";

import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];



class Dashboard extends Component {
  state = {
    loading: false,
    // focused: 1
    focused: null,
  };

  // instance method
  // selectPanel(id) {
  //   this.setState({
  //     focused: id,
  //   });
  // }

  // handling the view from 1 panel to 4 panels
  selectPanel(id) {
    this.setState(previousState => ({
      focused: previousState.focused !== null ? null : id
    }));
  }


  // arrow function method
  // selectPanel = (id) => {
  //   this.setState({
  //     focused: id,
  //   });
  // };

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused,
    });

    if (this.state.loading) {
      return <Loading />;
    }

    const panels = (
      this.state.focused
        ? data.filter((panel) => this.state.focused === panel.id)
        : data
    ).map((panel) => (
      <Panel
        key={panel.id}
        id={panel.id}
        label={panel.label}
        value={panel.value}
        // arrow function in render method
        onSelect={event => this.selectPanel(panel.id)}

        // onSelect={this.selectPanel}
        
      />
    ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;
