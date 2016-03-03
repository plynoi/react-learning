var React = require('react');
var ReactDom = require('react-dom');

//Chapter 2

var h1 = React.createElement('h1', {
    className: 'header',
    key: 'header'
 }, 'This is React');
    
var p = React.createElement('p',{
    className:'content',
    key: 'content'
}, "And this is's how it works.");
var reactFragment = [h1,p];
var section = React.createElement('section',{className: 'container'}, reactFragment);


ReactDom.render(section, document.getElementById('react-application'));

var listItemElement1 = React.createElement('li', {classname: 'item-1', key: 'item-1'}, 'Item 1');
var listItemElement2 = React.createElement('li', {classname: 'item-2', key: 'item-2'}, 'Item 2');
var listItemElement3 = React.createElement('li', {classname: 'item-3', key: 'item-3'}, 'Item 3');
var reactFragment2 = [listItemElement1, listItemElement2, listItemElement3];
var listOfItems2 = React.createElement('ul',{ classname: 'list-of-items'},reactFragment2);
React.render(listOfItems2, document.getElementById('react-application2'));

var createListItemElement = React.createFactory('li');
var listItemElement4 = createListItemElement( {classname: 'item-4', key: 'item-1'}, 'Item 4');
var listItemElement5 = createListItemElement( {classname: 'item-5', key: 'item-2'}, 'Item 5');
var listItemElement6 = createListItemElement( {classname: 'item-6', key: 'item-3'}, 'Item 6');
var reactFragment3 = [listItemElement4, listItemElement5, listItemElement6];
var listOfItems3 = React.createElement('ul',{ classname: 'list-of-items'},reactFragment3);
React.render(listOfItems3, document.getElementById('react-application3'));

var listItemElement7 = React.DOM.li( {classname: 'item-7', key: 'item-7'}, 'Item 7');
var listItemElement8 = React.DOM.li( {classname: 'item-8', key: 'item-8'}, 'Item 8');
var listItemElement9 = React.DOM.li( {classname: 'item-9', key: 'item-9'}, 'Item 9');
var reactFragment4 = [listItemElement7, listItemElement8, listItemElement9];
var listOfItems4 = React.DOM.ul({ classname: 'list-of-items'},reactFragment4);
React.render(listOfItems4, document.getElementById('react-application4'));

var listOfItems5 = <ul className="list-of-items">
                   <li className="item-10">JSX Item 10</li>
                   <li className="item-11">JSX Item 11</li>
                   <li className="item-12">JXS Item 12</li>
                  </ul>;


ReactDom.render(listOfItems5,document.getElementById('react-application5'));


