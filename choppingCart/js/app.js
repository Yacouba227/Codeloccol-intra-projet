(function () {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");
  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();
/* ------------------------------------------------ */
//////////////////////////////////////////////////////
////// La fonction qui permet de gerer le panier//////
//////////////////////////////////////////////////////
/* ------------------------------------------------ */

(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");
  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      //console.log(event.target);
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        let partPath = fullPath.slice(pos);
        const item = {};
        item.img = `img-cart${partPath}`;
        let name =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[0].textContent;
        item.name = name;
        let price =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[1].textContent;
        let finalPrice = price.slice(1).trim();
        item.price = finalPrice;
        //console.log(item);
        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );
        cartItem.innerHTML = `
                        <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                        <div class="cart-item-text">
                            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                            <span>$</span>
                            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                        </div>
                        <a href="#" id='cart-item-remove' class="cart-item-remove">
                            <i class="fas fa-trash"></i>
                        </a>
                        </div>`;
        //Select cart
        const cart = document.getElementById("cart");
        const total = document.querySelector(".cart-total-container");
        batard();
        /* const confirm = document.querySelector('.info');
                confirm.style.display = 'block'; */
        cart.insertBefore(cartItem, total);
        // alert('Item added to the cart');
        showTotal();
      }
    });
  });

  //////////////////////////////////////////
  function batard() {
    const confirm = document.querySelector(".info");
    confirm.classList.remove("info-none");
    setTimeout(() => {
      confirm.classList.add("info-none");
    }, 1000);
  }
  //////////////////////////////////////////
  //show total
  /* ------------------------------------------------ */
  //////////////////////////////////////////////////////
  //////// La fonction qui permet de calculer /////////
  //// le montant total et l'afficher dans le span /////
  //////////////////////////////////////////////////////
  /* ------------------------------------------------ */
  function showTotal() {
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");
    items.forEach(function (item) {
      total.push(parseFloat(item.textContent));
    });
    //console.log(total);
    const totalMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0);
    const finalyMoney = totalMoney.toFixed(2);
    //console.log(finalyMoney);
    document.getElementById("cart-total").textContent = finalyMoney;
    document.querySelector(".item-total").textContent = finalyMoney;
    document.getElementById("item-count").textContent = total.length;
  }
})();


// Pour la barre de recherche
const allStore = document.querySelectorAll('.cardRow');
const inputSerch = document.querySelector('.inputSerch');

function recherche() {
  const inputValue = inputSerch.value.toLowerCase();
  for (let i = 0; i < allStore.length; i++) {
    const element = allStore[i].textContent.toLowerCase();
    if (inputValue === 'all' ||  element.includes(inputValue)) {
      allStore[i].style.display = 'block';
    } else {
      allStore[i].style.display = 'none';
    }
  }
}

const searchIcon = document.getElementById('search-icon');
searchIcon.addEventListener('click', (event) => {
  event.preventDefault();
  recherche();
});
 







//Pour le bouttom "span"

// Sélectionnez tous les éléments avec la classe .btnClick
const btnClick = document.querySelectorAll('.btnClick');
// Sélectionnez tous les éléments avec la classe .store-item
const allStoree = document.querySelectorAll('.store-item');

// Ajoutez un écouteur d'événements à chaque bouton
for (let i = 0; i < btnClick.length; i++) {
  btnClick[i].addEventListener('click', filterPosts.bind(this, btnClick[i]));
}

// Fonction pour filtrer les articles en fonction du bouton cliqué
function filterPosts(item) {
  // Supprimez la classe 'active' de tous les boutons
  changeActivePosition(item);

  // Parcourez tous les éléments .store-item
  for (let i = 0; i < allStoree.length; i++) {
    const currentItem = allStoree[i];
    // Vérifiez si le bouton "All" a été cliqué
    if (item.getAttribute('data-filter') === 'all') {
      currentItem.style.display = 'block'; // Affichez tous les éléments
    } else if (currentItem.classList.contains(item.getAttribute('data-filter'))) {
      currentItem.style.display = 'block'; // Affichez l'élément correspondant
    } else {
      currentItem.style.display = 'none'; // Masquez les éléments qui ne correspondent pas
    }
  }
}

// Fonction pour changer la classe 'active' du bouton actif
function changeActivePosition(activeItem) {
  for (let i = 0; i < btnClick.length; i++) {
    btnClick[i].classList.remove('active');
  }
  activeItem.classList.add('active');
}
