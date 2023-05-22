import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    children: "Primary",
  },
};

export const Secondary = {
  args: {
    children: "Secondary",
    primary: false,
  },
};

export const Large = {
  args: {
    size: "large",
    primary: true,
    children: "Large Button",
  },
};

export const Small = {
  args: {
    size: "small",
    children: "small",
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const BackgroundColor = {
  args: {
    backgroundColor: "red",
    children: "Background Color",
  },
};
