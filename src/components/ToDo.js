import React, { Component } from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  incCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <li> A todo will go here </li>
        <button onClick={this.incCount}> {this.state.count} </button>
      </div>
    );
  }
}

export default ToDo;
