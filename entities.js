

var Entities = {
    Player: function(data, sdfsd) {
        Entities.Base.apply(this, arguments);
        this.age = data.age;
        this.characters = [];
    },
    Character: function(data) {
        Entities.Base.apply(this, arguments);
        this.health=data.health;
        this.skills = data.skills;
        this.money = data.money;
        this.lvl = data.lvl;
    },
    Base: function(data) {
        this.id =data.id;
        this.name = data.name;
        // var date = new Date();
        // this.createdAt = date;
        // this.updatedAt = date;
    },
};

Entities.Player.prototype = Object.create(Entities.Base.prototype)
Entities.Player.constructor = Entities.Player;

Entities.Character.prototype = Object.create(Entities.Base.prototype)
Entities.Character.constructor = Entities.Character;

Entities.Player.prototype.attachCharacter = function(character) {
    if (!(character instanceof Entities.Character)) {
        throw "Can't set character";
    }
    this.characters.push(character);
}
Entities.Player.prototype.getRandomCharacter = function() {
    return this.characters[getRandom(0, this.characters.length - 1)];
}

Entities.Player.prototype.getCharacter = function(id) {
    var chars = this.characters.filter(function(char) {
        return char.id == id;
    });
    if (!chars.length) {
        throw "Can't find character";
    }
    return chars[0];
}
Entities.Player.prototype.getAllCharacter = function(all) {
    var chars = this.characters
    for (var i = 0; i<=chars.length ; i++) {
        
       console.log(chars[i]);
   }
}

Entities.Character.prototype.attack = function(character) {
    if (!(character instanceof Entities.Character)) {
        throw "Can't attack character";
    }
    var attackMethod = this.skills[getRandom(0, this.skills.length - 1)];
    boy.innerHTML+='Character ' + this.name + ' used skill: ' + attackMethod.name + ', with damage: ' + attackMethod.dmg + ' to attack:' + character.name +"<br>";
    character.defend(attackMethod);
}

Entities.Player.prototype.kill = function(id) {
    var chars = this.characters;
    for (var key in chars) {
        if (chars[key].id != id) continue;
        this.characters.splice(key, 1);
    }
    return this;
}

Entities.Character.prototype.defend = function(attack) {
    var damaged = Math.round(attack.dmg * Math.random());
    var blocked = attack.dmg - damaged;
    this.health -= damaged;
    boy.innerHTML+='Character ' + this.name + ' block: ' + blocked + ' dmg, and have' + this.health + 'health'+"<br>";
    if (this.health < 0) {
     boy.innerHTML+= USER.name+'Character: ' + this.name + ' dead' +"<br>";
     throw 'Character: ' + this.name + ' dead';
 }
 
}



