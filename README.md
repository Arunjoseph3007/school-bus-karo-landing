# Haspr Code Structure

**Version** - 1.0.0 [Visit Website](https://haspr.in//)

**Team** - Abhay Rohit, Harsh Dangi, Pradhyum Upadhyay, Rupesh Vaishnav, Sanjay Kumar

**Author** - Abhay Rohit | Haspr, contact@haspr.in

**License** - _Copyright (c) 2022, Haspr. All rights reserved._

![HASPR](https://i.ibb.co/2M1D3Px/Cover.png)

# Table of contents

1. [Quick Setup](#quick-setup)
   1. [Prerequisite](#qs1)
   2. [Install Packages](#qs2)
   3. [Development](#qs3)
   4. [Develop on Custom Port](#qs4)
   5. [Production](#qs5)
2. [Packages Used](#packs-used)
   1. [Core Packages](#pu1)
   2. [Frontend Packages](#pu2)
   3. [VSCode Extensions](#pu3)
3. [Advanced Configuration](#ad-conf)
   1. [File Structure](#a-c1)
   2. [Languages](#a-c2)
   3. [Responsive Design](#a-c3)
   4. [SoundFX](#a-c4)
   5. [SEO](#a-c5)
   6. [Javascript](#a-c6)
   7. [Components & Blocks](#a-c7)
4. [Tutorials](#tutorials)
   1. [Cursor](#t1)
   2. [Aerosol Hover](#t2)

## 1. Quick Setup <a name="quick-setup"></a>

### (I) Prerequisite <a name="qs1"></a>

Install Node.js 12 or Above (https://nodejs.org/en/)

Install Yarn Package Manager (https://classic.yarnpkg.com/lang/en/docs/install/)

### (II) Install Packages <a name="qs2"></a>

```bash
yarn
```

### (III) Development <a name="qs3"></a>

Deploy the app and start Webpack 5 Server:

```bash
yarn dev
```

### (IV) Develop on Custom Port <a name="qs4"></a>

```bash
PORT=1234 yarn dev
```

### (V) Production <a name="qs5"></a>

Build an optimized version of the app in `/out/`:

```bash
yarn build
```

## 2. Packages used <a name="packs-used"></a>

### (I) Core dependencies <a name="pu1"></a>

- NextJS 11 (https://nextjs.org/)

- ReactJS (https://reactjs.org/)

- ReactDOM (https://reactjs.org/docs/react-dom.html)

- Next PWA (https://github.com/shadowwalker/next-pwa)

### (II) Front-end dependencies <a name="pu1"></a>

- GSAP (https://greensock.com/gsap/)

- Framer Motion (https://www.framer.com/motion/)

- Smooth Scrollbar (https://idiotwu.github.io/smooth-scrollbar/)

- Sass (https://sass-lang.com/)

- ThreeJS (https://threejs.org/)

- LottieFiles (https://lottiefiles.com/)

- Swiper (https://swiperjs.com/)

- Howler (https://howlerjs.com/)

### (III) VS Code Extensions <a name="pu3"></a>

- Better Comments (https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments/)

- Tab Nine (https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode/)

- Color Highlight (https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight/)

- Import Cost (https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost/)

- Prettier Code Formatter (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode/)

## 3. Advanced configuration <a name="ad-conf"></a>

### (I) File structure <a name="a-c1"></a>

```

├── /node_modules/              # NodeJS Packages
├── /src/                       # Source Code
    ├── blocks                  # Full Page Reusable Components
    ├── components              # Functional Display Components
    ├── cursor                  # Cursor Animation System
    ├── effects                 # SpecialFX and Animation Data
    ├── math                    # Javascript and Math Calculations
    ├── menu                    # Site Navigation Menu
    ├── pageData                # Dynamic Site Generation JSON
    ├── seo                     # NextJS Head and SEO Tags
    ├── tools                   # Utilities and Tools
├── /pages/                     # Deployment Routes and Pages
    ├── _app.js                 # Default App Entry Point
    ├── _offline.js             # Fallback page if Offline
    ├── 404.js                  # 404 Website Error Page
    ├── 500.js                  # 500  Server Error Page
    ├── index.js                # First Page Displayed
├── /out/                       # Production directory
└── /public/                    # Static Public Directory
    ├── /icons/                 # SVG and other icons
    ├── /locales/               # JSON localizations strings
    ├── /static/                # Static files (fonts, images, videos, etc..)
    ├── manifest.json           # NextPWA Config
    ├── robots.txt              # Google Web Crawler Config
├── /styles/                    # SCSS styles
├── .babelrc                    # Babel config
├── .env                        # Environment variables
├── .eslintrc.json              # ESLint Config
├── .gitignore                  # Ignored Files for Github
├── jsconfig.json               # Absolute Import Paths
├── next.config.js              # Next JS Configuration
├── package.json                # Project meta and dependencies
├── README.md                   # Instructions and Usage
├── yarn.lock                   # Yarn Lockfile

```

### (II) Languages <a name="a-c2"></a>

All locales should be stored in `./src/locales/{LANG}/*.json`.

### (III) Responsive Design <a name="a-c3"></a>

Style Library Used [Sass preprocessor](https://sass-lang.com/).

Media Query Responsive Design Plugin Used [include-media](https://github.com/wrongakram/sass-mediaqueries/blob/master/src/breakpoints/breakpoints.scss).

By default entrypoint is [`./src/scss/main.scss`](styles/main.scss)

#### Media Query

Breakpoints :

| Device    |   Size   | Description        |
| :-------- | :------: | :----------------- |
| `phone`   | `360px`  | Phone Size         |
| `tablet`  | `768px`  | Tablet Size        |
| `crt`     | `1024px` | CRT Square Monitor |
| `laptop`  | `1280px` | Laptop Size        |
| `desktop` | `1600px` | Desktop Size       |
| `tv`      | `1920px` | 4K TV Size         |
| `split`   | `3840px` | Multiple Monitors  |

Usage in SASS File :

```javascript
@include media('<=phone') { content: "I'm Tiny Phone" } // Query for Devices Smaller Than a Phone
@include media('>phone', '<=tablet') { content: "I'm Average Phone"} // Device Between Phone and Tablet Size
@include media('>tablet', '<=crt') { content: "I'm Small Tablet"} // Between Tablet and CRT Monitor
@include media('>crt', '<=laptop') {content: "I'm Big Tablet and also CRT" } // Between CRT and Laptop Size
@include media('>laptop', '<=desktop') { content: "I'm Small Laptop"} // Between Laptop and Desktop Size
@include media('>desktop', '<=tv') {content: "I'm Small Desktop" } // Between Desktop and TV Size
@include media('>tv','<=split') { content: "I'm Large Desktop and Big TV" } // Greater Than TV but not as much as Split Monitor
@include media('>split') { content: "I'm 4x4 Gaming Setup" } // All Devices Larger than 4K are Covered
```

### (IV) SoundFX <a name="a-c4"></a>

Sound Library used is [HowlerJS](https://howlerjs.com/).

All Sound Effects are stored in [`public/static/sounds/`](public/static/sounds/)

### (V) SEO (Search Engine Optimization) <a name="a-c5"></a>

**MAIN SEO** - Google Search Results based Main Site SEO

- _index.js : Call on index.js as Site main SEO_

```javascript
import MainSEO from '@/seo/MainSEO'

export default function Home() {
  return (
    <>
      <MainSEO />
      {/* All Other Homepage Code */}
    </>
  )
}
```

**Page-wise SEO** - Information about all other Site Pages

- _Call on any page inside **pages** directory_

```javascript
import SEO from '@/seo/seo'

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Approx 165 Characters Long Description" />
      {/* All Other About Us Page Code */}
    </>
  )
}
```

**Website Schema Structured Data SEO** - Google Rich Snippets Data

- _Implemented on MainSEO.js_

### (VI) JS <a name="a-c6"></a>

All javascript is processed with [webpack](https://webpack.js.org/) + [Babel](https://babeljs.io/).

Webpack config is stored in [`next.config.js`](next.config.js)

Babel config is stored in [`.babelrc`](.babelrc)

By default, entry point is [`pages/_app.js`](pages/_app.js)

- [Read webpack docs](https://webpack.js.org/concepts/).

- [Read Babel docs](https://babeljs.io/docs/en/).

### (VII) Components, Blocks and Resources <a name="a-c7"></a>

All Reusable Components present in [Components](src/components).

All Reusable Page Block are present in [Blocks](src/blocks).

- _A Few Examples are Demonstrated Below_

```bash
import { QuadPhotos, CoverImage, AerosolHover, CarouselMarquee, ContactUs } from '@/blocks/exports'

import { PageEssentials, NextUp, Overview, FluffyPhoto, FluidButton } from '@/components/exports'
```

## 4. Tutorials <a name="tutorials"></a>

### (I) Cursor Usage <a name="t1"></a>

- **View Code for [Cursor](src/cursor/cursor.js) or [Cursor Actions](src/cursor/actions.js)**

Import :

```javascript
import { DispatchCursor, CURSOR_SHOW, CURSOR_STICKY, ... } from "@/cursor/actions";
```

In Order to Dispatch Animations use Functions as Follows:

```javascript
const dispatch = DispatchCursor()
```

Parameter Description :

> - **dispatch** - _Cursor Action are dispatched for Execution (Mandatory)_
>
> - **state** - **START** _to begin_ **END** _to end_
>
> - **color** - **Empty or null** _for Black, or Color name in CAPS eg_ **"RED"** or **"GREEN"**
>
> - **id** - **DOM ID** _of Element in Action_ or **END** _to end Action_
>
> - **text** - **Text** _to be Displayed eg "Hi" or "Explore" text, "CLOSE" or "PLAY" as icons_ or **END** _to end Action_
>
> - **video** - _Path to_ **VIDEO** _to be Displayed_ or **END** _to end Action_

> - _**Note 1** : When using **Sticky or Magnetic**, include a **data-magnetism** Attribute on Target Element_
>
> - _**Note 2** : Be Sure to Put **END** in state, id, text and video props to Exit Animations_
>
> - _**Note 3** : **CURSOR_REVEAL** requires **state: "END"** as well as **id** when Exiting unlike all others_

Cursor Actions with Parameters :

| Function             |          Parameters           | Description                             |
| :------------------- | :---------------------------: | :-------------------------------------- |
| `CURSOR_SHOW()`      |             `()`              | Displays Cursor                         |
| `CURSOR_HIDE()`      |             `()`              | Hides Cursor                            |
| `CURSOR_COLOR()`     |           `(color)`           | Change the Color of Cursor              |
| `CURSOR_TEXT()`      |   `(dispatch, text, color)`   | Shows Jelly Blob with Text Inside       |
| `CURSOR_EXCLUSION()` |      `(dispatch, state)`      | Shows Jelly Blob with Exclusion Mode    |
| `CURSOR_STICKY()`    |    `(dispatch, id, size)`     | Make Element Stick to Cursor            |
| `CURSOR_MAGNETIC()`  |       `(dispatch, id)`        | Make Cursor Magnetized to Element       |
| `CURSOR_VIDEO()`     |   `(dispatch, video, size)`   | Show Jelly Blob with a Video Inside     |
| `CURSOR_REVEAL()`    | `(dispatch, state, id, size)` | Reveal Text and make it Stick to Cursor |
| `CURSOR_UNDERLINE()` |         `(state, id)`         | Expand Collapse Underline of Text       |

Dispatch Actions with Global State Reducer :

```javascript
const dispatch = DispatchCursor()
```

| Function                                               |            Values            | Description           |
| :----------------------------------------------------- | :--------------------------: | :-------------------- |
| `dispatch({ type: "SET_THEME", value: "LIGHT_MODE" })` | `("LIGHT_MODE","DARK_MODE")` | Set Website Theme     |
| `dispatch({ type: "SET_SHOWREEL", value: true })`      |       `(true, false)`        | Show or Hide Showreel |

Usage Demo :

```javascript
import { CURSOR_SHOW, CURSOR_HIDE, CURSOR_TEXT, CURSOR_MAGNETIC, DispatchCursor } from '@/cursor/actions'

export default function CursorDemo() {
  const dispatch = DispatchCursor()

  return (
    <div onMouseEnter={CURSOR_SHOW} onMouseLeave={CURSOR_HIDE}>
      <h3 onMouseEnter={() => CURSOR_COLOR('RED')} onMouseLeave={() => CURSOR_COLOR('END')}>
        Change Color of Cursor
      </h3>
      <h3 onMouseEnter={() => CURSOR_TEXT(dispatch, 'HELLO!', 'RED')} onMouseLeave={() => CURSOR_TEXT(dispatch, 'END')}>
        Show Red Jelly Blob on Hover
      </h3>
      <h3 id="imSticky" data-magnetism onMouseEnter={() => CURSOR_STICKY(dispatch, 'imSticky', 'SMALL')} onMouseLeave={() => CURSOR_STICKY(dispatch, 'END')}>
        Stick Text to The Cursor along with Cursor Exclusion Mode on Hover
      </h3>
      <h3
        id="imVideoBlob"
        onMouseEnter={() => {
          CURSOR_VIDEO(dispatch, '/static/videos/showreel/reel.mp4', 'MEDIUM')
          CURSOR_REVEAL(dispatch, 'START', 'imVideoBlob', 'MEDIUM')
        }}
        onMouseLeave={() => {
          CURSOR_VIDEO(dispatch, 'END')
          CURSOR_REVEAL(dispatch, 'END', 'imVideoBlob')
        }}
      >
        Show Video Blob along with Reveal Animation on Hover
      </h3>
    </div>
  )
}
```

### (II) Aerosols Hover Usage <a name="t2"></a>

- **View Code for [Aerosols Hover](src/blocks/aerosolHover.js)**

Import:

```javascript
import AerosolHover from '@/blocks/aerosolHover'
```

Parameters:

| Parameter |   Type   | Description                                                      |
| :-------- | :------: | :--------------------------------------------------------------- |
| `line1`   | `string` | Message for First Line                                           |
| `line2`   | `string` | Message for Second Line                                          |
| `type`    | `string` | (hi or circles) Show Hello in Languages or Show Floating Circles |

Usage: Call With Parameters

```javascript
<AerosolHover line1="You define" line2="we design" type="circles" />
```

or

```javascript
<AerosolHover line1="drop us" line2="a message" type="hi" />
```
