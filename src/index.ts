export class Rangoli {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color:green");
  }

  static danger(msg: string) {
    console.log(`%c ${msg}`, "color:red");
  }

  static info(msg: string) {
    console.log(`%c ${msg}`, "color:black; background: yellow");
  }

  static warning(msg: string) {
    console.log(`%c ${msg}`, "color:red; background: yellow");
  }

  static primary(msg: string) {
    console.log(`%c ${msg}`, "color:blue");
  }
}
