import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// class App extends Component {
//   render() {

//     // div tag の部分が jsx(JavaScript XML)
//     // React を用いて HTML を出力するための言語
//     // 直感的に HTML を表現できるのが、JSX を使う利点
//     // return <div><h1>Hello, world</h1></div>

//     // JavaScript を用いて同じものを書く
//     // return React.createElement(
//     //   "div",
//     //   null,
//     //   "Hello, world"
//     // );

//     // const greeting = "Hi";

//     // JSX の中で JS を記述するときは {}
//     // JS の予約語とかぶらないように className が使われる
//     // const dom = <h1 className="greeting">{greeting}</h1>

//     // const dom = <h1>Hi!</h1>
//     // return dom;

//     // return <input type="text" onClick={() => { console.log("Clicked.")}} />
//     // return <input type="text" onChange={() => { console.log("Clicked.")}} />
//     return (
//       // JSX は一つのタグを返さないといけないので、 div を使用
//       // でも div を rendering したくない場合は、 React.Fragment を使用
//       // <div>
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => { console.log("Clicked")}}/>
//       </React.Fragment>
//       // </div>
//     )
//     }
// }

// functional component
const App = () => (<Counter/>)

class Counter extends Component {

  constructor(props){
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // console.log("handlePlusButton")
    // console.log(this.state.count)
    // 状態を変えるときは、 setState を使う
    // setState が実行されると render() が実行される
    // そのため、プログラマーは描画の変更を意識しなくていい
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }


  render() {
    console.log("render")
    return (
      <React.Fragment>
        <div>count: { this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

// const App = () => {

  // const profiles = [
  //   { name: "Taro" , age: 10 },
  //   { name: "Hanako" , age: 15 },

  //   // defaultProps を使用
  //   // { name: "Kendrick" },

  //   // prop-types による型チェックに違反した場合
  //   // index.js:1 Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `User`, expected `string`.
  //   // { name: 10 , age: "20"},

  //   // Warning: Failed prop type: The prop `age` is marked as required in `User`, but its value is `undefined`.
  //   { name: "NoName"}
  // ]

//   return(
//     <div>
//       {/* <Cat /> */}
//       {/* 親のコンポーネントから子のコンポーネントにデータを渡したいときに props を使う　 */}
//       {/* user component に対して name という props(属性) を与えられる */}
//       {/* <User name={"Taro"} age={10}/> */}
//       {/* <User name={"Hanako"} age={15}/> */}
//       {
//         // どの virtual dom が変更になったかを判別するために、 key を与える必要がある　
//         // index.js:1 Warning: Each child in a list should have a unique "key" prop.
//         profiles.map((profile, index) => {
//           return <User name={profile.name} age={profile.age} key={index}/>
//         })
//       }
//     </div>
//   ) 
// }

// const User = (props) => {
//   return <div>Hi, I am {props.name}, and {props.age} years old!</div>
// }

// prop-types を用いて、型チェックを行う
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

// User.defaultProps = {
//   age: 1
// }

// const Cat = () => {
//   return <div>Meow!</div>
// }

export default App;
