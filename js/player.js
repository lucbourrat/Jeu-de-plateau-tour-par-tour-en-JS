export default class Player {
	constructor(name, hp) {
		this.name = name;
		this.hp = hp;
	}

	sayHi() {
		console.log("Bonjour ! Je suis " + this.name + ", j'ai " + this.hp + " points de vie");
	}
}