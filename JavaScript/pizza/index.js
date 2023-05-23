let pizza = {
    tipoCorteza:    "",
    tipoSalsa: "",
    quesos:   "[]",
    salsas: [""]
};
    
console.log(pizza);

function pizzaOver(tipoCorteza, tipoSalsa, quesos, salsas) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
let p1 = pizzaOver("estilo chicago", "tradicional", "[mozzarella]", ["pepperoni", "salchicha"]);
console.log(p1);

let p2 = pizzaOver("Lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(p2);

let p3 = pizzaOver("Lanzada a mano", "tradicional", ["mozzarella"], ["cheddar", "albahacas", "cebollas"]);
console.log(p3);

let p4 = pizzaOver("estilo chicago", "tradicional", ["mozzarella"], ["artesanal de perejil,", "aceitunas"]);
console.log(p4);