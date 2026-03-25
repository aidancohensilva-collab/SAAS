import { execSync } from 'child_process';
import { existsSync } from 'fs';

const zipFile = '/vercel/share/v0-project/wetransfer_saas_2026-03-25_1739.zip';

if (existsSync(zipFile)) {
  console.log('Extracting ZIP file...');
  execSync(`unzip -o "${zipFile}" -d /vercel/share/v0-project/`, { stdio: 'inherit' });
  console.log('Extraction complete!');
} else {
  console.log('ZIP file not found');
}
