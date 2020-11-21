import Map from './map.js';
import Player from './player.js';
import Weapon from './weapon.js';

let Ogre = new Player("Ogre", 100);
let Elfe = new Player("Elfe", 100);
Ogre.sayHi();
Elfe.sayHi();

let gameMap = new Map();
gameMap.sayHi();