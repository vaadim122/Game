function getRandom(min, max) {
    return Math.round(min + (Math.random() * (max - min)))
}

function create_characters(user, count) {

    for (var i = count; i >= 0; i--) {
        user.attachCharacter(new Entities.Character({
            id: i,
            name: 'Character ' + i,
            skills: [{
                name: 'Fireball',
                dmg: getRandom(20, 80)
            }, {
                name: 'I call my mother',
                dmg: getRandom(200, 290)
            }, {
                name: 'Critical',
                dmg: getRandom(40, 90)
            }, {
                name: 'Arcane Bolt',
                dmg: getRandom(40, 90)
            }, {
                name: 'Adaptive Strike',
                dmg: getRandom(40, 90)
            }],
            health: getRandom(1000, 1400),
            money: getRandom(5000, 6000),
            lvl: getRandom(10, 12),
        }))

    }
}

var USER=[];
var idP=1
function createPlayer(name){
	idP=idP++;
	var user =new Entities.Player({
        id:idP++,
        name: name,
        age: getRandom(20,35),
    })
 USER.push(user);
 return user
}
try{
    function AddUser(){
        if(nameUser.value.length<3){
            throw new Error("Контекст слишком мал!");
            button_add_user.disabled=false
        }else{
         var user=createPlayer(nameUser.value);
         characks.style.display='block';
         nameUser.value ='';
         objSel.options[objSel.options.length] = new Option(user.name, user.id)
     }}}catch (e){
        console.log(e);
    }
    function clearSelect(selc){
        
       for (var i = 0; i < selc.length; i++) {
        var selcUser=selc.options[i].value;
        console.log(USER[selcUser-1])
        if(USER[selcUser-1].characters.length<1){
           selc.options[i]=null;    
           return
       }
   }
}
function addUs(){
    for (var i = 0; i < USER.length; i++) {
        if(USER[i].characters.length==0){
            characks.style.display='block';
            objSel.options[objSel.options.length] = new Option(USER[i].name, USER[i].id) 
        }
    }
}

try{
    function AddChar(){
        if(nameCh.value.length==''){
            utton_add_char.disabled=false
        }else{
            var user_id = objSel.options[objSel.selectedIndex].value;
            play.style.display='block';
            play1.style.display='block';
            var typ=nameCh.value;
            var i=nameCh.value-1
            var user_id = objSel.options[objSel.selectedIndex].value;
            var US=USER[user_id-1];
            create_characters(US,i);
            nameCh.value='';
            select_f.options[select_f.options.length]=new Option(US.name, US.id);
            select_f1.options[select_f1.options.length]=new Option(US.name, US.id);
            objSel.options[objSel.selectedIndex]=null;
            if(objSel.options.length<1){
                characks.style.display='none';
            }
        }
    }
}catch(e) {
    console.log(e)
}
try{
    function Fite() {
        
        boy.innerHTML='';
        var user_id = select_f.options[select_f.selectedIndex].value;
        var user_id1 = select_f1.options[select_f1.selectedIndex].value;
        var US=USER[user_id-1];
        var US1=USER[user_id1-1];
        if(US.id==US1.id){
            return
        }else{
            fight(US,US1);
        }
    }
}catch(e){
    throw e;

}
function UserName(name, sel){
    iname=sel.options[sel.selectedIndex].text
    name.innerHTML=iname;

}
