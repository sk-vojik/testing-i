const { repair } = require('./items');

it('repairs to full durability', () => {
  const item = {
    name: 'Lambda Shield',
    type: "armor",
    durability: 98,
    displayName: '[+3] Lambda Shield',
  };

  // const expected = {
  //   name: 'Lambda Shield',
  //   type: "armor",
  //   durability: 100,
  //   displayName: '[+3] Lambda Shield',
  // };

  // expect(enhancer.repair(item)).toEqual(expected);


  //OR

  expect(repair(item).durability).toEqual(100)
})