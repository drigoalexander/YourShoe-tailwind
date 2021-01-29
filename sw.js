const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v5';
const assets= [
    '/index.html',
    '/js/app.js',
    '/js/db.js',
    '/js/ui.js',
    '/css/app.css',
    '/css/app.minify.css',
    '/images/content/adidas.jpg',
    '/images/content/balen.jpg',
    '/images/content/balen2.jpg',
    '/images/content/balen3.jpg',
    '/images/content/Del.png',
    '/images/content/dior.jpg',
    '/images/content/fp.png',
    '/images/content/hu.jpg',
    '/images/content/hu2.jpg',
    '/images/content/lowtop.jpg',
    '/images/content/nike.jpg',
    '/images/content/pexels-melvin-buezo-2529148.jpg',
    '/images/content/yeezy.jpg',
    '/images/content/balen4.jpg',
    '/images/content/gopay.jpg',
    '/images/content/ovo.jpg',
    '/images/content/shopeepay.png',
    '/images/content/dana.png',
    '/images/content/jne.jpg',
    '/images/content/jet.jpg',
    '/images/design/cart.svg',
    '/images/design/hamburg.svg',
    '/images/design/triangle.svg',
    '/images/design/yourshoe.png',
    '/images/design/yourshoe2.png'


    
];
self.addEventListener('install', evt => {
    // console.log('Service worker berhasil di install');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching assets');
            cache.addAll(assets);
        })
    )
});

self.addEventListener('activate', evt => {
    // console.log('Service worker berhasil di aktifkan');
    evt.waitUntil(caches.keys().then(keys => {
        keys.filter( key => key !== staticCacheName && key !== dynamicCacheName).map(key => caches.delete(key))
      })
    );
});

self.addEventListener('fetch', evt => {
    // console.log('Fetch dari Service worker', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchResp => {
                return caches.open(dynamicCacheName).then(cache => {
                  cache.put(evt.request.url, fetchResp.clone());
                  return fetchResp;
                })
              }).catch( () => {
                return caches.match('/404.html')
              });
        })
    );
});