var React = require('react');
var ReactDOM = require('react-dom');
var {
    Router,
    Route,
    browserHistory,
    IndexRoute
} = require('react-router');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

// components
var Main = require('Main');
var NotFound = require('NotFound');

var routes = (
    <Router history={ browserHistory }>
        <Route path="/" component={ Main }>
            <Route path="*" component={ NotFound } />
        </Route>
    </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
