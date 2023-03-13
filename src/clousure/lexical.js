const myGlobal = 0;

function myFuntion() {
    const myNumer = 1;
    console.log(myGlobal);

    function parent() { // función interna
        const inner = 2;
        console.log(myNumer, myGlobal);

        function child() {
            console.log(inner, myNumer, myGlobal);
        }

        return child();
    }

    return parent();
}


myFuntion();