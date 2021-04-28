    let btn = document.querySelector('button');
    let total = document.querySelector('div');
    btn.addEventListener('click', () =>
    total.style.display = 'block')

function calPerDay() {
    function find(id) { return document.getElementById(id)}
    let age = find("age").value
    let height = find("height").value
    let weight = find("weight").value
    let bmr, imt
    if (find("male").checked) {
        bmr = 88.36 + (13.4 * weight)
        + (4.8 * height) - (5.7 * age)
    } else if (find("female").checked) {
        bmr = 447.6 + (9.2 * weight)
        + (3.1 * height) - (4.3 * age)
    }
    height = height/100;
    imt = weight / (height*height);
    imt=imt.toFixed(1);
    if(imt>=30) {
        imt ='ожирение';
    }else if( imt > 25 && imt < 30) {
        imt ='избыточный вес (предожирение)';
    }else {
        imt ='нормальный вес';
    }
    if ((find("male").checked || find("female").checked) && age !="" && weight !="" && height !="") {
        find("total").innerText="У Вас "+ imt + ", Ваша суточная норма : "+ bmr.toFixed() + " калорий.";
    } else {
        find("total").innerText="Заполните все поля!";
    }
}
