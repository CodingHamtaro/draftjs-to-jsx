import React from "react"

/**
 * Mention class will generate the Mention component, and it also includes the image and the username of the mentioned user.
 * 
 * @class Mention
 * @extends {React.Component}
 */
class Mention extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span className="tooltips highlight red">
                {this.props.text}
                <div>
                    <img src={this.props.data.img.originalFileName} alt={this.props.data.text}/>
                    <label htmlFor="user">{this.props.data.text}</label>
                </div>
            </span>
        )
    }
}

/**
 * Link class will simply generate a link element with proper title
 * 
 * @class Link
 * @extends {React.Component}
 */
class Link extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <a href={this.props.data.url} title={this.props.data.description} target="_blank">{this.props.text}</a>
        )
    }
}

/**
 * Entity class will generate a simple entity which inwraps the text inside the span
 * 
 * @class Entity
 * @extends {React.Component}
 */
class Entity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span>{this.props.text}</span>
        )
    }
}

module.exports = {Mention, Link, Entity}