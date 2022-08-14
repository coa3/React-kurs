
import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
<header className='header'>
  <img src='https://img2.freepng.ru/20181109/fsi/kisspng-logo-jpeg-clip-art-project-a-kon-brand-5be5c6a788d680.3717078615417852555605.jpg' />
</header>
<nav className='nav'>
  <div>
    <a href="#profile">Profile</a>
  </div>
    <div>
    <a href="#messages">Messages</a>
    </div>
    <div>
    <a href="#news">News</a>
    </div>
    <div>
    <a href="#music">Music</a>
    </div>
    <div>
    <a href="#settings">Settings</a>
    </div>
  </nav>
  <div className='content'>Main content</div>

    </div>
  );
}

export default App;

