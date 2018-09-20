import React, { Component } from 'react'
import s from './panel.less'

export default class Panel extends Component {
	render() {
		return <div className={s.frame}>
			<header>{this.props.title}</header>
			<div className={s.content}>
				{this.props.children}
			</div>
		</div>
	}
}