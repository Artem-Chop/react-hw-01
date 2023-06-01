import React from 'react';
import styles from './styles.module.css';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends React.Component {
  render() {
    return (
      <ul className={styles.ImageGallery}>
        {this.props.images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            name={largeImageURL}
            OnImageClick={this.props.onClick}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
