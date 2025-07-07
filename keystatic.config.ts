// TODO: add banner in dev linking to keystatic route

import { collection, config, fields } from '@keystatic/core'
import { wrapper } from '@keystatic/core/content-components'


function ImageWithAlt(imageConfig: Parameters<typeof fields.image>[0]) {
  return fields.object({
    src: fields.image(imageConfig),
    alt: fields.text({
      label: 'Alternative Text',
      description:
'A descriptive caption for the image. Used to improve accessibility of the site for visually impaired users who can\'t see the image.',
    }),
  })
}

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'projectTitle',
      columns: ['projectTitle', 'division', 'shortDescription'],
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        projectTitle: fields.slug({ name: { label: 'Title' }, slug: {
          label: 'SEO-friendly slug',
          description: 'This will define the file/folder name for this entry',
        } }),
        shortDescription: fields.text({ label: 'Subtitle' }),
        deprecated: fields.checkbox({
          label: 'Deprecated',
          defaultValue: false,
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        division: fields.select({
          label: 'Division',
          options: [
            { label: 'Competitive Robotics', value: 'competitive' },
            { label: 'Combat Robotics', value: 'combat' },
          ],
          defaultValue: 'competitive',
        }),
        mainImage: ImageWithAlt({
          label: 'Main Image',
          directory: 'public/projects',
          publicPath: '/projects',
        }),
        images: fields.array(
          ImageWithAlt({
            label: 'Image',
            directory: 'public/projects',
            publicPath: '/projects',
          }),
          {
            label: 'Carousel Images',
          },
        ),
        stats: fields.array(
          fields.object(
            {
              name: fields.text({ label: 'Name' }),
              value: fields.text({ label: 'Value' }),
              // TODO: might want to change how we handle icons... maybe use a icon library
              icon: fields.text({ label: 'Icon' }),
            },
            {
              label: 'Statistic',
            },
          ),
          {
            label: 'Statistics',
            itemLabel: item =>
              `${item.fields.name.value}: ${item.fields.value.value ?? '<empty>'}`,
            description:
'A statistic/fun fact about the project. Could be numerical like \'Top Speed\', \'Total Commits\', or text like \'Software Stack\', or \'Weapon Material\'.',
          },
        ),
        startDate: fields.conditional(
          fields.checkbox({
            label: 'Show Start Date',
            defaultValue: false,
          }),
          {
            false: fields.empty(),
            true: fields.object(
              {
                season: fields.text({ label: 'Season' }),
                year: fields.number({ label: 'Year' }),
              },
              {
                label: 'Start Date',
                description: 'The season and year the project started.',
              },
            ),
          },
        ),
        endDate: fields.conditional(
          fields.checkbox({
            label: 'Show End Date',
            defaultValue: false,
          }),
          {
            false: fields.empty(),
            true: fields.object(
              {
                season: fields.text({ label: 'Season' }),
                year: fields.number({ label: 'Year' }),
              },
              {
                label: 'End Date',
                description: 'The season and year the project ended.',
              },
            ),
          },
        ),
        // TODO: custom component for image grid
        content: fields.markdoc({ label: 'Content', components: {
			ImageGrid: wrapper({
				label: 'Image Grid',
				description: 'A grid of images.',
				schema: {},
			})
		} }),
      },
    }),
  },
})
