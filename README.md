# Introduction
This is a sample project for the library [@stack-spot/vscode-async-webview](https://github.com/stack-spot/vscode-async-webview). Besides acting as
an example it's also a great quick starter for a new project, just clone and start editing it!

# Pre-installation
1. Make sure you have Node >= 18 installed. To check this, type `node -v` in a terminal window. If you don't have it, follow the
instructions [here](https://nodejs.org/en).
2. Make sure you have PNPM >= 8 installed. To check this, type `pnpm -v` in a terminal window. If you don't have it, in a terminal window
type:
```sh
corepack enable
corepack prepare pnpm@latest --activate
```

If the commands above don't work, please follow the instructions [here](https://pnpm.io/installation).

# Installation
1. Clone the repository.
2. In a terminal window, in the root directory, run:
```sh
pnpm i
```

## Compilation
To compile everything, you can just run:
```sh
pnpm compile
```

You can also compile the packages separately:
- `pnpm compile:extension`
- `pnpm compile:webview`

The compiled files will be created at `./out`.

## Bundling
To copy the required meta-data to the build directory (`./out`), you must run:
```sh
pnpm bundle
```

## Packaging
To create the `.vsix` file for distributing the extension, run:
```sh
pnpm package
```

Make sure you have both compiled and bundled the app before running this command. In summary, to create a new package, you will run:
```sh
pnpm compile
pnpm bundle
pnpm package
```

The file will be created at `./out/vscode-extension-{version}.vsix`.

## Running and debugging
To run and debug the extension, open the root directory in VSCode, place your breakpoints, and press "F5".

## Running the webview in the browser
It's no great to develop and debug a web app from within a vscode extension. For this reason, you can run the webview on the browser just
like any other web application:

```sh
cd packages/webview
pnpm dev
```

The webview is a React app and by running the command above you can execute it in development mode with hot reloading.

To simulate the api that will be available on vscode, we have a mock at: `packages/webview/src/bridge-mock.ts`. Whenever a new method is added
to the api, its mock must also be implemented.
