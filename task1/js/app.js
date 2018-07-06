'use strict';

class Fight {

   constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
    
    setDamage(damage){
        console.log(this.health = this.health - damage);
    }
    
    hit(enemy, point){
        let damage = point * this.power;
        //console.log(this.setDamage(damage));
    }
    
    knockout(){
        
    }


}

class ImprovedFighter extends Fighter {

}

let fight = new Fight('Jon', 100, 70);

console.log(fight.name);
fight.setDamage(21);
fight.hit(2,5);


