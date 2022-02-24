import React from 'react';

import { StarRating } from '/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'StarRating',
  component: StarRating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    maximumStarCount: { control: 'number', defaultValue: 5 },
    starRating: { control: 'number', defaultValue: 3 },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StarRating {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'StarRating',
};