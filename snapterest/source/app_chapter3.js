var React = require('react');
var ReactDom = require('react-dom');

//Chapter 3


var ReactClass = React.createClass({
    getInitialState: function () {
        return {
            isHeaderHidden: false
        };
    },
    handleClick: function () {
        this.setState({
            isHeaderHidden: !this.state.isHeaderHidden
        });
    },
    render: function () {
        /*var elementState = {
          isHidden: true  
        };
        if(elementState.isHidden){
            return null;
        }*/
        
        var title = 'Stateful React Component';

        var headerElement = React.createElement('h1', { className: 'header', key: 'header' }, title);
        var buttonElement = React.createElement('button', { className: 'btn btn-default', onClick: this.handleClick, key: 'button' }, 'Toggle header');

        if (this.state.isHeaderHidden) {
            return React.createElement('div', null,[buttonElement]);
        }
        //var header = this.props.tweets.length + ' Latest Tweets';
        //return React.createElement('h1', { className: 'header' }, 'React Component');
        return React.createElement('div', null,[buttonElement, headerElement]);
    }
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDom.render(reactComponentElement, document.getElementById('react-application'));


