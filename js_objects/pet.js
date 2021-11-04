let pet = {height: 0.76, weight: 80, species: 'goat'};

let coatLength = pet.height;
pet.weight += 5;
pet["colour"] = "red"; // no declaration required

pet.draw = function(){ alert("I am a pet");}
pet.draw();

pet.draw = function(){
    alert("I am a pet this big: " + this.height);
}
pet.draw();

for (let x of [1,2,3]){console.log(x)};

const me = {name: 'Steven', game: 'Lecturer'};
for(let k in me){
    console.log('I have a ' + k);
    console.log('It is ' + me[k]);
}

class Pet{
   constructor(h, w, s){
      this.height = h;
      this.weight = w;
      this.species = s;
   }
   draw(){
       alert("I am a pet this big: " + this.height);
   }
}
let p = new Pet(0.76, 80, "goat");
p.draw();
