import Object from "../Object.js";

export default class Ground extends Object {
  constructor(spriteSheet, posX, posY, width, height) {
    super(spriteSheet, "ground", posX, posY, width, height);
  }

  update() {}
}
