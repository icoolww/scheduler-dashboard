import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { label, value, onSelect } = this.props;
    // const { id, label, value, onSelect } = this.props;

    return (
      <section
        className="dashboard__panel" onClick={onSelect}
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
        {/* <p className="dashboard__panel-value" onClick={event => onSelect(id)}>{value}</p> */}
      </section>
    );
  }
}

export default Panel;
