'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "878459b454b9f9f6ad01891dd2ba1293",
"index.html": "f46f19580c076dbb3f444e8d93c75818",
"/": "f46f19580c076dbb3f444e8d93c75818",
"main.dart.js": "0877d5dc0df2962ec575abbaa6aee722",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "c7c3d5c97140a98e5cacbe6ca00356df",
"main-icon.png": "c1e436b1c29204d242c34a8417f01c11",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "92fe28b905a1c9989b5006500e7c7eff",
".git/config": "6bd1523d2d75d939a53940cc113e7a59",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/727e669de3f985d61037608b58d78a739a9bcd": "dd89773f1c2ee2fa95a785da45f2095d",
".git/objects/da/3096ee8f6409535f06edb1bd782833f06febe1": "9dd9cd183ac98e430146cf69edd2ce03",
".git/objects/a5/877e7477ed22014d633e1de19e88385db59de2": "724a6f4bd08a9f62970eeb7ba60ec844",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/080187b231c6e5a60f3c24e0fdc62b843d84e2": "bf14e227ab81433b4d1e7aa922059751",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/b86365bca34dcd22006e6c9571144457bee3d5": "2249b408919392b51543dd2e158346a1",
".git/objects/c8/e879d769e628010da7da46167c088fe8c1d28a": "92a48e56d128df318d8a0839179f6398",
".git/objects/20/65873896e6507e6c1de70a6e42fe8035874cf8": "bdd62fa7ce5fd4c8368fc19706bc67b7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/81b696acbab7c2d3b493d1b156255209395574": "c44b258856f4d0be29598e37541c6639",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/16/ada75767d2af7fac8cf5415cf599edcf5625a9": "64b641c97d2071e243d780e2c3d19eed",
".git/objects/1f/132169199d0b5619d85f1d8ad09637f766a81e": "89521ee541eaf37d4aa7464e0d528097",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/86/39ef309dc1b69fcf60895a880b0670890ce3c4": "2ae7a554342ff675031cfad19c439c3b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/a9112a281758167f914429d07abc14ce12d583": "caffd72c384f1b8162a8c0983f4bedee",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/09/38b27457b0852194ccb36a3f8a050df2a5adef": "208f0c3052ee2927c62372c16ef5d5c0",
".git/objects/65/ad8cce2a9225199dc573c98d332ef107e551d9": "d3d00f23d26bb399b73a304050d726a8",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/98/5e484f9ac7177a1769e1d91fd2f3a092a2e593": "f7c12f256e80c4d47e5dcdcbdb07b3e0",
".git/objects/30/18898560f8982dc8d9c88743c324c1b61ba3f1": "571920f17807b458e73f0643a51b0068",
".git/objects/6d/48b5612a366249c67cf39a232796f88f36de3d": "343f8a7349331263969d269e01b06f48",
".git/objects/52/56f754310361f3c2c466f4cb298db6c38725b1": "c518a873f2259b50e2df2c9a6f1fc6bc",
".git/objects/0f/0f6014bb79ce930fec74329a27c1d01dcedf28": "524e618d423e16a9908d3f3b3020c212",
".git/objects/0a/b1e32a25912da504798f01ac9d615e92b50660": "03f6e53b6a0a124bc6f5445d29a1837f",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b1/b719ab62aba2c7a9fc97c8fee8331690c95524": "bdfaf88a7161c8215fdffae8e56c62b2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/ea10df547169066407fb4bcee25ddedc3f170e": "ac9e4e45f06273aba014057ecdf2cba8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/35eb37b20088bfc483a07404c0cdd41f714562": "48ce160d29d0b18ed27f79ba0459ad42",
".git/objects/cd/e8ec9f77e23b56cb6235706f7f856f5feae993": "1bd8f2e2dfe807435f5c5e916b0b5024",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/cb/fbc85189e169a9a2553268e703cce7bfe6a014": "7f4ecf7e58c33561647842e67b2c94ec",
".git/objects/2c/5586893e1862c05ade893489177cb5aa09ab6a": "4dfb367d28f8219d7c4fa25aec9e811b",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/2df7f089f46dd930239e418bf13e8e4c1cca0f": "d7d8b716d12ab83e1b978a421a5b15f2",
".git/objects/1e/fd6a64522438f4ce9484205ae59a3370dc7803": "4d91e8b7e8b335ca09c8a520f71dd47d",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/82/6844fc7d0e9886496f6edbe9f56ecd2f0804f4": "ea3d19e4b355c4a55bd320ff1a938e84",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/8e/a70c591ec45980c5380b1f64d07226674ffc54": "8edc9ee26342a3a27073eeddab242042",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f75fde740b30ca43a42b9452bdb93f6",
".git/logs/refs/heads/main": "e1cc5735b8521445787ba5371704eb6f",
".git/logs/refs/remotes/origin/main": "047ded4c2cf1e508bf3c85fc03db3034",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "11a548e6e51db88ac003c5ce8828e4b4",
".git/refs/remotes/origin/main": "11a548e6e51db88ac003c5ce8828e4b4",
".git/index": "41aa8df389ba931cdf4acac7897bcbbf",
".git/COMMIT_EDITMSG": "e4857b9f1c97a1e706e635fffd8d5a09",
"assets/AssetManifest.json": "90777fc27e8fd0b61ebbaa9546ee9733",
"assets/NOTICES": "91b56f0d5912907801ed734858786fb7",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "5c252ab8078fef49c4c9fe39ba49939d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "666ae6d87e7d19be585b4acb59aa2891",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/bg-pattern-intro-desktop.svg": "62fb91e36c878a11ca8ebe013544e3f1",
"assets/assets/illustration-phones.svg": "3f1cfcb399de8a89c14bbcd7091c9b84",
"assets/assets/icon-close.svg": "d6acb5d555a1ca27f3d3f6d8f3670816",
"assets/assets/icon-arrow-light.svg": "ae148d571ca7f6f6aa4e277b08657fb5",
"assets/assets/icon-hamburger.svg": "29b183daf0ccd4e4eadcf329f09ca508",
"assets/assets/illustration-laptop-mobile.svg": "ac5a8914a7679a92074c511ea75fa150",
"assets/assets/illustration-laptop-desktop.svg": "24117652860f4a8e0e5f4c37e93898f7",
"assets/assets/bg-pattern-intro-mobile.svg": "af64a144902ce5d3cc705b8b3df40600",
"assets/assets/illustration-editor-mobile.svg": "a12422e5e725413a6eb2a9461eb23620",
"assets/assets/illustration-editor-desktop.svg": "b4f9ff68226df698fee32da8851562de",
"assets/assets/logo.svg": "10b048cdfd15c76e12d0670847231058",
"assets/assets/bg-pattern-circles.svg": "c457d7b777dc6503a345bbe028643a83",
"assets/assets/favicon-32x32.png": "a07f423b8bbf4a50c2c449b96795fcb6",
"assets/assets/icon-arrow-dark.svg": "c49a81bb1e574d0932d78d69fc77d4c5",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
