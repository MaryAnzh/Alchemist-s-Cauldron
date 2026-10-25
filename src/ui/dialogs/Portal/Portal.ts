import { Component } from '@ui';

type PortalProps = {
  className?: string;
};

export class Portal extends Component {
  private pendingClose: ((event: TransitionEvent) => void) | null = null;
  private activeComponent: Component | null = null;
  private isLocked = false;
  onClose: (() => void) | null = null;

  constructor({ className }: PortalProps = {}) {
    super({
      parentNode: null,
      tagName: 'div',
      className: ['app_portal', className ?? ''],
      attrs: { id: 'appPortal' },
    });

    this.node.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('keydown', this.handleEsc);
  }

  mount(content: HTMLElement, component?: Component) {
    this.activeComponent = component ?? null;

    this.cancelPendingClose();

    document.body.style.overflow = 'hidden';
    this.node.innerHTML = '';

    document.body.appendChild(this.node);
    this.node.appendChild(content);

    this.node.classList.add('app_portal_open');
  }

  private closePortal = () => {
    if (this.isLocked) return;
    this.onClose?.();
  };

  private handleOutsideClick = (event: Event) => {
    if (this.isLocked) return;
    if ((event.target as HTMLElement).id === 'appPortal') {
      this.closePortal();
    }
  };

  private handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closePortal();
    }
  };

  unmount() {
    this.cancelPendingClose();
    this.node.classList.remove('app_portal_open', 'app_portal_bg-blur');

    // Nothing to fade out (already transparent), so transitionend would never fire
    if (getComputedStyle(this.node).opacity === '0') {
      this.cleanup();
      return;
    }

    this.pendingClose = (event: TransitionEvent) => {
      if (event.target !== this.node || event.propertyName !== 'opacity') return;
      this.cancelPendingClose();
      this.cleanup();
    };
    this.node.addEventListener('transitionend', this.pendingClose);
  }

  private cancelPendingClose() {
    if (!this.pendingClose) return;
    this.node.removeEventListener('transitionend', this.pendingClose);
    this.pendingClose = null;
  }

  private cleanup() {
    this.activeComponent?.destroy();
    this.activeComponent = null;

    this.node.innerHTML = '';
    if (this.node.parentNode) {
      this.node.parentNode.removeChild(this.node);
      document.body.style.overflow = 'auto';
    }
  }

  public lock() {
    this.isLocked = true;
  }

  public unlock() {
    this.isLocked = false;
  }

  setBlur() {
    this.node.classList.add('app_portal_bg-blur');
  }
}
