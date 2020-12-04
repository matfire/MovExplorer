# Changelog

<a name="0.5.0"></a>
## 0.5.0 (2020-12-04)

### Added

- ✨ Added search function for movie list [[5a21934](https://github.com/matfire/MovExplorer/commit/5a2193468b1228948e5cf3bd72d87f17c37c1202)]
- ✨ Details page now displays images and videos [[094e546](https://github.com/matfire/MovExplorer/commit/094e546753c7539beee7ba7a41368db892daa229)]
- ✨ Added Link to details page in app router [[c65243a](https://github.com/matfire/MovExplorer/commit/c65243a259bfe1932bd1cc27d7f84de93f00cd05)]
- ✨ Added details page [[9fda15c](https://github.com/matfire/MovExplorer/commit/9fda15c66adf58396e4b517154af0398ca45c6dd)]
- ✨ Caching for images, scripts and styles [[4a0cca8](https://github.com/matfire/MovExplorer/commit/4a0cca843a2ac79393d971b5e2fe996f7f7e8695)]

### Changed

- ♻️ Fs utility now only reads mp4 files [[4d8173a](https://github.com/matfire/MovExplorer/commit/4d8173ab3e9eebafa916d1d78a11645946bff35f)]
- ♻️ Movie list is generated from single state [[9a3a264](https://github.com/matfire/MovExplorer/commit/9a3a264ba13d23041b855c7160e28cc356ad5654)]
- 💄 Updated videos height in details page [[7cd34aa](https://github.com/matfire/MovExplorer/commit/7cd34aa28537c258b0db75be254f118e52f3e75a)]
- ♻️ Removing Useless UseEffect hooks in List [[962523d](https://github.com/matfire/MovExplorer/commit/962523d483faa27f59db7343232436a6e2905ffd)]
- 👽 Search returns details if limit is 1 [[96daa42](https://github.com/matfire/MovExplorer/commit/96daa42ad1826716f2cee4aad12a511c8650e6c0)]
- 💄 Work started on updating Details&#x27; sidebar [[d79dc63](https://github.com/matfire/MovExplorer/commit/d79dc639e00f59ee5b640cdaf178facc0e30f698)]
- ⬆️ Updated to CRA 4.0 [[5f73193](https://github.com/matfire/MovExplorer/commit/5f73193287b3619214aeb84090ab7a2a7b058894)]
- 🎨 Removing linter warnings [[be09c0b](https://github.com/matfire/MovExplorer/commit/be09c0b951ec219014321a059ea3d7348321d28f)]
- 💄 Added carousels for images in details [[e5ea982](https://github.com/matfire/MovExplorer/commit/e5ea982eae0acb98f8adcc55e760f65aaaca2c3c)]
- 👽 Added methods for embedding youtube and vimeo [[9da4780](https://github.com/matfire/MovExplorer/commit/9da478040b742e66250ca67fc9e786cc5d2678be)]
- ♻️ Moved Sidebar Items into own component [[370d6ce](https://github.com/matfire/MovExplorer/commit/370d6ce6cd664fb033e0d561657533e0686c0329)]
- 💄 Adding styles for sidebar mvp [[942f01a](https://github.com/matfire/MovExplorer/commit/942f01acf76394a62f02215acb956b220c1a41dc)]
- 💄 Added custom styles for details page [[11219af](https://github.com/matfire/MovExplorer/commit/11219af42828868898fff53584344f965c735894)]
- 💄 Replaced text with icons in movie list [[cd35792](https://github.com/matfire/MovExplorer/commit/cd3579226dbb268c94ae9c9b32525224a2459c24)]
- 🚚 Moved _redirects rule [[5da525b](https://github.com/matfire/MovExplorer/commit/5da525b30637e2fb104b2e13ba98630fec414d89)]
- 🚸 Added basic framer-motion interactions [[279c4fe](https://github.com/matfire/MovExplorer/commit/279c4fea73fe14a1a65e0991b09989bb13dcd87c)]

### Breaking changes

- 💥 Removing vanilla html version [[30fc556](https://github.com/matfire/MovExplorer/commit/30fc55628c3cbe623cd8233fafe4481a425383b0)]

### Fixed

- 🐛 Disabling CI mode to build with warnings [[6cc9b22](https://github.com/matfire/MovExplorer/commit/6cc9b225ba49e4a31aa670495aa0150d09eee783)]
- 🚑 Adding React Version [[0e6e7f8](https://github.com/matfire/MovExplorer/commit/0e6e7f87ebc9e6dbe98aab799164715a5d51efc5)]

### Miscellaneous

- 🍻 Updated README and package.json [[9967d0c](https://github.com/matfire/MovExplorer/commit/9967d0caebc431dd51d7743328b5c1699cc2abda)]
- 🚧 Updating list code for better performance [[0ca730d](https://github.com/matfire/MovExplorer/commit/0ca730d8b5dcb236999e248829706920f5e9e5d9)]
- 📦 Added detailed movie requests and implementation [[5c372b2](https://github.com/matfire/MovExplorer/commit/5c372b20a062830bcbb2512f4be537bf1a0e3aba)]
- 💡 Remove placeholder template [[7c46798](https://github.com/matfire/MovExplorer/commit/7c467986765f79892ef7f991b08b564284faeb0c)]
-  you can now update the movie data (needs page reload, though [[625c91d](https://github.com/matfire/MovExplorer/commit/625c91d4f0a9d66f72efd6764c6579e8385237b9)]
-  added placeholder fetch function [[8c78083](https://github.com/matfire/MovExplorer/commit/8c78083d17a43061621b006ed1cc30569a50aef6)]
-  added token for deployed origin trial [[e8b1406](https://github.com/matfire/MovExplorer/commit/e8b140631058ba1549eb6737b913f8739e94838a)]
-  added icons, sw, manifest [[54e67ba](https://github.com/matfire/MovExplorer/commit/54e67ba22e306bfb7057dbe2d0aae30118e91455)]
-  updating readme [[7af28a5](https://github.com/matfire/MovExplorer/commit/7af28a5b21f25a947ff4af629b622167dd669cf2)]
-  working on updating movie after tmdb research [[1eeab2f](https://github.com/matfire/MovExplorer/commit/1eeab2f798613147a93969e890e4fa7bffb8c23c)]
-  adding indexeddb connection handler [[6a9734f](https://github.com/matfire/MovExplorer/commit/6a9734f8bac0c87839adf781506711b901a6794b)]
-  added movie-card web compoenent [[4021f62](https://github.com/matfire/MovExplorer/commit/4021f6253f792593288a2e2629395c42626a3525)]
-  created basic api calls for search and poster path [[0e641ec](https://github.com/matfire/MovExplorer/commit/0e641ec16a7ff586cfdebcb1f26efb86fb49a178)]
-  Initial commit [[fe295f5](https://github.com/matfire/MovExplorer/commit/fe295f508c72d29f768e430d3d3411f60d3f49fb)]


