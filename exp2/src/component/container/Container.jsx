import React from 'react'
import s from './container.less'

export default class Container extends React.Component {
	render() {
		return <div className={[this.props.className, s.row].join(" ")}>
			{this.props.children}
		</div>
	}
}