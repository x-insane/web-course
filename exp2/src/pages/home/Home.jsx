import React, { Component } from 'react'
import s from './home.less'

// 引入组件
import Container from '@/component/container/Container'
import Message from '@/component/message/Message'

export default class Home extends Component {
	render() {
		return <Container>
			<Message><p>web技术由很多不同体系的技术栈组成，很有一番百家争鸣的热闹景象。</p></Message>
			<Message><p>这学期学了很多web知识，现在就让我们来简单地回顾一下吧。</p></Message>
			<Message className={s.twinkling}>
				<button onClick={() => window.location.href = '#html'}>开始吧</button>
			</Message>
		</Container>
	}
}