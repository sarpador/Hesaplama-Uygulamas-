



var kdv=document.getElementById('kdv');
var komisyon=document.getElementById('komisyon');
var kargo=document.getElementById('kargo');
var satilan=document.getElementById('satilan');
var kazanilan=document.getElementById('kazanilan');


var kargo=48;
document.getElementById('kargo').value=kargo.toFixed(2);


    // function hesapla(){
    //     var alinanfiyat=document.getElementById('alinan').value;

    //     var satilan=document.getElementById('satilan').value;   

    //     kdv=10*(satilan/100);
        
    //     document.getElementById('kdv').value = kdv.toFixed(2);

    //     komisyon=(satilan*21.5)/100;

    //     document.getElementById('komisyon').value=komisyon.toFixed(2);

    //     var gider=kdv+komisyon+kargo +Number(alinanfiyat);
        
        
    //    var satilan= document.getElementById('satilan').value
        
     
    //     kazanilan=  satilan-gider;

    //     document.getElementById('kazanilan').value=kazanilan.toFixed(2);

    


    function hesapla() {
        var alinanfiyat = document.getElementById('alinan').value;
        var satilan = document.getElementById('satilan').value;
        var kargo = document.getElementById('kargo').value; 
        
    
        var kdv = 10 * (satilan / 100);
        var komisyon = (satilan * 21.5) / 100;
        var gider = kdv + komisyon + Number(alinanfiyat) + Number(kargo);
        var kazanilan = satilan - gider;
    
        document.getElementById('kdv').value = kdv.toFixed(2);
        document.getElementById('komisyon').value = komisyon.toFixed(2);
        document.getElementById('kazanilan').value = kazanilan.toFixed(2);
    
        var kazanilanInput = document.getElementById('kazanilan');
        if (kazanilan > 0) {
            kazanilanInput.style.backgroundColor = "green";
        } else {
            kazanilanInput.style.backgroundColor = "red";
        }
    }




        // console.log(alinanfiyat +"Aldıgımız Fiyat");
        // console.log(satilan +"Sattıgımız Fiyat")
        // console.log(gider+"Toplam Gider");
        // console.log(kazanilan +"Kazandıgımz Miktar Kar ");
    

hesapla();
