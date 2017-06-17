import React from 'react';
import Shallow from 'react-test-renderer/shallow';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import CoolComponent from './CoolComponent';

expect.extend(expectJSX);

describe('CoolComponent', () => {

   it('should render the greeting', () => {
      const shallow = Shallow.createRenderer();
      shallow.render(<CoolComponent greeting="hello world"/>);
      const actual = shallow.getRenderOutput();
      const expected = <div>hello world</div>;
      expect(actual).toIncludeJSX(expected);
   });
});