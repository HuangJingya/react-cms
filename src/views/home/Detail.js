import React from "react";

import { getCnodeList } from "../../utils/api";

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    let params = {
      tab: "share",
      limit: 10,
      page: 1,
    };
    getCnodeList(params).then((res) => {
      console.log("res", res);
      this.setState({
        list: res,
      });
    });
  }

  cnodeList() {
    let { list } = this.state;
    return list.map((item) => {
      return (
        <div key={item.id}>
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="detail">
        {this.cnodeList()}
        <hr />
        {/* //  let { list } = this.state;
  // console.log("res", res);
  // // res.map((ele) => {
  // //   list.push(
  // //     <div key={ele.id}>
  // //       <span>{ele.content}</span>
  // //     </div>
  // //   );
  // //   console.log("list", list);
  // //   return list;
  // // }); */}
      </div>
    );
  }
}
