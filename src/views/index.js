import loadable from "@loadable/component";

const Home = loadable(() => import("./home/Home.js"));
const Detail = loadable(() => import("./home/Detail.js"));
const Todo = loadable(() => import("./todo/Todo.js"));

export default [
  {
    id: 1,
    path: "/home",
    component: Home,
    text: "首页管理",
    children: [],
  },
  {
    id: 2,
    path: "/todo",
    component: Todo,
    text: "todo列表",
  },
  {
    id: 3,
    path: "/detail",
    component: Detail,
    text: "cnode列表",
  },
];
