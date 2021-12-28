const productsEl = document.getElementById('products');
const favFroductsEl = document.getElementById('favFroducts');
const cartProductsEl = document.getElementById('cartProducts');
const selectCategoryEl = document.getElementById('selectCategory');
const searchInpEl = document.getElementById('searchInput');
const searchBtnEl = document.getElementById('searchBtn');
const totalEl = document.querySelector('#total');
let productArray = [
    {
        name: 'Palto',
        price: '450$',
        category: 1,
        image: 'img/womenfashion.jfif'
    },
    {
        name: 'Pidjact',
        price: '80$',
        category: 1,
        image: 'img/womenkastum.jfif'
    },
    {
        name: 'Sportivka',
        price: '215$',
        category: 1,
        image: 'img/womentalstushka.jfif'
    },
    {
        name: 'Jensovka',
        price: '65$',
        category: 1,
        image: 'img/womenvetrofka.jfif'
    },
    {
        name: 'Kardigan',
        price: '25$',
        category: 1,
        image: 'img/womenvetrofka1.jfif'
    },
    {
        name: 'Qora ko`ylak',
        price: '205$',
        category: 3,
        image: 'img/men31.jfif'
    },
    {
        name: 'Kostum',
        price: '250$',
        category: 3,
        image: 'img/men32.jfif'
    },
    {
        name: 'Men fashion',
        price: '55$',
        category: 3,
        image: 'img/men33.jfif'
    },
    {
        name: 'Switer',
        price: '35$',
        category: 3,
        image: 'img/men34.jfif'
    },
    {
        name: 'Erkaklar ko`ylagi',
        price: '25$',
        category: 3,
        image: 'img/men35.jfif'
    },
    {
        name: 'Krossovka',
        price: '180$',
        category: 4,
        image: 'img/shoes41.jfif'
    },
    {
        name: 'Krossovka',
        price: '80$',
        category: 4,
        image: 'img/shoes42.jfif'
    },
    {
        name: 'Krossovka',
        price: '70$',
        category: 4,
        image: 'img/shoes43.jfif'
    },
    {
        name: 'Keta',
        price: '50$',
        category: 4,
        image: 'img/shoes44.jfif'
    },
    {
        name: 'Krossovka',
        price: '80$',
        category: 4,
        image: 'img/shoes45.jfif'
    },
    {
        name: 'kelin ko`ylak',
        price: '150$',
        category: 6,
        image: 'img/toy61.jfif'
    },
    {
        name: 'Kelin ko`ylak',
        price: '850$',
        category: 6,
        image: 'img/toy62.jfif'
    },
    {
        name: 'Kelin ko`ylak',
        price: '650$',
        category: 6,
        image: 'img/toy63.jfif'
    },
    {
        name: 'Kelin ko`ylak',
        price: '750$',
        category: 6,
        image: 'img/toy64.jfif'
    }, {
        name: 'Kelin ko`ylak',
        price: '950$',
        category: 6,
        image: 'img/toy65.jfif'
    },
    {
        name: 'bolalar',
        price: '20$',
        category: 2,
        image: 'img/boyfash.jfif'
    },
    {
        name: 'bolalar',
        price: '30$',
        category: 2,
        image: 'img/babyfash.jfif'
    },
    {
        name: 'bolalar',
        price: '70$',
        category: 2,
        image: 'img/babyfashion.jfif'
    },
    {
        name: 'bolalar',
        price: '50$',
        category: 2,
        image: 'img/boy1.jfif'
    },
    {
        name: 'Sumka',
        price: '15$',
        category: 5,
        image: 'img/bug.jfif'
    },
    {
        name: 'Kepka',
        price: '25$',
        category: 5,
        image: 'img/capkaa.jfif'
    },
    {
        name: 'Kepka',
        price: '10$',
        category: 5,
        image: 'img/cepkka.jfif'
    },



];

let categories = ['Barchasi', 'Ayollar kiyimi', 'Bolalar kiyimi', 'Erkaklar kiyimi', 'Oyoq kiyimlar', 'Aksessuarlar', 'Toy liboslari'];


// ProductHtml
function createProductHtml(el, index) {

    const col = document.createElement('div');
    col.className = 'col-3 ' + index;

    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = el.image;
    image.setAttribute('alt', el.name); // element attributiga qiymat berish

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.innerText = el.name;

    const cat = document.createElement('h6');
    cat.className = 'card-subtitle mb-2 text-muted';
    cat.innerText = categories[el.category];

    const price = document.createElement('p');
    price.className = 'card-text';
    price.innerText = el.price;

    const btnCart = document.createElement('button');
    btnCart.className = 'btn btn-primary  add-to-cart">';
    btnCart.innerHTML = '<i class="bi bi-cart add-to-cart"></i>';

    const btnFav = document.createElement('button');
    btnFav.className = 'btn btn-warning add-to-fav';    
    btnFav.innerHTML = '<i class="bi bi-heart add-to-fav"></i>';


    col.appendChild(card);
    card.appendChild(image);
    card.appendChild(body);
    body.appendChild(title);
    body.appendChild(cat);
    body.appendChild(price);
    body.appendChild(btnCart);
    body.appendChild(btnFav);

    if (productsEl) {
        productsEl.appendChild(col);
    } else if (favFroductsEl) {
        favFroductsEl.appendChild(col);
    } else if (cartProductsEl) {
        cartProductsEl.appendChild(col);
    }

}

// cartHtml
function createCartItemHtml(el) {
    const product = document.createElement('div');
    product.className = 'cart-product';

    const image = document.createElement('img');
    image.className = 'img-fluid';
    image.src = el.image;
    image.setAttribute('alt', el.name);

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name'

    const title = document.createElement('div');
    title.className = 'row text-muted';
    title.innerText = el.name;

    const cat = document.createElement('div');
    cat.className = 'row';
    cat.innerText = categories[el.category];

    nameDiv.appendChild(title);
    nameDiv.appendChild(cat);

    const count = document.createElement('div');
    count.className = 'count';

    const minus = document.createElement('button');
    minus.innerHTML = '-';

    const plus = document.createElement('button');
    plus.innerHTML = '+';

    const countSpan = document.createElement('span');
    countSpan.className = 'border';
    countSpan.innerHTML = '1';

    count.appendChild(minus);
    count.appendChild(countSpan);
    count.appendChild(plus);

    const price = document.createElement('div');
    price.className = 'price';
    price.innerText = el.price;

    const remove = document.createElement('button');
    remove.className = 'close';
    remove.innerHTML = '&#10005;';

    price.appendChild(remove);
    product.appendChild(image);
    product.appendChild(nameDiv);
    product.appendChild(count);
    product.appendChild(price);

    if (cartProductsEl) {
        cartProductsEl.appendChild(product);
    }
}

function showProducts(arr) {
    productsEl.innerHTML = '';
    arr.forEach((el, index) => {
        createProductHtml(el, index);
    });
}

if (productsEl) {
    showProducts(productArray);
}

if (selectCategoryEl) {
    selectCategoryEl.addEventListener('change', filterCategory);
}

function filterCategory(event) {
    let filteredProducts;
    if (event.target.value == 0) {
        filteredProducts = productArray;
    } else {
        filteredProducts = productArray.filter((el) => {
            return el.category == event.target.value;
        });
    }
    showProducts(filteredProducts);
}

searchBtnEl.addEventListener('click', () => {

    let filteredProducts = productArray.filter((el) => {
        return el.name.toLowerCase().includes(searchInpEl.value);
    });

    showProducts(filteredProducts);
});

// Tovarlarni tanlanganlarga qo'shish

let storageArr = localStorage.getItem('favArr');
let storageCartArr = localStorage.getItem('cartArr');

let favProducts = storageArr ? JSON.parse(storageArr) : [];

let cartProducts = storageCartArr ? JSON.parse(storageCartArr) : [];

if (productsEl) {
    productsEl.addEventListener('click', (event) => {
        let clickedEl = event.target;
        let parentclasses = clickedEl.closest('.col-3').classList;
        let elIndex = parentclasses[parentclasses.length - 1];
        if (clickedEl.className.includes('add-to-fav')) {
            addIndexToArr(favProducts, 'favArr', elIndex);
            for(let i = 0 ; i >= addIndexToArr; i++ ){
                // return addIndexToArr
            }console.log(+addIndexToArr)
        } else if (clickedEl.className.includes('add-to-cart')) {
            addIndexToArr(cartProducts, 'cartArr', elIndex);
        }
    });
}

function addIndexToArr(arr, key, index) {
    if (!arr.includes(index)) {
        arr.push(index);
    }
    let stringJSON = JSON.stringify(arr);
    localStorage.setItem(key, stringJSON);
}
fillDiv(favFroductsEl, 'favArr');
fillDiv(cartProducts, 'cartArr');

function fillDiv(divEl, key) {
    if(divEl) {
        let massiv = localStorage.getItem(key);
        if(massiv) {
            let parsedArr = JSON.parse(massiv);
            let functionName = key == 'cartArr' ? createCartItemHtml : createProductHtml;
            showPageProducts(parsedArr, divEl, functionName);
        }
    }
    if(totalEl) {
        setTotalPrice();
    }
}

function showPageProducts(arr, rowEl, createFunction) {
    rowEl.innerHTML = '';
    for(let i = 0; i < arr.length; i++) {
        createFunction(productArray[arr[i]], arr[i]);
    }
}
/** */

if(cartProductsEl) {
cartProductsEl.addEventListener('click', (event) => {
    if(event.target.className == 'close') {
        let productI = event.target.getAttribute('data-index');
        let cartArr = JSON.parse(localStorage.getItem('cartArr'));

        const index = cartArr.indexOf(productI);
        cartArr.splice(index, 1);

        localStorage.setItem('cartArr', JSON.stringify(cartArr));

        fillDiv(cartProductsEl, 'cartArr');
    }
});
};
function setTotalPrice() {
    let totalPrice = 0;
    let cartArr = JSON.parse(localStorage.getItem('cartArr'));
    
    for(let i = 0; i < cartArr.length; i++) {
        const index = cartArr[i];
        const price = Number.parseFloat(productArray[index].price);
        totalPrice += price;
    }
    
    totalEl.innerHTML = totalPrice + '$';
}
