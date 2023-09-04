# React Demo

This project demonstrates the principals of how I work with React, mainly:

- Extract main state & logic into custom hooks
- Extract reusable **_non React state_** logic into lib functions
- Extract complex logic/components into smaller components/functions
- Unit test core functionality
  - Ignoring simple configuration like non critical styling etc.

It is a simple page that displays a grid of XMen characters (from the 90s series) with a simple "Load More" button at the bottom of the page that will load the next 20 characters until there are no more available.

It uses the Marvel API, see: https://developer.marvel.com/

## Getting Started

1. Run: `cp .envrc.template .envrc`
1. Update the .envrc file with your API keys from https://developer.marvel.com/
1. Run `direnv allow` (requires `direnv`)
1. Run: `npm install && npm run start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Runs the Jest test suite.

### `npm run lint`

Runs ESLint over the codebase, exposing any lint issues.

### `npm run lint:fix`

Runs ESLint over the codebase and automatically fix where required.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
