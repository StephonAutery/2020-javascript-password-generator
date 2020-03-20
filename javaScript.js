password = document.getElementById("password");
charDiv = document.getElementsByClassName("radio");
rangeFind = document.getElementById("range");
generatePwdBtn = document.getElementById("generate");
copyToClipBtn = document.getElementById("copy");
rangeInfo = document.getElementById("rangeInfoDiv");

// reset all parameters
function reset(){
    charTrue = false;
    varIterate = 0;
    varCount = 0;
    varPassWord = "";
    rangeFind.value = 64;
    for (i=0; i < charDiv.length; i++){
        charDiv[i].checked = false;
    };
}

// copy the new password to the clipboard
function copyToClip(){
    /* Select the text field */
    password.select();
    password.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
};

// get upper case letters
function getUpper() {
    do {
        varRandomNum = Math.round(Math.random() * 100);
    }
    while (varRandomNum < 65 || varRandomNum > 90);
    varChar = String.fromCharCode(varRandomNum);
    return varChar;            
}      

// get lower case letters
function getLower(){
    do {
        varRandomNum = Math.round(Math.random() * 100);
    }
    while (varRandomNum < 97 || varRandomNum > 122);
    varChar = String.fromCharCode(varRandomNum);
    return varChar;  
}

// get numbers
function getNum(){
    do {
        varRandomNum = Math.round(Math.random() * 100);
    }
    while (varRandomNum < 48 || varRandomNum > 57);7n
    varChar = String.fromCharCode(varRandomNum);
    return varChar;  
}

// get special characters
function getSpecial(){
    do {
        varRandomNum = Math.round(Math.random() * 100);
    }
    while (varRandomNum < 33 || varRandomNum > 47 && varRandomNum < 58 || varRandomNum > 64 && varRandomNum < 91 || varRandomNum > 96 && varRandomNum < 123 || varRandomNum > 126);
    varChar = String.fromCharCode(varRandomNum);
    return varChar;  
}

// build the password
function getPassword(){
    varIterate = rangeFind.value;
    varLower = charDiv.lower.checked;
    varUpper = charDiv.upper.checked;
    varSpecial = charDiv.special.checked;
    varNum = charDiv.nums.checked;
    while (varCount < varIterate){
        if (varSpecial === true && i < varIterate){
            varTmpChar = getSpecial();
            varPassWord = varPassWord.concat(varTmpChar);
            i++     
        }
        if(varNum === true && i < varIterate){
            varTmpChar = getNum();
            varPassWord = varPassWord.concat(varTmpChar);
            i++
        }
        if(varLower === true && i < varIterate){
            varTmpChar = getLower();
            varPassWord = varPassWord.concat(varTmpChar);
            i++                   
        }
        if(varUpper === true && i < varIterate) {
            varTmpChar = getUpper();
            varPassWord = varPassWord.concat(varTmpChar);
            i++                  
        }
    varCount++;
    }   
    // write the password to the screen
    password.textContent = varPassWord;
}

// validate criteria selection before building password
function generatePwd(){
    password.textContent = "";
    for (i=0; i < charDiv.length; i++){
        if (charDiv[i].checked){charTrue = true};
    };
    if (charTrue){
        getPassword();
    } else {password.textContent = "please select at least one password criteria";}
    reset();
}

function showSelect(){
    console.log(test + " ..|");
}

function showRangeSelect(e){
    rangeInfo.innerHTML = rangeFind.value;
}

var charTrue = false;
var varIterate = 0;
var varChar = "";
var varRandomNum = 0;
var varPassWord = "";
var varTemp = "";
var varPLength = 0;
var varCount = 0;
var i = 0;
var test = "";

//still trying to figure out why this won't pass the true value of the array from inside the 'for' loop.
for (i=0; i < charDiv.length; i++){
    test=charDiv[i].id;
    charDiv[i].addEventListener("change", showSelect, false);
};

generatePwdBtn.addEventListener("mousedown", function(e){
    generatePwd(e);
}, false);

copyToClipBtn.addEventListener("mousedown", function(e){
    copyToClip(e);
}, false);

rangeFind.addEventListener("change", function(e){
    showRangeSelect(e);
}, false);