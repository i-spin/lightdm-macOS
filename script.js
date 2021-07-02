for (var i = 0; i < lightdm.sessions.length; i++) {
    var session = lightdm.sessions[i];
    var s = document.createElement('option');
    s.innerHTML = session.name;
    s.setAttribute("value", session.key);
    s.id = "s" + i;

    document.getElementById("sessions").appendChild(s);
}

$("#passwd").on('keyup', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        lightdm.provide_secret(document.getElementById("passwd").value);
        lightdm.start_authentication(document.getElementById("usrname").value);
    }
})

function authentication_complete() {
    if (lightdm.is_authenticated) {
        /** Select session and log in */
        var session = document.getElementById('sessions').value;
        show_message("Correct Password, Logging in", "success");
        lightdm.login (lightdm.authentication_user, session);
    } else {
        /** Shows error message, starts auth process again */
        show_message("Incorrect Password", "error");
        start_auth();
    }
};