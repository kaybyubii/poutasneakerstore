const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 359,
        desc: "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",
        colors: [
            {
                code: "black",
                img: "./img/Product/air.png",
            },
            {
                code: "darkblue",
                img: "./img/Product/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 249,
        desc: "The Air Jordan 1 was created by designer Peter B Moore and was first created for basketball player Michael Jordan.",
        colors: [
            {
                code: "lightgray",
                img: "./img/Product/jordan.png",
            },
            {
                code: "green",
                img: "./img/Product/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 239,
        desc: "The Blazer was originally designed for NBA star George 'The Iceman' Gervin and was named after the Portland Trail Blazers.",
        colors: [
            {
                code: "lightgray",
                img: "./img/Product/blazer.png",
            },
            {
                code: "green",
                img: "./img/Product/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 219,
        desc: "The Crater Impact was created using at least 25% recycled material in order to create a sustainable future.",
        colors: [
            {
                code: "black",
                img: "./img/Product/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/Product/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 189,
        desc: "The Space Hippie was created using recycled water bottles, T-shirts and yarn, and it borrows design from moon shoes.",
        colors: [
            {
                code: "gray",
                img: "./img/Product/hippie.png",
            },
            {
                code: "black",
                img: "./img/Product/hippie2.png",
            },
        ],
    },
    {
        id: 6,
        title: "Air Max",
        price: 289,
        desc: "The Air Max Tailwind was created by aeronautical engineer M. Frank Rudy and was the first ever shoe to use Nike Air technology.",
        colors: [
            {
                code: "black",
                img: "./img/Product/airmax.png",
            },
            {
                code: "white",
                img: "./img/Product/airmax2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc")
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100*index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of current Product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RM" + choosenProduct.price;
        currentProductDesc.textContent = choosenProduct.desc
        currentProductImg.src = choosenProduct.colors[0].img;

        //adding new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});