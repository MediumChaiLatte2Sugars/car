const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldIBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return false if it's a hatchback", function() { // 4
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if it's a hatchback and pink", function() { // 4
    const car = {
      type: "hatchback",
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if there are no details about the car", function() { // 4
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return undefined if there is no car", function() { // 4
    const car = undefined;
    const shouldBuy = shouldBuyCar(car);
    assert.isUndefined(shouldBuy);
  });

  it("should return true if the car has 6 litres/100km and is under or equal to $5,000", function() { // 4
    const car = {
      type: "sedan",
      price: 4999,
      litresPer100km: 6,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return true if the car has between 6 and 11 litres/100km and is under or equal to $5,000", function() { // 4
    const car = {
      type: "sedan",
      price: 4999,
      litresPer100km: 7,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return true if the car has 11 litres/100km and is under or equal to $5,000", function() { // 4
    const car = {
      type: "sedan",
      price: 4999,
      litresPer100km: 11,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false if the car has 5 litres/100km and is under or equal to $5,000", function() { // 4
    const car = {
      type: "sedan",
      price: 4999,
      litresPer100km: 5,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if the car has 12 litres/100km and is under or equal to $5,000", function() { // 4
    const car = {
      type: "sedan",
      price: 4999,
      litresPer100km: 12,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if the car has 6 litres/100km and is over $5,000", function() { // 4
    const car = {
      type: "sedan",
      price: 7000,
      litresPer100km: 6,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if the car has between 6 and 11 litres/100km and is and is over $5,000", function() { // 4
    const car = {
      type: "sedan",
      price: 8933,
      litresPer100km: 7,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if the car has 11 litres/100km and is over $5,000", function() { // 4
    const car = {
      type: "sedan",
      price: 7000,
      litresPer100km: 11,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true if the color is pink", function() { // 4
    const car = {
      type: "sedan",
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });


});