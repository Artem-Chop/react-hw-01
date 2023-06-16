import React from 'react';
import { connect } from 'react-redux';
import * as actions from './counter/redux/actions';

function App({ value, onIncrement, onDecrement, step }) {
  return (
    <div>
      <p>Number: {value}</p>
      <button
        onClick={() => {
          onIncrement(step);
        }}
      >
        Add {step}
      </button>
      <button
        onClick={() => {
          onDecrement(step);
        }}
      >
        Minus {step}
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.INCRIMENT(value)),
    onDecrement: value => dispatch(actions.DECREMENT(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
