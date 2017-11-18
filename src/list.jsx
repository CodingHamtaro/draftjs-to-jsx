import React from "react";
import RenderElement from "./renderelement.jsx"

/**
 * List class will handle the generation of a list element
 * 
 * @class List
 */
class List {
    constructor() {
        this.list = []
    }
    
    /**
     * Collects the text and put it on the current list pool.
     * 
     * @param {any} entry 
     * @returns List
     * @memberof List
     */
    add(entry) {
        this.list.push(entry);
        return this;
    }

    /**
     * Produce methods will return the list's parent
     * 
     * @returns React component
     * @memberof List
     */
    produce() {
        var listElem = [],
            uniqueKey = [];
        this.list.forEach(item => {
            var elem = <RenderElement elemkey={item.key} text={item.text} type={item.type} inlineStyleRanges={item.inlineStyleRanges}/>
            uniqueKey.push(item.key)
            listElem.push(elem)
        })
        return (this.list[0].type == "unordered-list-item" ? <ul key={uniqueKey.join("|")}>{listElem}</ul> : <ol key={uniqueKey.join("|")}>{listElem}</ol>)
    }
}

module.exports = List;