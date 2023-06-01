import React from 'react';
import styles from './styles.module.css';

class ImageGalleryItem extends React.Component {
  render() {
    const { src, alt, name, OnImageClick } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          src={src}
          alt={alt}
          className={styles.ImageGalleryItem_image}
          name={name}
          onClick={OnImageClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
