# ts-monorepo-starter

## Installation

* Run `lerna bootstrap --hoist` to install all dependencies
* Run `lerna run build` to build all packages
* Import root folder in vscode
* Start developing

__REMARK__
* Global devDependecies are available in root project:
    * only scripts running from root project will work
    * if you want to run a script from a package individually, you'll need to add it to the devDependencies of the package.
    * run `lerna boostrap --hoist` again and a symlink will be made to the package so you're able to run it from there.
* If you change code in reusable/shared packages, you'll need to build it before it will recognized in vscode. Either run `lerna run build` from root or `npm run build` from package.
* If you add a new package that use other packages, make sure to reference the used packages in the `tsconfig.json` references section.
