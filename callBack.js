const getUSer = (callback) => { 
    setTimeout(() => {
        callback({name:"rajitha"},undefined)  
     },1000);
}

getuser((data) => { 
    console.log(data);
})