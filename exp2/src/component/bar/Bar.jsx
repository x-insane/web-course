import React, { Component } from 'react'
import s from './bar.less'

export default class Bar extends Component {
	render() {
		return <div className={[this.props.className, s.frame].join(" ")}
					style={{ transform: "translateY(" + this.props.position + ")" }}>
			<div className={s.content} style={{float: this.props.direction}}>
				{this.props.children}
			</div>
		</div>
	}
}