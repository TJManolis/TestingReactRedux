import React from "react";

import "../styles.css";

class NameInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <input onChange={this.props.namechange} />;
  }
}

export default NameInput;
