import React from 'react';
import Shallow from 'react-test-renderer/shallow';
import expect from 'expect';
import Block from './Block';

describe('Block', () => {
   it('should render block with class fa fa-*', () => {
       const shallow = Shallow.createRenderer();
       shallow.render(<Block name="facebook"/>);
       const actual = shallow.getRenderOutput().props.className.includes('fa fa-facebook');
       const expected = true;
       expect(actual).toEqual(expected);
   });

   describe('isActive', () => {
       function renderBlock(isActive) {
         const shallow = Shallow.createRenderer();
         shallow.render(<Block isActive={isActive}/>);
         return shallow.getRenderOutput().props.className.includes('active');
       }

       it('should show block as active', () => {
           const actual = renderBlock(true);
           const expected = true;
           expect(actual).toEqual(expected);
       });

       it('should show block as inactive', () => {
           const actual = renderBlock(false);
           const expected = false;
           expect(actual).toEqual(expected);
       });
   });
});