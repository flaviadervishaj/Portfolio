import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);

test('portfolio includes every selected project', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  for (const project of ['BookEase', 'Fitness Tracker', 'ColdChat', 'ClientFlow']) assert.match(html, new RegExp(`>${project}<`));
});

test('public repositories use their canonical GitHub paths', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /github\.com\/flaviadervishaj\/Book-Ease/);
  assert.match(html, /github\.com\/flaviadervishaj\/Fitness-Tracker/);
  assert.match(html, /github\.com\/flaviadervishaj\/ClientFlow/);
  assert.doesNotMatch(html, /github\.com\/flaviadervishaj\/ColdChat/);
});

test('page uses local stylesheet and script assets', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /href="styles\.css"/);
  assert.match(html, /src="script\.js"/);
  assert.doesNotMatch(html, /<(?:script|link)[^>]+(?:src|href)="https?:\/\//i);
});

test('navigation control exposes its state and target', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /class="menu-button"[^>]+aria-expanded="false"[^>]+aria-controls="site-nav"/);
  assert.match(html, /class="skip-link" href="#main"/);
});

test('external links opened in a new tab are isolated', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  const links = [...html.matchAll(/<a[^>]+target="_blank"[^>]*>/g)].map(match => match[0]);
  assert.ok(links.length >= 5);
  links.forEach(link => assert.match(link, /rel="noopener noreferrer"/));
});
