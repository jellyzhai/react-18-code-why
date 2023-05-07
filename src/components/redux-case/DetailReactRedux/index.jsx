import React, { PureComponent } from "react";
import { connect } from "react-redux";
import connectCustom from "../connectCustom";
import { addAction, minusAction } from "../store/count";
import { getVueSilverVipsAction } from "../store/vueVip";

export class DetailReactRedux extends PureComponent {
  componentDidMount() {
    this.props.getVueSilverVips();
  }

  render() {
    const { count, addNum, minusNum, vueSilverVips } = this.props;
    return (
      <div>
        <h2>类组件 count: {count}</h2>
        <button onClick={(e) => addNum(1)}>+1</button>
        <button onClick={(e) => minusNum(3)}>-3</button>
        <button onClick={(e) => addNum(5)}>+5</button>

        <div>
          <h3>vue 白银会员：</h3>
          <ul>
            {
              vueSilverVips.map(item => (
                <li key={item.name}><a href={item.url}>{item.name}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
    vueSilverVips: state.vueVip.vueSilverVips,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addNum: (num) => dispatch(addAction(num)),
  minusNum: (num) => dispatch(minusAction(num)),
  getVueSilverVips: () => dispatch(getVueSilverVipsAction())
});

export default connectCustom(mapStateToProps, mapDispatchToProps)(DetailReactRedux);
// export default connect(mapStateToProps, mapDispatchToProps)(DetailReactRedux);
