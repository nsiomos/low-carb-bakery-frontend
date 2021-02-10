import React from "react";

class TestReact extends React.Component {
  render() {
    return <input className="testReact" value={this.props.value} />;
  }
}

export default TestReact;
