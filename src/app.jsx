import React from "react";
import List from "./list.jsx";
import RenderElement from "./renderelement.jsx"


/**
 * Coverter class will create a generated article block that contains various html elements
 * 
 * @class Converter
 * @extends {React.Component}
 */
class Converter extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        var toRender = [];
        if (this.props.content.hasOwnProperty('blocks')) {
            var blocks = this.props.content.blocks;

            var currentList = "",
                previousType = "";
            blocks.forEach((block, bKey) => {
                var textContent = block.text,
                    elem = "";

                if (block.type == "unordered-list-item" || block.type == "ordered-list-item") {
                    //  starts of the list
                    if ((previousType != block.type || previousType == "") && currentList == "") {
                        currentList = new List()
                        currentList.add(block)
                    }

                    // if in the same list
                    if (previousType == block.type) {
                        currentList.add(block)
                        // this checks if this is the end of the loop
                        if (typeof blocks[(bKey + 1)] == "undefined") {
                            toRender.push(currentList.produce())
                        }
                    }
                } else {
                    // make sure to end the list
                    if (currentList != "" && block.type != previousType) {
                        toRender.push(currentList.produce())
                        currentList = "";
                    }
                    
                    elem = <RenderElement elemkey={block.key} text={block.text} type={block.type} inlineStyleRanges={block.inlineStyleRanges} entityRanges={block.entityRanges} entityMap={this.props.content.entityMap}/>
                }
                previousType = block.type;
                if (elem != "") {
                    toRender.push(elem);
                }
            });
        }
        return (
            <article key={`article-${this.props.elemkey}`}>
                {toRender}
            </article>
        );
    }
}

module.exports = Converter;