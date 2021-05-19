var nameString = document.querySelector(".enterName");
var helloPlusName = document.querySelector(".greetingAndName");
var buttonForGreetMe = document.querySelector(".greetMeBtn");
var counterRef = document.querySelector(".counter1")
var emptyStringRef = document.querySelector(".greetingAndName1");
var resetBtnRef = document.querySelector(".resetBtn")

var greetEnglish = "Hello, ";
var greetSpanish = "Hallo,  ";
var greetFrench = "Molo, ";
var emptyString = "Please write name";
var language = "Please choose language and enter name";

var count = 0;
var namesGreeted = {};
let key = 'name';
var retrievedCount;

var retrievedNames;

emptyStringRef.classList.add('danger');

if (localStorage['spot']) {
    retrievedCount = localStorage.getItem('spot');
}
// if (localStorage['s']) {
//     retrievedNames = localStorage.getItem('s');
// }



// retrievedNames = localStorage.getItem('s');


counterRef.innerHTML = retrievedCount;


function clearTextArea() {

    nameString.value = null;

}

function clearEmptyStringArea() {
    emptyStringRef.innerHTML = " ";
}

function clearGreetingArea() {
    helloPlusName.innerHTML = " ";
}

function clearCounterArea() {
    counterRef.innerHTML = " ";
}

function greet() {

    var nam = nameString.value;
    var name = nam.charAt(0).toUpperCase() + nam.slice(1).toLowerCase();

     
    var radioBtnEng = document.querySelector("input[name='langRadioBtn']:checked");

    if (localStorage['spot']) {

        count = Number(localStorage['spot']);

    }

    // if (localStorage['s']) {
        
    //      namesGreeted[name] = JSON.parse(localStorage['s']);

    // }

    if (!radioBtnEng) {
        helloPlusName.innerHTML = language;
        helloPlusName.classList.add('danger');
        clearEmptyStringArea();
    }

    if (radioBtnEng) {
        radioBtnEng.checked = false;


        if (name == " ") {

            emptyStringRef.innerHTML = emptyString;

            clearGreetingArea();
        }

        else if (name == Number(nameString.value)) {
            emptyStringRef.innerHTML = emptyString;
            clearGreetingArea();
            clearTextArea();

        }

        else if (radioBtnEng.value === "English" && namesGreeted[name] === undefined) {
            namesGreeted[name] = 0;
            // localStorage['s'] = namesGreeted[name];

            count++;
            //add an entry for the user that was greeted in the Object Map

            //update the DOM to display the counter
            counterRef.innerHTML = count;
            //clearTextArea();
            clearEmptyStringArea();
            clearTextArea();

            helloPlusName.innerHTML = greetEnglish + name;
            ;
            helloPlusName.classList.remove('danger');

            //clearTextArea();  
        }

        else if (radioBtnEng.value === "English") {
            helloPlusName.innerHTML = greetEnglish + name;
            helloPlusName.classList.remove('danger');
            // clearTextArea();
            clearEmptyStringArea();
            clearTextArea();
        }



        else if (radioBtnEng.value === "French" && namesGreeted[name] === undefined) {
            // clearEmptyStringArea();

            // localStorage['s'] = namesGreeted[name]; 
            count++;
            //add an entry for the user that was greeted in the Object Map
            namesGreeted[name] = 0;
            //update the DOM to display the counter
            counterRef.innerHTML = count;
            helloPlusName.innerHTML = greetFrench + name;
            helloPlusName.classList.remove('danger');


            clearEmptyStringArea();
            clearTextArea();

        }

        else if (radioBtnEng.value === "French") {

            helloPlusName.innerHTML = greetFrench + name;
            helloPlusName.classList.remove('danger');

            clearEmptyStringArea();
            clearTextArea();
        }



        else if (radioBtnEng.value === "Spanish" && namesGreeted[name] === undefined) {
            // clearTextArea(name);
            // clearEmptyStringArea();
            count++;
            //add an entry for the user that was greeted in the Object Map
            namesGreeted[name] = 0;
            // localStorage['s'] = namesGreeted[name]

            //update the DOM to display the counter
            counterRef.innerHTML = count;
            helloPlusName.innerHTML = greetSpanish + name;
            helloPlusName.classList.remove('danger');
            clearEmptyStringArea();
            clearTextArea();

        }

        else if (radioBtnEng.value === "Spanish") {

            helloPlusName.innerHTML = greetSpanish + name;
            helloPlusName.classList.remove('danger');
            clearEmptyStringArea();
            clearTextArea();
        }

    }

    localStorage['spot'] = count;
    localStorage['s'] = namesGreeted;
}



function reset() {
    var count = 0;


    localStorage.clear();

    localStorage['spot'] = 0;
    counterRef.innerHTML = 0;


    clearGreetingArea();
    clearEmptyStringArea();
}


buttonForGreetMe.addEventListener('click', greet);
resetBtnRef.addEventListener('click', reset);