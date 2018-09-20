import React, { Component } from 'react'
import s from './photo.less'

export default class Photo extends Component {
	render() {
		if (this.props.display === "img") {
			return <div className={[s['tag-image'], this.props.className].join(" ")}>
				<img src={this.props.src} alt="" />
			</div>
		} else {
			return <div
						className={[s['background-image'], this.props.className].join(" ")}
						style={{
							backgroundImage: "url(" + this.props.src + ")",
							paddingBottom: this.props.ratio
						}}>
				{this.props.children}
			</div>
		}
	}
}