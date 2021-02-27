import React, { Component } from 'react';

class App extends Component {
  render() {

    // div tag の部分が jsx(JavaScript XML)
    // React を用いて HTML を出力するための言語
    // 直感的に HTML を表現できるのが、JSX を使う利点
    // return <div><h1>Hello, world</h1></div>

    // JavaScript を用いて同じものを書く
    // return React.createElement(
    //   "div",
    //   null,
    //   "Hello, world"
    // );

    // const greeting = "Hi";

    // JSX の中で JS を記述するときは {}
    // JS の予約語とかぶらないように className が使われる
    // const dom = <h1 className="greeting">{greeting}</h1>

    // const dom = <h1>Hi!</h1>
    // return dom;

    // return <input type="text" onClick={() => { console.log("Clicked.")}} />
    // return <input type="text" onChange={() => { console.log("Clicked.")}} />
    return (
      // JSX は一つのタグを返さないといけないので、 div を使用
      // でも div を rendering したくない場合は、 React.Fragment を使用
      // <div>
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log("Clicked")}}/>
      </React.Fragment>
      // </div>
    )
    }
}

export default App;
