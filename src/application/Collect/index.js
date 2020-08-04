import React, { Component, useLayoutEffect, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function useNumber(){
  let [number,setNumber] = useState(0);
  useEffect(()=>{
    let inter1 = setInterval(()=>{
        setNumber(number=>number+1);
    },1000);
    return ()=>{
        clearInterval(inter1)
    }
  },[]);
  return [number,setNumber];
}
// 每个组件调用同一个 hook，只是复用 hook 的状态逻辑，并不会共用一个状态
function Counter1(){
    let [number,setNumber] = useNumber();
    return (
        <div><button onClick={()=>{
            setNumber(number+1)
        }}>{number}</button></div>
    )
}
function Counter2(){
    let [number,setNumber] = useNumber();
    return (
        <div><button  onClick={()=>{
            setNumber(number+1)
        }}>{number}</button></div>
    )
}
function Collect(){
    return(
        <div>
            {/* <Counter1></Counter1>
            <Counter2></Counter2> */}
            <App></App>
        </div>
    )
}

function App() {
    return (
      <div className="App">
        <GetSnapshotBeforeUpdate />
      </div>
    );
  }
  
  class GetSnapshotBeforeUpdate extends Component {
    constructor(props) {
      super(props);
      this.wrapper = React.createRef();
      this.state = { messages: [] };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          messages: ["msg:" + this.state.messages.length, ...this.state.messages]
        },(...args)=>{
            // console.log('-------',args)
        });
        console.log('setState')
        // console.log(this.state.messages)
        //this.setState({messages:[...this.state.messages,this.state.messages.length]});
      }, 1000);
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapsshotBeforeUpdate',this.state)
      // 返回更新内容的高度 300px
    //   console.log(this.wrapper.current.scrollHeight)
      return this.wrapper.current.scrollHeight;
    }
    componentDidUpdate(prevProps, prevState, prevScrollHeight) {
      this.wrapper.current.scrollTop =
        this.wrapper.current.scrollTop +
        (this.wrapper.current.scrollHeight - prevScrollHeight);
    }
    render() {
      let style = {
        height: "100px",
        width: "200px",
        border: "1px solid red",
        overflow: "auto"
      };
      console.log('render','')
      return (
        <ul style={style} ref={this.wrapper}>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      );
    }
  }
  
export default React.memo(Collect)