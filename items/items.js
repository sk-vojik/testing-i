class Item {
  constructor(name, type, durability = 100, enhancement = 0) {
    this.name = name,
      this.type = type.toUpperCase(),
      this.durabilityValue = durability,
      this.enhancementValue = enhancement;
  }
}

module.exports = Item;