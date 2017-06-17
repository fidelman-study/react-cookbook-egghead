import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CoolComponent = ({greeting}) => (
    <div>
        <h1>Greeting</h1>
        <div>{greeting}</div>
    </div>
);

CoolComponent.propTypes = {
    greeting: PropTypes.string.isRequired
};


export default CoolComponent;