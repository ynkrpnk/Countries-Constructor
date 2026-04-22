"use strict";

function Country(title, capital, population, area) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;
  this.showCountry = function () {
    return `Country ${this.title} have capital ${this.capital}, population ${this.population} million people and area ${this.area} square kilometers`;
  };
}

function showProperties(properties) {
  console.log(`Properties ${properties.title}`);
  for (let key in properties) {
    if (typeof properties[key] !== "function")
      console.log(`${key}: ${properties[key]}`);
  }
}

const ukraine = new Country("Ukraine", "Kyiv", "43.6 ", "603 700");
const poland = new Country("Poland", "Warsaw", "37.8", "312 696");

console.log(ukraine.showCountry());
showProperties(ukraine);

console.log(poland.showCountry());
showProperties(poland);
