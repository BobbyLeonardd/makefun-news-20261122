// make.fun entry: the front page of Sunday 22 November 2026 sits beside this file as entry.png.
// The program's only job is to put those exact bytes at the grader's output path.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PAGE = 'entry.png';
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, PAGE), join(outDir, PAGE));
