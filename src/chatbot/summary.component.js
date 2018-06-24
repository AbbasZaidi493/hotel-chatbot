import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';

export default class Summary extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        brand: null,
        location: null,
        room: null,
        date: null
      };
    }
  
    componentDidMount() {
      const { steps } = this.props;
      const { brand, location, room , date } = steps;

      console.log(date);
      this.setState({ 
          brand: brand.message,
          date: date ? date.message : null,
          location: location.message,
          room: room ? room.message : null
         });
    }
  
    renderSelectedRoomInfo() {
        if (this.state.room) {
            return ` and your room is ${this.state.room}`;
        }

        return null;
    }

    render() {
      if(this.state.date) {
      var date = this.state.date.replace(/You|chose/gi, "");
      console.log(date);
      }
      
      return (
        <div>
        <p>
            Your booking is for 
            {' '+ this.state.brand} 
            {' ' + this.state.location}
            {' ' + date ? ' from ' + date : ''}
            {' ' + this.renderSelectedRoomInfo() ? this.renderSelectedRoomInfo() : '' }
        </p>
        </div>
      );
    }
  }
