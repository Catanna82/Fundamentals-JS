function passwordValidator(pass) {
    // паролата трябва да е дълга между 6 и 10 знака включително
    // трябва да съдържа само числа и букви
    // трябва да съдържа поне две числа
    // принтираме резултата
    //'Password must be between 6 and 10 characters'
    //'Password must consist only of letters and digits'
    //'Password must have at least 2 digits'

    function isValidLength (pass) {
        if (pass.length >= 6 && pass.length <= 10){
            return true;
        } else {
            return `Password must be between 6 and 10 characters`;
        }
    }

    function isValidChar (pass) {
        let isValidPass = true;
        for (let i = 0; i < pass.length; i++) {
            let isValid = true;
 
            let code = pass[i].charCodeAt(0);
            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {
                isValid = true;
            } else {
                isValid = false;
                isValidPass = false;
                break;
            }
        }
        return isValidPass ? true : `Password must consist only of letters and digits`;
    }

    function isTwoDigit (pass) {
        let digit = 0;
        for (let i = 0; i < pass.length; i++) {
            let char = pass[i].charCodeAt(0);
            if (char >= 48 && char <= 57) {
                digit++;
            }
        }
        return digit >= 2 ? true : `Password must have at least 2 digits`;
    }

let result = [];

if (isValidLength(pass) !== true) {
    result.push(isValidLength(pass));
}
if (isValidChar(pass) !== true) {
    result.push(isValidChar(pass));
}
if (isTwoDigit(pass) !== true) {
    result.push(isTwoDigit(pass));
}

if (isValidLength(pass) === true && isValidChar(pass) === true 
&& isTwoDigit(pass) === true) {
    result.push(`Password is valid`);
}

return result.join('\n')

}

console.log(passwordValidator('logIn'));
console.log(passwordValidator('MyPass123'));
console.log(passwordValidator('Pa$s$s'));
