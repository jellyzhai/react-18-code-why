import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { minusNumAction } from "../store/count";

export class MinusCount extends PureComponent {
  render() {
    const { count, minusCount } = this.props;
    return (
      <div>
        <h2>MinusCount count: {count}</h2>
        <button onClick={(e) => minusCount(2)}>-2</button>
        <button onClick={(e) => minusCount(4)}>-4</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count.count,
});

const mapDispatchToProps = (dispatch) => ({
  minusCount: (num) => dispatch(minusNumAction(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MinusCount);
