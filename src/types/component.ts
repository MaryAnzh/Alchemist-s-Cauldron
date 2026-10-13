export type AttrValue = string | number | null;
export type AttrMap = Record<string, AttrValue>;
export type ParentNodeType = { parentNode: HTMLElement | null };

export type ComponentProps = ParentNodeType & {
  tagName?: keyof HTMLElementTagNameMap;
  className?: string | string[];
  content?: string | HTMLElement | (string | HTMLElement)[];
  attrs?: AttrMap;
};
