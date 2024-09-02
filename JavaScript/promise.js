function myShow(parml){

    document.getElementById("demo")
    .innerHTML=parml;
}

let myPromise= new Promise(function(myResolve,myReject){

    let x=2;
    
  //  x= x*x;
    if(x==2){
        myResolve("OK");

    } else{
        myReject("error");
    }
});

myPromise.then(
    function(value) {myShow(value);},
    function(error) {myShow(value);}
);