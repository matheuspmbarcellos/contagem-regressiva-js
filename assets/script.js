function countdown() {
    
    var inputdate = document.getElementById("date");
    var date = inputdate.value.split('-').reverse().join('/');

    if(!date) return;
    document.getElementById("container").innerHTML = `Atualizando contagem para o dia ${date}:`;
    
    var dt = new Date(inputdate.value);
    var dia = dt.getDate();
    var mes = dt.getMonth();
    var ano = dt.getFullYear();
    var meses = new Array("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec")
    var m = meses[mes]

    var deadline = new Date(`${m} ${dia}, ${ano} 00:00:00`).getTime();

    var x = setInterval(function() {
    
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("day").innerHTML =days ;
    document.getElementById("hour").innerHTML =hours;
    document.getElementById("minute").innerHTML = minutes; 
    document.getElementById("second").innerHTML =seconds; 
    if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Término da contagem!";
            document.getElementById("day").innerHTML ='0';
            document.getElementById("hour").innerHTML ='0';
            document.getElementById("minute").innerHTML ='0' ; 
            document.getElementById("second").innerHTML = '0'; }
    }, 1000);
    
}

function reset() {
    location.reload();
    document.getElementById('date').value = '';
}