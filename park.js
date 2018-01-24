const Park = function(){
  this.enclosure = [];
};

Park.prototype.add = function(dinosaur){
  this.enclosure.push(dinosaur);
};

Park.prototype.removeType = function(type){
this.enclosure = this.enclosure.filter(dinosaur => dinosaur.type !== type);
};

Park.prototype.fertile = function(rate){
  var dinos = this.enclosure.filter(dinosaur => dinosaur.offspring > rate);
  return dinos;
};

Park.prototype.calculateDinosaurs = function(years){
  var dinoCount = 0;
  for (dinosaur of this.enclosure) {
    dinoCount += (1 + dinosaur.offspring) ** years;
  }
  return dinoCount;
}


module.exports = Park;
