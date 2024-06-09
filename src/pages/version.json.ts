import childProcess from 'node:child_process'

// obtain Git commit hash
const hash = childProcess
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim()

export async function GET() {
  const versionMetadata = {
    hash,
  }
  return new Response(JSON.stringify(versionMetadata))
}
