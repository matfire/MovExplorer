importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

self.addEventListener("fetch", (event) => {
  console.log("fetching")
})

// cache images coming from tmdb
workbox.routing.registerRoute(({request}) => request.destination === "image",
new workbox.strategies.CacheFirst({
  cacheName: 'image-cache',
  plugins: [
    new workbox.cacheableResponse.CacheableResponsePlugin({
      statuses: [0, 200]
    }),
    new workbox.expiration.ExpirationPlugin({
      maxEntries: 100,
      maxAgeSeconds: 7 * 24 * 60 * 60
    })
  ]
}))

workbox.routing.registerRoute(({request}) => request.destination === "style",
new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'css-cache'
})
)

workbox.routing.registerRoute(({request}) => request.destination === "script",
new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'script-cache'
})
)