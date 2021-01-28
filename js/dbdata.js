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
db.collection('ShipDet').onSnapshot( snapshot => {
    snapshot.docChanges().forEach( change => {
      if(change.type === 'added'){
        addData(change.doc.data(), change.doc.id)
      }
      if(change.type === 'removed'){
        removeData(change.doc.id);
      }
    })
  })