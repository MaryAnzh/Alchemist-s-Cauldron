import type { IconPickerType, ParentNodeType, SlideVariantType } from '@types';

export type SlidePositionType = {
  positionX?: 'left' | 'right' | 'center';
  positionY?: 'top' | 'bottom' | 'center';
};

export type SlideElementGridType = {
  columns?: number;
  rows?: number;
};

export type SlideTitleType = SlidePositionType &
  SlideElementGridType & {
    test: string;
    icon?: IconPickerType;
  };

export type SubTitleType = SlideElementGridType & {
  text: string;
};

export type SlideProps = ParentNodeType & {
  variant: SlideVariantType;
  title?: SlideTitleType;
  subTitle?: SubTitleType;
  list?: {
    positionX: 'left' | 'right' | 'center';
    positionY?: 'top' | 'bottom' | 'center';
    listColumns?: number;
    title?: string;
    items: string[];
    image?: string;
    iconsStyle?: IconPickerType;
    columns?: number;
    rows?: number;
  };
  image?: {
    src: string;
    alt?: string;
    positionX?: 'left' | 'right' | 'center';
    positionY?: 'top' | 'bottom' | 'center';
    columns?: number;
    rows?: number;
  };
  columnsTemplate?: number;
  rowsTemplate?: number;
};
