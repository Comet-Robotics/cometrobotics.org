import childProcess from "child_process";
 
// obtain Git commit hash
const hash = childProcess
  .execSync("git rev-parse --short HEAD")
  .toString()
  .trim();
 
// obtain release version
import { version } from "../../../package.json";
 
export async function GET({ params, request }) {
  const versionMetadata = {
    hash,
    version,
  };
  return new Response(JSON.stringify(versionMetadata));