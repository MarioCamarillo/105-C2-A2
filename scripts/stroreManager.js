function saveUser(user){
    let val = JSON.stringify(user);
    //console.log(user);
    //console.log(val);
    localStorage.setItem("users",val);
}