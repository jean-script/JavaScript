var numero = 1;
var booleano;
function func() {
    if (numero) {
        booleano = true;
        console.log(booleano);
    } else {
        booleano = false;
        console.log(booleano);
    }
}
func();
/*
Falsy:
-Undefined
-null
-NaN
-0
--0
- '' ou ""
*/