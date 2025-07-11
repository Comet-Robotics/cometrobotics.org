import { component, defineMarkdocConfig } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
  tags: {
    ImageGrid: { render: component('./src/components/image-grid.astro') },
  },
})
