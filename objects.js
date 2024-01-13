
function Character(name, role, dialog){
        this.name = name;
        this.role = role;
        this.dialog = dialog;
        this.time = 7;
        this.paid = 20000;
}

function Director(name, role, dialog){
    Character.apply(this, [name, role, dialog]);
}

Director.prototype = Object.create(Character.prototype);

Character.prototype.action= function(){
    console.log(this.dialog);
}

Character.prototype.cut= function(){
    console.log(`${this.name} you are a ${this.role}. Now please do it again properly.`);
    return this;
}

const actor1 = new Character(
    "Monica",
    "CatWomen",
    "Look, it's either pink bunny or no bunny at all."
);

const actor2 = new Character(
    "Chandler",
    "Pink Bunny",
    "No bunny at all. Always no bunny at all."
);

const actor3 = new Character(
    "Gunther",
    "Charlie Brown",
    "Here are your candies Rachel"
);

let actors = [actor1, actor2, actor3];

Director.prototype.deleteActor = function(u){
    actors = actors.filter(actor=>u.name != actor.name)
}

const ross = new Director("Ross", "Spudnik", "I'm a Spud and Sputnik. So... Spud-nik. Spudnik");



