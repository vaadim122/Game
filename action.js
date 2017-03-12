function fight(p1,p2){
    UserName(pl1, select_f);
    UserName(pl2, select_f1);
    
    var char1 = p1.getRandomCharacter();
    var char2 = p2.getRandomCharacter();
    setTimeout(function name(){
     try {
         char1.attack(char2);
         char2.attack(char1);
     } catch (e) {
       if (char1.health<0){
        p1.kill(char1.id);
    }
    if (char2.health<0){
        p2.kill(char2.id);  
    }
    clearSelect(select_f);
    clearSelect(select_f1);
    addUs();
    UserName(pl1, select_f);
    UserName(pl2, select_f1);
    return
}
TimeId=setTimeout(name,200)
},100)
    console.log(char1);
    console.log(char2);

}

