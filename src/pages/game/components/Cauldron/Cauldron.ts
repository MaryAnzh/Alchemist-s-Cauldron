import { GAME_EVENTS, PLAYING, REACTION_IDS, TIMER, TITLE } from '@constants';
import { store } from '@store';
import type { IconPickerType, ParentNodeType } from '@types';
import { Button, Component, Icon } from '@ui';

type CauldronProps = ParentNodeType;

const CLASS = 'app-cauldron_cauldron-wrap';

// Positions (in %) of the bubbles that always boil on the potion surface
const BOILING_BUBBLES = [
  { x: 18, y: 40 },
  { x: 38, y: 22 },
  { x: 58, y: 48 },
  { x: 72, y: 26 },
  { x: 28, y: 62 },
  { x: 82, y: 54 },
];

const BURST = { bubble: 9, smoke: 5 };
const BURST_DARK = { bubble: 5, smoke: 8 };

export class Cauldron extends Component {
  potion!: Component;
  pourBtn!: Button;
  pot!: Component;
  floaters!: Component;
  fx!: Component;
  private floatersCount = 0;

  constructor({ parentNode }: CauldronProps) {
    super({ parentNode, tagName: 'div', className: 'app-cauldron' });

    store.subscribe(GAME_EVENTS.CAULDRON_STATE_CHANGED, () => {
      this.updatePotion();
      this.updateFloaters();
    });

    store.subscribe(GAME_EVENTS.ROUND_OVER, ({ variant }) => this.playFeedback(variant));
    store.subscribe(GAME_EVENTS.REACTION_FIRED, ({ id, name }) => this.playReaction(id, name));

    this.render();
    this.updatePotion();
    this.updateFloaters();
  }

  render() {
    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-cauldron_title',
      content: TITLE,
    });
    const wrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: CLASS,
    });

    // Layers, bottom to top: back wall -> potion -> front wall
    this.pot = new Component({
      parentNode: wrap.node,
      tagName: 'div',
      className: `${CLASS}_pot`,
    });

    const canDrop = () => {
      const s = store.getState();
      return s.status === PLAYING && s.cauldronIngredients.length < s.maxIngredients;
    };

    this.pot.node.addEventListener('dragover', (e) => {
      if (!canDrop()) return;
      e.preventDefault();
      this.pot.node.classList.add(`${CLASS}_pot--over`);
    });
    this.pot.node.addEventListener('dragleave', (e) => {
      if (!this.pot.node.contains(e.relatedTarget as Node | null)) {
        this.pot.node.classList.remove(`${CLASS}_pot--over`);
      }
    });
    this.pot.node.addEventListener('drop', (e) => {
      e.preventDefault();
      this.pot.node.classList.remove(`${CLASS}_pot--over`);
      const id = e.dataTransfer?.getData('text/plain');
      if (id && canDrop()) store.addIngredientToCauldron(id);
    });

    new Icon({ parentNode: this.pot.node, icon: 'cauldron_back', className: `${CLASS}_back` });
    this.potion = new Component({
      parentNode: this.pot.node,
      tagName: 'div',
      className: `${CLASS}_potion`,
    });

    this.floaters = new Component({
      parentNode: this.pot.node,
      tagName: 'div',
      className: `${CLASS}_floaters`,
    });

    const boiling = new Component({
      parentNode: this.pot.node,
      tagName: 'div',
      className: `${CLASS}_boiling`,
    });
    BOILING_BUBBLES.forEach(({ x, y }, i) => {
      const bubble = new Component({
        parentNode: boiling.node,
        tagName: 'span',
        className: `${CLASS}_boil`,
      });
      bubble.node.style.setProperty('--x', `${x}%`);
      bubble.node.style.setProperty('--y', `${y}%`);
      bubble.node.style.setProperty('--i', i.toString());
    });

    new Icon({ parentNode: this.pot.node, icon: 'cauldron_front', className: `${CLASS}_front` });

    // Effects layer: reaction bubbles, smoke and floating texts live above the front wall
    this.fx = new Component({
      parentNode: this.pot.node,
      tagName: 'div',
      className: `${CLASS}_fx`,
    });

    new Icon({
      parentNode: wrap.node,
      icon: 'symbol',
      className: `${CLASS}_icon`,
    });

    this.pourBtn = new Button({
      parentNode: this.node,
      className: `app-cauldron_pour`,
      color: 'magic',
      text: 'Pour Out (−10s)',
      onClick: () => store.pourOut(),
    });
    this.pourBtn.setDisabled(true);
  }

  private updatePotion() {
    const hasIngredients = store.getState().cauldronIngredients.length > 0;
    this.potion.node.classList.toggle(`${CLASS}_potion--filled`, hasIngredients);
    this.pot.node.classList.toggle(`${CLASS}_pot--filled`, hasIngredients);
    this.pourBtn.setDisabled(!hasIngredients);
  }

  // Random values go to CSS variables; timing and movement stay in CSS keyframes
  private spawnFx(kind: 'bubble' | 'smoke', dark: boolean) {
    const item = new Component({
      parentNode: this.fx.node,
      tagName: 'span',
      className: [`${CLASS}_${kind}`, dark ? `${CLASS}_${kind}--dark` : ''],
    });
    const { style } = item.node;
    style.setProperty('--x', `${10 + Math.random() * 80}%`);
    style.setProperty('--dx', `${(Math.random() - 0.5) * 90}%`);
    style.setProperty('--delay', `${(Math.random() * 0.5).toFixed(2)}s`);
    style.setProperty('--scale', (0.6 + Math.random() * 0.8).toFixed(2));
    item.node.addEventListener('animationend', () => item.node.remove(), { once: true });
  }

  private floatText(text: string, variant: 'bonus' | 'reaction') {
    const stacked = this.fx.node.querySelectorAll(`.${CLASS}_float-text`).length;
    const item = new Component({
      parentNode: this.fx.node,
      tagName: 'span',
      className: [`${CLASS}_float-text`, `${CLASS}_float-text--${variant}`],
      content: text,
    });
    item.node.style.setProperty('--n', stacked.toString());
    item.node.addEventListener('animationend', () => item.node.remove(), { once: true });
  }

  private playReaction(id: string, name: string) {
    const dark = id === REACTION_IDS.VOLATILE_MIX;
    const count = dark ? BURST_DARK : BURST;

    Array.from({ length: count.smoke }).forEach(() => this.spawnFx('smoke', dark));
    Array.from({ length: count.bubble }).forEach(() => this.spawnFx('bubble', dark));
    this.floatText(name, 'reaction');
  }

  private playFeedback(variant: 'success' | 'fail') {
    if (variant === 'success') {
      this.floatText(`+${TIMER[store.getState().difficulty].bonus}s`, 'bonus');
    }

    const appRoot = document.querySelector('#app') as HTMLElement;
    const potClass = `${CLASS}_pot--${variant}`;

    this.pot.node.classList.remove(`${CLASS}_pot--success`, `${CLASS}_pot--fail`);
    void this.pot.node.offsetWidth;
    this.pot.node.classList.add(potClass);

    if (variant === 'fail') {
      appRoot?.classList.remove('is-shaking');
      void appRoot?.offsetWidth;
      appRoot?.classList.add('is-shaking');
    }

    this.pot.node.addEventListener(
      'animationend',
      (e) => {
        if (e.target === this.pot.node) this.pot.node.classList.remove(potClass);
      },
      { once: true },
    );
    appRoot?.addEventListener(
      'animationend',
      (e) => {
        if (e.target === appRoot) appRoot.classList.remove('is-shaking');
      },
      { once: true },
    );
  }

  private updateFloaters() {
    const { cauldronIngredients } = store.getState();

    if (cauldronIngredients.length < this.floatersCount) {
      this.floaters.node.innerHTML = '';
      this.floatersCount = 0;
    }

    cauldronIngredients.slice(this.floatersCount).forEach(({ icon }, i) => {
      const index = this.floatersCount + i;
      const item = new Icon({
        parentNode: this.floaters.node,
        icon: icon as IconPickerType,
        className: `${CLASS}_floater`,
      });
      item.node.style.setProperty('--i', index.toString());
    });

    this.floatersCount = cauldronIngredients.length;
  }
}
