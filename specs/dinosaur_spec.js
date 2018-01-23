const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    trex = new Dinosaur("Carnivore", 2);
  });

  it('should have a type', function(){
    assert.strictEqual(trex.type, "Carnivore");
  });

  it('should have an offspringPerYear', function(){
    assert.strictEqual(trex.offspring, 2);
  });




});
