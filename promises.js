const getUser = () => { 
    return new Promise((resolve,reject) => { 
        // setTimeout(() => {
        //     resolve({ user: 'rajitha' } )
        // }, 1000);

        setTimeout(() => {
            reject({ eror: 'user Error' })
        }, 1000)
        
    })
}

const checkAuth = () => { 
    return new Promise((resolve,reject) => { 
        // setTimeout(() => {
        //     resolve({ auth: true } )
        // }, 1000);

        setTimeout(() => {
            reject({ eror: 'Auth Error' })
        }, 1000)
        
    })
}


checkAuth()
.then(() => {
  return getUser()
})
.then((data) => {
    console.log(data);
 })
.catch((error) => { 
    console.log(error);
})