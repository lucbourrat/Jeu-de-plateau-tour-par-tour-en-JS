export default class Map {
	constructor(size = 10, inaccessibleBoxNb = 12) {
		this.length = size;
		this.height = size;
		this.inaccessibleBoxNb = inaccessibleBoxNb;
		this.grid = this.createAndInit();
	}

	createAndInit() {
		let grid = new Array(this.length)
		for (let i = 0; i < this.length; i++){
     		grid[i] = new Array(this.height)
     		for (let j = 0; j < this.height; j++){
     			grid[i][j] = 0;
			}
		}

		return grid;
	}

	sayHi() {
		for (let i = 0; i < this.length; i++){
     		for (let j = 0; j < this.height; j++){
     			console.log("grid[" + i + "][" + j + "] = " + this.grid[i][j]);
			}
		}
	}
}