import React from 'react'
import ReactDOM from 'react-dom'
import s from './app.less'
import section from './style/section.less'

import NavBar from './component/navbar/NavBar.jsx'
import Container from './component/container/Container.jsx'

class App extends React.Component {

	cancelNavCollapse() {
		this.refs.navbar.cancelCollapse()
	}

	render() {
		return <div className={s.container}>
			<NavBar ref="navbar">
		    	<li><a onClick={this.cancelNavCollapse.bind(this)} href="#movie">近期电影</a></li>
		    	<li><a onClick={this.cancelNavCollapse.bind(this)} href="#course">我的课程</a></li>
		    	<li><a onClick={this.cancelNavCollapse.bind(this)} href="#who">我是谁</a></li>
			</NavBar>
			<div className={s.content}
				onTouchStart={this.cancelNavCollapse.bind(this)}>
				<Container>
					<section className={section.row} id="who">
						<div className={section.header}>
							<div className={section.circle}>我是谁</div>
						</div>
						<div className={section.content}>
							<p>
								我叫颜徐柳，来自重庆 · 梁平，现就读于
								<a target="_blank" href="https://www.scut.edu.cn"> 华南理工大学</a>
								<a target="_blank" href="http://cs.scut.edu.cn/"> 计算机学院</a>
							</p>
							<p>不怎么标准的程序员，常用 Java/PHP 以及 JavaScript</p>
						</div>
					</section>

					<section className={[section.row, section.reverse].join(" ")} id="course">
						<div className={section.header}>
							<div className={section.circle}>我的课程</div>
						</div>
						<div className={[section.content, section.course].join(" ")}>
							<ol>
								<li>1.&nbsp;&nbsp;编译原理</li>
								<li>2.&nbsp;&nbsp;人工智能</li>
							</ol>
							<ol>
								<li>3.&nbsp;&nbsp;数字图像处理</li>
								<li>4.&nbsp;&nbsp;Web程序设计</li>
							</ol>
						</div>
					</section>

					<section className={section.row} id="movie">
						<div className={section.header}>
							<div className={section.circle}>近期电影</div>
						</div>
						<div className={[section.content, section.movie].join(" ")}>
							<ul>
								<li>无问西东</li>
								<li>哆啦A梦：大雄的金银岛</li>
								<li>大话西游</li>
								<li>超时空同居</li>
								<li>后来的我们</li>
							</ul>
							<ul>
								<li>纯黑的噩梦</li>
								<li>贝克街的亡灵</li>
								<li>战栗的乐谱</li>
								<li>侦探们的镇魂歌</li>
								<li>绝海的侦探</li>
							</ul>
						</div>
					</section>

					<section className={[section.row, section.reverse].join(" ")} id="course">
						<div className={section.header}>
							<div className={section.circle}>END</div>
						</div>
						<div className={[section.content, section.photo].join(" ")}>
							<img src="./img/end.jpg" />
						</div>
					</section>
				</Container>
			</div>
		</div>;
	}
}

var element = document.createElement("div")
element.id = "root"
ReactDOM.render(<App />, element)
document.body.appendChild(element)