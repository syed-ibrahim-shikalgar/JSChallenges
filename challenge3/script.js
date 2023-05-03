let card = document.querySelector(".accordion-homepage");
let list = document.createElement("section");
list.className = "parent";
let list1 = document.createElement("h3");
list.appendChild(list1);
list.querySelector("h3").innerText = "My New Faq";
card.appendChild(list);
