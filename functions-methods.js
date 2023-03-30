// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

console.log("----------------------------------")
let emailArray = ["n.eeken@novi-education.nl","t.mellink@novi.nl","a.wiersma@outlook.com","t.mellink@novi.nl","novi.nlaapjesk@outlook.com","tessmellink@novi,nl", "n.eeken@novi.nl","tessmellink@novi.nl", "n.eekenanovi.nl","n.eeken@novinl.","tessmellink@novi,nl"];
function getEmailDomain(emailAddress){
    let cut = emailAddress.indexOf("@");
    return emailAddress.substring(cut + 1);
}

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(emailAddress) {
    let cut = emailAddress.indexOf("@");
    let domain = emailAddress.substring(cut + 1);
    let solution;

    if (domain.toLowerCase() === "novi-education.nl") {
        solution = "Student";
    } else if (domain.toLowerCase() === "novi.nl") {
        solution = "Medewerker";
    } else {
        solution = "External";
    }
    return solution;
}

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
function checkEmailValidity(emailAddresses) {
    let check;
    let validDomain = [".nl", ".com", ".net"];
    let counter = 0;
    if (emailAddresses.indexOf("@") === -1 || emailAddresses.indexOf(".") === -1 ){
        check = false;
    }
    else {
        let domain = emailAddresses.substring(emailAddresses.indexOf("@") + 1);
        let a = domain.substring(domain.indexOf("."))
        for (let i = 0; i < validDomain.length; i++){
            if (a === validDomain[i]){
                counter++;
            }
        }
    }
    check = counter > 0;
    return check;
}


for (let i = 0; i < emailArray.length ; i++ ){
    if (checkEmailValidity(emailArray[i]) === true){
        console.log("[" + emailArray[i] + "] --- [" +typeOfEmail(emailArray[i]) + "] --- [" + getEmailDomain(emailArray[i]) + "]");
    }
    else{
        console.log("["+emailArray[i] +"] --- ["+ checkEmailValidity(emailArray[i]) + "]");
    }
}