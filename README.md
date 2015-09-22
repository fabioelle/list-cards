# list-cards — List cards in AngularJS

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.


## Dependencies
Project Dependencies.

* "angular": "~1.4.6",
*"angular-route": "~1.4.6",
* "angular-resource": "~1.4.6",
* "angular-loader": "~1.4.6",
* "angular-mocks": "~1.4.6",
* "html5-boilerplate": "~5.2.0",
* "angular-cardstatus-directive": "~0.0.0"


### Prerequisites
You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).


### Install Dependencies
I have two kinds of dependencies in this project: tools and angular framework code.  The tools help us manage and test the application.

* We get the tools we depend upon via 'npm', the [node package manager][npm].
* We get the angular code via 'bower', a [client-side code package manager][bower].

I have preconfigured 'npm' to automatically run 'bower' so we can simply do:

'''
npm install
'''

Behind the scenes this will also call 'bower install'.  You should find that you have two new folders in your project.

* 'node_modules' - contains the npm packages for the tools we need
* 'app/bower_components' - contains the angular framework files



### Run the Application
I have preconfigured the project with a simple development web server.  The simplest way to start this server is:

'''
npm start
'''

Now browse to the app at 'http://localhost:8000/app/index.html'.


## Directory Layout
```
├── app/                    --> all of the source files for the application
├────  app.css               --> default stylesheet
├────  app.js                --> main application module
├────  images/			    --> directory images
├────  view/                 --> the view template and logic
├──────  cards.css             --> the stylesheet view
├──────  cards.html            --> the partial template
├──────  cards.js              --> the controller logic
├── bower.json            --> config file for Bower
├── karma.conf.js         --> config file for running unit tests with Karma
├── LICENSE               --> file for License
├── package.json          --> config file for Package
├── README.md             --> Readme File

```

