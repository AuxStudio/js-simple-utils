# js-simple-utils

[![Build Status](https://travis-ci.com/AuxStudio/js-simple-utils.svg?branch=master)](https://travis-ci.com/AuxStudio/js-simple-utils)

A collection of Javascript utilities that we use internally.

## Installation

```
yarn add js-simple-utils
```

## Usage

```js
import { convertObjectToArray } from 'js-simple-utils';

const array = convertObjectToArray({ foo: { name: 'bar' } });
```

## Utilities

- [x] addZeroPadding - Takes a number/string and adds 0 padding if necessary and returns a string
- [x] cleanObject - Remove all falsy fields from an object
- [x] cloneObject - Returns a copy of an object
- [x] convertObjectToArray - Converts an object into an array, keeping the key (as id)
- [x] countKeys - Counts an objects keys (nesting included)
- [x] createUID - Creates a unique id
- [x] firstCharToUpperCase - Converts the first character of a string to uppercase
- [x] getDistanceBetweenCoordinates - Gets the distance between two sets of coordinates
- [x] getElapsedDays - Get the amount of days that have elapsed since a timestamp
- [x] getElapsedHours - Get the amount of hours (rounded) that have elapsed since a timestamp
- [x] getHoursMinutes - Get the hours and minutes in the format HH:MM from a timestamp
- [x] getPercentage - Takes two numbers and returns the percentage representation of them rounded
- [x] getPrettyDate - Get date in a pretty format from a timestamp
- [x] getRandomInt - Returns a random integer
- [x] isEmptyObject - Checks if an object is empty and returns true or false
- [x] reorderArrayItems - Reorders an item in an array
- [x] sortArrayOfObjectsByKey - Sorts an array of objects by key with optional reverse order functionality
- [x] stringToTitleCase - Convert a string to Title Case
- [x] validateCellNumber - Validate South African cell phone numbers
- [x] validateEmail - Validate email addresses
- [x] validateIDNumber - Validate South African ID numbers

## Development

1. Clone the project:

```
git clone https://github.com/AuxStudio/js-simple-utils
```

2. Do some work.
3. Create a PR.

## Releases

1. Run tests to make sure that they're passing.

```
yarn test
```

2. Login to npm

```
npm login
```

3. Run the publish script.

```
npm publish
```

## TODOS

- Fix export (use one object for both)
