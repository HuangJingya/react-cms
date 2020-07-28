import React from "react";
import "./assets/style/common.scss";

//路由
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./views";
import { Provider } from "react-redux";

//状态管理
import store from "./store";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  createRoute() {
    var res = [];
    routes.map((ele) => {
      res.push(
        <Route
          exact
          path={ele.path}
          component={ele.component}
          key={ele.id}
        ></Route>
      );
      if (ele.children) {
        ele.children.map((ele) => {
          res.push(
            <Route
              exact
              path={ele.path}
              component={ele.component}
              key={ele.id}
            ></Route>
          );
          return false;
        });
      }
      //箭头函数需要返回值，所以加上这一句
      return false;
    });
    return res;
  }

  render() {
    console.log("props", this.props);
    return (
      <HashRouter>
        <Provider store={store}>
          <div className="app">
            <Switch>
              {this.createRoute()}
              <Redirect from="/*" to="/home"></Redirect>
            </Switch>
          </div>
        </Provider>
      </HashRouter>
    );
  }
}
