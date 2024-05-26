export  function itemListAcumulator(array, nuevoObjeto) {
    let encontrado = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i].name === nuevoObjeto.name && array[i].unit === nuevoObjeto.unit) {
            array[i].cuantity += nuevoObjeto.cuantity;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        array.push(nuevoObjeto);
    }
    console.log(array)
    return array;
}

