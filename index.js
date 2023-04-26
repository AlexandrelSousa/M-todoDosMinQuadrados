// Calculando
//gauss matriz 2x3
function gauss(i1j1, i1j2, i1j3, i2j1, i2j2, i2j3){
   let pivo = i1j1;
   let m = (i2j1/pivo);
   i2j1 = i2j1 - (m*i1j1);
   i2j2 = i2j2 - (m*i1j2);
   i2j3 = i2j3 - (m*i1j3);
   var mat = [[i1j1, i1j2, i1j3],[i2j1, i2j2, i2j3]];
    return mat;
}
function minimosQuadrados(x1, x2, x3, y1, y2, y3){
    let n = 3;
    let somX = x1 + x2 + x3;
    let somY = y1 + y2 + y3;
    let somXAoQ = (x1^2) + (x2^2) + (x3^2);
    let somXY = (x1*y1) + (x2*y2) + (x3*y3);
    var matriz = gauss(n, somX, somY, somX, somXAoQ, somXY);
    var b = matriz[1][1]/matriz[1][2];
    var a = (matriz[0][2] - matriz[0][1]*b) / matriz[0][0];
    var vetRes = [a,b];
    return vetRes;
}

function valorDeY(x){
    var vet = minimosQuadrados(1,3,4,3,7,9);
    y = vet[0] + (vet[1]*x);
    return y;
}
const ctx = document.getElementById('myChart');

const labels = [
    '1',
    '3',
    '4'
];

const data = {
    labels,
    datasets: [{
        data: [3,7,9],
        label: "Pontos"
    }]
}

const config = {
    type: 'line',
    data,
    options: {
        responsive: true
    }
}

const Mychart = new Chart(ctx, config);

