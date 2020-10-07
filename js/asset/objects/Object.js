import { Vector, Size } from "../../math/Characterizes.js";
import { createBuffer } from "../../utilities/createBuffer.js";

export default class Object {
  constructor(spriteSheet, name, posX, posY, width, height) {
    this.name = name;
    this.pos = new Vector(posX, posY);
    this.size = new Size(width, height);
    this.buffer = this.createObjectBuffer(spriteSheet, width, height);
  }

  createObjectBuffer(spriteSheet, width, height) {
    const [buffer, context] = createBuffer(width * 16, height * 16);

    for (let x = 0; x < this.size.width; x++) {
      for (let y = 0; y < this.size.height; y++) {
        spriteSheet.drawTile(this.name, context, x, y);
      }
    }

    return buffer;
  }

  draw(ctx) {
    ctx.drawImage(this.buffer, this.pos.x * 16, this.pos.y * 16);
  }
}
