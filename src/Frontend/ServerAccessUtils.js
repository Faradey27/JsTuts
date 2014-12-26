"use strict"

function ServerAccessUtils() {}

ServerAccessUtils.prototype = {

    makeRequest: function(path, user, method) {
        method = method || "post";

        var form = document.createElement("form");
        form.setAttribute("method", method);
        form.setAttribute("action", path);

        var login = document.createElement("input");
        login.setAttribute("type", "text");
        login.setAttribute("name", "email");
        login.setAttribute("value", user.email);
        var password = document.createElement("input");
        password.setAttribute("type", "password");
        password.setAttribute("name", "password");
        password.setAttribute("value", user.password);
        console.log(user.email);
        form.appendChild(login);
        form.appendChild(password);

        document.body.appendChild(form);
        form.submit();
        //form.parentNode ? form.parentNode.removeChild(form) : form;
    }
};

module.exports = ServerAccessUtils;