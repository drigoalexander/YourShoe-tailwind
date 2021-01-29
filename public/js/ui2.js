const addBelanja = (data, row, id) => {

  const Belanja = `<div class="rem flex flex-start flex-wrap items-center mb-4 -mx-4" id="${id}" data-row="${row}">
    <div class="px-4 flex-none">
      <div class="" style="width: 90px; height: 90px">
        <img src="${data.URL}" alt="" class="object-cover rounded-xl w-full h-full" />
      </div>
    </div>
    <div class="px-4 w-auto md:w-5/12 flex-1">
      <div class="">
        <h6 class="font-semibold text-lg md:text-xl leading-8">
          ${data.Name}
        </h6>


      </div>
    </div>
    <div class="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
      <div class="">
        <h6 class="font-semibold text-lg">${data.Price}</h6>
      </div>
    </div>
    <div class="px-4 w-2/12">
      <div class="text-center">
        <button onclick="removebelanja(${row})" data-delete-item="${row}" class="text-red-600 border-none focus:outline-none px-3 py-1">
          X
        </button>
      </div>
    </div>
  </div>
    `;
  return Belanja;

};

var mycart = JSON.parse(localStorage.getItem("mycart") || "{}");

const removebelanja = (row) => {
  const rembel = document.querySelector(`.rem[data-row="${row}"]`);
  var id = rembel.getAttribute("id")
  delete mycart[id]
  localStorage.setItem('mycart', JSON.stringify(mycart));
  console.log(mycart)
  rembel.remove();
  if (Object.keys(mycart).length === 0) {
    belanjaan = `<p id="cart-empty" class="text-center py-8">
      Ooops... Cart is empty
      <a href="details.html" class="underline">Shop Now!</a>
    </p>`
    console.log(belanjaan)
    const cartbelanja = document.querySelector(`#shopping-cart`);
    cartbelanja.innerHTML += belanjaan;
  }
}





const generateBelanja = () => {
  console.log(mycart)
  var belanjaan = ""
  var row = 1
  if (Object.keys(mycart).length === 0) {
    belanjaan = `<p id="cart-empty" class="text-center py-8">
    Ooops... Cart is empty
    <a href="details.html" class="underline">Shop Now!</a>
  </p>`
    console.log(belanjaan)
  }

  for (var id in mycart) {
    belanjaan += addBelanja(mycart[id], row, id)
    row += 1

  }

  const cartbelanja = document.querySelector(`#shopping-cart`);
  cartbelanja.innerHTML += belanjaan;
}