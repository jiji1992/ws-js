// console.log(document)
// console.log(document.getElementById("total").innerHTML)
// console.log(document.getElementsByClassName("like"))
// console.log(document.getElementsByTagName("p"))
// console.log(document.querySelectorAll(".like"))
// console.log(document.querySelector(".like"))
const btnsAddTag = document.getElementsByClassName("plus");
const btnsdelete = document.getElementsByClassName("delete");

for (var i = 0; i < btnsAddTag.length; i++) {
  btnsAddTag[i].addEventListener("click", increment);
  btnsdelete[i].addEventListener("click", deleteFN);
}
function deleteFN(event) {
    //select the target element
const e = event.target;
console.log(e.parentElement.parentElement.parentElement.parentElement);
// remove the list item
var block=e.parentElement.parentElement.parentElement.parentElement;
var totalTag = document.getElementById("total");

  var total = Number(totalTag.innerHTML);
  var price= Number(block.querySelector(".price").innerHTML);
  console.log(price)
  console.log(total)
total=total-price;
totalTag.innerHTML=total;
console.log(total)
block.parentNode.removeChild(block);


}
function increment(event) {
  var btnPlus = event.target;
  var divElt = btnPlus.parentElement;
  var quantityTag = divElt.querySelector("p");
  var quantity = Number(quantityTag.innerHTML);
  quantity++;
  quantityTag.innerHTML = quantity;
  var priceTag = divElt.parentElement.parentElement.querySelector(".price");
  var unitPriceTag =
    divElt.parentElement.parentElement.querySelector(".unitPrice");
  var unitPrice = Number(unitPriceTag.innerHTML);
  var price = unitPrice * quantity;
  priceTag.innerHTML = price;
}

var checkTags = document.querySelectorAll(".check");
for (var j = 0; j < checkTags.length; j++) {
  checkTags[j].onclick = totalPrice;
}

function totalPrice(event) {
  var checkTag = event.target;
  var priceTag = checkTag.parentElement.parentElement.querySelector(".price");
  console.log(priceTag);
  var price = Number(priceTag.innerHTML);
  console.log(price);
  var totalTag = document.getElementById("total");

  var total = Number(totalTag.innerHTML);
  var btnPlus = checkTag.parentElement.parentElement.querySelector(".plus")
  var btnMinus = checkTag.parentElement.parentElement.querySelector(".minus")

  if (checkTag.checked === true) {
    //  total = total + priceF

    total += price;
    btnPlus.setAttribute("disabled",true);
    btnMinus.setAttribute("disabled",true);

  } else {
    total =total- price;
    btnPlus.removeAttribute("disabled")
    btnMinus.removeAttribute("disabled")
  }
  totalTag.innerHTML = total;
}

