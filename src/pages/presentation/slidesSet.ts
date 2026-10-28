import * as C from '@constants';

import type { SlideSetType } from './types';

export const SLIDES_SET: SlideSetType[] = [
  {
    id: 'slide-1',
    slide: {
      template: 'title',
      title: { text: C.SLIDE_1_TITLE },
      subTitle: { text: C.SLIDE_1_SUBTITLE },
    },
    preview: { title: C.SLIDE_1_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-2',
    slide: {
      template: 'content',
      title: { text: C.SLIDE_2_TITLE },
      subTitle: { text: C.SLIDE_2_SUBTITLE },
      list: { items: [...C.SLIDE_2_ITEMS] },
    },
    preview: { title: C.SLIDE_2_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-3',
    slide: {
      template: 'content',
      title: { text: C.SLIDE_3_TITLE },
      list: { items: [...C.SLIDE_3_ITEMS] },
    },
    preview: { title: C.SLIDE_3_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-4',
    slide: {
      template: 'content',
      title: { text: C.SLIDE_4_TITLE },
      subTitle: { text: C.SLIDE_4_SUBTITLE },
      list: { items: [...C.SLIDE_4_ITEMS] },
    },
    preview: { title: C.SLIDE_4_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-5',
    slide: {
      template: 'content',
      title: { text: C.SLIDE_5_TITLE },
      subTitle: { text: C.SLIDE_5_SUBTITLE },
      list: { items: [...C.SLIDE_5_ITEMS] },
    },
    preview: { title: C.SLIDE_5_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-6',
    slide: {
      template: 'content',
      title: { text: C.SLIDE_6_TITLE },
      list: { items: [...C.SLIDE_6_ITEMS] },
    },
    preview: { title: C.SLIDE_6_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-7',
    slide: {
      template: 'content',
      title: { text: C.SLIDE_7_TITLE },
      list: { items: [...C.SLIDE_7_ITEMS] },
    },
    preview: { title: C.SLIDE_7_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-8',
    slide: {
      template: 'content',
      title: { text: C.SLIDE_8_TITLE },
      subTitle: { text: C.SLIDE_8_SUBTITLE },
      list: { items: [...C.SLIDE_8_ITEMS] },
    },
    preview: { title: C.SLIDE_8_PREVIEW_TITLE, icon: 'symbol' },
  },
] as const;
