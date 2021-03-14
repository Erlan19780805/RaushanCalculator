function procent(){
    var price, procent, poligraph, hundread, result, benzin, result1;
    price = document.getElementById('n1').value;
    price = parseInt(price);

    procent = document.getElementById('n2').value;
    procent = parseInt(procent);

    poligraph = document.getElementById('n3').value;
    poligraph = parseInt(poligraph);


    benzin = document.getElementById('n4').value;
    benzin = parseInt(benzin);

    // НАХОЖДЕНИЕ СУММЫ РЕСТОРАНУ 
    hundread = 100;
    result = price*procent/hundread;
    document.getElementById('Restoraunt').innerHTML = result;

    // НАХОЖДЕНИЕ ЧИСТОГО ДОХОДА 
    result1 = price-result-poligraph-benzin;
    document.getElementById('Out').innerHTML = result1;
}