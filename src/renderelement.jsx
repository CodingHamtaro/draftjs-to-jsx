import React from "react";
import reactStringReplace from "react-string-replace"
import {Mention, Link, Entity} from "./entities.jsx"

/**
 * RenderElement class will generate an HTML valid element depending from the provided type. This also detects if the current block contains inline styles and entities.
 * 
 * @class RenderElement
 * @extends {React.Component}
 */
class RenderElement extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        var text = this.props.text;

        // prioritized first the entities if present
        if (this.props.hasOwnProperty('entityRanges') && this.props.entityRanges.length > 0 && typeof this.props.hasOwnProperty('entityMap')) {
            var textEntityPool = [];
            this.props.entityRanges.forEach(entity => {
                var entityString = text.substr(entity.offset, entity.length)
                textEntityPool.push({
                    value: entityString,
                    key: entity.key,
                    type: this.props.entityMap[entity.key].type
                })
            })

            textEntityPool.forEach((textEntity, tKey) => {
                var pattern = new RegExp(`(${textEntity.value})`, 'gi');
                text = reactStringReplace(text, pattern, (match, i) => {
                    switch (textEntity.type) {
                        case 'MENTION':
                            return (<Mention key={`entity${tKey}${i}`} text={match} data={this.props.entityMap[textEntity.key].data}/>)
                            break;
                        case 'LINK':
                            return (<Link key={`entity${tKey}${i}`} text={match} data={this.props.entityMap[textEntity.key].data}/>)
                            break;
                        default:
                            return (<Entity key={`entity${tKey}${i}`} text={match} data={this.props.entityMap[textEntity.key].data}/>)
                            break;
                    }
                })
            })
        }

        // then handle the rest of the inline styles if present
        if (this.props.inlineStyleRanges.length > 0) {
            var stylizedTextPool = [];
            this.props.inlineStyleRanges.forEach(inlineStyle => {
                var stylizedString = text.substr(inlineStyle.offset, inlineStyle.length)
                stylizedTextPool.push({
                    value: stylizedString,
                    style: inlineStyle.style
                })
            });

            stylizedTextPool.forEach((stylizedString, sKey) => {
                var pattern = new RegExp(`(${stylizedString.value})`, 'gi');

                text = reactStringReplace(text, pattern, (match, i) => {
                    switch (stylizedString.style) {
                        case 'BOLD':
                            return (<strong key={`is${sKey}${i}`}>{match}</strong>)
                            break;
                        case 'ITALIC':
                            return (<em key={`is${sKey}${i}`}>{match}</em>)
                            break;
                        case 'UNDERLINE':
                            return (<u key={`is${sKey}${i}`}>{match}</u>)
                            break;
                        case 'STRIKETHROUGH':
                            return (<del key={`is${sKey}${i}`}>{match}</del>)
                            break;
                    }
                })
            })
        }
        
        switch (this.props.type) {
            case 'unstyled':
            case 'paragraph':
                return (<p key={this.props.elemkey}>{text}</p>)
                break;
            case 'header-one':
                return (<h1 key={this.props.elemkey}>{text}</h1>)
                break;
            case 'header-two':
                return (<h2 key={this.props.elemkey}>{text}</h2>)
                break;
            case 'header-three':
                return (<h3 key={this.props.elemkey}>{text}</h3>)
                break;
            case 'header-four':
                return (<h4 key={this.props.elemkey}>{text}</h4>)
                break;
            case 'header-five':
                return (<h5 key={this.props.elemkey}>{text}</h5>)
                break;
            case 'header-six':
                return (<h6 key={this.props.elemkey}>{text}</h6>)
                break;
            case 'unordered-list-item':
                return (<li key={this.props.elemkey}>{text}</li>)
                break;
            case 'ordered-list-item':
                return (<li key={this.props.elemkey}>{text}</li>)
                break;
            case 'blockquote':
                return (<blockquote key={this.props.elemkey}>{text}</blockquote>)
                break;
            case 'code-block':
                return (<pre key={this.props.elemkey}>{text}</pre>)
                break;
            default:
                return (<div key={this.props.elemkey}>{text}</div>)
                break;
        }
    }
}

module.exports = RenderElement;