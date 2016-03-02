var React = require('react');
var ReactDom = require('react-dom');

//Chapter 3


var ReactClass = React.createClass({
    render: function(){
        /*var elementState = {
          isHidden: true  
        };
        if(elementState.isHidden){
            return null;
        }*/
        
        if(this.props.isHidden){
            return null;
        }
        var header = this.props.tweets.length + ' Latest Tweets';
        return React.createElement('h1', {className: 'header'}, header);
    }
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDom.render(reactComponentElement, document.getElementById('react-application'));


