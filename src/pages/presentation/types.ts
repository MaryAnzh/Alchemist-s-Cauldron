import type { IconPickerType, ParentNodeType, SlideTemplateType } from '@types';

export type SlidePositionType = {
  positionX?: 'left' | 'right' | 'center';
  positionY?: 'top' | 'bottom' | 'center';
};

export type SlideElementGridType = {
  columns?: number;
  rows?: number;
};

export type SlideTitleType = {
  text: string;
  icon?: IconPickerType;
};

export type SubTitleType = {
  text: string;
};

export type SlideJustifyType = 'left' | 'right' | 'center';

export type SlideLinkType = {
  src: string;
  alt: string;
  caption?: string;
  href: string;
};

export type SlideCodeType = {
  text: string;
};

export type SlideProps = ParentNodeType & {
  template: SlideTemplateType;
  slideJustify?: SlideJustifyType;
  title?: SlideTitleType;
  subTitle?: SubTitleType;
  list?: {
    listColumns?: number;
    title?: string;
    items: string[];
    image?: string;
    iconsStyle?: IconPickerType;
  };
  image?: {
    src: string;
    alt?: string;
  };
  links?: SlideLinkType[];
  code?: SlideCodeType;
};

export type SlidePreviewType = {
  title: string;
  icon: IconPickerType;
};

export type SlideSetType = {
  id: string;
  slide: Omit<SlideProps, 'parentNode'>;
  preview: SlidePreviewType;
};
