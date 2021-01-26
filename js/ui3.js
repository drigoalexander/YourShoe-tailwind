const addRequest = (data, id) => {

    const html = `<div  class="deletein h-screen flex items-center justify-center my-12 md:py-16 my-6" data-id="${id}">
    <!-- MODAL-->
    <div class="w-1/2 rounded-lg shadow-lg bg-yellow-100" >
      <!-- HEADER-->
      <div class="border-b border-gray-200 text-black">
        <div class="p-3 text-3xl">Request</div>
      </div>

      <div class="relative p-3 pl-4">

        <div class="text-2xl pt-4 ">${data.Name}</div>
        
      <div class="pt-4  text-xl">${data.Req}</div>
      </div>
      
      <div class="pl-20 pb-3 pr-4 flex justify-end">
        <div class="flex items-center">
          <button class="mr-3" data-id="${id}">Delete</button>
        </div>
        <div class="bg-black rounded-xl text-yellow-100 inline-block py-2 px-4">
       My Request
       </div>
      </div>
    </div>
  </div>
    `;
    const request = document.querySelector(`.request`);
    request.innerHTML += html;
};


const removeReq = (id) => {
    const temtem = document.querySelector(`.deletein[data-id ="${id}"]`);
    temtem.remove();
}