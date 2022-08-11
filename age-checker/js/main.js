//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
document.querySelector('h1').addEventListener('click', ageChecker);

function ageChecker() {
    let input = Number(document.querySelector('#danceDanceRevolution').value)
    document.querySelector('p').innerText = " ";

    if (input < 16) {
        document.querySelector('p').innerText += 'they cannot drive';
    } else if (input < 18) {
        document.querySelector('p').innerText += "they can't hate from outside the club, because they can't even get in";
    } else if (input < 21) {
        document.querySelector('p').innerText += "they can not drink";
    } else if (input < 25) {
        document.querySelector('p').innerText += "they can not rent cars affordably";
    } else if (input < 30) {
        document.querySelector('p').innerText += "they can not rent fancy cars affordably";
    } else if (input >= 30) {
        document.querySelector('p').innerText += "there is nothing left to look forward too";
    }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

