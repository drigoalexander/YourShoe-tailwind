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

//realtime listener
db.collection('Request').onSnapshot( snapshot => {
    snapshot.docChanges().forEach( change => {
      if(change.type === 'added'){
        addRequest(change.doc.data(), change.doc.id)
      }
      if(change.type === 'modified'){
        editReq(change.doc.data(), change.doc.id);
      }
      if(change.type === 'removed'){
        removeReq(change.doc.id);
      }
    })
  })

  const addDong = document.querySelector('.add-req');
    addDong.addEventListener('submit', evt => {
   evt.preventDefault();
  const req = {
    Name: document.getElementById("Nameuser").value,
    Req: document.getElementById("Requser").value
    
  };

  

  db.collection('Request').add(req)
    .catch(err => console.log(err));
  addDong.reset();
});


//delete

const hapus = document.querySelector('.request');
hapus.addEventListener('click', evt => {
  // console.log(evt);
  if(evt.target.tagName === 'BUTTON'){
    const id = evt.target.getAttribute('data-id');
    db.collection('Request').doc(id).delete();
  }
});
