import React from "react";
import "./style.scss";

import { connect } from "react-redux";
import {
  addTodo,
  delTodo1,
  delTodo2,
  updateTodo1,
  updateTodo2,
  clTodo,
} from "../../store/actions/todo";

function mapStateToProps(state) {
  return {
    todolist: state.todo.list,
    donelist: state.todo.list1,
  };
}

function mapActionToProps(dispatch) {
  return {
    addList: (payload) => dispatch(addTodo(payload)),
    delList1: (payload) => dispatch(delTodo1(payload)),
    delList2: (payload) => dispatch(delTodo2(payload)),
    updateList1: (payload) => dispatch(updateTodo1(payload)),
    updateList2: (payload) => dispatch(updateTodo2(payload)),
    clsList: (payload) => dispatch(clTodo(payload)),
  };
}
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  //渲染todolist
  //删除的时候传递一个who的值，如果为up说明是上面的列表，如果是down，说明是下面的列表
  createList() {
    let { todolist } = this.props;
    return todolist.map((ele) => {
      return (
        <li key={ele.id}>
          <input
            type="checkbox"
            onClick={this.toDone.bind(this, ele.id, "up")}
          ></input>
          <p>{ele.task}</p>
          <a onClick={this.toDel.bind(this, ele.id, "up")}>-</a>
        </li>
      );
    });
  }

  //渲染已经完成
  createDone() {
    let { donelist } = this.props;
    console.log("donelist", donelist);
    return donelist.map((ele) => {
      return (
        <li key={ele.id}>
          <input
            type="checkbox"
            onClick={this.toDone.bind(this, ele.id, "down")}
          ></input>
          <p>{ele.task}</p>
          <a
            href="javascript:;"
            onClick={this.toDel.bind(this, ele.id, "down")}
          >
            -
          </a>
        </li>
      );
    });
  }
  //list的状态切换
  toDone(id, who) {
    console.log("我要切换了", id, who);
    // if (who === "up") {
    this.props.updateList1(id);
    // } else {
    //   this.props.updateList2(id);
    // }
    // this.createList();
    // this.createDone();
  }

  //删除操作
  toDel(id, who) {
    console.log("我要删除了", id, who);
    if (who === "up") {
      this.props.delList1(id);
    } else {
      this.props.delList2(id);
    }

    // this.createList();
    // this.createDone();
  }
  //获取输入框的值,也叫表单取值
  inputChange(e) {
    console.log("我获取的值", e.target.value);
    this.setState({
      task: e.target.value,
    });
  }
  //按下回车键添加todo
  onEnter(e) {
    let { task } = this.state;
    if (e.keyCode === 13) {
      this.props.addList({ id: Date.now(), task });
      console.log("task", task);
      //清空表单的操作需要调用setState,否则setState不输入数据按下回车就会一直里面保留着原来的数据，
      //就是打印上面一条一样的数据
      this.setState({ task: "" });
      //这里是让输入框按下回车之后的清空操作
      e.target.value = "";
    }
  }

  render() {
    let { todolist, donelist } = this.props;
    return (
      <div className="todo">
        <h1>我是todolist</h1>
        <header>
          <section>
            <label htmlFor="title">ToDoList</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="添加ToDo"
              required="required"
              // autoComplete="off"
              onChange={this.inputChange.bind(this)}
              onKeyUp={this.onEnter.bind(this)}
            />
          </section>
        </header>
        <section>
          <h2>
            正在进行 <span id="todocount">{todolist.length}</span>
          </h2>
          <ol id="todolist" className="demo-box">
            {this.createList()}
          </ol>
          <h2>
            已经完成 <span id="donecount">{donelist.length}</span>
          </h2>
          <ul id="donelist">{this.createDone()}</ul>
        </section>
        <footer>
          react 用reducer实现todoList by 2s <a href="">yoh~~~</a>
        </footer>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapActionToProps)(Detail);
