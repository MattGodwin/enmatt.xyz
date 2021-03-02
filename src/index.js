import React, { useLayoutEffect } from 'react';
import './index.css';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Text />
    <SocialMedia />
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
           <p> 
               I'm a student who enjoys programming and running various different game servers. My favourite language right now is Python, although I am currently learning JavaScript with React.
           </p>
           <p>
               My social media:
           </p>
        </div>
    );
}

function SocialMedia() {

    return(
        <ul className="socialmedia">
            <li className="github">
                <a href="https://github.com/MattGodwin">github</a>
            </li>
            <li className="twitter">
                <a href="https://twitter.com/ExcitedOcelot">twitter</a>
            </li>
            <li className="discord">
                <a href="https://discord.gg/5H5mKnEqX9">discord</a>
            </li>
        </ul>
    );
}

export default Title;