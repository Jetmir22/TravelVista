 let person = {
    name : 'Jimmy',
    surname : 'Zoe',
     age : 18 ,
     address : 'California 812 street',
     phone :'555-1234',
     email :'jimmy@zoe.com',
     hobbies :["sports", "programming", "travelling" ],
};
 let i = '';
for(let j in person) {
    i = i + "<p>" + person[j] + "<p>"
    document.getElementById('afishim').innerHTML=i;

}



let dita = window.prompt("Vendos diten e javes")
switch (dita) {
    case 'hene':
        let hene = "Diten e hene duhet te shkoni ne palester."
        document.getElementById('afisho').innerHTML=hene;
        break
    case 'marte':
        let marte = "Diten e marte keni takim ne pune."
        document.getElementById('afisho').innerHTML=marte;
        break
        case 'merkure':
            let merkure ="Diten e merkure keni nje ekspozite."
            document.getElementById('afisho').innerHTML=merkure;
        break
        case 'enjte':
            let enjte ="Diten e enjte keni mbledhje me bordin."
            document.getElementById('afisho').innerHTML=enjte;
        break
        case 'premte':
            let premte ="Diten e premte keni palester dhe ngjitje ne mal."
            document.getElementById('afisho').innerHTML=premte;
        break
        case 'shtune':
            let shtune ="Diten e shtune keni camping."
            document.getElementById('afisho').innerHTML=shtune;
        break
        case 'diele':
            let diele ="Diten e diele e keni pushim."
            document.getElementById('afisho').innerHTML=diele;
        break

    default:
        let gabim =" Ju lutem vendosni sakte ditet e javes!! "
        document.getElementById('afisho').innerHTML=gabim;
}
