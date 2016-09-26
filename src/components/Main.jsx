var React = require('react');

var Main = (props) => {
    return (
        <div>
          <h1 className="text-center">React Boilerplate</h1>  
          <div className="row">
            { props.children }
          </div>
        </div>
    );
};

module.exports = Main;
