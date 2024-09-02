function dataFromASource(){

    let promise = new Promise((resolve,reject) => resolve("Hi evryone"));

    let delayedPromise = new Promise(
        (resolve,reject)=>{
            setTimeout(() =>{
            resolve("Delayed Hello");
        } , 4000) ;       }
    );

    let combined_result=
    Promise.all([promise,delayedPromise]);
    return combined_result;
}


async function  showMyData(){

    let data= await dataFromASource();
    console.log();
}

showMyData();