import fsPromises from 'node:fs/promises'
import { Buffer } from 'node:buffer'

import { html, styled } from 'og-images-generator'
/**
 * Get the TTF font for the specified family and axes values. Adapted from [this GitHub issue comment](https://github.com/vercel/satori/issues/162#issuecomment-2058182646).
 *
 * TL;DR: satori, the library which generates the image, doesn't support variable fonts, so we do some shenanigans to get Google Fonts to serve a non-variable font and then use that.
 * @param {string} family The font family
 * @param {string[]} axes The axes of the font
 * @param {number[]} value The values of the axes
 * @returns {Promise<ArrayBuffer>} The TTF font
 * @example
 * const ttfFont = await getTtfFont('Roboto', ['wght'], [700]);
 */
async function getTtfFont(family, axes, value) {
  const familyParam = `${axes.join(',')}@${value.join(',')}`

  // Get css style sheet with user agent Mozilla/5.0 Firefox/1.0 to ensure non-variable TTF is returned
  const cssCall = await fetch(`https://fonts.googleapis.com/css2?family=${family}:${familyParam}&display=swap`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 Firefox/1.0',
    },
  })

  const css = await cssCall.text()
  const ttfUrl = css.match(/url\(([^)]+)\)/)?.[1]

  return await fetch(ttfUrl).then(res => res.arrayBuffer())
}

const UNBOUNDED_TTF = 'node_modules/unbounded.ttf'

let fontBuffer

try {
  fontBuffer = await fsPromises.readFile(UNBOUNDED_TTF)
}
catch (e) {
  console.error('Failed to read Unbounded font from file, fetching from Google Fonts')
  const arrayBuffer = await getTtfFont('Unbounded', ['wght'], [900])
  fontBuffer = Buffer.from(arrayBuffer)
  await fsPromises.writeFile(UNBOUNDED_TTF, fontBuffer)
}

/** @type {import('og-images-generator').RenderOptions} */
export const renderOptions = {
  satori: {
    fonts: [{ name: 'Unbounded Variable', data: fontBuffer, weight: 900 }],
    width: 2048,
    height: 1170,
  },
}

const styles = {

  container: styled.div`
		height: 100%;
		width: 100%;
		display: flex;
		filter: contrast(1.7) saturate(0);
	`,

  wrap: styled.div`
		position: absolute;
		top: 0;
		background: rgba(191, 30, 46, 0.75);
		left: 0;
		padding: 97px 170px 97px 170px;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		color: #ffffff;
		display: flex;
		align-items: center;
    	justify-content: center;
		font-size: 120px;
		font-family: 'Unbounded Variable', sans-serif;
	`,
}

/** @type {import('og-images-generator').Template} */
function template({ page }) {
  let title = page.meta.tags['og:title']

  if (['Home', 'Comet Robotics', 'Comet Robotics at UT Dallas'].includes(title)) {
    title = ''
  }

  const wordmarkSize = title ? styled.div`width: 445px;` : styled.div`width: 1250px;`
  const wordmark = wordmarkSize
  const titleStyles = styled.div`height: 100%;display:flex;align-items:center;justify-content:center;text-align:center;`
  const titleDiv = title ? html`<div style=${titleStyles}>${title.trim()}</div>` : ''

  return html` <!--  -->
	<div style=${styles.container}>
		<img src="https://cometrobotics.org/home/vexgroup.png" style="width: 100%; height: 100%; object-fit: cover;"/>
	</div>
	<div style=${styles.wrap}>
		<img style=${wordmark} src="https://cometrobotics.org/wordmark.png"/>
		${titleDiv}
	</div>`
};

export { template }
