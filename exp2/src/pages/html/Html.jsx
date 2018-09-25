import React, { Component } from 'react'
import s from './html.less'

import Container from '@/component/container/Container'
import Bar from '@/component/bar/Bar'
import Panel from '@/component/panel/Panel'

const data = [
	{
		name: "title",
		text: "<title>",
		info: [
			"<title> 元素可定义文档的标题。",
			"浏览器会以特殊的方式来使用标题，并且通常把它放置在浏览器窗口的标题栏或状态栏上。同样，当把文档加入用户的链接列表或者收藏夹或书签列表时，标题将成为该文档链接的默认名称。"
		]
	},
	{
		name: "meta",
		text: "<meta>",
		info: [
			"<meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。",
			"<meta> 标签位于文档的头部，不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。"
		]
	},
	{
		name: "link",
		text: "<link>",
		info: [
			"<link> 标签定义文档与外部资源的关系。",
			"<link> 标签最常见的用途是链接样式表。"
		]
	},
	{
		name: "h",
		text: "<h1> - <h6>",
		info: [
			"<h1> - <h6> 标签可定义标题。<h1> 定义最大的标题。<h6> 定义最小的标题。",
			"由于 h 元素拥有确切的语义，因此请您慎重地选择恰当的标签层级来构建文档的结构。因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层叠样式表定义来达到漂亮的显示效果。"
		]
	},
	{
		name: "div",
		text: "<div>",
		info: [
			"<div> 可定义文档中的分区或节（division/section）。",
			"<div> 标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。",
			"如果用 id 或 class 来标记 <div>，那么该标签的作用会变得更加有效。"
		]
	},
	{
		name: "p",
		text: "<p>",
		info: [
			"<p> 标签定义段落。",
			"p 元素会自动在其前后创建一些空白。浏览器会自动添加这些空间，您也可以在样式表中规定。"
		]
	},
	{
		name: "span",
		text: "<span>",
		info: [
			"<span> 标签被用来组合文档中的行内元素。"
		]
	},
	{
		name: "a",
		text: "<a>",
		info: [
			"<a> 标签定义超链接，用于从一张页面链接到另一张页面。",
			"<a> 元素最重要的属性是 href 属性，它指示链接的目标。"
		]
	},
	{
		name: "list",
		text: "<ul> <ol> <li>",
		info: [
			"<ul> 标签定义无序列表。",
			"<ol> 标签定义有序列表。",
			"<li> 标签定义列表项目，可用在有序列表 (<ol>) 和无序列表 (<ul>) 中。"
		]
	},
	{
		name: "table",
		text: "<table>",
		html: <div>
			<p>{`<table>`} 标签定义 HTML 表格。</p>
			<p>简单的 HTML 表格由 table 元素以及一个或多个 tr、th 或 td 元素组成。</p>
			<p>tr 元素定义表格行，th 元素定义表头，td 元素定义表格单元。</p>
			<p>更复杂的 HTML 表格也可能包括 caption、col、colgroup、thead、tfoot 以及 tbody 元素。</p>
			<p>下面是一个例子（内容来自w3school）：</p>
			<table className={s.table}>
				<tbody>
					<tr>
						<th style={{width: '20%'}}>属性</th>
						<th style={{width: '20%'}}>值</th>
						<th style={{width: '60%'}}>描述</th>
					</tr>
					<tr>
						<td>align</td>
						<td>
							<ul>
								<li>left</li>
								<li>center</li>
								<li>right</li>
							</ul>
						</td>
						<td>
							<p>不赞成使用。请使用样式代替。</p>
							<p>规定表格相对周围元素的对齐方式。</p>
						</td>
					</tr>
					<tr>
						<td>bgcolor</td>
						<td>
							<ul>
								<li><i>rgb(x,x,x)</i></li>
								<li><i>#xxxxxx</i></li>
								<li><i>colorname</i></li>
							</ul>
						</td>
						<td>
							<p>不赞成使用。请使用样式代替。</p>
							<p>规定表格的背景颜色。</p>
						</td>
					</tr>
					<tr>
						<td>border</td>
						<td><i>pixels</i></td>
						<td>规定表格边框的宽度。</td>
					</tr>
					<tr>
						<td>cellpadding</td>
						<td>
							<ul>
								<li><i>pixels</i></li>
								<li><i>%</i></li>
							</ul>
						</td>
						<td>规定单元边沿与其内容之间的空白。</td>
					</tr>
					<tr>
						<td>cellspacing</td>
						<td>
							<ul>
								<li><i>pixels</i></li>
								<li><i>%</i></li>
							</ul>
						</td>
						<td>规定单元格之间的空白。</td>
					</tr>
					<tr>
						<td>frame</td>
						<td>
							<ul>
								<li>void</li>
								<li>above</li>
								<li>below</li>
								<li>hsides</li>
								<li>lhs</li>
								<li>rhs</li>
								<li>vsides</li>
								<li>box</li>
								<li>border</li>
							</ul>
						</td>
						<td>规定外侧边框的哪个部分是可见的。</td>
					</tr>
					<tr>
						<td>rules</td>
						<td>
							<ul>
								<li>none</li>
								<li>groups</li>
								<li>rows</li>
								<li>cols</li>
								<li>all</li>
							</ul>
						</td>
						<td>规定内侧边框的哪个部分是可见的。</td>
					</tr>
					<tr>
						<td>summary</td>
						<td><i>text</i></td>
						<td>规定表格的摘要。</td>
					</tr>
					<tr>
						<td>width</td>
						<td>
							<ul>
								<li><i>%</i></li>
								<li><i>pixels</i></li>
							</ul>
						</td>
						<td>规定表格的宽度。</td>
					</tr>
				</tbody>
			</table>
		</div>
	},
	{
		name: "definition",
		text: "<dl> <dt> <dd>",
		info: [
			"<dl> 标签定义了定义列表（definition list）",
			"<dl> 标签用于结合 <dt> （定义列表中的项目）和 <dd> （描述列表中的项目）",
			"<dt> 标签定义了定义列表中的项目（即术语部分）",
			"<dd> 在定义列表中定义条目的定义部分。"
		]
	},
	{
		name: "pre",
		text: "<pre>",
		html: <div>
			<p>pre 元素可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。"</p>
			<p>pre 标签的一个常见应用就是用来表示计算机的源代码。"</p>
			<p>可以导致段落断开的标签（例如标题、 p 和 address 标签）绝不能包含在 pre 标签所定义的块里。尽管有些浏览器会把段落结束标签解释为简单地换行，但是这种行为在所有浏览器上并不都是一样的。"</p>
			<p>pre 元素中允许的文本可以包括物理样式和基于内容的样式变化，还有链接、图像和水平分隔线。当把其他标签（比如 a 标签）放到 pre 块中时，就像放在 HTML/XHTML 文档的其他部分中一样即可。</p>
			<p>例如：</p>
			<pre>{`
	下面这段话是用 <pre> 标签包裹的
	所有 HTML 特殊符号都会被转换为对应的实体
	所有换行符、空格以及制表符都会保留
			`}</pre>
		</div>
	},
	{
		name: "blockquote",
		text: "<blockquote>",
		html: <div>
			<p>用于标记长引用（以块的形式），cite属性用于规定引用的来源</p>
			<p>例如：</p>
			<blockquote className={s["code-block"]} cite="http://www.w3school.com.cn/tags/tag_blockquote.asp">
				<div>Here is a long quotation here is a long quotation here is a long quotation.</div>
				<div>here is a long quotation here is a long quotation here is a long quotation.</div>
				<div>here is a long quotation here is a long quotation here is a long quotation.</div>
			</blockquote>
			<p>短引用可用 q 标签： <q>{`<q>这是一个 <q> 标签</q>`}</q></p>
		</div>
	},
	{
		name: "code",
		text: "<code>",
		html: <div>
			<p>{`<code> 标签用于表示计算机源代码或者其他机器可以阅读的文本内容。`}</p>
			<p>{`软件代码的编写者已经习惯了编写源代码时文本表示的特殊样式。<code> 标签就是为他们设计的。包含在该标签内的文本将用等宽、类似电传打字机样式的字体（Courier）显示出来，对于大多数程序员和 W3School 的用户来说，这应该是十分熟悉的。`}</p>
			<p>{`只应该在表示计算机程序源代码或者其他机器可以阅读的文本内容上使用 <code> 标签。虽然 <code> 标签通常只是把文本变成等宽字体，但它暗示着这段文本是源程序代码。将来的浏览器有可能会加入其他显示效果。例如，程序员的浏览器可能会寻找 <code> 片段，并执行某些额外的文本格式化处理，如循环和条件判断语句的特殊缩进等。`}</p>
			<p>例如：</p>
			<code className={s["code-block"]}>{
`int main() {
	State s;
	s.d[0] = s.d[1] = s.d[2] = 'B';
	s.d[3] = s.d[4] = s.d[5] = 'W';
	s.d[6] = 0; s.g = 0;
	cout << A(s);
	return 0;
}`
			}</code>
			<p>{`注意：如果只是希望使用等宽字体的效果，请使用 <tt> 标签。或者，如果想要在严格限制为等宽字体格式的文本中显示编程代码，请使用 <pre> 标签。`}</p>
		</div>
	}
]

// 获取滚动条位置
const getScrollPosition = (el = window) => ({
	x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
	y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

var scrollHandler;

export default class Html extends Component {

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
				<Panel title="HTML 回顾">
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