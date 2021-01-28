const addData = (data, id) => {

  const datasuk = `
    <div class="dat container min-h-screen px-4  data-id="${id}" ">
    <div class="flex flex-col items-center justify-center">
      <div class="w-full text-center md:w-4/12">
        <img
          src="./images/content/Del.png"
          alt=""
        />
        <h2 class="mb-6 text-3xl font-semibold pt-8">Package Deliver!</h2>
        <p class="mb-12 text-lg">
          Hello <span class="font-bold">${data.Name}</span> we have received your order! <br> please kindly check your email at <span class="font-bold">${data.Email}</span> so we can packed your order!
          <br> if you want to cancel your order, hit the button below
        </p>
        <button
          href="index.html"
          class="dbcart inline-flex justify-center w-full px-4 py-2 mt-4 text-black transition-all duration-200 transform bg-yellow-100 rounded-full focus:bg-black focus:text-yellow-100 md:w-auto hover:scale-110 motion-reduce:transform-none">
          Cancel Order
          </button>
      </div>
    </div>
  </div>
    `;
  const datasukses = document.querySelector(`.sukses`);
  datasukses.innerHTML += datasuk;
};


const removeData = (id) => {
  const datarem = document.querySelector(`.dat[data-id ="${id}"]`);
  datarem.remove();
}