import React from "react";
import ReactDOM from 'react-dom/client';

import PropTypes from 'prop-types';
// import { galleryItems } from "./galleryItems";

const item = {
  preview:
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
  original:
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
  description: 'Many Flowers',
};

// const div = <div>
//   <h1>React</h1>
//   <p>My first React application</p>
//   <ul></ul>
// </div>

function Gallery(props) {
  const { originalSize, smallSize, title } = props;
  return (
    <div className="gallery__item">
  <a className="gallery__link" href={originalSize}>
    <img
      className="gallery__image"
      src={smallSize}
      data-source=""
      alt={title}
    />
  </a>
</div>
  )
}

Gallery.propTypes = {
  originalSize: PropTypes.string,
  smallSize: PropTypes.string,
  title: PropTypes.string,
}
// Gallery.propTypes = {
//   props.originalSize: propTypes.string,   
//   }
  

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Gallery 
    originalSize={item.original}
    smallSize={item.preview}
    title={item.description}  />
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
