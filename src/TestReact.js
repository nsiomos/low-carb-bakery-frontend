import React from "react";

class TestReact extends React.Component {
  render() {
    return <input className="testReact" value={this.props.value} readOnly />;
  }
}

export default TestReact;
