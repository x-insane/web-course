import React from 'react'
import s from './nav.less'

export default class Nav extends React.Component {
	render() {
		return <div className={[this.props.className, s.list].join(" ")}>
			<ul>
				{this.props.children}
			</ul>
		</div>
	}
}