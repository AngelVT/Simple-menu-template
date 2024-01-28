function calcular() {
    let ingresos = document.getElementById('ingresos').value;
    let gastos = document.getElementById('gastos').value;
    let restante = parseInt(ingresos) - parseInt(gastos);
    restante = parseInt(restante);
    alert(`Al mes tienes $ ${restante} que podrias invertir en BitCoin`);
}

function mostrarMenu1() {
    document.getElementById('menu_1').style.display = "block";
    document.getElementById('menu_2').style.display = "none";
    document.getElementById('menu_3').style.display = "none";
}

function mostrarMenu2(){
    document.getElementById('menu_1').style.display = "none";
    document.getElementById('menu_2').style.display = "block";
    document.getElementById('menu_3').style.display = "none";
}

function mostrarMenu3(){
    document.getElementById('menu_1').style.display = "none";
    document.getElementById('menu_2').style.display = "none";
    document.getElementById('menu_3').style.display = "block";
}