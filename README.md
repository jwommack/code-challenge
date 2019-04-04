# JonWommack Readme

Documentation included below is the duplicated from the [Create React App](https://github.com/facebook/create-react-app) generated ReadMe and mostly describes utilities from React-scripts.

Using that and the associated React-tools package to provide easy server orchestration for testing and Jest support.

Some corners could use a bit more time for this to be what could be considered production ready. There's no real validation going on under the hood beyond what's built in in the tooling and some of the limitations of using a noSQL database would make that particularly necessary for a release level project. 

The code itself should be relatively self documenting in most cases clear nomenclature was preferred over extensive commenting.

# [Create React App](https://github.com/facebook/create-react-app).

 A portion of this was bootstrapped from the create react app script's bootstrapper to provide scripts for managing localhost. 
 
 A portion of the scripts section of this readme is also generated from that.
 
## What was used

React, Material-ui, Sequelize, Node, Express, cors, bodyParser.

Jest is supported but no tests have been written, instead time was spent getting up to speed with node/react/material-ui tools.

The same applies to Mobx where I opted to rely on the built in state management instead of dealing with adding it in and groking the differences.

 
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser with UI.

Open [http://localhost:3001](http://localhost:3001) to view the API endpoints.

#### API Endpoints
 - http://localhost:3001/mocks - list view endpoint
 - http://localhost:3001/mock/:id - GET/PUT/DELETE endpoint
 - http://localhost:3001/mock - POST endpoint
 

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.