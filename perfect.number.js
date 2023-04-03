let sayi = prompt('Bir sayi giriniz.');
let toplam =0;

for(let i=0; i<sayi.length; i++){
    let rakam = sayi.charAt(i);
    toplam += (rakam**3);
}
if(Number(sayi)==toplam){
    alert('Bu bir Armstrong sayisidir.');
}else{
    alert('Maalesef Armastrong sayisi degildir.');
}