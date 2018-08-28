# Chromotome

A collection of color palettes used in order to easily colorize new creative coding projects. New palettes will be continuously added, and all existing ones are subject to change.

An overview of the different palettes will be available soon.

Installation:

```
npm install -save chromotome
```

Basic usage:

```javascript
// Can both use ES6 import and CommonJS require.
import Tome from 'chromotome';

// Palettes can be acquired randomly...
let palette = Tome.getRandom();

// ...or by name
palette = Tome.get('Prettiest Palette');

// Access the colors through the 'colors' property.
console.log(palette.colors); // --> [ '#abc', '#cba', '#bac' ]
```
