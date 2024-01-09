import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../actions.js';

const Counter = ({counter, dec, inc, rnd}) => {
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primary">DEC</button>
      <button onClick={inc} className="btn btn-primary">INC</button>
      <button onClick={rnd} className="btn btn-primary">RND</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
export default connect(mapStateToProps, actions)(Counter);