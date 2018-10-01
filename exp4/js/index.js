var Employee = (function() {
	// 构造函数
	function _Employee(name, salary) {
		if (!(this instanceof _Employee))
			return new _Employee(name, salary)
		this.name = name
		this.salary = salary
	}

	// 普通方法
	_Employee.prototype.show = function() {
		return "我是" + this.name + "，我的薪水是" + this.salary + "。"
	}

	return _Employee
})();

// 混合继承（复制继承 + 原型继承）
var Secretary = (function() {
	function _Secretary(name, salary) {
		if (!(this instanceof _Secretary))
			return new _Secretary(name, salary)
		Employee.call(this, name, salary) // 委托构造函数，相当于复制继承
	}

	// 原型继承
	_Secretary.prototype = new Employee() // 只继承普通方法（所有子对象继承父对象而不是父“类”）
	_Secretary.prototype.constructor = _Secretary // 修复constructor引用

	// 普通方法
	_Secretary.prototype.getSuperior = function() {
		return this.superior
	}

	return _Secretary
})();

// 混合继承（复制继承 + 原型继承）
var Manager = (function() {
	function _Manager(name, salary) {
		if (!(this instanceof _Manager))
			return new _Manager(name, salary)
		Employee.call(this, name, salary) // 委托构造函数，相当于复制继承

		this.inferiors = []
		this.secretaries = []
	}

	// 原型继承
	_Manager.prototype = new Employee() // 只继承普通方法（所有子对象继承父对象而不是父“类”）
	_Manager.prototype.constructor = _Manager // 修复constructor引用

	// 普通方法
	_Manager.prototype.addInferior = function() {
		for (var i = 0; i<arguments.length; ++i) {
			var employee = arguments[i]
			if (!(employee instanceof Employee))  {
				console.error("An employee you add is not an instance of Employee: ", JSON.stringify(employee))
				continue
			}
			this.inferiors.push(employee)
			employee.superior = this
		}
	}

	_Manager.prototype.addSecretary = function() {
		for (var i = 0; i<arguments.length; ++i) {
			var secretary = arguments[i]
			if (!(secretary instanceof Secretary)) {
				console.error("A secretary you add is not an instance of Secretary: ", JSON.stringify(secretary))
				continue
			}
			this.secretaries.push(secretary)
			secretary.superior = this
		}
	}

	_Manager.prototype.getInferiors = function() {
		return this.inferiors
	}

	return _Manager
})();