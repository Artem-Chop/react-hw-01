import React from 'react';
import styles from './styles.module.css';

// class Button extends React.Component {
//   render() {
//     return (
// <button
//   type="button"
//   className={styles.Button}
//   onClick={this.props.onClick}
// >
//   Load more
// </button>
//     );
//   }
// }

const Button = ({ onClick }) => {
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
