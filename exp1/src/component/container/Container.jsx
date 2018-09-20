import React from 'react'
import s from './container.less'

export default class Container extends React.Component {
	render() {
		return <div className={s.row}>
			{this.props.children}
		</div>
	}
}