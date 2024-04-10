import { newE2EPage } from '@stencil/core/testing';

describe('sui-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-modal></sui-modal>');

    const element = await page.find('sui-modal');
    expect(element).toHaveClass('hydrated');
  });
});
