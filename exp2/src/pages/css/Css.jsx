import React, { Component } from 'react'
import s from './css.less'

import Container from '@/component/container/Container'
import Bar from '@/component/bar/Bar'
import Panel from '@/component/panel/Panel'

const data = [
	{
		name: "selector",
		text: "CSS 选择器",
		html: <div>
			<p>CSS选择器是CSS里面最复杂也是最基础的内容。</p>
			<p>这里只列举其中最基本的一些内容，详细内容参考&nbsp;
				<a target="_blank"
					href="http://www.w3school.com.cn/css"
					rel="noreferrer noopener">http://www.w3school.com.cn/css</a>
			</p>

			<h4>类型选择器</h4>
			<p>类型选择器（type selector）又称为元素选择器.</p>
			<p>类型选择器匹配文档语言元素类型的名称。类型选择器匹配文档树中该元素类型的每一个实例。</p>
			<p>使用方法很简单，直接写标签名就可以了，如 p</p>

			<h4>id选择器</h4>
			<p>通过唯一的id选择指定元素。使用方法是在id名前加上一个#，如 #name 将选择id为name的元素。</p>
			<p>注意：id在整个页面中必须唯一才能正常工作，一般在使用其他选择器的情况下不推荐使用id选择器。</p>

			<h4>类选择器</h4>
			<p>最常用的CSS选择器，也是推荐使用的选择器。</p>
			<p>使用方法是在类名前加上一个点号（.），如 .name 将选择具有name类的元素。</p>

			<h4>属性选择器</h4>
			<p>如果希望选择有某个属性的元素，而不论属性值是什么，可以使用简单属性选择器。</p>
			<p>适用方法是用中括号（[]）将属性名和值包裹起来。</p>
			<p>例如： [title] 将选择具有title属性的元素，不论title的值是什么。</p>
			<p>而 [title="hello"] 将只选择具有title属性而且属性值为hello的元素。</p>

			<h4>其他选择器</h4>
			<p>除此之外，还有伪类选择器，伪元素选择器等，另外还有各种选择器的配合使用等内容。</p>
		</div>
	},
	{
		name: "color",
		text: "CSS 颜色",
		html: <div>
			<p>css中颜色属性用 color 定义，常用的有如下几种定义方式：</p>
			<ul>
				<li>颜色名：如 red</li>
				<li>RGB函数：如 rgb(255,0,0)</li>
				<li>RGBA函数：如 rgba(255,0,0,1)</li>
				<li>16进制RGB：如 #ff0000 或 #f00</li>
				<li>16进制RGBA：如 #ffff0000</li>
			</ul>
			<p>其他方式：很少用到，如 hsla(30, 100%, 50%, 0.6)</p>
		</div>
	},
	{
		name: "font",
		text: "CSS 字体",
		html: <div>
			<h4>指定字体系列：font-family 属性</h4>
			<p>在 CSS 中，有两种不同类型的字体系列名称：</p>
			<ul>
				<li>通用字体系列 - 拥有相似外观的字体系统组合（比如 "Serif" 或 "Monospace"）</li>
				<li>特定字体系列 - 具体的字体系列（比如 "Times" 或 "Courier"）</li>
			</ul>
			<p>除了各种特定的字体系列外，CSS 定义了 5 种通用字体系列：</p>
			<ul>
				<li>Serif 字体</li>
				<li>Sans-serif 字体</li>
				<li>Monospace 字体</li>
				<li>Cursive 字体</li>
				<li>Fantasy 字体</li>
			</ul>
			<p>注意：如果字体名超过一个单词，应使用引号包裹整个字体名</p>

			<h4>指定字体风格：font-style</h4>
			<p>该属性有三个值：</p>
			<ul>
				<li>normal - 文本正常显示</li>
				<li>italic - 文本斜体显示</li>
				<li>oblique - 文本倾斜显示</li>
			</ul>
			<p>font-style 非常简单：用于在 normal 文本、italic 文本和 oblique 文本之间选择。唯一有点复杂的是明确 italic 文本和 oblique 文本之间的差别。</p>
			<p>斜体（italic）是一种简单的字体风格，对每个字母的结构有一些小改动，来反映变化的外观。与此不同，倾斜（oblique）文本则是正常竖直文本的一个倾斜版本。</p>
			<p>通常情况下，italic 和 oblique 文本在 web 浏览器中看上去完全一样。</p>

			<h4>指定加粗字体：font-weight</h4>
			<p>使用 bold 关键字可以将文本设置为粗体。</p>
			<p>关键字 100 ~ 900 为字体指定了 9 级加粗度。如果一个字体内置了这些加粗级别，那么这些数字就直接映射到预定义的级别，100 对应最细的字体变形，900 对应最粗的字体变形。数字 400 等价于 normal，而 700 等价于 bold。</p>
			<p>如果将元素的加粗设置为 bolder，浏览器会设置比所继承值更粗的一个字体加粗。与此相反，关键词 lighter 会导致浏览器将加粗度下移而不是上移。</p>
		
			<h4>指定字体大小：font-size</h4>
			<p>有能力管理文本的大小在 web 设计领域很重要。但是，您不应当通过调整文本大小使段落看上去像标题，或者使标题看上去像段落。</p>
			<p>请始终使用正确的 HTML 标题，比如使用 &lt;h1&gt; - &lt;h6&gt; 来标记标题，使用 &lt;p&gt; 来标记段落。</p>
			<p>font-size 值可以是绝对或相对值。</p>
			<p>绝对值：</p>
			<ul>
				<li>将文本设置为指定的大小</li>
				<li>不允许用户在所有浏览器中改变文本大小（不利于可用性）</li>
				<li>绝对大小在确定了输出的物理尺寸时很有用</li>
			</ul>
			<p>相对大小：</p>
			<ul>
				<li>相对于周围的元素来设置大小</li>
				<li>允许用户在浏览器改变文本大小</li>
			</ul>
			<p>注意：如果没有规定字体大小，普通文本（比如段落）的默认大小是 16 像素 (1em=16px)。</p>
		</div>
	},
	{
		name: "text",
		text: "CSS 文本属性",
		html: <div>
			<p>CSS文本属性除了color外，常见的还有以下几种：</p>
			<ul>
				<li>text-indent: 首行缩进</li>
				<li>text-align: 水平对齐</li>
				<li>word-spacing: 字（单词）间距</li>
				<li>letter-spacing: 字母（字符）间距</li>
				<li>text-transform: 字符转换（大小写）</li>
				<li>text-decoration: 文本装饰（下划线、删除线等）</li>
				<li>white-space: 处理空白符</li>
			</ul>
		</div>
	},
	{
		name: "background",
		text: "CSS 背景",
		html: <div>
			<h4>背景内容</h4>
			<p>背景的内容可以由下列属性定义：</p>
			<ul>
				<li>background-color: 背景颜色</li>
				<li>background-image: 背景图片</li>
			</ul>

			<h4>其他属性</h4>
			<p>CSS背景主要还有以下属性：</p>
			<ul>
				<li>background-position: 可以改变图像在背景中的位置</li>
				<li>background-repeat: 控制背景内容的是否重复</li>
				<li>background-attachment: 置为fixed可阻止背景虽页面滚动</li>
			</ul>
		</div>
	}
]

// 获取滚动条位置
const getScrollPosition = (el = window) => ({
	x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
	y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

var scrollHandler;

export default class Css extends Component {

	constructor(props) {
		super(props)
		this.state = {
			scrollTop: true
		}
	}

	componentDidMount() {
		scrollHandler = this.onScroll.bind(this)
    	window.addEventListener('scroll', scrollHandler)
    }

    componentWillUnmount() {
    	window.removeEventListener('scroll', scrollHandler)
    }

    onScroll(e) {
		if (getScrollPosition().y === 0) {
			if (!this.state.scrollTop)
				this.setState({ scrollTop: true })
		} else {
			if (this.state.scrollTop)
				this.setState({ scrollTop: false })
		}
	}

	handleLink(link) {
		var e = document.getElementById(link)
		if (e && e.scrollIntoView) {
			e.scrollIntoView()
			window.scrollBy(0, -70)
		}
	}

	render() {
		return <Container className={s.container}>
			<Bar className={s.bar} position={this.state.scrollTop ? '0' : '-3.3rem'}>
				<Panel title="CSS 回顾">
					<ul>
					{
						data.map((item, key) => {
							return <li key={key}
								onClick={() => { this.handleLink(item.name) }}>
									{item.text}
							</li>
						})
					}
					</ul>
				</Panel>
			</Bar>
			<div className={s.main}>
				<dl>
				{
					data.map((item, key) => [
						<dt key={key} id={item.name}>{item.text}</dt>,
						<dd key={-key-1}>
							{
								item.html ?
									item.html :
									item.info.map((text, k) => <p key={k}>{text}</p>)
							}
						</dd>
					])
				}
				</dl>
				<div className={s.footer}>
					部分内容来自于&nbsp;
					<a target="_blank"
						href="http://www.w3school.com.cn"
						rel="noreferrer noopener">w3school</a>
				</div>
			</div>
		</Container>
	}
}