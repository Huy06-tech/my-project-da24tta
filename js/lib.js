const productDatabase = [
    { id: 1,  name: "HonDa Future 125i",        price: 240000000,  img: "../assets/images/xefuture.jpg",        desc: "Nhỏ gọn, phù hợp di chuyển trong đô thị." },
    { id: 2,  name: "Bình Hoa Thái Công",        price: 458000000,  img: "../assets/images/binhbong.jpg",        desc: "Thiết kế hiện đại, sang trọng quý phái." },
    { id: 3,  name: "Máy Xay Sinh Tố",        price: 675000000,  img: "../assets/images/mayxay.jpg",        desc: "Máy xay thông minh, tiện nghi cao cấp." },
    { id: 4,  name: "Máy Giặc Cầm Tay",        price: 850000000,  img: "../assets/images/maygiac.jpg",        desc: "Phong cách thể thao, công nghệ tiên tiến." },
   
];

function addProduct(imgSrc, name, price, productId) {
    // Tạo khung chứa cha
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3");

    // Khung 1 – Hình ảnh
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", imgSrc);
    productImg.setAttribute("alt", name);
    productImg.style.width = "100%";

    myDiv1.appendChild(productImg);

    // Khung 2 – Thông tin
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info");

    const productName = document.createElement("p");
    productName.setAttribute("class", "product-name");
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product-price");
    productPrice.innerText = price.toLocaleString("vi-VN");

    const productBtn = document.createElement("a");
    productBtn.setAttribute("class", "btn-detail");
    productBtn.setAttribute("href", "../html/detail.html?id=" + productId);
    productBtn.innerText = "Xem chi tiết";

    myDiv2.appendChild(productName);
    myDiv2.appendChild(productPrice);
    myDiv2.appendChild(productBtn);

    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    document.getElementById("product-list").appendChild(myDiv);
}

function addProduct_v2(products) {
    products.forEach(function(product) {
        addProduct(product.img, product.name, product.price, product.id);
    });
}