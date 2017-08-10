# typescript-init

A template for creating typescript libraries (and generate static websites) optimized for development in [Visual Studio Code](https://code.visualstudio.com/).

This project is inteneded as a 'minimal' copy and paste setup covering

* transpiling and bundling of TypeScript libraries using [webpack and TypeScript](https://webpack.js.org/guides/webpack-and-typescript/),
* unit testing and reporting, e.g., coverage, using [Karma](http://karma-runner.github.io/1.0/index.html) and [Jasmine](https://jasmine.github.io/),
* template-based generation of static websites using [Jekyll](http://jekyllrb.com/),
* analyizing the source code using [TSLint](https://palantir.github.io/tslint/),
* generating documentation from source code and markdown files using [TypeDoc](https://github.com/TypeStrong/typedoc),
* as well as various workflow tweaks facilitating development performance.

Even though this template is intended to be as minimal as required it is quite complex (especially for TypeScript beginner). Hence, we strongly advise to **carefully read this README**.


## Quickstart | Prepare, Copy and Paste, Verify, then Modify

### Prepare

This project is optimized with the following environment in mind:

* version control system: [git](https://git-scm.com/) - [download](https://git-scm.com/downloads)
* code editor: [Visual Studio Code](https://code.visualstudio.com/) - [download](https://code.visualstudio.com/Download)
* JavaScript runtime: (Node.js)[https://nodejs.org/en/] - [download](https://nodejs.org/en/download/), prefer [installation via chocolatey on windows](https://chocolatey.org/packages/nodejs)
* static website generator (optional): [Jekyll](http://jekyllrb.com/) - [installation](https://jekyllrb.com/docs/installation/), prefer [installation via chocolatey on windows](https://jekyllrb.com/docs/windows/#installation-via-chocolatey)

All following steps expect git, vs code, node, and (optional) jekyll to work. 
You can verify this by opening an integrated terminal in vs code and run the commands ```git --version```, ```node --version```, and ```jekyll --version``` (optional). Each should print out the currently installed version.


### Copy and Paste

Create a local folder, e.g., ```ts-init```, with a copy of this repository's source code (clone, download, fork, ...).

We suggest to install a set of recommended extensions when working with this template (see ```.vscode/extensions.json```). For it

* open your project folder in vs code,
* open the extensions panel in vs code,
* via the 'more' menu (button with three dots in the top right) trigger ```Show Workspace Recommended Extensions```,
* install all of the listed extensions and reload vs code.


### Verify

Before you start modifying your project, verify that everything works out of the box:

* open your project folder in vs code,
* open an integrated terminal and run ```npm install```.

This should install all required node packages (see ```devDependencies``` in ```package.json```) for the project in ```ts-init/node_modules```.

* Finally, run ```npm run-script deploy``` (this can also be done using the Run-Task command in vs code, more later).

This command triggers a sequence of commands (see ```scripts``` in ```package.json```) for a full deployment into the ```ts-init/dist``` folder containing a transpiled and bundled JavaScript library, a static website, some test-results, and the source code documentation including this readme.


### Modify

General note: start with something that works (e.g., previous step), and customize, modify, and extend this template iteratively in as tiny steps as possible.

If you prefer long debugging sessions by means of trial and error, and like to procrastinate by reading hundreds of forums, blogs, and manuals for days and weeks, you should skip the following documentation covering some aspects of this template's configuration. If not, be reminded that this documentation cannot and is not intended to fully mitigate the overhead that comes with npm, node, ... :P


# ToDo

The following topics will be discussed briefly as soon as possible:

* jekyll config / deploy - website file names
* loading data at transpile time using require
* remarks on tslint and source code analysis
* remarks on tsconfig
* remarks on the actual example fiblib
* remarks on testing and unit as well as coverage reports
* overal project structure - client, dist, source, test (replicate source etc..)
* using keybindings and tasks -> tasks.json
* starting and debugging the library/websites using chrome
* briefly talk about use of bootstrap in this example
* remarks on cspell, spellchecking


## Related Work and Resources

* [ES6 Specification](http://www.ecma-international.org/ecma-262/6.0/)
* [ES6 Modules](http://www.2ality.com/2014/09/es6-modules-final.html)
* [Webpack 2.2](https://webpack.js.org/configuration/)
* [TypeScript](https://www.typescriptlang.org/docs/tutorial.html)
* [TypeScript Coding Guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines) -->
