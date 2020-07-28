import React from "react";

import { connect } from "react-redux";
import { changeMsg, changeTim, cnode } from "../../store/actions/test";

function mapStateToProps(state) {
  return {
    msg: state.test.msg,
    msg3: state.test.msg2,
    msg2: state.todo.msg,
    cnodelist: state.test.cnodelist,
  };
}

function mapActionToProps(dispatch) {
  return {
    //xxx是自己定义的，而后面dispatch的方法是从actions中引入的
    xxx: (payload) => dispatch(changeMsg(payload)),
    eiei: (payload) => dispatch(changeTim(payload)),
    cnodeAjax: (params) => dispatch(cnode(params)),
  };
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  click() {
    this.props.xxx("i agree ");
  }
  kick() {
    this.props.eiei("一年了");
  }

  componentDidMount() {
    this.props.cnodeAjax({ page: 1, limit: 5, tab: "" });
  }

  createCnode() {
    console.log(this.props.cnodelist);
    return this.props.cnodelist.map((ele) => (
      <div key={ele.id}>{ele.title}</div>
    ));
  }

  render() {
    return (
      <div className="home">
        <h1>我是home</h1>
        {this.props.msg}
        <button onClick={this.click.bind(this)}>修改一下</button>
        <h3>改变时间</h3>
        {this.props.msg3}
        <button onClick={this.kick.bind(this)}>纪念日几年了</button>
        <h4>cnode异步调接口</h4>
        {this.createCnode()}
      </div>
    );
  }
}

//这两个顺序不能改变
export default connect(mapStateToProps, mapActionToProps)(Home);
