import Shallow from 'react-test-renderer/shallow';
import Link from './Link';
import React from 'react';
import expect from 'expect';

describe('Link', () => {
    it('Should be a link', () => {
        const shallow = Shallow.createRenderer();
        shallow.render(<Link/>);
        const actual = shallow.getRenderOutput().type;
        const expected = 'a';
        expect(actual).toEqual(expected);
    });
});