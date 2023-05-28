import React from 'react';

class App extends React.Component {
  state = {
    images: [],
  };
  componentDidMount(prevProps, prevState) {
    console.log('mount');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('upd');
  }

  render() {
    return <div>начало</div>;
  }
}

export default App;
