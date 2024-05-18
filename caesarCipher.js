function caesarCipher(str) {
    let newStr = str.split("");

    for (let i = 0; i < newStr.length; i++) {
        let charValue = str.charCodeAt(i);
        if (charValue > 64 && charValue < 78) {
            charValue += 13; 
        } else if (charValue > 77 && charValue < 91) {
            charValue -= 13;
        }
        newStr[i] = String.fromCharCode(charValue);
    }

    return newStr.join("");
}
module.exports = caesarCipher;