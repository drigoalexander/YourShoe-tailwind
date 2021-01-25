const addBelanja = (data, id) => {

    const Belanja = `<div class="container mx-auto px-4">
      <div class="flex -mx-4 flex-wrap">
        <!-- START: shipping cart -->
        <div class="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
          <div class="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
            <h3 class="text-2xl">Shopping Cart</h3>
          </div>

          <!-- START: Table Title -->
          <div class="border-b border-gray-200 mb-4 hidden md:block">
            <div class="flex flex-start items-center pb-2 -mx-4">
              <div class="px-4 flex-none">
                <div class="" style="width: 90px">
                  <h6>Photo</h6>
                </div>
              </div>
              <div class="px-4 w-5/12">
                <div class="">
                  <h6>Product</h6>
                </div>
              </div>
              <div class="px-4 w-5/12">
                <div class="">
                  <h6>Price</h6>
                </div>
              </div>
              <div class="px-4 w-2/12">
                <div class="text-center">
                  <h6>Action</h6>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Table Title -->

          <!-- START: Cart empty wrapper -->
          <p id="cart-empty" class="hidden text-center py-8">
            Ooops... Cart is empty
            <a href="details.html" class="underline">Shop Now!</a>
          </p>
          <!-- END: Cart empty wrapper -->

          <!-- START: Table item 1 -->
          

            <div class="flex flex-start flex-wrap items-center mb-4 -mx-4" data-row="1">
              <div class="px-4 flex-none">
                <div class="" style="width: 90px; height: 90px">
                //   <img src="./images/content/balen4.jpg" alt="" class="object-cover rounded-xl w-full h-full" />
                ${data.URL}
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
                  <button data-delete-item="1" class="text-red-600 border-none focus:outline-none px-3 py-1">
                    X
                  </button>
                </div>
              </div>
            </div>
            <!-- END: Table item 1 -->
       
          

    `;
    const cartbelanja = document.querySelector(`.ui2`);
    cartbelanja.innerHTML += belanja;
};


const removeReq = (id) => {
    const temtem = document.querySelector(`.deletein[data-id ="${id}"]`);
    temtem.remove();
}