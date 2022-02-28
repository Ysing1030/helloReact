//创建外壳组件APP
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

//引入子组件
import Home from './components/Home'
import About from './components/About'

class App extends Component {


	render() {

		return (
			<div>
				<div className="nav">
					<Link to={'/home'}>Home</Link>
					<Link to={'/about'}>Home</Link>
				</div>
				<div className='container'>
					<Route path='/home' component={Home}></Route>
					<Route path='/about' component={About}></Route>
				</div>
			</div>
		)
	}
}

export default App  