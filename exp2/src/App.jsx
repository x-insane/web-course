import React, { Component } from 'react';
import { HashRouter as Router, Route, Link,  withRouter} from 'react-router-dom'
import s from './App.less';

import NavBar from './component/navbar/NavBar'

import Home from './pages/home/Home'
import Html from './pages/html/Html'
import Css from './pages/css/Css'

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location)
        	window.scrollTo(0, 0)
    }
    render() {
        return this.props.children
    }
}

ScrollToTop = withRouter(ScrollToTop)

class App extends Component {

	cancelCollapse() {
		this.refs.navbar.cancelCollapse()
	}

	render() {
		return (
			<Router>
				<ScrollToTop>
					<NavBar ref="navbar" title="梦的天空之城" href="https://github.com/x-insane">
						<li><Link to="/" onClick={this.cancelCollapse.bind(this)}>首页</Link></li>
						<li><Link to="/html" onClick={this.cancelCollapse.bind(this)}>HTML回顾</Link></li>
						<li><Link to="/css" onClick={this.cancelCollapse.bind(this)}>CSS回顾</Link></li>
					</NavBar>

					<div onTouchStart={this.cancelCollapse.bind(this)} className={s.content}>
						<Route exact path="/" component={Home}/>
						<Route path="/html" component={Html}/>
						<Route path="/css" component={Css}/>
					</div>
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
