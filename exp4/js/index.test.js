(function() {
	// 人员定义
	var e1 = new Employee("员工1", 1250)
	var e2 = new Employee("员工2", 1350)
	var e3 = new Employee("员工3", 1450)
	var e4 = new Employee("员工4", 1550)
	var e5 = new Employee("员工5", 1850)
	var s1 = new Secretary("秘书1", 2850)
	var s2 = new Secretary("秘书2", 3250)
	var s3 = new Secretary("秘书3", 3850)
	var m1 = new Manager("经理1", 5000)
	var m2 = new Manager("经理2", 6000)

	// 关系定义
	m1.addInferior(e1, e2, e3)
	m1.addSecretary(s1, s2)
	m2.addInferior(e4, e5)
	m2.addSecretary(s3)

	// HTML模板
	var template = `
		<header>{{name}}</header>
		<div class="content">{{content}}</div>
	`;

	// 测试点
	[e1, e2, e3, e4, e5, s1, s2, s3, m1, m2].forEach(function(person) {
		var detail = ""
		if (person.superior)
			detail += "我的上司是" + person.superior.name + "。"
		if (person.inferiors && person.inferiors.length > 0) {
			detail += "我有" + person.inferiors.length + "个下属："
			detail += person.inferiors.map(function(p) { return p.name }).join("，")
			detail += "。"
		}
		if (person.secretaries && person.secretaries.length > 0) {
			detail += "我有" + person.secretaries.length + "个秘书："
			detail += person.secretaries.map(function(p) { return p.name }).join("，")
			detail += "。"
		}

		// 插入到DOM
		var div = document.createElement("div")
		div.className = "person"
		div.innerHTML = template.replace("{{name}}", person.name)
								.replace("{{content}}", person.show() + detail)
		document.body.appendChild(div)

		// 暴露给外部
		if (!window.persons)
			window.persons = []
		window.persons.push(person)
	})

	// 开发者陈述
	var div = document.createElement("div")
	div.className = "person"
	div.innerHTML = template.replace("{{name}}", "开发者")
							.replace("{{content}}", "我是开发者，我没有薪水，" +
								"但是你可以控制台输入 persons 来查看所有测试人员信息。")
	document.body.appendChild(div)
})()