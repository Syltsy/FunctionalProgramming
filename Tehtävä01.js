//Palindromin tarkistus funktio
function onPalindromi(merkkijono) {


  if (merkkijono.length === 0 || merkkijono.length === 1){
    return true;
  } else if(merkkijono.charAt(0) !== merkkijono.charAt( merkkijono.length-1)){
    return false;
  } else return onPalindromi(merkkijono.slice(1, merkkijono.length -1));
}

console.log(onPalindromi("aakodokaa"));

/*Muissa tapauksissa ota jonon keskiosa, josta puuttuvat ensimmäinen ja viimeinen merkki,
    selvitä rekursiivisella metodikutsulla, onko keskiosa palindromi, ja
    palauta sama totuusarvo, jonka rekursiivinen kutsukin palautti.*/