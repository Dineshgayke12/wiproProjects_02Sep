let myPromise = new Promise(function (myResolve, myReject) {

    myResolve();

    myReject();
});


myPromise.then(
    function (value) {

    },
    function (error) {

    }
);

myPromise.state, myPromise.result

//Async/Await

fetch('url - endpoint')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));

async function myProcess() {

    try {
        const response = await fetch('uri - endpoint');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

myProcess();

const myProcess1 = async () => {

    try {
        const response = await fetch('uri - endpoint');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

myProcess1();

