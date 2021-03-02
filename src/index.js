import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Text />
  </React.StrictMode>,
  document.getElementById('root')
);

function Title() {

    return (
        <div className='title'>
            <h1>Enmatt</h1>
        </div>
    );
}

function Text() {

    return(
        <div className='text'>
            This is a simple Reactjs website.
        </div>
    );
}

export default Title;