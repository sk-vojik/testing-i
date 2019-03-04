module.exports = {
  repair,
}

function repair(item) {
  if (item.durability !== 100) {
    return {...item, durability: 100};
  } else {
    null;
  }
}