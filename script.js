setInterval(() => {
  lightdm.authenticate(document.getElementById("#usrname").value);
}, 1000);

$("#time").replaceWith(new Date().toDateString());

$("#passwd").on("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    lightdm.respond(document.getElementById("passwd").value);
  }
});

/**
 * This will be called when LightDM needs to prompt the user for some reason,
 * such as asking for a password. The "text" parameter will be the text of the prompt,
 * and the "type" parameter will either be "text" for a visible prompt,
 * or "password" for a prompt that the input should be hidden.
 * @param {String} text
 * @param {String} type
 */
function show_prompt(text, type) {}

/**
 * This will be called when LightDM needs to display some info for the user.
 * The "text" parameter will be the text of the message, and the "type" parameter will either be
 * "info" for an information message, or "error" for an error message that LightDM has encountered.
 * @param {String} text
 * @param {String} type
 */
function show_message(text, type) {}

/**
 * This function is called by LightDM when authentication has completed.
 */
function authentication_complete() {
  lightdm.start_session_sync(session);
}

/**
 * This function is called by LightDM when an autologin user’s login timer has expired.
 * The greeter should reset the authentication process.
 */
function autologin_timer_expired() {}
