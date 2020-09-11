import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            Salut Les gens
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
