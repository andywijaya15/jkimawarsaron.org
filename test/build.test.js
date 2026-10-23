import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

// ponytail: basic static artifact verification, add vitest/playwright when introducing dynamic SSR or API endpoints
const dist = path.resolve('dist');
assert(fs.existsSync(dist), 'dist/ directory should exist');
assert(fs.existsSync(path.join(dist, 'index.html')), 'dist/index.html must exist');
assert(fs.existsSync(path.join(dist, 'ourstory/index.html')), 'dist/ourstory/index.html must exist');
assert(fs.existsSync(path.join(dist, 'ministry/index.html')), 'dist/ministry/index.html must exist');
assert(fs.existsSync(path.join(dist, 'christ-community/index.html')), 'dist/christ-community/index.html must exist');
assert(fs.existsSync(path.join(dist, 'shermon/index.html')), 'dist/shermon/index.html must exist');
assert(fs.existsSync(path.join(dist, 'events/index.html')), 'dist/events/index.html must exist');
assert(fs.existsSync(path.join(dist, 'admin/index.html')), 'dist/admin/index.html must exist for CMS');
assert(fs.existsSync(path.join(dist, 'admin/config.yml')), 'dist/admin/config.yml must exist for CMS');
assert(fs.existsSync(path.join(dist, 'keystatic/index.html')), 'dist/keystatic/index.html must exist for Keystatic CMS');
assert(fs.existsSync(path.join(dist, '.htaccess')), 'dist/.htaccess must exist for production Apache configuration');
assert(fs.existsSync(path.join(dist, 'robots.txt')), 'dist/robots.txt must exist for SEO indexing');
assert(fs.existsSync(path.join(dist, 'sitemap-index.xml')), 'dist/sitemap-index.xml must exist for SEO indexing');
assert(fs.existsSync(path.join(dist, 'deploy-webhook.php')), 'dist/deploy-webhook.php must exist for auto-pull webhook');

const webhookPhp = fs.readFileSync(path.join(dist, 'deploy-webhook.php'), 'utf-8');
assert(webhookPhp.includes('jkims_deploy_9f2a71d8e4c3b5'), 'deploy-webhook.php must contain deploy token check');
assert(webhookPhp.includes('git reset --hard origin/deploy'), 'deploy-webhook.php must trigger git sync');

const robotsTxt = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf-8');
assert(robotsTxt.includes('Sitemap: https://jkimawarsaron.org/sitemap-index.xml'), 'robots.txt must point to sitemap-index.xml');
assert(robotsTxt.includes('Disallow: /keystatic/'), 'robots.txt must disallow keystatic CMS');

const adminHtml = fs.readFileSync(path.join(dist, 'admin/index.html'), 'utf-8');
assert(adminHtml.includes('decap-cms'), 'admin/index.html should load Decap CMS script');

const adminConfig = fs.readFileSync(path.join(dist, 'admin/config.yml'), 'utf-8');
assert(adminConfig.includes('repo: andywijaya15/jkimawarsaron.org'), 'admin/config.yml must specify correct GitHub repo');
assert(adminConfig.includes('collections:'), 'admin/config.yml must define CMS collections');
assert(adminConfig.includes('name: "events"'), 'admin/config.yml must contain events collection');
assert(adminConfig.includes('name: "bulletin"'), 'admin/config.yml must contain bulletin collection');
assert(adminConfig.includes('name: "sermons"'), 'admin/config.yml must contain sermons collection');

const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
assert(indexHtml.includes('JKI MAWAR SARON'), 'index.html should contain site title');
assert(indexHtml.includes('live-button'), 'index.html should contain live button component');
assert(indexHtml.includes('church-map'), 'index.html should contain church-map container');
assert(indexHtml.includes('leaflet'), 'index.html should load Leaflet library');
assert(indexHtml.includes('https://maps.app.goo.gl/zfCuDaWoGZLhA4Jz9'), 'index.html should link to new Google Maps URL');
assert(!indexHtml.includes('href="#"'), 'index.html must not contain dead href="#" links');
assert(indexHtml.includes('rel="canonical"'), 'index.html must have canonical link');
assert(indexHtml.includes('property="og:title"'), 'index.html must have og:title');
assert(indexHtml.includes('property="og:image"'), 'index.html must have og:image');
assert(indexHtml.includes('name="twitter:card"'), 'index.html must have twitter:card');
assert(indexHtml.includes('name="robots" content="index, follow"'), 'index.html must have robots meta tag');
assert(indexHtml.includes('application/ld+json'), 'index.html must include Schema.org JSON-LD');
assert(indexHtml.includes('"@type":"Church"'), 'index.html must contain Church schema');
assert(indexHtml.includes('id="main-content"'), 'index.html must have main landmark for accessibility');
assert(indexHtml.includes('Lewati ke konten utama'), 'index.html must have skip link');

const ourstoryHtml = fs.readFileSync(path.join(dist, 'ourstory/index.html'), 'utf-8');
assert(ourstoryHtml.includes('object-position: center 45%'), 'ourstory should have framing object-position: center 45%');

const nextgenHtml = fs.readFileSync(path.join(dist, 'nextgen/index.html'), 'utf-8');
assert(nextgenHtml.includes('youth-impact-service.jpg'), 'nextgen should integrate youth-impact-service.jpg');

const praiseHtml = fs.readFileSync(path.join(dist, 'praiseadnworship/index.html'), 'utf-8');
assert(praiseHtml.includes('youth-impact-service.jpg'), 'praiseadnworship should integrate youth-impact-service.jpg');

const eventsHtml = fs.readFileSync(path.join(dist, 'events/index.html'), 'utf-8');
assert(eventsHtml.includes('christmas.jpg'), 'events should include christmas.jpg');
assert(eventsHtml.includes('revival.jpg'), 'events should include revival.jpg');

console.log('Static artifact self-check passed: 13 routes, Leaflet map, image framing, and youth service integrations verified without dead links.');
