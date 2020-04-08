let products = [{
	Food: 'Bread'
}, {
	Food: 'Milk'
}, {
	Food: 'Cheese'
}, {
	Food: 'Eggs'
}
];

function createTable(array, elementMounted){
	var element = document.querySelector(elementMounted);
	element.innerHTML = "";
	this.headers = [];
	this.array = array.forEach(item => {
		var arrKey = Object.keys(item);
		arrKey.forEach(key => {
			if(!this.headers.includes(key)){
				this.headers.push(key);
			}
		});
	});
	console.log(headers);

	var table = document.createElement('table');

	var trForHead = document.createElement('tr');

	this.headers.forEach(item => {
		var th = document.createElement('th');
		th.innerText = item;
		trForHead.append(th);
	});

	table.append(trForHead);

	array.forEach(item => {
		var typeCheck = typeof item === 'object';
		if(typeCheck){
			var tr = document.createElement('tr');
			this.headers.forEach(key => {
				var td = document.createElement('td');
				td.innerText = item[key] || '';
				tr.append(td)
			});
			table.append(tr)
		}
	});

	element.append(table);
}

createTable(products, '#custom-table');


var element = document.querySelector("#btn-OpenModal");
var close = document.querySelector(".close");
var add = document.querySelector(".btn-Add");
var Delete = document.querySelector(".btn-Delete");

var openModal = function () {
	modal.style.display = "flex";
	element.innerHTML = "модальное окно ";
}

var closeModal = function () {
	modal.style.display = "none";
	element.innerHTML = "Открыть модальное окно";
}

var addproduct = function () {
	var valid = document.getElementById("search_products");
	var invalid = document.getElementById("search_product");
	var check = validate()
	if(check) {
		var value = valid.value;
		var key = invalid.value;
		var obj = {};
		obj[key] = value;
		products.push(obj);
		createTable(products, '#custom-table');
	}

}

element.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
add.addEventListener("click", addproduct);

function validate() {
	
	var valid = document.getElementById("search_products");
	var invalid = document.getElementById("search_product");

	if(!search_products.value) {
		valid.style.border = "2px solid red";
		return false;
	} 
	if(!search_product.value) {
		invalid.style.border = "2px solid green";
		return false;
	}
	return true;
}

 var del = function () {
	 var a = confirm("точно хочешь удалить?");
	if (a) {
		alert("ok");
	} else {
		openModal();
	}
}
Delete.addEventListener("click", del);