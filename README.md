# Environment Setup

## Install Node.js and NPM
Download the latest version of node and npm from [here](https://nodejs.org/en/download/current/)

Install node.

Confirm node is configured correctly by opening a terminal window and running:
```
node --version

#should result in something like:
v7.1.0
```

## Clone this git repository
Open a terminal and cd into the directory where you want to keep your lesson projects.

Run:
```
git clone https://github.com/jasonmcaffee/lesson-0-environment-setup.git
```

Cd into the newly created dir and confirm files have been cloned:
```
cd lesson-0-environment-setup
ls

#should result in:
README.md	jasmine.json	package.json	src		test
```
## Create new Intellij/Webstorm project
File -> New -> Project From Existing Sources

Navigate to and select lesson-0-environment-setup

Follow the setup wizard.  Defaults options should be fine.

Confirm you can expand the left hand navigation folder "lesson-0-environment-setup" to see the project files (e.g. src, test, README.md, etc)

### Configure the project to use ECMAScript 6
For these lessons we will want to use the latest and greatest features of javascript.  By default Intellij will use ECMAScript 1.5, so we need to configure the project.

Go to Preferences -> Languages & Frameworks -> Javascript

Select ECMAScript 6 from the dropdown, then click done.

## Install the jasmine node module
For the first series of lessons we will be using jasmine for unit testing.

Node modules are installed to the local node_modules by default, but since we will be using jasmine for several lessons, we want to install it globally.

To install a node module globally, npm install is used, passing the "-g" option to indicate it should be installed globally.

FYI you can do this from the Intellij terminal window, or in a separate terminal which is pointed to the project directory.
```
npm install jasmine -g
```

### Take a look at the jasmine.json configuration file in the root dir
The jasmine config file is needed to run jasmine unit tests.  Take a quick look to get a sense of how it is configured.

## Take a look at package.json
NPM's configuration is defined in the package.json file.  In it we can define things like project dependencies (ie other 3rd party node modules), project name, description, and scripts that make it easy to define and run common tasks.

The scripts section contains a "test" script where environment variables are set, and jasmine is run in order to execute the tests.

## Run the unit test defined in test/example.spec.js
Now we are ready to confirm everything is configured and working as expected.

```
npm run test

#Should result in something like:
Started
.


1 spec, 0 failures
Finished in 0.003 seconds
```

Hooray! You have completed lesson 0!



