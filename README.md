# draftjs-to-jsx

NOTE: This is just for the examination / testing only.

This ReactJS-based tool that will alow the user to convert the JSON exported file provided by DraftJS to HTML / JSX.

## Dev Note

I developed this tool using a machine that currently using **NodeJS version v6.11.4** and **Yarn version 1.3.2**. I've taken advantage on Yarn's features like caching and generating a .lock file - which is a great help for the dependency management.

Also special thanks for the tool below for making my development easier:
* [react-string-replace](https://github.com/iansinnott/react-string-replace)
    * For using prividing a better solution for converting string to array by splitting the string by using a RegExp pattern. This helps me to avoid using the ReactJS builtin functionality - dangerouslySetInnerHTML - that's out of place and a messy approach.

I personally enjoyed the test but honestly - I hate DraftJS exported JSON. The list aren't nested to the main parent. The overlaping inline styles and entities can't be achieved for now.

## Features

The tool currently supports the following:
* Basic element rendering
* Inline styling - e.g. 'BOLD', 'ITALIC', 'UNDERLINE'
* Entities / Component

## Limitations

Just like any other tool, this one isn't perfect. Currently it doesn't support the following:
* Overlaping inline styles and entities
* Depth of list elements

## Installing Dependencies

The package.json already contains the exact version of the libraries needed.

Installing via NPM CLI:

```bash
$ npm install
```
Or if you have already installed Yarn on your machine:

```bash
$ yarn install
```

### Usage

```jsx
// Assume that your currently under test/js directory.
import Converter from "../../src/app.jsx";
import React from "react";
import ReactDOM from "react-dom";

var task = {
    "blocks": [{
        "entityRanges": [{
                "key": 0,
                "length": 9,
                "offset": 27
            },
            {
                "key": 1,
                "length": 13,
                "offset": 41
            }
        ],
        "inlineStyleRanges": [],
        "depth": 0,
        "type": "unstyled",
        "text": "We can mention people like @steve-kv and link to url's.",
        "key": "2emh7"
    }],
    "entityMap": {
        "0": {
            "data": {
                "img": {
                    "_id": "59d785576a02553c4109c8ce",
                    "contentType": "image/png",
                    "originalFileSize": 2271,
                    "originalFileName": "avatar.png",
                    "uuid": "734114e0-aa9a-11e7-8f69-831ae15637d2"
                },
                "text": "steve-kv",
                "id": "59d785576a02553c4109c8cd"
            },
            "mutability": "IMMUTABLE",
            "type": "MENTION"
        },
        "1": {
            "data": {
                "description": "This is a link to Google",
                "url": "http://www.google.com"
            },
            "mutability": "MUTABLE",
            "type": "LINK"
        }
    }
}

ReactDOM.render(<Converter elemkey={`article-${new Date().valueOf()}`} content={task}/>, document.querySelector('#container #task'));
```

## Testing

You could view the index.html under "./test" folder. I already provided the generated js file to view the demo. To change the source code of the bundle.js file simply edit first the "./test/js/test.jsx". Then after that generate the js file by using Browserify CLI:

```bash
$ browserify -t [ babelify --presets [ react ] ] test/js/test.jsx -o test/js/bundle.js
```