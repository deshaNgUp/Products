var element = document.querySelector("#btn-OpenModal");
var close = document.querySelector(".close");
var search = document.querySelector(".btn-enter");


var openModal = function () {
	modal.style.display = "flex";
	element.innerHTML = "модальное окно ";
}

var closeModal = function () {
	modal.style.display = "none";
	element.innerHTML = "Открыть модальное окно";
}

var search = function () {

}

element.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
search.addEventListener("click", showValues);

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
// 	else {
// 	// 	valid.style.border = "2px solid green";
// 	// 	return false;
// 	// }
	return true;
}