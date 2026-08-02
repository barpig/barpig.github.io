// Cache name
const CACHE_NAME = 'ticker-rendo-cache-v1';

// Files to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css', // If you extract your CSS into a separate file
  'https://s3.tradingview.com/tv.js' // Cache the TradingView script
];

// Install the service worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});