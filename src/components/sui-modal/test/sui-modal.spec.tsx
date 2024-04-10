import { newSpecPage } from '@stencil/core/testing';
import { SuiModal } from '../sui-modal';

describe('sui-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuiModal],
      html: `<sui-modal></sui-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <sui-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sui-modal>
    `);
  });
});
