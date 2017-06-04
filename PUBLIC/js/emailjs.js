$(document).ready(function () {

    var submitFormFunction = function (template, emailFormId, callback) {
        var $submitButton = $('#' + emailFormId).find('[type=submit]');
        if ($submitButton.is('[disabled]'))
            return;
        $submitButton.attr('disabled', true);
        $submitButton.html(lang[actualLang].emailjs.sending);
        //noinspection JSUnresolvedVariable
        emailjs.sendForm('default_service', template, emailFormId)
            .then(function (response) {
                $submitButton.html(lang[actualLang].emailjs.sended);
                if(callback != null)
                    callback();
            }, function (err) {
                $submitButton.removeAttr('disabled');
                $submitButton.html(lang[actualLang].emailjs.failed);

            });
    };

    $('#subscribe-newsletter-form').submit(function (e) {
        e.preventDefault();
        submitFormFunction('subscribenewsletter', 'subscribe-newsletter-form');
        return false;
    });
    $('#volunteer-form').submit(function (e) {
        e.preventDefault();
        submitFormFunction('voluntariado', 'volunteer-form');
        return false;
    });
    $('#propose-project-form').submit(function (e) {
        e.preventDefault();
        submitFormFunction('voluntariado', 'propose-project-form', function() {$('#confirmation-modal').modal('show');});

        return false;
    });
    $('#license-form').submit(function (e) {
        e.preventDefault();
        submitFormFunction('voluntariado', 'license-form');
        return false;
    });
});