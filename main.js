function cube(){
    let resL;
    let resN;
    resL = String.fromCharCode(Math.floor(Math.random() * 3) + 97);
    resN = (Math.floor(Math.random() * 3) + 1);
    let res = [resN, resL];
    console.log(res[Math.floor(Math.random() * res.length)]);
}
cube();