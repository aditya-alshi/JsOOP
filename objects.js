class Character{
    
    constructor(name, role, dialog){
        this.name = name;
        this.role = role;
        this.dialog = dialog;
    }

    time = 7;
    paid = 20000;

    action(){
        console.log(this.dialog);
        return this;
    }

    cut(){
        console.log(`${this.name} you are a ${this.role}. Now please do it again properly.`);
        return this;
    }
}


class Director extends Character{
    deleteActor(actor){
       return actors.filter(a => a.name != actor.name)
    }
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

const actors = [actor1, actor2, actor3];

const director = new Director(
    "Ross",
    "Spudnik",
    "I'm a spuda and sputnik.. so.. Spud-nik. Spudnik"
)