import { OrbWindow } from "./OrbWindow";
import { ChatWindow } from "./ChatWindow";

export class OverlayEngine {

  orb = new OrbWindow();

  chat = new ChatWindow();

  expand() {
    this.chat.open();
  }

  collapse() {
    this.chat.close();
  }

  toggle() {
    this.chat.toggle();
  }

}
