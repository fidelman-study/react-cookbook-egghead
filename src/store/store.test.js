import expect from 'expect';
import store from './index';

describe('store', () => {
  it('it should work with serious of actions', () => {
    store.dispatch({
      type: 'ADD_QUOTE_BY_ID',
      payload: {
        id: 2,
        title: 'Hello',
        text: 'How are you'
      }
    });

    const actual = store.getState();
    const expected = [{
      id: 1,
      title: 'Hi',
      text: 'Wazzaaap'
    }, {
      id: 2,
      title: 'Hello',
      text: 'How are you'
    }];

    expect(actual).toEqual(expected);
  });
});