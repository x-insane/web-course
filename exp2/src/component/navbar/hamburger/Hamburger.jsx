import React from 'react'
import s from './hamburger.less'

export default class Hamburger extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			active: false
		}
	}

	onHamburgerClick() {
		this.setState((pre) => {
			var active = pre.active ? false : true;
			this.props.onCollapse(active)
			return {
				active: active
			}
		})
	}

	cancelCollapse() {
		this.setState({ active: false })
		this.props.onCollapse(false)
	}

	render() {
		return <div data-active={this.state.active}
					className={[this.props.className, s.button].join(" ")}
					onClick={this.onHamburgerClick.bind(this)}>
	        <span className={s.line}></span>
	        <span className={s.line}></span>
	        <span className={s.line}></span>
	    </div>
	}
}