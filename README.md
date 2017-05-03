
*template.js* is a ...


## Getting Started

The ... can be integrated into HTML5 as follows:
```
<canvas id="foo" data-foo-bar="true">
    <!-- fallback -->
    Your browser does <strong>not support</strong> the <code>&lt;canvas&gt;</code> element.
</canvas>
```

This canvas can then be setup by ... using JavaScript as follows:
```
canvas = new Template.SomeClass("foo");
...
```

For canvas configuration the following data-attributes can be used:

| data attribute | description |
|----------------|-------------|
| ```data-foo-bar="{flag}"``` | ```{boolean}``` true for ..., false otherwise |


## Dependencies

template.js has the following non-dev dependencies:

* [```gl-matrix```](http://glmatrix.net/) is a Javascript matrix and vector library for high performance WebGL apps (MIT license).


## Source Structure

| directory | description |
|-------------------|-------------|
| ```source``` | 'public' interface of template.js: classes required for integrating this library into an app, e.g., ... |
| ```source/core``` | provides mainly the ... workflow and all ... related, non specialized classes. | 
| ```source/shaders``` | this directory contains all shaders. On build, the shaders are packed into the dist as well (and includes are resolved). |
| ```source/...``` | all specialized ... are located here. |
| ```source/tests``` | in this directory all tests are located. |


## NPM configuration

The following scripts are defined within the ```package.json``` package configuration.

| npm command | description |
|-------------|-------------|
| ```npm run build```        | pack distribution [webpack and TypeScript](https://webpack.js.org/guides/webpack-and-typescript/) |
| ```npm run build-min```    | pack minimal distribution |
| ```npm run check```        | code quality check [TSLint Rules](https://palantir.github.io/tslint/rules/) : ```tslint.json``` |
| ```npm run doc```          | generates the documentation in docs using [TypeDoc](https://github.com/TypeStrong/typedoc) |
| ```npm run test```         | unit tests using [Jasmine](https://jasmine.github.io/) and [Karma](http://karma-runner.github.io/1.0/index.html) : ```karma.config.js``` |
| ```npm run client```       | generates the client in dist using [Jekyll](https://jekyllrb.com/) : ```client/_config.yml``` |
| ```npm run client-watch``` | starts a process that watches the client folder and builds on change |
| ```npm run deploy```       | full deploy sequence: ```check```, ```test```, ```build```, ```build-min```, ```doc```, and ```client``` |

The above commands can be triggered directly from within a console of course (e.g., from within the Visual Studio Code terminal).


## Deployment 

For deployment adhere to the following sequence:

* first ```npm update``` should be run,
* then, ```npm run deploy``` should be run.


## Visual Studio Code configuration

"[Visual Studio Code](https://code.visualstudio.com/) is a code editor redefined and optimized for building and debugging modern web and cloud applications." 
Please not that the workspace configuration ```.vscode/settings.json``` has automatic format on save enabled.

#### tasks

All the above scripts, namely ```build, build-min, check, doc, test, client, client-watch, deploy``` as well as ```update``` (```npm update```) can be triggered from within Visual Studio Code.
The intended workflow is to bind a key (e.g., ctrl+alt+t) to open the task selection and trigger the desired task.
The tasks are configured in ```.vscode/tasks.json```.

#### launch

Two launch configurations for debugging from within Visual Studio Code are configured in ```.vscode/launch.json```:

* The ```Launch Example``` configuration opens the ```dist/example.html``` in a new Chrome tab.
* The ```Attach Example``` configuration attaches to an existing Chrome tab having the ```dist/example.html``` openend and enables debugging from within Visual Studio Code.


## Related Work

* [ES6 Specification](http://www.ecma-international.org/ecma-262/6.0/)
* [ES6 Modules](http://www.2ality.com/2014/09/es6-modules-final.html)
* [WebGL Stats](http://webglstats.com/)
* [Webpack 2.2](https://webpack.js.org/configuration/)
* [TypeScript](https://www.typescriptlang.org/docs/tutorial.html)
* [TypeScript Coding Guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
