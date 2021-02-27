import React, { Component } from 'react';

class App extends Component {
  render() {

    // div tag の部分が jsx(JavaScript XML)
    // React を用いて HTML を出力するための言語
    // 直感的に HTML を表現できるのが、JSX を使う利点
    return <h1>Hello, world</h1>

    // JavaScript を用いて同じものを書く
    // return React.createElement(
    //   "div",
    //   null,
    //   "Hello, world"
    // );
  }
}

export default App;
