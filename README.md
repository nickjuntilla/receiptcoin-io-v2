## Receipt Coin

To get started run type `npm install`.
Once complete type `npm start`

### Overview

This application uses `create-react-app` by Facebook. (https://github.com/facebook/create-react-app)

In addition we use a few libraries:

* Styled Components (https://www.npmjs.com/package/styled-components)
* ReactPlayer (https://www.npmjs.com/package/react-player)
* React Router (https://www.npmjs.com/package/react-router-dom)
* Redux\* (https://www.npmjs.com/package/react-redux)

- Is installed, but not used.

# Architecture

The architecture of the project is pretty simple.

* `App.js` is the main entry point.
* The `Pages` folder holds all the pages in the site
* These `Pages` files get imported into `App.js` and become our routes
* In each page has one or more Components
* These components are organized by a corresponding folder in the components directory

For example:

In `/pages/home` there is a few components. These can be found in `/src/components/_home`.

Each Component has three files

`1. index.js`
`2. styles.js`
`3. test.js`

`index.js` is where all the logic goes. `styles.js` is where the styling/css goes.
First we style a component then we import it into the index.

In addition, there's a `/src/constants` file. In here we store out global colors
and styles. We can import these into the `styles.js` for easier theming management.
Also in `/src/constants` are a few `layout` components. These are used globally,
so don't touch these. For global styles, we use `injectGlobal` from `styled-components`
and you can find this in `index.js`

# Deployment

This is currently set up to Firebase. You'll want to change this to your own
Firebase repo. There's a `config` folder with a `key.js` file. Simply plaste
the firebase credentials in here. They are them imported into `/src/database/index` file.

Additional deployment details can be found here (https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)

Once everything is set up just run `npm run build` then `firebase deploy`.
