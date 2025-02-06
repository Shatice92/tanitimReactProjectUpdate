export function getCurrency(price: number,birim = 'TRY', ondalik = 2){
    let formatliSayi = new Intl.NumberFormat('tr-TR', { 
        style: 'currency', 
        currency: birim, 
        minimumFractionDigits: ondalik, // En az 2 ondalık basamak
        maximumFractionDigits: ondalik  // En fazla 2 ondalık basamak
      }).format(price);
    return formatliSayi;
}