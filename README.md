# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()





# Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to the app
    - Slice (cartSlice)
    - dispatch action
    - Selector


Types of testing (development)-
    1) Unit testing
    2) Integration testing
    3) End to End testing

# Setting up testing in our app
- Install React Testing Library
- Install Jest
- Install Jest dependency Babel
- Configure Babel
- Configure parcel config file to disable default Babel transpilation
- Jest - npx jsx --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel configuration
add this to babel.config.js- ['@babel/preset-react', { runtime : "automatic" }],
-  npm i -D @testing-library/jest-dom

plugin vscode-icons