
// changeMoyenne
function changeMoyenne(x) {
    if (document.getElementById('AplusCheck').checked === true){
        x = document.getElementById('Aplus_min').value
    }
    if (document.getElementById('ACheck').checked === true){
        x = document.getElementById('A_min').value
    }
    if (document.getElementById('AmoinsCheck').checked === true){
        x = document.getElementById('Amoins_min').value
    }
    if (document.getElementById('BplusCheck').checked === true){
        x = document.getElementById('Bplus_min').value
    }
    if (document.getElementById('BCheck').checked === true){
        x = document.getElementById('B_min').value
    }
    if (document.getElementById('BmoinsCheck').checked === true){
        x = document.getElementById('Bmoins_min').value
    }
    if (document.getElementById('CplusCheck').checked === true){
        x = document.getElementById('Cplus_min').value
    }
    if (document.getElementById('CCheck').checked === true){
        x = document.getElementById('C_min').value
    }
    if (document.getElementById('CmoinsCheck').checked === true){
        x = document.getElementById('Cmoins_min').value
    }
    if (document.getElementById('DplusCheck').checked === true){
        x = document.getElementById('Dplus_min').value
    }
    if (document.getElementById('DCheck').checked === true){
        x = document.getElementById('D_min').value
    }
    if (document.getElementById('ECheck').checked === true){
        x = document.getElementById('E_min').value
    }
    return x
}

//fonction de calcul
function calcul() {
    debugger;
    let moyenne = changeMoyenne(0);
    //changeMoyenne(moyenne)
    let ponderation_a_diviser = [];
    let resultat_a_soustraire = [];
    let total_resultat = 0;
    let total_ponderation = 0;

    // resultat1
    if(document.getElementById('ponderation1').value !== '') {
        const ponderation1 = document.getElementById('ponderation1').value / 100
        if (document.getElementById('note1').value === '') {
            ponderation_a_diviser.push(ponderation1)
        } else {
            resultat_a_soustraire.push(ponderation1 * document.getElementById('note1').value)
            total_ponderation = total_ponderation + ponderation1;
        }
    }
    // resultat2
    if(document.getElementById('ponderation2').value !== '') {
        const ponderation2 = document.getElementById('ponderation2').value / 100
        if (document.getElementById('note2').value === '') {
            ponderation_a_diviser.push(ponderation2)
        } else {
            resultat_a_soustraire.push(ponderation2 * document.getElementById('note2').value)
            total_ponderation = total_ponderation + ponderation2
        }
    }
    // resultat3
    if(document.getElementById('ponderation3').value !== '') {
        const ponderation3 = document.getElementById('ponderation3').value / 100
        if (document.getElementById('note3').value === '') {
            ponderation_a_diviser.push(ponderation3)
        } else {
            resultat_a_soustraire.push(ponderation3 * document.getElementById('note3').value)
            total_ponderation = total_ponderation + ponderation3
        }
    }
    // resultat4
    if(document.getElementById('ponderation4').value !== '') {
        const ponderation4 = document.getElementById('ponderation4').value / 100
        if (document.getElementById('note4').value === '') {
            ponderation_a_diviser.push(ponderation4)
        } else {
            resultat_a_soustraire.push(ponderation4 * document.getElementById('note4').value)
            total_ponderation = total_ponderation + ponderation4
        }
    }
    // resultat5
    if(document.getElementById('ponderation5').value !== '') {
        const ponderation5 = document.getElementById('ponderation5').value / 100
        if (document.getElementById('note5').value === '') {
            ponderation_a_diviser.push(ponderation5)
        } else {
            resultat_a_soustraire.push(ponderation5 * document.getElementById('note5').value)
            total_ponderation = total_ponderation + ponderation5
        }
    }
    // resultat6
    if(document.getElementById('ponderation6').value !== '') {
        const ponderation6 = document.getElementById('ponderation6').value / 100
        if (document.getElementById('note6').value === '') {
            ponderation_a_diviser.push(ponderation6)
        } else {
            resultat_a_soustraire.push(ponderation6 * document.getElementById('note6').value)
            total_ponderation = total_ponderation + ponderation6
        }
    }
    // resultat7
    if(document.getElementById('ponderation6').value !== '') {
        const ponderation7 = document.getElementById('ponderation7').value / 100
        if (document.getElementById('note5').value === '') {
            ponderation_a_diviser.push(ponderation7)
        } else {
            resultat_a_soustraire.push(ponderation7 * document.getElementById('note7').value)
            total_ponderation = total_ponderation + ponderation7
        }
    }

    //const prequis = (moyenne - (ponderation1 * note1))/(ponderation2 + ponderation3)
    for (const resultat of resultat_a_soustraire){
        moyenne = moyenne - resultat;
        total_resultat = total_resultat + resultat;
    }
    let somme_ponderation = 0
    for (const ponderation of ponderation_a_diviser) {
        somme_ponderation = somme_ponderation + ponderation
    }
    if (somme_ponderation === 0) {
        document.getElementById('resultat').innerHTML = 'Erreur'
    }else{
        const prequis = (Math.round((moyenne/somme_ponderation) * 100)/100).toFixed(2).toString();
        const resultat_present =(Math.round((total_resultat/total_ponderation) * 100)/100).toFixed(2).toString();
        document.getElementById('moyenne').innerHTML = resultat_present
        document.getElementById('prequis').innerHTML = prequis
        //document.getElementById('resultat').innerHTML = 'Votre moyenne est présentement de ' + '<span> resultat_present </span>' + '%. Vous avez alors besoin de ' + '<span>prequis.toString()</span>' +'% pour atteindre la cote.'
    }
     //////////
    console.log('s')
}

//Create localstorage
function updateCours1(){
    window.localStorage.setItem('cours1_ponderation1', JSON.stringify(document.getElementById('ponderation1').value))
    window.localStorage.setItem('cours1_ponderation2', JSON.stringify(document.getElementById('ponderation2').value))
    window.localStorage.setItem('cours1_ponderation3', JSON.stringify(document.getElementById('ponderation3').value))
    window.localStorage.setItem('cours1_ponderation4', JSON.stringify(document.getElementById('ponderation4').value))
    window.localStorage.setItem('cours1_ponderation5', JSON.stringify(document.getElementById('ponderation5').value))
    window.localStorage.setItem('cours1_ponderation6', JSON.stringify(document.getElementById('ponderation6').value))
    window.localStorage.setItem('cours1_ponderation7', JSON.stringify(document.getElementById('ponderation7').value))
    window.localStorage.setItem('cours1_note1', JSON.stringify(document.getElementById('note1').value))
    window.localStorage.setItem('cours1_note2', JSON.stringify(document.getElementById('note2').value))
    window.localStorage.setItem('cours1_note3', JSON.stringify(document.getElementById('note3').value))
    window.localStorage.setItem('cours1_note4', JSON.stringify(document.getElementById('note4').value))
    window.localStorage.setItem('cours1_note5', JSON.stringify(document.getElementById('note5').value))
    window.localStorage.setItem('cours1_note6', JSON.stringify(document.getElementById('note6').value))
    window.localStorage.setItem('cours1_note7', JSON.stringify(document.getElementById('note7').value))
    window.localStorage.setItem('cours1_minimum_Aplus', JSON.stringify(document.getElementById('Aplus_min').value))
    window.localStorage.setItem('cours1_minimum_A', JSON.stringify(document.getElementById('A_min').value))
    window.localStorage.setItem('cours1_minimum_Amoins', JSON.stringify(document.getElementById('Amoins_min').value))
    window.localStorage.setItem('cours1_minimum_Bplus', JSON.stringify(document.getElementById('Bplus_min').value))
    window.localStorage.setItem('cours1_minimum_B', JSON.stringify(document.getElementById('B_min').value))
    window.localStorage.setItem('cours1_minimum_Bmoins', JSON.stringify(document.getElementById('Bmoins_min').value))
    window.localStorage.setItem('cours1_minimum_Cplus', JSON.stringify(document.getElementById('Cplus_min').value))
    window.localStorage.setItem('cours1_minimum_C', JSON.stringify(document.getElementById('C_min').value))
    window.localStorage.setItem('cours1_minimum_Cmoins', JSON.stringify(document.getElementById('Cmoins_min').value))
    window.localStorage.setItem('cours1_minimum_Dplus', JSON.stringify(document.getElementById('Dplus_min').value))
    window.localStorage.setItem('cours1_minimum_D', JSON.stringify(document.getElementById('D_min').value))
    window.localStorage.setItem('cours1_minimum_E', JSON.stringify(document.getElementById('E_min').value))
}
function updateCours2(){
    window.localStorage.setItem('cours2_ponderation1', JSON.stringify(document.getElementById('ponderation1').value))
    window.localStorage.setItem('cours2_ponderation2', JSON.stringify(document.getElementById('ponderation2').value))
    window.localStorage.setItem('cours2_ponderation3', JSON.stringify(document.getElementById('ponderation3').value))
    window.localStorage.setItem('cours2_ponderation4', JSON.stringify(document.getElementById('ponderation4').value))
    window.localStorage.setItem('cours2_ponderation5', JSON.stringify(document.getElementById('ponderation5').value))
    window.localStorage.setItem('cours2_ponderation6', JSON.stringify(document.getElementById('ponderation6').value))
    window.localStorage.setItem('cours2_ponderation7', JSON.stringify(document.getElementById('ponderation7').value))
    window.localStorage.setItem('cours2_note1', JSON.stringify(document.getElementById('note1').value))
    window.localStorage.setItem('cours2_note2', JSON.stringify(document.getElementById('note2').value))
    window.localStorage.setItem('cours2_note3', JSON.stringify(document.getElementById('note3').value))
    window.localStorage.setItem('cours2_note4', JSON.stringify(document.getElementById('note4').value))
    window.localStorage.setItem('cours2_note5', JSON.stringify(document.getElementById('note5').value))
    window.localStorage.setItem('cours2_note6', JSON.stringify(document.getElementById('note6').value))
    window.localStorage.setItem('cours2_note7', JSON.stringify(document.getElementById('note7').value))
    window.localStorage.setItem('cours2_minimum_Aplus', JSON.stringify(document.getElementById('Aplus_min').value))
    window.localStorage.setItem('cours2_minimum_A', JSON.stringify(document.getElementById('A_min').value))
    window.localStorage.setItem('cours2_minimum_Amoins', JSON.stringify(document.getElementById('Amoins_min').value))
    window.localStorage.setItem('cours2_minimum_Bplus', JSON.stringify(document.getElementById('Bplus_min').value))
    window.localStorage.setItem('cours2_minimum_B', JSON.stringify(document.getElementById('B_min').value))
    window.localStorage.setItem('cours2_minimum_Bmoins', JSON.stringify(document.getElementById('Bmoins_min').value))
    window.localStorage.setItem('cours2_minimum_Cplus', JSON.stringify(document.getElementById('Cplus_min').value))
    window.localStorage.setItem('cours2_minimum_C', JSON.stringify(document.getElementById('C_min').value))
    window.localStorage.setItem('cours2_minimum_Cmoins', JSON.stringify(document.getElementById('Cmoins_min').value))
    window.localStorage.setItem('cours2_minimum_Dplus', JSON.stringify(document.getElementById('Dplus_min').value))
    window.localStorage.setItem('cours2_minimum_D', JSON.stringify(document.getElementById('D_min').value))
    window.localStorage.setItem('cours2_minimum_E', JSON.stringify(document.getElementById('E_min').value))
}
function updateCours3(){
    window.localStorage.setItem('cours3_ponderation1', JSON.stringify(document.getElementById('ponderation1').value))
    window.localStorage.setItem('cours3_ponderation2', JSON.stringify(document.getElementById('ponderation2').value))
    window.localStorage.setItem('cours3_ponderation3', JSON.stringify(document.getElementById('ponderation3').value))
    window.localStorage.setItem('cours3_ponderation4', JSON.stringify(document.getElementById('ponderation4').value))
    window.localStorage.setItem('cours3_ponderation5', JSON.stringify(document.getElementById('ponderation5').value))
    window.localStorage.setItem('cours3_ponderation6', JSON.stringify(document.getElementById('ponderation6').value))
    window.localStorage.setItem('cours3_ponderation7', JSON.stringify(document.getElementById('ponderation7').value))
    window.localStorage.setItem('cours3_note1', JSON.stringify(document.getElementById('note1').value))
    window.localStorage.setItem('cours3_note2', JSON.stringify(document.getElementById('note2').value))
    window.localStorage.setItem('cours3_note3', JSON.stringify(document.getElementById('note3').value))
    window.localStorage.setItem('cours3_note4', JSON.stringify(document.getElementById('note4').value))
    window.localStorage.setItem('cours3_note5', JSON.stringify(document.getElementById('note5').value))
    window.localStorage.setItem('cours3_note6', JSON.stringify(document.getElementById('note6').value))
    window.localStorage.setItem('cours3_note7', JSON.stringify(document.getElementById('note7').value))
    window.localStorage.setItem('cours3_minimum_Aplus', JSON.stringify(document.getElementById('Aplus_min').value))
    window.localStorage.setItem('cours3_minimum_A', JSON.stringify(document.getElementById('A_min').value))
    window.localStorage.setItem('cours3_minimum_Amoins', JSON.stringify(document.getElementById('Amoins_min').value))
    window.localStorage.setItem('cours3_minimum_Bplus', JSON.stringify(document.getElementById('Bplus_min').value))
    window.localStorage.setItem('cours3_minimum_B', JSON.stringify(document.getElementById('B_min').value))
    window.localStorage.setItem('cours3_minimum_Bmoins', JSON.stringify(document.getElementById('Bmoins_min').value))
    window.localStorage.setItem('cours3_minimum_Cplus', JSON.stringify(document.getElementById('Cplus_min').value))
    window.localStorage.setItem('cours3_minimum_C', JSON.stringify(document.getElementById('C_min').value))
    window.localStorage.setItem('cours3_minimum_Cmoins', JSON.stringify(document.getElementById('Cmoins_min').value))
    window.localStorage.setItem('cours3_minimum_Dplus', JSON.stringify(document.getElementById('Dplus_min').value))
    window.localStorage.setItem('cours3_minimum_D', JSON.stringify(document.getElementById('D_min').value))
    window.localStorage.setItem('cours3_minimum_E', JSON.stringify(document.getElementById('E_min').value))
}
function updateCours4(){
    window.localStorage.setItem('cours4_ponderation1', JSON.stringify(document.getElementById('ponderation1').value))
    window.localStorage.setItem('cours4_ponderation2', JSON.stringify(document.getElementById('ponderation2').value))
    window.localStorage.setItem('cours4_ponderation3', JSON.stringify(document.getElementById('ponderation3').value))
    window.localStorage.setItem('cours4_ponderation4', JSON.stringify(document.getElementById('ponderation4').value))
    window.localStorage.setItem('cours4_ponderation5', JSON.stringify(document.getElementById('ponderation5').value))
    window.localStorage.setItem('cours4_ponderation6', JSON.stringify(document.getElementById('ponderation6').value))
    window.localStorage.setItem('cours4_ponderation7', JSON.stringify(document.getElementById('ponderation7').value))
    window.localStorage.setItem('cours4_note1', JSON.stringify(document.getElementById('note1').value))
    window.localStorage.setItem('cours4_note2', JSON.stringify(document.getElementById('note2').value))
    window.localStorage.setItem('cours4_note3', JSON.stringify(document.getElementById('note3').value))
    window.localStorage.setItem('cours4_note4', JSON.stringify(document.getElementById('note4').value))
    window.localStorage.setItem('cours4_note5', JSON.stringify(document.getElementById('note5').value))
    window.localStorage.setItem('cours4_note6', JSON.stringify(document.getElementById('note6').value))
    window.localStorage.setItem('cours4_note7', JSON.stringify(document.getElementById('note7').value))
    window.localStorage.setItem('cours4_minimum_Aplus', JSON.stringify(document.getElementById('Aplus_min').value))
    window.localStorage.setItem('cours4_minimum_A', JSON.stringify(document.getElementById('A_min').value))
    window.localStorage.setItem('cours4_minimum_Amoins', JSON.stringify(document.getElementById('Amoins_min').value))
    window.localStorage.setItem('cours4_minimum_Bplus', JSON.stringify(document.getElementById('Bplus_min').value))
    window.localStorage.setItem('cours4_minimum_B', JSON.stringify(document.getElementById('B_min').value))
    window.localStorage.setItem('cours4_minimum_Bmoins', JSON.stringify(document.getElementById('Bmoins_min').value))
    window.localStorage.setItem('cours4_minimum_Cplus', JSON.stringify(document.getElementById('Cplus_min').value))
    window.localStorage.setItem('cours4_minimum_C', JSON.stringify(document.getElementById('C_min').value))
    window.localStorage.setItem('cours4_minimum_Cmoins', JSON.stringify(document.getElementById('Cmoins_min').value))
    window.localStorage.setItem('cours4_minimum_Dplus', JSON.stringify(document.getElementById('Dplus_min').value))
    window.localStorage.setItem('cours4_minimum_D', JSON.stringify(document.getElementById('D_min').value))
    window.localStorage.setItem('cours4_minimum_E', JSON.stringify(document.getElementById('E_min').value))
}
function updateCours5(){
    window.localStorage.setItem('cours5_ponderation1', JSON.stringify(document.getElementById('ponderation1').value))
    window.localStorage.setItem('cours5_ponderation2', JSON.stringify(document.getElementById('ponderation2').value))
    window.localStorage.setItem('cours5_ponderation3', JSON.stringify(document.getElementById('ponderation3').value))
    window.localStorage.setItem('cours5_ponderation4', JSON.stringify(document.getElementById('ponderation4').value))
    window.localStorage.setItem('cours5_ponderation5', JSON.stringify(document.getElementById('ponderation5').value))
    window.localStorage.setItem('cours5_ponderation6', JSON.stringify(document.getElementById('ponderation6').value))
    window.localStorage.setItem('cours5_ponderation7', JSON.stringify(document.getElementById('ponderation7').value))
    window.localStorage.setItem('cours5_note1', JSON.stringify(document.getElementById('note1').value))
    window.localStorage.setItem('cours5_note2', JSON.stringify(document.getElementById('note2').value))
    window.localStorage.setItem('cours5_note3', JSON.stringify(document.getElementById('note3').value))
    window.localStorage.setItem('cours5_note4', JSON.stringify(document.getElementById('note4').value))
    window.localStorage.setItem('cours5_note5', JSON.stringify(document.getElementById('note5').value))
    window.localStorage.setItem('cours5_note6', JSON.stringify(document.getElementById('note6').value))
    window.localStorage.setItem('cours5_note7', JSON.stringify(document.getElementById('note7').value))
    window.localStorage.setItem('cours5_minimum_Aplus', JSON.stringify(document.getElementById('Aplus_min').value))
    window.localStorage.setItem('cours5_minimum_A', JSON.stringify(document.getElementById('A_min').value))
    window.localStorage.setItem('cours5_minimum_Amoins', JSON.stringify(document.getElementById('Amoins_min').value))
    window.localStorage.setItem('cours5_minimum_Bplus', JSON.stringify(document.getElementById('Bplus_min').value))
    window.localStorage.setItem('cours5_minimum_B', JSON.stringify(document.getElementById('B_min').value))
    window.localStorage.setItem('cours5_minimum_Bmoins', JSON.stringify(document.getElementById('Bmoins_min').value))
    window.localStorage.setItem('cours5_minimum_Cplus', JSON.stringify(document.getElementById('Cplus_min').value))
    window.localStorage.setItem('cours5_minimum_C', JSON.stringify(document.getElementById('C_min').value))
    window.localStorage.setItem('cours5_minimum_Cmoins', JSON.stringify(document.getElementById('Cmoins_min').value))
    window.localStorage.setItem('cours5_minimum_Dplus', JSON.stringify(document.getElementById('Dplus_min').value))
    window.localStorage.setItem('cours5_minimum_D', JSON.stringify(document.getElementById('D_min').value))
    window.localStorage.setItem('cours5_minimum_E', JSON.stringify(document.getElementById('E_min').value))
}
// function save variables
const data = window.localStorage.getItem('data')
function saveVariable(y){
    if (y === 'cours1'){
        console.log('1')
        updateCours1()
    }
    if (y === 'cours2'){
        console.log('2')
        updateCours2()
    }
    if (y === 'cours3'){
        console.log('3')
        updateCours3()
    }
    if (y === 'cours4'){
        console.log('4')
        updateCours4()
    }
    if (y === 'cours5'){
        console.log('5')
        updateCours5()
    }
}

function loadStorage(r){
    if (r === 'cours1'){
        document.getElementById('ponderation1').value = JSON.parse(window.localStorage.getItem('cours1_ponderation1'))
        document.getElementById('ponderation2').value = JSON.parse(window.localStorage.getItem('cours1_ponderation2'))
        document.getElementById('ponderation3').value = JSON.parse(window.localStorage.getItem('cours1_ponderation3'))
        document.getElementById('ponderation4').value = JSON.parse(window.localStorage.getItem('cours1_ponderation4'))
        document.getElementById('ponderation5').value = JSON.parse(window.localStorage.getItem('cours1_ponderation5'))
        document.getElementById('ponderation6').value = JSON.parse(window.localStorage.getItem('cours1_ponderation6'))
        document.getElementById('ponderation7').value = JSON.parse(window.localStorage.getItem('cours1_ponderation7'))
        document.getElementById('note1').value = JSON.parse(window.localStorage.getItem('cours1_note1'))
        document.getElementById('note2').value = JSON.parse(window.localStorage.getItem('cours1_note2'))
        document.getElementById('note3').value = JSON.parse(window.localStorage.getItem('cours1_note3'))
        document.getElementById('note4').value = JSON.parse(window.localStorage.getItem('cours1_note4'))
        document.getElementById('note5').value = JSON.parse(window.localStorage.getItem('cours1_note5'))
        document.getElementById('note6').value = JSON.parse(window.localStorage.getItem('cours1_note6'))
        document.getElementById('note7').value = JSON.parse(window.localStorage.getItem('cours1_note7'))
        document.getElementById('Aplus_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_Aplus'))
        document.getElementById('A_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_A'))
        document.getElementById('Amoins_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_Amoins'))
        document.getElementById('Bplus_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_Bplus'))
        document.getElementById('B_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_B'))
        document.getElementById('Bmoins_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_Bmoins'))
        document.getElementById('Cplus_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_Cplus'))
        document.getElementById('C_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_C'))
        document.getElementById('Cmoins_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_Cmoins'))
        document.getElementById('Dplus_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_Dplus'))
        document.getElementById('D_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_D'))
        document.getElementById('E_min').value = JSON.parse(window.localStorage.getItem('cours1_minimum_E'))
        console.log('aalll')

    }
    if (r === 'cours2') {
        document.getElementById('ponderation1').value = JSON.parse(window.localStorage.getItem('cours2_ponderation1'))
        document.getElementById('ponderation2').value = JSON.parse(window.localStorage.getItem('cours2_ponderation2'))
        document.getElementById('ponderation3').value = JSON.parse(window.localStorage.getItem('cours2_ponderation3'))
        document.getElementById('ponderation4').value = JSON.parse(window.localStorage.getItem('cours2_ponderation4'))
        document.getElementById('ponderation5').value = JSON.parse(window.localStorage.getItem('cours2_ponderation5'))
        document.getElementById('ponderation6').value = JSON.parse(window.localStorage.getItem('cours2_ponderation6'))
        document.getElementById('ponderation7').value = JSON.parse(window.localStorage.getItem('cours2_ponderation7'))
        document.getElementById('note1').value = JSON.parse(window.localStorage.getItem('cours2_note1'))
        document.getElementById('note2').value = JSON.parse(window.localStorage.getItem('cours2_note2'))
        document.getElementById('note3').value = JSON.parse(window.localStorage.getItem('cours2_note3'))
        document.getElementById('note4').value = JSON.parse(window.localStorage.getItem('cours2_note4'))
        document.getElementById('note5').value = JSON.parse(window.localStorage.getItem('cours2_note5'))
        document.getElementById('note6').value = JSON.parse(window.localStorage.getItem('cours2_note6'))
        document.getElementById('note7').value = JSON.parse(window.localStorage.getItem('cours2_note7'))
        document.getElementById('Aplus_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_Aplus'))
        document.getElementById('A_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_A'))
        document.getElementById('Amoins_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_Amoins'))
        document.getElementById('Bplus_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_Bplus'))
        document.getElementById('B_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_B'))
        document.getElementById('Bmoins_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_Bmoins'))
        document.getElementById('Cplus_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_Cplus'))
        document.getElementById('C_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_C'))
        document.getElementById('Cmoins_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_Cmoins'))
        document.getElementById('Dplus_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_Dplus'))
        document.getElementById('D_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_D'))
        document.getElementById('E_min').value = JSON.parse(window.localStorage.getItem('cours2_minimum_E'))
        console.log('clara')
    }
    if (r === 'cours3') {
        document.getElementById('ponderation1').value = JSON.parse(window.localStorage.getItem('cours3_ponderation1'))
        document.getElementById('ponderation2').value = JSON.parse(window.localStorage.getItem('cours3_ponderation2'))
        document.getElementById('ponderation3').value = JSON.parse(window.localStorage.getItem('cours3_ponderation3'))
        document.getElementById('ponderation4').value = JSON.parse(window.localStorage.getItem('cours3_ponderation4'))
        document.getElementById('ponderation5').value = JSON.parse(window.localStorage.getItem('cours3_ponderation5'))
        document.getElementById('ponderation6').value = JSON.parse(window.localStorage.getItem('cours3_ponderation6'))
        document.getElementById('ponderation7').value = JSON.parse(window.localStorage.getItem('cours3_ponderation7'))
        document.getElementById('note1').value = JSON.parse(window.localStorage.getItem('cours3_note1'))
        document.getElementById('note2').value = JSON.parse(window.localStorage.getItem('cours3_note2'))
        document.getElementById('note3').value = JSON.parse(window.localStorage.getItem('cours3_note3'))
        document.getElementById('note4').value = JSON.parse(window.localStorage.getItem('cours3_note4'))
        document.getElementById('note5').value = JSON.parse(window.localStorage.getItem('cours3_note5'))
        document.getElementById('note6').value = JSON.parse(window.localStorage.getItem('cours3_note6'))
        document.getElementById('note7').value = JSON.parse(window.localStorage.getItem('cours3_note7'))
        document.getElementById('Aplus_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_Aplus'))
        document.getElementById('A_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_A'))
        document.getElementById('Amoins_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_Amoins'))
        document.getElementById('Bplus_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_Bplus'))
        document.getElementById('B_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_B'))
        document.getElementById('Bmoins_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_Bmoins'))
        document.getElementById('Cplus_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_Cplus'))
        document.getElementById('C_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_C'))
        document.getElementById('Cmoins_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_Cmoins'))
        document.getElementById('Dplus_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_Dplus'))
        document.getElementById('D_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_D'))
        document.getElementById('E_min').value = JSON.parse(window.localStorage.getItem('cours3_minimum_E'))

    }
    if (r === 'cours4') {
        document.getElementById('ponderation1').value = JSON.parse(window.localStorage.getItem('cours4_ponderation1'))
        document.getElementById('ponderation2').value = JSON.parse(window.localStorage.getItem('cours4_ponderation2'))
        document.getElementById('ponderation3').value = JSON.parse(window.localStorage.getItem('cours4_ponderation3'))
        document.getElementById('ponderation4').value = JSON.parse(window.localStorage.getItem('cours4_ponderation4'))
        document.getElementById('ponderation5').value = JSON.parse(window.localStorage.getItem('cours4_ponderation5'))
        document.getElementById('ponderation6').value = JSON.parse(window.localStorage.getItem('cours4_ponderation6'))
        document.getElementById('ponderation7').value = JSON.parse(window.localStorage.getItem('cours4_ponderation7'))
        document.getElementById('note1').value = JSON.parse(window.localStorage.getItem('cours4_note1'))
        document.getElementById('note2').value = JSON.parse(window.localStorage.getItem('cours4_note2'))
        document.getElementById('note3').value = JSON.parse(window.localStorage.getItem('cours4_note3'))
        document.getElementById('note4').value = JSON.parse(window.localStorage.getItem('cours4_note4'))
        document.getElementById('note5').value = JSON.parse(window.localStorage.getItem('cours4_note5'))
        document.getElementById('note6').value = JSON.parse(window.localStorage.getItem('cours4_note6'))
        document.getElementById('note7').value = JSON.parse(window.localStorage.getItem('cours4_note7'))
        document.getElementById('Aplus_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_Aplus'))
        document.getElementById('A_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_A'))
        document.getElementById('Amoins_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_Amoins'))
        document.getElementById('Bplus_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_Bplus'))
        document.getElementById('B_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_B'))
        document.getElementById('Bmoins_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_Bmoins'))
        document.getElementById('Cplus_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_Cplus'))
        document.getElementById('C_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_C'))
        document.getElementById('Cmoins_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_Cmoins'))
        document.getElementById('Dplus_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_Dplus'))
        document.getElementById('D_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_D'))
        document.getElementById('E_min').value = JSON.parse(window.localStorage.getItem('cours4_minimum_E'))
    }
    if (r === 'cours5') {
        document.getElementById('ponderation1').value = JSON.parse(window.localStorage.getItem('cours5_ponderation1'))
        document.getElementById('ponderation2').value = JSON.parse(window.localStorage.getItem('cours5_ponderation2'))
        document.getElementById('ponderation3').value = JSON.parse(window.localStorage.getItem('cours5_ponderation3'))
        document.getElementById('ponderation4').value = JSON.parse(window.localStorage.getItem('cours5_ponderation4'))
        document.getElementById('ponderation5').value = JSON.parse(window.localStorage.getItem('cours5_ponderation5'))
        document.getElementById('ponderation6').value = JSON.parse(window.localStorage.getItem('cours5_ponderation6'))
        document.getElementById('ponderation7').value = JSON.parse(window.localStorage.getItem('cours5_ponderation7'))
        document.getElementById('note1').value = JSON.parse(window.localStorage.getItem('cours5_note1'))
        document.getElementById('note2').value = JSON.parse(window.localStorage.getItem('cours5_note2'))
        document.getElementById('note3').value = JSON.parse(window.localStorage.getItem('cours5_note3'))
        document.getElementById('note4').value = JSON.parse(window.localStorage.getItem('cours5_note4'))
        document.getElementById('note5').value = JSON.parse(window.localStorage.getItem('cours5_note5'))
        document.getElementById('note6').value = JSON.parse(window.localStorage.getItem('cours5_note6'))
        document.getElementById('note7').value = JSON.parse(window.localStorage.getItem('cours5_note7'))
        document.getElementById('Aplus_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_Aplus'))
        document.getElementById('A_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_A'))
        document.getElementById('Amoins_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_Amoins'))
        document.getElementById('Bplus_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_Bplus'))
        document.getElementById('B_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_B'))
        document.getElementById('Bmoins_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_Bmoins'))
        document.getElementById('Cplus_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_Cplus'))
        document.getElementById('C_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_C'))
        document.getElementById('Cmoins_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_Cmoins'))
        document.getElementById('Dplus_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_Dplus'))
        document.getElementById('D_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_D'))
        document.getElementById('E_min').value = JSON.parse(window.localStorage.getItem('cours5_minimum_E'))
    }
}
window.addEventListener('load', (event) =>{
    loadStorage('cours1')
})
// function every tab switch
document.querySelectorAll("a").forEach(function (i){
    i.addEventListener('hide.bs.tab', function (e){
        if (document.getElementById('cours1-tab') === e.target) {
            let tableau = document.getElementById('cours1')
            let target = e.relatedTarget
            let re = target.getAttribute('aria-controls')
            document.getElementById(re).appendChild(tableau.firstElementChild)
            saveVariable('cours1')
            loadStorage(re)
            //window.localStorage.clear()
        }
        if (document.getElementById('cours2-tab') === e.target) {
            let tableau = document.getElementById('cours2')
            let target = e.relatedTarget
            let re = target.getAttribute('aria-controls')
            document.getElementById(re).appendChild(tableau.firstElementChild)
            saveVariable('cours2')
            loadStorage(re)
        }
        if (document.getElementById('cours3-tab') === e.target) {
            let tableau = document.getElementById('cours3')
            let target = e.relatedTarget
            let re = target.getAttribute('aria-controls')
            document.getElementById(re).appendChild(tableau.firstElementChild)
            saveVariable('cours3')
            loadStorage(re)
        }
        if (document.getElementById('cours4-tab') === e.target) {
            let tableau = document.getElementById('cours4')
            let target = e.relatedTarget
            let re = target.getAttribute('aria-controls')
            document.getElementById(re).appendChild(tableau.firstElementChild)
            saveVariable('cours4')
            loadStorage(re)
        }
        if (document.getElementById('cours5-tab') === e.target) {
            let tableau = document.getElementById('cours5')
            let target = e.relatedTarget
            let re = target.getAttribute('aria-controls')
            document.getElementById(re).appendChild(tableau.firstElementChild)
            saveVariable('cours5')
            loadStorage(re)
        }

    })
})
// TODO: ajouter rename les titres
// TODO: ajouter un lien en haut a mon github
