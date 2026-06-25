import { execSync } from 'child_process'
import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync, rmSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, 'dist')
const dest = join(__dirname, '..', 'lt-entrenamientos')

execSync('npm run build', { stdio: 'inherit', cwd: __dirname })

// Clean dest (preserve .git folder)
for (const entry of readdirSync(dest)) {
  if (entry === '.git') continue
  const full = join(dest, entry)
  if (statSync(full).isDirectory()) rmSync(full, { recursive: true })
  else rmSync(full)
}

// Copy dist/ to dest
function copyRecursive(src, dest) {
  if (!existsSync(dest)) mkdirSync(dest, { recursive: true })
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry)
    const destPath = join(dest, entry)
    if (statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}

copyRecursive(dist, dest)
console.log('✔ Build copiado a lt-entrenamientos/. Solo queda hacer git add / commit / push.')
