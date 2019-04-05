module.exports = {
  fail,
  success
}

function fail(item) {



  if(item.enhancement < 15 && item.durability < 25) {
    return {...item};
  }

  const durability = item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
  const enhancement = item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;
 
  return {...item, durability, enhancement };


}

function success(item) {
  const enhancement = item.enhancement;
  return {...item, enhancement: enhancement + 1 }
}