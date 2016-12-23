import React, { Component } from 'react';

class Range extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:160
    }
  }

  static defaultProps = {
    min:0,
    max:245,
    step:1
  }
  onChange(evt) {
    console.log(evt.target.value);
    this.setState({
      value:evt.target.value
    });
  }
  render() {
    return (
      <div className="range">
      <input type="range"
        value={this.state.value}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        onChange={this.onChange.bind(this)}/>
      </div>
    );
  }
}

export default Range;
