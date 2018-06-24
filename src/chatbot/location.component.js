import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';

export default class Location extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        brand: null,
        location: null,
      };
    }
  
    componentDidMount() {
      const { steps } = this.props;
      const { brand, location } = steps;

      this.setState({ 
          brand: brand.message,
          location: location.message,
         });
    }

    render() {
      
      return (
        <div>
        <p>
            Your chose 
            {' '+ this.state.brand} 
            {' ' + this.state.location}
        </p>
        </div>
      );
    }
  }
