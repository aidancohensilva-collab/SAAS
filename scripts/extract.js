import { execSync } from 'child_process';

console.log('Extracting ZIP file...');
try {
  execSync('unzip -o /vercel/share/v0-project/wetransfer_saas_2026-03-25_1739.zip -d /vercel/share/v0-project/', { stdio: 'inherit' });
  console.log('Extraction complete!');
} catch (e) {
  console.error('Error extracting:', e.message);
}
