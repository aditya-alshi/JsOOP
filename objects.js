
function Character(name, role, dialog){
        this.name = name;
        this.role = role;
        this.dialog = dialog;
        this.time = 7;
        this.paid = 20000;

}
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

const actors = [actor1, actor2, actor3];

actor1.action();
actor1.cut();
console.log(actor1.time)
