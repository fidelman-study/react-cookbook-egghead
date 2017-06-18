const defaultState = [
  {
    id: 1,
    title: 'Hi',
    text: 'Wazzaaap'
  }
];

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_QUOTE_BY_ID':
      return [...state, payload];
  }

  return state;
}