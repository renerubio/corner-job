# Back-office react.js & parse.js

Simple back-office to "show" a list of data from [parse cloud](https://www.parse.com/), you can edit a row with "edit" and finally "create" a new row.  The framework to front-end is Bootstrap by cdn and all build with [react.js](https://facebook.github.io/react/).

## Screenshots

List request of Offerts
![Screenshot #1 - List request of Offerts](http://www.renerubio.es/corner-job/readme-screenshot/screenshot_01.JPG)

Edit an Offert
![Screenshot #2 - Edit an Offert request](http://www.renerubio.es/corner-job/readme-screenshot/screenshot_02.JPG)

Create a new Offert
![Screenshot #3 - Create a new Offert ](http://www.renerubio.es/corner-job/readme-screenshot/screenshot_03.JPG)

## Installation

1. Create a javascript parse app
2. Get into parse.js the key of your parse app
```javascript
// Insert your app's keys here:
var PARSE_APPLICATION_ID = "xxxxxxx";
var PARSE_JAVASCRIPT_KEY = "xxxxxxx";
Parse.initialize( PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY );
```

**More information about it in [Parse docs javascript guide](https://www.parse.com/docs/js/guide)** 

Only download the project because the external resourses are integrated with link/src or cdn :
* [react.js cdn](https://cdnjs.cloudflare.com/ajax/libs/react/0.13.1/react-with-addons.js)
* [jsxTransform.js](https://cdnjs.cloudflare.com/ajax/libs/react/0.13.1/JSXTransformer.js)
* [parse cdn](https://parse.com/apps/quickstart#parse_data/web/existing)

## Usage/Test

1. Load list offerts
2. Create offert
3. Edit a offert

## Issues
Please report any [issues](https://github.com/renerubio/corner-job/issues). New features and ideas that you'd like to see implemented will be welcome.

## Contributing
Feel free to send in any pull requests

## Inspiration
[@andrewimm](https://github.com/andrewimm)

## License

The MIT License (MIT)

Copyright (c) 2015 René Rodolfo Rubio Muñoz <renerodolforubio@gmail.com>
[@aViciarse](https://twitter.com/aViciarse) [http://renerubio.es/](http://renerubio.es/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
