// let box = document.querySelector('.box');
// let heading = box.querySelector('h2');
// console.log(heading.innerText);

// let box = document.querySelectorAll('.box');
// let heading = box[3].querySelectorAll('h2');
// console.log(heading);

// let box = document.querySelector('.box_1');
// box.style.backgroundColor = "red";

// let box = document.querySelectorAll('.box');
// box.forEach(a =>{
//     a.style.backgroundColor = "red";
// });

let body = document.querySelector('.header');
let headTop = document.createElement('div');
headTop.classList.add('container');

let box = document.createElement('div');
box.classList.add('header');
box.style.display = "flex";
box.style.justifyContent = "space-between";
box.style.alignItems = "center";
box.style.padding = "20px";


let headerLeft = document.createElement('div');
headerLeft.classList.add('header-left');
headerLeft.innerHTML = "<a href='/'><img src='./img/logo.png' alt='logo'></a>";

let headerRight = document.createElement('div');
headerRight.classList.add('header-right');
headerRight.innerHTML = "<ul><li>Home</li><li>About</li><li>Contact</li><li><a href='cart.html'>cart</a></li></ul>";
headerRight.querySelectorAll('li').forEach(a =>{
    a.style.display = "inline-block";
    a.style.marginLeft = "20px";
    a.style.cursor = "pointer";
});


box.append(headerLeft);
box.append(headerRight);
headTop.append(box);
body.append(headTop);

let proCard = [
    {
        proId: 1,
        proName: "Iphone",
        proPrice: 120000,
        proImage: "https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png"
    },
    {
        proId: 2,
        proName: "Samsung Galaxy",
        proPrice: 110000,
        proImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC83YCq9QFf5qlkBslq26NWqGUoXhvig8n6w&s"   
    },
    {
        proId: 3,
        proName: "Oppo",
        proPrice: 35000,
        proImage: "https://aspireinnovate.in/cdn/shop/files/OppoA6X5GMobile4-64_f13ce319-5e5e-4606-9b62-012cde4e90c7.png?v=1766485788"   
    },
    {
        proId: 4,
        proName: "Vivo",
        proPrice: 20000,
        proImage: "https://shop.vivowb.in/wp-content/uploads/2025/04/c9a44fb0b23b83bc2805576173645370.png.png"   
    }
]

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let homeDiv = document.querySelector('.home-page');
if(homeDiv){
    let container = document.createElement('div');
    container.classList.add('product_row');
    proCard.map(a =>{
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', a.proId);
        let img = document.createElement('img');
        img.setAttribute('src', a.proImage);
        let info = document.createElement('div');
        info.classList.add('info');
        let name = document.createElement('h4');
        name.innerText = a.proName;
        let price = document.createElement('p');
        price.innerText = a.proPrice;
        let btn = document.createElement('button');
        btn.innerText = "Buy Now";

        card.addEventListener("click", (e) =>{
            if(e.target.tagName === "BUTTON"){
                let closestCard = e.target.closest('.card');
                let id = closestCard.getAttribute('data-id');
                let productInfo = proCard.find(a => a.proId == id);
                cart.push(productInfo);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        })

        info.append(name, price);
        card.append(img, info, btn);
        container.append(card);
    })
    homeDiv.append(container);
}

let cart_items = document.querySelector('.cart_items');
cart.forEach(a =>{
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    let imagrDiv = document.createElement('div');
    imagrDiv.classList.add('cart-image');
    let img_item = document.createElement('img');
    img_item.setAttribute('src', a.proImage);
    imagrDiv.append(img_item);
    let infoDiv = document.createElement('div');
    infoDiv.classList.add('cart-info');
    let pName = document.createElement('h4');
    pName.innerText = a.proName;
    let pro_Price = document.createElement('p');
    //let quantity = cart.filter(item => item.proId === a.proId).length;
    pro_Price.innerText = "Per Each " + a.proPrice;
    infoDiv.append(pName, pro_Price);
    cartItem.append(imagrDiv, infoDiv);
    cart_items.append(cartItem);
    //let totalPrice = a.proPrice * quantity;
});


