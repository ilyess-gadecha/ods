// Post-build step: turn the single built English dist/index.html into real,
// localized static documents at dist/fr/index.html and dist/de/index.html.
// Each gets its own <html lang>, <title>, meta (description/keywords/canonical/
// OpenGraph/Twitter) and a localized FAQPage JSON-LD block — so search engines
// and non-JS AI/answer crawlers receive genuine per-language pages, not an
// English shell. Runtime i18n boots from the URL path (see src/i18n/i18n.js),
// so the app also renders in the right language on these URLs.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  SEO_CONTENT,
  FAQ_CONTENT,
  LOCALE_PATHS,
  OG_LOCALES,
  HTML_LANG,
  META_LANGUAGE
} from '../src/seo/seoContent.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')
const BASE_FILE = path.join(DIST, 'index.html')

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

function replaceMeta(html, attr, name, value) {
  const re = new RegExp(`(<meta ${attr}="${escapeRe(name)}" content=")[^"]*(")`)
  if (!re.test(html)) throw new Error(`meta ${attr}="${name}" not found`)
  return html.replace(re, `$1${esc(value)}$2`)
}

function replaceLinkHref(html, rel, href) {
  const re = new RegExp(`(<link rel="${escapeRe(rel)}" href=")[^"]*(")`)
  if (!re.test(html)) throw new Error(`link rel="${rel}" not found`)
  return html.replace(re, `$1${href}$2`)
}

function localize(html, lang) {
  const seo = SEO_CONTENT[lang]
  const url = LOCALE_PATHS[lang]
  let out = html

  out = out.replace(/<html lang="[^"]*">/, `<html lang="${HTML_LANG[lang]}">`)
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`)

  out = replaceMeta(out, 'name', 'title', seo.title)
  out = replaceMeta(out, 'name', 'description', seo.description)
  out = replaceMeta(out, 'name', 'keywords', seo.keywords)
  out = replaceMeta(out, 'name', 'language', META_LANGUAGE[lang])

  out = replaceLinkHref(out, 'canonical', url)

  out = replaceMeta(out, 'property', 'og:url', url)
  out = replaceMeta(out, 'property', 'og:title', seo.title)
  out = replaceMeta(out, 'property', 'og:description', seo.description)
  out = replaceMeta(out, 'property', 'og:locale', OG_LOCALES[lang])

  out = replaceMeta(out, 'name', 'twitter:url', url)
  out = replaceMeta(out, 'name', 'twitter:title', seo.title)
  out = replaceMeta(out, 'name', 'twitter:description', seo.description)

  // Localized FAQPage structured data
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_CONTENT[lang].map((x) => ({
      '@type': 'Question',
      name: x.question,
      acceptedAnswer: { '@type': 'Answer', text: x.answer }
    }))
  }
  const faqRe = /(<script type="application\/ld\+json" id="faq-jsonld">)[\s\S]*?(<\/script>)/
  if (!faqRe.test(out)) throw new Error('faq-jsonld script block not found')
  out = out.replace(faqRe, `$1\n    ${JSON.stringify(faq, null, 6)}\n    $2`)

  return out
}

if (!fs.existsSync(BASE_FILE)) {
  console.error(`prerender: ${BASE_FILE} not found — run "vite build" first.`)
  process.exit(1)
}

const base = fs.readFileSync(BASE_FILE, 'utf8')
let count = 0
for (const lang of ['fr', 'de']) {
  const html = localize(base, lang)
  const dir = path.join(DIST, lang)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8')
  count++
  console.log(`prerendered dist/${lang}/index.html`)
}
console.log(`prerender: ${count} localized page(s) generated (en + fr + de).`)
