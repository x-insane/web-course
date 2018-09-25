import React from 'react'
import s from './navbar.less'

import Hamburger from './hamburger/Hamburger'

// 获取滚动条位置
const getScrollPosition = (el = window) => ({
	x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
	y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

var scrollHandler;

export default class NavBar extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			collapse: false,
			scrollTop: true
		}
	}

	componentDidMount() {
		scrollHandler = this.onScroll.bind(this)
    	window.addEventListener('scroll', scrollHandler)
    }

    componentWillUnmount() {
    	window.removeEventListener('scroll', scrollHandler)
    }

	onScroll(e) {
		if (getScrollPosition().y === 0) {
			if (!this.state.scrollTop)
				this.setState({ scrollTop: true })
		} else {
			if (this.state.scrollTop)
				this.setState({ scrollTop: false })
		}
	}

	navCollapseCallback(active) {
		this.setState({collapse: active})
	}

	cancelCollapse() {
		this.refs.hamburger.cancelCollapse()
	}

	render() {
		return <header
					className={[this.state.scrollTop ? "" : s.shrinked, s.header].join(" ")}
					data-nav-active={this.state.collapse}>
			<div className={s.content}>
				<a className={s.title} href={this.props.href} rel="noreferrer noopener" target="_blank">
					{this.props.title}
				</a>
			    <Hamburger className={s.hamburger}
			    		ref="hamburger"
			    		onCollapse={this.navCollapseCallback.bind(this)} />
			    <div className={[s.nav, this.state.collapse ? s.collapse : ""].join(" ")}>
			    	<ul>
			    		{this.props.children}
			    	</ul>
			    </div>
			</div>
		</header>
	}
}