import React, { Component } from 'react';
import ReactCalendar from 'react-calendar';

export default class Calendar extends Component {
    constructor() {
        super();

        this.state = {
            dates: [new Date(), new Date()]
        };

        this.onChange = this.onChange.bind(this);
    }

  onChange(dates) {
      this.setState({ dates });
  }

  render() {
      console.log(this.props);
    return (
      <div style={{ width: '80%' }}>
        <h5>Please choose booking dates!</h5>
        <ReactCalendar
          onChange={this.onChange}
          value={this.state.dates}
          selectRange
        />
        <button style={{width: '80px', height: '40px', background: '#6E48AA', border: 'none', color: 'white', marginTop: '10px'}} onClick={() => this.props.triggerNextStep(
            { value: JSON.stringify(this.state.dates), trigger: 'date'}
            )}>Continue</button>
      </div>
    );
  }
}