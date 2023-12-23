function calculate() {

    var vNum1 = document.getElementById("iNum1").value;
    var vNum2 = document.getElementById("iNum2").value;

    var vLCM = findLCM(vNum1, vNum2)
    document.getElementById('iResult').innerHTML = `The LCM Of ${vNum1} And ${vNum2} Is ${vLCM}`

}

function findLCM(vNum1 , vNum2) {

    var vMax = Math.max(vNum1, vNum2);
    var vMin = Math.min(vNum1, vNum2);

    var lcm = vMax

    while (lcm % vMin !== 0) {
        lcm += vMax
    }

return(lcm);

}