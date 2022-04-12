// Step One - get -controller accept requrests
function getMessage() {
    let msg = document.getElementById("message").value;

    if (msg == '') {
        alert('YOU GOTTA PUT A WORD IN! Empty space is not a palidrome!')
    } else {
        msg = msg.toLowerCase();
        msg = msg.replace(/[^A-Z0-9]/ig, "");
        let what = reverseMessage(msg);
        let letMeSee = msg;

        if (what == letMeSee) {
            displayMessage('Yes! This is a palindrome!');

        } else {
            displayMessage('Nope. Try again.');

        }

    }

}

function reverseMessage(msg) {
    let revMessage = '';

    for (let i = msg.length - 1; i >= 0; i--) {

        let char = msg[i];
        revMessage += char;

    }

    return revMessage
}

// final step - display those values

function displayMessage(message) {
    let yay = document.getElementById('results');
    yay.innerHTML = message;

}