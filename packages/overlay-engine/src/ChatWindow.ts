export class ChatWindow {

  private expanded = false;

  open() {
    this.expanded = true;
  }

  close() {
    this.expanded = false;
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  isOpen() {
    return this.expanded;
  }

}
