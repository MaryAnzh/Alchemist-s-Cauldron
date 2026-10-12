export class App {
  root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }
  init = () => {
    const title = document.createElement('h2');
    title.textContent = `Hello 🧪 Alchemist's Cauldron`;
    this.root.append(title);
  };
}
