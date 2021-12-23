
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

//test pour 90% de moyenne
function calcul() {
    debugger;
    let moyenne = changeMoyenne(0);
    //changeMoyenne(moyenne)
    let ponderation_a_diviser = [];
    let resultat_a_soustraire = [];

    // resultat1
    if(document.getElementById('ponderation1').value !== '') {
        const ponderation1 = document.getElementById('ponderation1').value / 100
        if (document.getElementById('note1').value === '') {
            ponderation_a_diviser.push(ponderation1)
        } else {
            resultat_a_soustraire.push(ponderation1 * document.getElementById('note1').value)
        }
    }
    // resultat2
    if(document.getElementById('ponderation2').value !== '') {
        const ponderation2 = document.getElementById('ponderation2').value / 100
        if (document.getElementById('note2').value === '') {
            ponderation_a_diviser.push(ponderation2)
        } else {
            resultat_a_soustraire.push(ponderation2 * document.getElementById('note2').value)
        }
    }
    // resultat3
    if(document.getElementById('ponderation3').value !== '') {
        const ponderation3 = document.getElementById('ponderation3').value / 100
        if (document.getElementById('note3').value === '') {
            ponderation_a_diviser.push(ponderation3)
        } else {
            resultat_a_soustraire.push(ponderation3 * document.getElementById('note3').value)
        }
    }
    // resultat4
    if(document.getElementById('ponderation4').value !== '') {
        const ponderation4 = document.getElementById('ponderation4').value / 100
        if (document.getElementById('note4').value === '') {
            ponderation_a_diviser.push(ponderation4)
        } else {
            resultat_a_soustraire.push(ponderation4 * document.getElementById('note4').value)
        }
    }
    // resultat5
    if(document.getElementById('ponderation5').value !== '') {
        const ponderation5 = document.getElementById('ponderation5').value / 100
        if (document.getElementById('note5').value === '') {
            ponderation_a_diviser.push(ponderation5)
        } else {
            resultat_a_soustraire.push(ponderation5 * document.getElementById('note5').value)
        }
    }
    // resultat6
    if(document.getElementById('ponderation6').value !== '') {
        const ponderation6 = document.getElementById('ponderation6').value / 100
        if (document.getElementById('note6').value === '') {
            ponderation_a_diviser.push(ponderation6)
        } else {
            resultat_a_soustraire.push(ponderation6 * document.getElementById('note6').value)
        }
    }
    // resultat7
    if(document.getElementById('ponderation6').value !== '') {
        const ponderation7 = document.getElementById('ponderation7').value / 100
        if (document.getElementById('note5').value === '') {
            ponderation_a_diviser.push(ponderation7)
        } else {
            resultat_a_soustraire.push(ponderation7 * document.getElementById('note7').value)
        }
    }

    //const prequis = (moyenne - (ponderation1 * note1))/(ponderation2 + ponderation3)
    for (const resultat of resultat_a_soustraire){
        moyenne = moyenne - resultat;
    }
    let somme_ponderation = 0
    for (const ponderation of ponderation_a_diviser) {
        somme_ponderation = somme_ponderation + ponderation
    }
    if (somme_ponderation === 0) {
        document.getElementById('resultat').innerHTML = 'Erreur'
    }else{
        const prequis = (Math.round((moyenne/somme_ponderation) * 100)/100).toFixed(2);

        document.getElementById('resultat').innerHTML = 'Vous avez besoin de ' + prequis.toString() +'%'
    }

}
// TODO: better commit titles
// TODO: enlever bouton bleu a droite
// TODO: modifier couleurs pour match le theme
// TODO: ajouter cookies/cache/web storage
// TODO: augmenter a 5 cours
// TODO: ajouter un lien en haut a mon github

