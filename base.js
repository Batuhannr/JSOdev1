let kadi = prompt("Kullanıcı Adınızı Giriniz:");

if (kadi) {
    document.querySelector("#myName").innerHTML = kadi;
} else {
    alert("Lütfen Bir Kullanıcı Adı Girin Giriniz!");
}


function dateupdate() {
    var datenow = new Date();
    var myClock = document.querySelector("#myClock");
    var days = ["Pazartesi","Salı","Çarşamba","Perşembe", "Cuma","Cumartesi","Pazar"];
    myClock.innerHTML = `Günlerden ${days[datenow.getDay() -1 ]} ${datenow.getHours()}: ${datenow.getMinutes()}: ${datenow.getSeconds()}`
}

dateupdate();