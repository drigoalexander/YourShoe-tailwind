db.enablePersistence()
    .catch(err => {
        if (err.code == 'failed-procondition') {
            console.log('presistence failed')
        } else if (err.code == 'unimplemented') {
            console.log('presistence is not available');
        }
    });


var mycart = JSON.parse(localStorage.getItem("mycart") || "{}");

const addcart = document.querySelector('.dbcart');
addcart.addEventListener('click', evt => {
    var id = addcart.getAttribute("idcart");
     db.collection('addtocart').doc(id).get().then(function (doc) {
        var shoes = doc.data();
        var curTot = mycart.hasOwnProperty(id) ? mycart[id].Total : 0;
        var item = {
            Name: shoes.Name,
            Price: shoes.Price,
            URL: shoes.URL,
            Total: 1 + curTot
        }


        mycart[id] = item
        localStorage.setItem('mycart', JSON.stringify(mycart));
        window.location.href = "/cart.html";
    })




})


const addcart2 = document.querySelector('.dbcart2');
addcart2.addEventListener('click', evt => {
    var id = addcart2.getAttribute("idcart");
     db.collection('addtocart').doc(id).get().then(function (doc) {
        var shoes = doc.data();
        var curTot = mycart.hasOwnProperty(id) ? mycart[id].Total : 0;
        var item = {
            Name: shoes.Name,
            Price: shoes.Price,
            URL: shoes.URL,
            Total: 1 + curTot
        }


        mycart[id] = item
        localStorage.setItem('mycart', JSON.stringify(mycart));
        window.location.href = "/cart.html";
    })




})