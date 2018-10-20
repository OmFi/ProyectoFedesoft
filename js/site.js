//debugger;
/*
var ar;
console.log(ar);
ar = ['h','o','l','a'];
console.warn("longitud de ar : ",ar.length," el arreglo es: ",ar);
console.log("longitud de ar : "+ar.length+" el arreglo es: "+ar);
*/
//Comentario
/*
1.
2.
3.
*/

//debugger;
/*
var aux = "";
var miNombre = "Omar Figueroa";
for (let i = 0; i < miNombre.length; i++) 
{
    if (i % 2 == 0) {
        aux = aux + miNombre[i].toUpperCase();
    } else {
        aux = aux + miNombre[i].toLowerCase();
    }
    console.log(i ,"=>",aux[i]);        
}
console.log("Mi nombre es : ",aux);
*/
/*
var miNombre = "Omar Figueroa";

function isPair(x) {
    return x%2 == 0 ? true : false;
}

function convertChar(c,isUp) {
    return isUp?c.toUpperCase():c.toLowerCase();
}

function getlast(t) {
    return t[t.length-1];
}

function mostrarTexto(t) {
    var tmp = "";
    for (let i = 0; i < t.length; i++) {
        tmp=tmp + convertChar(t[i],isPair(i));
        console.log(getlast(tmp)," => ",i);
    }
    return tmp;
}

console.log(mostrarTexto(miNombre));
*/
/*
var persona = {
    nombre="felipe",
    apellido="Molina",
    doctype="CC",
    docNum="123546879",
    cel=3012366998
};
widndow.alert(persona);
console.log(persona);
*/
var ar = [1,2,"3","4","5"]
ar=ar.map(item =>item+1);
console.log(ar);

var ar = [1,2,"3","4","5"]
console.log(ar.filter(item => item < 3));

var ar=[2,4,6,8,10]
var ans = ar.reduce((ac,cur)=>{
    console.log(ac);
    return cur + ac;
},0);

console.log("ans : ",ans);


