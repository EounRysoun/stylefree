$(document).ready(function () {
  var i = 0;
  $("#icon").click(function () {
    if (i == 0) {
      $("#form").show(200);
      i = 1;
    } else {
      $("#form").hide(100);
      i = 0;
    }
  });
});
const product = [
  {
    id: 1,
    name: "Test product1",
    qty: 11.76,
    price: 10,
    img: "/HTML/img/2.jpg",
  },
  {
    id: 2,
    name: "Test product2",
    price: 10,
    qty: 20.99,
    img: "/HTML/img/p1.jpg",
  },
  {
    id: 3,
    name: "Test product3",
    price: 10,
    qty: 30.56,
    img: "/HTML/img/p15.jpg",
  },
  {
    id: 4,
    name: "Test product4",
    price: 10,
    qty: 99.99,
    img: "/HTML/img/p3.jpg",
  },
  {
    id: 5,
    name: "Test product5",
    price: 10,
    qty: 10,
    img: "/HTML/img/p5.jpg",
  },
];
var i = 0;
var cart = document.getElementById("cart");
cart.onclick = function () {
  if (i == 0) {
    document.querySelector(".cart-shop").style.display = "block";
    document.querySelector(".bfr").style.display = "block";
    i = 1;
  } else {
    document.querySelector(".cart-shop").style.display = "none";
    document.querySelector(".bfr").style.display = "none";
    i = 0;
  }
};
var bfr = document.querySelector(".bfr");
bfr.onclick = function () {
  document.querySelector(".cart-shop").style.display = "none";
  document.querySelector(".bfr").style.display = "none";
};

var num1 = document.querySelectorAll("#icy");
var index = 1;
num1.forEach((el, i) => {
  el.addEventListener("click", function () {
    document.querySelector(".box-num").innerHTML = index;
    document.getElementById("tbl-data").innerHTML += `<tr>
    <td>${product[i].id}</td>
    <td>${product[i].name}</td>
    <td>${product[i].price}</td>
    <td>$${product[i].qty}</td>
    <td>$110</td>
  </tr>`;
    index++;
  });
});

