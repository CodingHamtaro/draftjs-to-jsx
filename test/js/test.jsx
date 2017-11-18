import Converter from "../../src/app.jsx";
import React from "react";
import ReactDOM from "react-dom";

var task1 = {
    "blocks": [{
            "entityRanges": [],
            "inlineStyleRanges": [],
            "depth": 0,
            "type": "header-two",
            "text": "This is a Title",
            "key": "e3fag"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [{
                    "style": "BOLD",
                    "length": 4,
                    "offset": 53
                },
                {
                    "style": "ITALIC",
                    "length": 6,
                    "offset": 59
                },
                {
                    "style": "UNDERLINE",
                    "length": 9,
                    "offset": 71
                }
            ],
            "depth": 0,
            "type": "unstyled",
            "text": "This is a paragraph, with some inline styles such as bold, italic, and underline.",
            "key": "etd8o"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [{
                    "style": "BOLD",
                    "length": 15,
                    "offset": 31
                },
                {
                    "style": "BOLD",
                    "length": 27,
                    "offset": 48
                },
                {
                    "style": "ITALIC",
                    "length": 15,
                    "offset": 31
                },
                {
                    "style": "ITALIC",
                    "length": 27,
                    "offset": 48
                },
                {
                    "style": "UNDERLINE",
                    "length": 27,
                    "offset": 48
                }
            ],
            "depth": 0,
            "type": "unstyled",
            "text": "Styles can overlap, like this: bold and italic, bold, italic, and underline.",
            "key": "750vk"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [{
                    "style": "UNDERLINE",
                    "length": 25,
                    "offset": 75
                },
                {
                    "style": "ITALIC",
                    "length": 15,
                    "offset": 80
                },
                {
                    "style": "BOLD",
                    "length": 5,
                    "offset": 85
                }
            ],
            "depth": 0,
            "type": "unstyled",
            "text": "Style overlaps do not have to start or end at the same place, for example: one, two, three, two, one.",
            "key": "abe9l"
        }
    ]
}

var task2 = {
    "blocks": [{
            "entityRanges": [],
            "inlineStyleRanges": [],
            "depth": 0,
            "type": "unstyled",
            "text": "We can have bullet-point lists:",
            "key": "gsfa"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [],
            "depth": 0,
            "type": "unordered-list-item",
            "text": "bullets",
            "key": "4ekf9"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [],
            "depth": 0,
            "type": "unordered-list-item",
            "text": "are",
            "key": "fksk7"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [],
            "depth": 0,
            "type": "unordered-list-item",
            "text": "useful",
            "key": "doaj3"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [],
            "depth": 0,
            "type": "unstyled",
            "text": "And numbered lists:",
            "key": "a6m07"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [],
            "depth": 0,
            "type": "ordered-list-item",
            "text": "numbers",
            "key": "fg1a3"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [],
            "depth": 0,
            "type": "ordered-list-item",
            "text": "are",
            "key": "8dt2t"
        },
        {
            "entityRanges": [],
            "inlineStyleRanges": [],
            "depth": 0,
            "type": "ordered-list-item",
            "text": "fun",
            "key": "4a6lo"
        }
    ]
}

var task3 = {
    "blocks": [{
        "entityRanges": [{
                "key": 0,
                "length": 13,
                "offset": 27
            },
            {
                "key": 1,
                "length": 13,
                "offset": 45
            }
        ],
        "inlineStyleRanges": [],
        "depth": 0,
        "type": "unstyled",
        "text": "We can mention people like @nicolas-cage and link to url's.",
        "key": "2emh7"
    }],
    "entityMap": {
        "0": {
            "data": {
                "img": {
                    "_id": "59d785576a02553c4109c8ce",
                    "contentType": "image/png",
                    "originalFileSize": 2271,
                    "originalFileName": "images/avatar.png",
                    "uuid": "734114e0-aa9a-11e7-8f69-831ae15637d2"
                },
                "text": "Nicolas Cage",
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

ReactDOM.render(<Converter elemkey={`article-${new Date().valueOf()}`} content={task1}/>, document.querySelector('#container #task1'));

ReactDOM.render(<Converter elemkey={`article-${new Date().valueOf()}`} content={task2}/>, document.querySelector('#container #task2'));

ReactDOM.render(<Converter elemkey={`article-${new Date().valueOf()}`} content={task3}/>, document.querySelector('#container #task3'));