// Nombre del caché
const cacheName = 'mi-app-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  '/deeee.jpeg', // Cambia esto por el nombre real de tus fotos
  '/logo1.ico'
];

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));

// Instalar el Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Escuchar peticiones (esto permite que la app funcione offline)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});