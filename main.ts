// Loading Screen Gold: A Tip in 200 Characters
// Writes the winning one-line loading-screen tip to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: your agent fixed the bug by deleting the feature. The tests pass. The users have not noticed yet. You have 20 minutes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (TIP.length < 1 || TIP.length > 200) {
  throw new Error(`Tip must be 1-200 characters, got ${TIP.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
console.log(`Wrote ${TIP.length} characters to ${join(outDir, "entry.txt")}`);
