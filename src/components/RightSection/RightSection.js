import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Form from './Form';

class RightSection extends Component {

  render() {
    return (
      <div className="form-box">
        <div className="center">
          <h4>Sign up</h4>
        </div>
        <Form />
      </div>
    )
  }
}



RightSection.propTypes = {};

RightSection.defaultProps = {};

export default RightSection;
