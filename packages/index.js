import React from './render/dom/index'
// import { Component } from './core/component'
// import { render } from './vdom'

class App extends React.Component {
  state = {
    info: true,
    num:0
  }
  constructor(props) {
    super(props)

    setTimeout(() => {
      this.setState({
        info: !this.state.info
      })
    }, 1000)
  }
  updateNum(){
    this.setState({
      num:Math.random(1000)
    })
  }

  render() {
    const { num } = this.state
    return (
      <div>
        <span>hello</span>
        <div>1222{num}</div>
       <div>
        <button onClick={this.updateNum.bind(this)}>点击修改Num</button>
       </div>
      </div>
    )
  }
}
React.render(<App />, document.getElementById('root'))
