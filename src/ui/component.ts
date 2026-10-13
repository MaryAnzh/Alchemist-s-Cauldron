import type { AttrMap, ComponentProps } from '@types';

export class Component {
  public node: HTMLElement;

  constructor({ parentNode, tagName = 'div', className, content, attrs }: ComponentProps) {
    this.node = document.createElement(tagName);

    // Classes
    if (Array.isArray(className)) {
      this.node.classList.add(...className);
    } else if (typeof className === 'string') {
      this.node.className = className;
    }

    // Content
    this.setContent(content);

    // Attributes
    if (attrs) this.setAttributes(attrs);

    // Append
    if (parentNode) parentNode.append(this.node);
  }

  setAttributes(attrs: AttrMap) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (value === null) {
        this.node.removeAttribute(key);
      } else {
        this.node.setAttribute(key, String(value));
      }
    });
  }

  setContent(content?: ComponentProps['content']) {
    this.node.innerHTML = '';

    if (!content) return;

    if (typeof content === 'string') {
      this.node.textContent = content;
      return;
    }

    if (content instanceof HTMLElement) {
      this.node.append(content);
      return;
    }

    content.forEach((item) => {
      if (typeof item === 'string') {
        this.node.append(document.createTextNode(item));
      } else {
        this.node.append(item);
      }
    });
  }

  append(child: HTMLElement) {
    this.node.append(child);
  }

  destroy() {
    this.node.remove();
  }
}
