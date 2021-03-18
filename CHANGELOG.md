# Change Log

## [1.1.0] date
### Bug fixing
- Rename `master` branch to `main`
- To make a lot of our changes, we've followed the instructions from here (minus the `colors` and `font-sizes`): https://tailwindcss.com/docs/upgrading-to-v2
  - For the colors, the only change that we made, is the fact that we've added all Tailwind CSS colors to our `tailwind.config.js` files, and inside our product, all `{type}-gray-{number}` classes were renamed to `{type}-coolGray-{number}`
  - After that, we've changed `{type}-coolGray-{number}` to `{type}-coolGray-{lower-number}`, i.e. (`100` became `50`, `200` became `100`, ..., `900` became `800`)
    - You can achieve this, by search in your whole project for `coolGray-100` and replace it with `coolGray-50`
    - Then, you search in your whole project for `coolGray-200` and replace it with `coolGray-100`
    - Then, you search in your whole project for `coolGray-300` and replace it with `coolGray-200`
    - Then, you search in your whole project for `coolGray-400` and replace it with `coolGray-300`
    - Then, you search in your whole project for `coolGray-500` and replace it with `coolGray-400`
    - Then, you search in your whole project for `coolGray-600` and replace it with `coolGray-500`
    - Then, you search in your whole project for `coolGray-700` and replace it with `coolGray-600`
    - Then, you search in your whole project for `coolGray-800` and replace it with `coolGray-700`
    - Then, you search in your whole project for `coolGray-900` and replace it with `coolGray-800`
- `lg:bg-transparent` is not working anymore, so we've changed it with `lg:bg-opacity-0`
- Since we've dropped the usage of custom CSS, and reverted to `Built-In CSS Support` from `NextJS`, we had to move our images inside the `public` folder, and our styles inside the `styles` folder
  - All the `require` images have been replaced by simple `/img/` strings
- https://github.com/creativetimofficial/notus-angular/issues/4
- https://github.com/creativetimofficial/notus-js/issues/4
- https://github.com/creativetimofficial/notus-js/pull/5
- https://github.com/creativetimofficial/notus-js/pull/6
- https://github.com/creativetimofficial/notus-nextjs/issues/6
- https://github.com/creativetimofficial/notus-nextjs/issues/7
- https://github.com/creativetimofficial/notus-nextjs/issues/8
- https://github.com/creativetimofficial/notus-react/issues/3
- https://github.com/creativetimofficial/notus-svelte/issues/3
- https://github.com/creativetimofficial/notus-svelte/issues/6
- https://github.com/creativetimofficial/vue-notus/pull/4/
### Major style changes
- The upgrade of Tailwind CSS from version 1 to version 2, will cause multiple style changes, check them out on the official Tailwind CSS websites:
  - https://blog.tailwindcss.com/tailwindcss-v2
  - https://tailwindcss.com/
  - https://tailwindcss.com/docs/upgrading-to-v2
### Deleted components
- `next.config.js` (we do not need it anymore since we now use `Built-In CSS Support` from `NextJS`)
  - for the absolute imports, we've used the `jsconfig.json` file
### Added components
- `jsconfig.json` (to keep our absolute imports)
### Deleted dependencies
- `@tailwindcss/custom-forms`
- `react-google-maps` (replaced by simple Google Maps API)
- `@types/googlemaps` (dependencies of `react-google-maps`)
- `@types/markerclustererplus` (dependencies of `react-google-maps`)
- `@types/react` (dependencies of `react-google-maps`)
- `@zeit/next-css` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `@zeit/next-sass` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `node-sass` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `next-images` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `next-fonts` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `next-compose-plugins` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `path` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `webpack` (we'll use the default `Built-In CSS Support` from `NextJS`)
### Added dependencies
- `@tailwindcss/forms` (replaces `@tailwindcss/custom-forms`)
- `autoprefixer`
- `postcss`
### Updated dependencies
```
@fortawesome/fontawesome-free    5.14.0   →   5.15.3
@popperjs/core                    2.5.1   →    2.9.1
chart.js                          2.9.3   →    2.9.4
next                              9.5.3   →   10.0.9
react                           16.13.1   →   17.0.1
@types/react                    16.9.49   →   17.0.3
react-dom                       16.13.1   →   17.0.1
react-scripts                     3.4.3   →    4.0.3
tailwindcss                      1.8.10   →    2.0.4
typescript                        4.0.3   →    4.2.3
```
### Warning
_On a clean install there may be some warnings from request, chokidar, fsevents - they come from node_modules, and they do not affect the product at all._

## [1.0.0] 2020-09-29
### Original Release
- Started project from [Tailwind Starter Kit by Creative Tim](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation?ref=nnjs-changelog)
- Added design from Tailwind Starter Kit by Creative Tim
