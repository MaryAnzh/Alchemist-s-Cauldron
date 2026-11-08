import * as C from '@constants';

import type { SlideSetType } from './types';
import accountShot from '../../assets/account.webp';
import statsShort from '../../assets/stats.webp';
import {
  SLIDE_7_TEST_DIFFICULTY,
  SLIDE_7_TEST_REJECT,
  SLIDE_7_TEST_TREE,
  SLIDE_7_TEST_VALID,
} from './codeSnippets';

export const SLIDES_SET: SlideSetType[] = [
  {
    id: 'slide-1',
    slide: {
      template: 'default',
      title: { text: C.SLIDE_1_TITLE },
      subTitle: { text: C.SLIDE_1_SUBTITLE },
      list: { items: [...C.SLIDE_1_ITEMS] },
      links: [
        {
          src: statsShort,
          alt: 'Statistics page',
          caption: 'Statistics',
          href: `#${C.ROUTES.statistics}`,
        },
        {
          src: accountShot,
          alt: 'Account page',
          caption: 'Account',
          href: `#${C.ROUTES.account}`,
        },
      ],
      slideJustify: 'center',
    },
    preview: { title: C.SLIDE_1_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-2',
    slide: {
      template: 'columns',
      title: { text: C.SLIDE_2_TITLE },
      subTitle: { text: C.SLIDE_2_SUBTITLE },
      list: { items: [...C.SLIDE_2_ITEMS] },
    },
    preview: { title: C.SLIDE_2_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-3',
    slide: {
      template: 'default',
      title: { text: C.SLIDE_3_TITLE },
      list: { items: [...C.SLIDE_3_ITEMS] },
    },
    preview: { title: C.SLIDE_3_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-4',
    slide: {
      template: 'default',
      title: { text: C.SLIDE_4_TITLE },
      subTitle: { text: C.SLIDE_4_SUBTITLE },
      list: { items: [...C.SLIDE_4_ITEMS] },
      slideJustify: 'center',
    },
    preview: { title: C.SLIDE_4_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-5',
    slide: {
      template: 'default',
      title: { text: C.SLIDE_5_TITLE },
      subTitle: { text: C.SLIDE_5_SUBTITLE },
      list: { items: [...C.SLIDE_5_ITEMS] },
      links: [
        {
          src: accountShot,
          alt: 'Account page',
          caption: 'Account',
          href: `#${C.ROUTES.account}`,
        },
      ],
    },
    preview: { title: C.SLIDE_5_PREVIEW_TITLE, icon: 'arrow_down_mini' },
    subSlides: [
      {
        demo: 'avatar-file',
        title: C.SLIDE_5_SUB_1_TITLE,
        description: C.SLIDE_5_SUB_1_DESCRIPTION,
        descriptionPosition: 'top',
      },
      {
        demo: 'avatar-url',
        title: C.SLIDE_5_SUB_2_TITLE,
        description: C.SLIDE_5_SUB_2_DESCRIPTION,
        descriptionPosition: 'top',
      },
      {
        demo: 'name',
        title: C.SLIDE_5_SUB_3_TITLE,
        description: C.SLIDE_5_SUB_3_DESCRIPTION,
        descriptionPosition: 'top',
      },
    ],
  },
  {
    id: 'slide-statistics',
    slide: {
      template: 'default',
      title: { text: C.SLIDE_9_TITLE },
      subTitle: { text: C.SLIDE_9_SUBTITLE },
      list: { items: [...C.SLIDE_9_ITEMS] },
    },
    preview: { title: C.SLIDE_9_PREVIEW_TITLE, icon: 'arrow_down_mini' },
    subSlides: [
      {
        section: 'summary',
        title: C.SLIDE_9_SUB_1_TITLE,
        description: C.SLIDE_9_SUB_1_DESCRIPTION,
        descriptionPosition: 'top',
      },
      {
        section: 'chart',
        title: C.SLIDE_9_SUB_2_TITLE,
        description: C.SLIDE_9_SUB_2_DESCRIPTION,
        descriptionPosition: 'bottom',
      },
      {
        section: 'difficulty',
        title: C.SLIDE_9_SUB_3_TITLE,
        description: C.SLIDE_9_SUB_3_DESCRIPTION,
        descriptionPosition: 'left',
      },
      {
        section: 'recent',
        title: C.SLIDE_9_SUB_4_TITLE,
        description: C.SLIDE_9_SUB_4_DESCRIPTION,
        descriptionPosition: 'top',
      },
      {
        section: 'reasons',
        title: C.SLIDE_9_SUB_5_TITLE,
        description: C.SLIDE_9_SUB_5_DESCRIPTION,
        descriptionPosition: 'right',
      },
      {
        section: 'brews',
        title: C.SLIDE_9_SUB_6_TITLE,
        description: C.SLIDE_9_SUB_6_DESCRIPTION,
        descriptionPosition: 'left',
      },
      {
        section: 'candles',
        title: C.SLIDE_9_SUB_7_TITLE,
        description: C.SLIDE_9_SUB_7_DESCRIPTION,
        descriptionPosition: 'bottom',
      },
      {
        section: 'histogram',
        title: C.SLIDE_9_SUB_8_TITLE,
        description: C.SLIDE_9_SUB_8_DESCRIPTION,
        descriptionPosition: 'right',
      },
      {
        section: 'heatmap',
        title: C.SLIDE_9_SUB_9_TITLE,
        description: C.SLIDE_9_SUB_9_DESCRIPTION,
        descriptionPosition: 'bottom',
      },
    ],
  },
  {
    id: 'slide-6',
    slide: {
      template: 'default',
      title: { text: C.SLIDE_6_TITLE },
      list: { items: [...C.SLIDE_6_ITEMS] },
    },
    preview: { title: C.SLIDE_6_PREVIEW_TITLE, icon: 'symbol' },
  },
  {
    id: 'slide-7',
    slide: {
      template: 'default',
      title: { text: C.SLIDE_7_TITLE },
      list: { items: [...C.SLIDE_7_ITEMS] },
    },
    preview: { title: C.SLIDE_7_PREVIEW_TITLE, icon: 'arrow_down_mini' },
    subSlides: [
      {
        code: SLIDE_7_TEST_TREE,
        title: C.SLIDE_7_SUB_1_TITLE,
        description: C.SLIDE_7_SUB_1_DESCRIPTION,
        descriptionPosition: 'top',
      },
      {
        code: SLIDE_7_TEST_VALID,
        title: C.SLIDE_7_SUB_2_TITLE,
        description: C.SLIDE_7_SUB_2_DESCRIPTION,
        descriptionPosition: 'top',
      },
      {
        code: SLIDE_7_TEST_REJECT,
        title: C.SLIDE_7_SUB_3_TITLE,
        description: C.SLIDE_7_SUB_3_DESCRIPTION,
        descriptionPosition: 'top',
      },
      {
        code: SLIDE_7_TEST_DIFFICULTY,
        title: C.SLIDE_7_SUB_4_TITLE,
        description: C.SLIDE_7_SUB_4_DESCRIPTION,
        descriptionPosition: 'top',
      },
    ],
  },
  {
    id: 'slide-8',
    slide: {
      template: 'default',
      title: { text: C.SLIDE_8_TITLE },
      subTitle: { text: C.SLIDE_8_SUBTITLE },
      list: { items: [...C.SLIDE_8_ITEMS] },
    },
    preview: { title: C.SLIDE_8_PREVIEW_TITLE, icon: 'symbol' },
  },
] as const;
