# RaveJS

┏( ˆ◡ˆ)┛ ┗(ˆ◡ˆ )┓ RaveJS rocks! ┏( ˆ◡ˆ)┛ ┗(ˆ◡ˆ )┓

## What is RaveJS?

> **Note**: RaveJS is still under development.  Many parts are incomplete at
this time.  Please give it a try, though, and let us know what you think.
Or check out the open issues, if you'd like to contribute.

Rave eliminates configuration, machinery, and complexity.  Stop configuring
and tweaking complicated machinery such as file watchers, minifiers, and
transpilers just to get to a runnable app.  Instead, go from zero to "hello
world" in 30 seconds without touching a configuration file.  In the next 30
seconds, easily add capabilities and frameworks to your application simply
by installing *Rave Extension* packages from
[npm](http://www.npmjs.org/search?q=rave-extension) or
[Bower](http://bower.io/search/?q=rave-extension). Finally, install additional
*Rave Extension* packages to apply your favorite build, deploy, and testing
patterns.

## Why should I use RaveJS?

-	Requires little or no machinery, configuration, or maintenance
-	Enables brain-dead-simple project startup
	-	Modern, modular architectures are simple, too!
-	Offers a huge selections of packages on npm and Bower
-   Provides a platform for third-party integration
-	Embraces the future: an ES6 Loader polyfill is built in
-	Creates easy-to-follow demos, tutorials, and prototypes


## Does RaveJS require a PhD in Rocket Science?

No.  If you can do `npm install` or `bower install` and if you can add
a single script element to an HTML page, you can master Rave!

Rave doesn't replace the tools you already love, such as gulp and grunt.
Rave just makes them much easier to use.

Rave is the absolute easiest way to get started with modules.  Author AMD,
CommonJS, or (soon) ES6 modules without setting up transpilers, file watchers,
or complex build scripts.


## How do I start?

### From scratch

Check out the [Quick Start using Bower](./docs/quick-start-bower.md)
and the [Quick Start using npm](./docs/quick-start-npm.md).

Then check the [docs/ folder](./docs/) for more information.

### From a Rave Starter

For a minimally-opinionated Starter,
[begin here](http://github.com/RaveJS/rave-start).

For an AngularJS-centric starter,
[begin here](http://github.com/RaveJS/rave-start-angular).

Don't see a Starter for your favorite stack?  Create one!

## How does it work?

Rave uses the metadata *you're already aggregating* when you use JavaScript
package managers such as [npm](http://npmjs.org) and [Bower](http://bower.io).
This moves the configuration task to package authors and integrators.

Package authors already create metadata when they publish their
packages to npm and Bower.  Rave uses the metadata in package.json and
bower.json to auto-configure an ES6 Loader (or Loader shim) so there's no
messy AMD config or browserify build process.  (Soon) Rave will use
metadata to automate the build/deploy and testing processes, too.

Rave Extensions allow third parties to provide new capabilities
to Rave or to your application.  Install the extensions you desire easily
through npm (`npm install --save <name-of-rave-extension>`) or Bower
(`bower install --save <name-of-rave-extension>`).

Rave Extensions do many things:

- Auto-configure your application's loading patterns
- Auto-configure your application's build patterns (soon)
- Auto-configure your application's deployment patterns (soon)
- Auto-configure your application's testing patterns (target: summer/fall 2014)
- Integrate third-party packages into your application by supplying additional
  metadata or glue code

Rave extensions are easy to create and easy to find on npm and
Bower by searching for "[rave-extension](http://www.npmjs.org/search?q=rave-extension)".


## Does it scale?

Yes. Rave easily scales to applications containing hundreds of modules
from dozens of third-party packages.  It doesn't matter if those packages
are available on npm or Bower -- or whether they're authored in AMD, CommonJS,
or (soon) ES6 format.  Rave makes it all work seamlessly.


## About

RaveJS is one of the many stand-alone components of
[cujoJS](http://cujojs.com), the JavaScript Architectural Toolkit.
