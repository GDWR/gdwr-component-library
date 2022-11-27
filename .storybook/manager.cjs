import { addons } from "@storybook/addons";
import Theme from "./theme";

addons.setConfig({
  sidebar: {
    showRoots: false,
  },
  theme: Theme,
});
