import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestUtils from 'react-test-renderer/shallow';
import expect from 'expect';

const CoolComponent = ({greeting}) => (
    <div>
        <h1>Greeting</h1>
        <div>{greeting}</div>
    </div>
);

export default CoolComponent;


describe('CoolComponent', () => {
    it('should...', () => {
         const renderer = TestUtils.createRenderer();
         renderer.render(<CoolComponent greeting="hello world" />);
         const output = renderer.getRenderOutput();
         console.log(output);
    });
});