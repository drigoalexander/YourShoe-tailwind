//offline data

db.enablePersistence()
.catch(err => {
  if(err.code == 'failed-procondition'){
    console.log('presistence failed')
  }
  else if(err.code== 'unimplemented'){
    console.log('presistence is not available');
  }
});

// realtime listener
// db.collection('ShipDet').onSnapshot( snapshot => {
//     snapshot.docChanges().forEach( change => {
//       if(change.type === 'added'){
//         addRequest(change.doc.data(), change.doc.id)
//       }
//       if(change.type === 'modified'){
//         editReq(change.doc.data(), change.doc.id);
//       }
//       if(change.type === 'removed'){
//         removeReq(change.doc.id);
//       }
//     })
//   })

  const addShip = document.querySelector('.ui2');
    addShip.addEventListener('submit', evt => {
   evt.preventDefault();
   var mycart = JSON.parse(localStorage.getItem("mycart") || "{}")
  const Ship = {
    Addres: document.getElementById("address").value,
    Email: document.getElementById("email-address").value,
    Name: document.getElementById("complete-name").value,
    Nohp: document.getElementById("phone-number").value,
    mycart: mycart
    
  };
  console.log(Ship)
  db.collection('ShipDet').add(Ship)
  .then(function(doc){
    addShip.reset();
    window.location.href = "./success.html"
    
  })
    .catch(err => console.log(err));
  
});



