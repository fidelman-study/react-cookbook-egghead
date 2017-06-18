import expect from 'expect';
import reducer from './reducer';

describe('reducer', () => {
  it('should add article', () => {
    const stateBefore = () => {
      return [{
        id: 1,
        title: 'Hi',
        text: 'Wazzaaap'
      }];
    };

    const action = {
      type: 'ADD_QUOTE_BY_ID',
      payload: {
        id: 2,
        title: 'Hello',
        text: 'How are you'
      }
    };

    const actual = reducer(stateBefore(), action);

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