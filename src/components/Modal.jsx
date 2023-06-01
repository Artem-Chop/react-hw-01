import React from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
  onEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      console.log('Hui');
    }
  };
  onOverlay = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }
  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onEscape);
  // }
  render() {
    if (!this.props.open) {
      return null;
    }
    return createPortal(
      <div className={styles.Overlay} onClick={this.onOverlay}>
        <div className={styles.Modal}>
          <img src={this.props.image} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
