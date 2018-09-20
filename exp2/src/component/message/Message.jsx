import React, { Component } from 'react'
import s from './message.less'

export default class Message extends Component {
	render() {
		return <div className={[this.props.className, s.frame].join(" ")} >
			<div className={s.content} style={{float: this.props.direction}}>
				{this.props.children}
			</div>
		</div>
	}
}