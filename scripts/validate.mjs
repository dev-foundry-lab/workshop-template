import { existsSync, readFileSync } from 'node:fs';

const required = [
  'README.md', 'ROADMAP.md', 'CONTRIBUTING.md', 'AGENTS.md',
  'docs/00-introduction.md', 'docs/01-prerequisites.md',
  'docs/02-learning-path.md', 'modules/01-getting-started/README.md',
  'modules/01-getting-started/theory.md',
  'modules/01-getting-started/exercises.md',
  'modules/01-getting-started/solutions/README.md',
  'projects/final-project/README.md', 'resources/README.md'
];
const missing = required.filter((file) => !existsSync(file));
if (missing.length) {
  console.error('File mancanti:\n' + missing.join('\n'));
  process.exitCode = 1;
} else {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  console.log(`✓ ${required.length} file verificati (${pkg.name})`);
}
