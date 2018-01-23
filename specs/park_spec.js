const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Park', function(){

  let park, trex;


beforeEach(function(){
  park = new Park();
  tyrannosaurus = new Dinosaur('Carnivore', 3);
  brontosaurus = new Dinosaur('Herbivore', 2);
  dilophosaurus = new Dinosaur('Herbivore', 2)
});


it('should start with enclosure empty', function(){
  assert.strictEqual(park.enclosure.length, 0);
});

it('can add dinosaurs to enclosure', function(){
  park.add(tyrannosaurus);
  assert.strictEqual(park.enclosure.length, 1);
});

it('can remove dinosaurs of a particular type', function(){
  park.add(tyrannosaurus);
  park.add(tyrannosaurus);
  park.add(brontosaurus);
  park.removeType('Carnivore')
  assert.strictEqual(park.enclosure.length, 1);
  assert.strictEqual(park.enclosure[0].type, 'Herbivore');
});


it('can return dinosaurs with offspring rate > 2', function(){
  park.add(tyrannosaurus);
  park.add(tyrannosaurus);
  park.add(brontosaurus);
  park.add(brontosaurus);
  assert.strictEqual(park.fertile(2).length, 2);
  assert.strictEqual(park.enclosure[0].offspring, 3);
});

it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
  park.add(tyrannosaurus);
  assert.strictEqual(park.calculateDinosaurs(1), 4);
});

it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
  park.add(tyrannosaurus);
  assert.strictEqual(park.calculateDinosaurs(2), 16);
});

it('should be able to calculate number of dinosaur after year two starting with 2 dinosaurs', function(){
  park.add(tyrannosaurus);
  park.add(dilophosaurus);
  assert.strictEqual(park.calculateDinosaurs(2), 25);
});




});
