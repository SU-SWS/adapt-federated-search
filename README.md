# adapt-federated-search
Federated Search for SAA using Algolia


## Embeddable Search Example
This repo also contains a working example showing how a React-based search widget could be exported
in a standalone form that could be embedded and used on other websites. 

1. A new script is added to package.json. This will run webpack and generate a special bundle with just the `<Search>` component and stylesheet. 
```
"scripts": {
    // ...
    "export": "NODE_ENV=production webpack --config export/webpack.config.js"
  },
```
1. The webpack configuration for this build process can be found in [export/webpack.config.js] (/export/webpack.config.js)

1. The entry script is [export/index.js] (export/index.js). This file just does a couple of things:
    - Loads React.
    -  Imports the stylesheet.
    - Tells the script to mount the `<Search>` component in the DOM on the element with the id of 'standalone-search'.

1. To use the search component on another site, you will need to:
    1. Run `npm run export` to run the build process.
    1. Copy the contents of the `dist` folder to your other website.
    1. Import the stylesheet in the `<head>`, import the javascript file before the closing body tag `</body>`, and add a div with the id `standalone-search` somewhere in your page markup _before_ the script.
    1. The `standalone-search` div will also need to provide the Algolia App ID, API key, and Index name using data attributes. You can see an example of this in [export/example.html] (export/example.html).
