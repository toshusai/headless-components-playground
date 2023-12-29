import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    const elementHandler = await page.$("#storybook-root");
    const innerHTML = await elementHandler?.innerHTML();
    await page.screenshot({
      path: `__screenshots__/${context.title}.png`,
    });
    expect(innerHTML).toMatchSnapshot();
  },
};

export default config;
