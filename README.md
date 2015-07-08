# Gyropedia
Node.js based client-end site maintenance for the Ponychan Wiki.

The frontend directory consists of the source code that gets compiled 
into the outputted client-end CSS and Javascript. This is majorly a 
solution to a number of cross-browser compatibility issues and will 
simplify the dev workspace.

*   CSS - Vanilla, vendor prefixed, with fallbacks for latest specs.
*   JS - Compiled as Typescript, inspected with TSLint.

## Requirements

*   Node.js 0.12 (or equivalent version) here: https://nodejs.org
*   NPM - ships with node.js installation.

## Installation

1.  From the project root, run `npm install`.
2.  Once all the dependencies have installed, run `npm start`
