# About

This is a POC app that was scaffolded with [Create React App](https://github.com/facebookincubator/create-react-app), developed on a Mac, and confirmed to be working adequately in recent versions of Chrome & Firefox. It's a pretty standard client-side React 16 implementation, built with Webpack, using CSS modules, and just a bit of local state management. Test coverage is included by means of Jest & Enzyme.

I probably spent about half a day working on this in total, there are many improvements which could be made, some of which are detailed below.

Demo: https://jonalport.github.io/progress-bars

![Screenshot of progress-bars app](/screenshot.png?raw=true "Screenshot")

## Getting started

### Required
Recent versions of Node & NPM

### Install dependencies
npm install

### Run app locally on port 3000
npm start

### Run tests
npm test

### Run tests and watch for changes
npm test -- --watch

### Run linting
npm run lint

### Build production release
npm run build

## Potential improvements

### CSS strategy
We are using CSS modules which are great for name-spacing our styles and keeping things modular. However it would be good to have a strategy for sharing variables and styles between components, in order to keep things DRY, possibly using cssnext/postcss. Stylelint could also be used to lint the CSS.

### Testing
At the moment we just have some basic unit tests, testing our components in isolation. The addition of end-to-end tests using selenium/webdriver would allow us to test the system as a whole. Component test coverage could also be improved as it is currently quite sparse.

### Continuous Integration
It would be good to have an automatic deployment process hooked up to our repo, which ran our test suites and deployed the app to staging & production environments.

### Semantic markup
We have used DIVs to lay out our progress bars, but there does exist a more suitable "PROGRESS" HTML element. It may well be better to use this, although it requires more investigation as it seems a bit tricky to render/style it reliably across browsers.

### Design/UX
We could spend some time improving the usability and aesthetics of this fine UI. For example, I can already see that the buttons don't look that clickable. It might be interesting to play with some CSS animations on the striped background, and make use of a select box component that fits our design better.

### A/B testing
If we really wanted to improve the usability of the app, we could employ some A/B testing techniques to compare the how variations in the UI appealed to users.

### User testing
Similarly to A/B tests, live user testing sessions with real users could yield some valuable insight into usability.

### Accessibility
While we have added some ARIA attributes to aid users making use of assistive devices & screen readers, we could go to greater lengths to ensure the application was available and easy to use for a wider audience. For example, I can see some contrast issues with the current font / background combination.

### Modularisation
It might be nice to refactor the app into a few more components, say one which managed the controls, and another for the bars as a collection.

### Server rendering
Could be interesting to turn this into a universal app, which should make it load quicker as well as improving SEO.

### Browser testing
This was only tested in recent versions of modern browsers.

### A purpose
The app is kinda useless at the moment, it would be good to have the progress bars measuring/controlling something meaningful or useful.
