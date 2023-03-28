const formDOM = document.querySelector('#sign-up-form');
const notificationDOM = document.querySelector('#notification');
const successDOM = document.querySelector('.success');

const nameTitleDOM = document.querySelector('#name-title');
const nameInputDOM = document.querySelector('#name');

const ocupationTitleDOM = document.querySelector('#ocupation-title');
const ocupationInputsDOM = document.getElementsByName('ocupation');

const lessonPacksTitleDOM = document.querySelectorAll('.lesson-packs-title');

const emailTitleDOM = document.querySelector('#email-title');
const emailInputDOM = document.querySelector('#email');

const phoneTitleDOM = document.querySelector('#phone-title');
const phoneInputDOM = document.querySelector('#phone');

const privacyPolicyDOM = document.querySelector('#privacy-policy');

const buttonDOM = document.querySelector('#submit');

const data = {
    Name: '',
    Ocupation: '',
    ScienceAndSocialStudies: false,
    CivicEducation: false,
    ClimateChange: false,
    FinancialLiteracy: false,
    MediaLiteracy: false,
    InternetLiteracy: false,
    Email: '',
    PhoneNumber: '',
    SubscribeToNewsletter: false
}

const formHaveEmptyInput = false;

formDOM.addEventListener('submit', async e => {
    e.preventDefault();

    data.Name = document.querySelector('#name').value;

    for (let o of ocupationInputsDOM) {
        if (o.checked) data.Ocupation = o.id;
    }

    data.ScienceAndSocialStudies = document.querySelector('#science').checked;
    data.CivicEducation = document.querySelector('#civic').checked;
    data.ClimateChange = document.querySelector('#climate').checked;
    data.FinancialLiteracy = document.querySelector('#financial').checked;
    data.MediaLiteracy = document.querySelector('#media').checked;
    data.InternetLiteracy = document.querySelector('#internet').checked;

    data.Email = emailInputDOM.value;
    data.PhoneNumber = phoneInputDOM.value;
    data.SubscribeToNewsletter = document.querySelector('#agree').checked;

    if (!data.Name) {
        nameTitleDOM.classList.add('danger-text');
        nameInputDOM.classList.add('danger-border');
    } else {
        nameTitleDOM.classList.remove('danger-text');
        nameInputDOM.classList.remove('danger-border');
    }

    if (!data.Ocupation) ocupationTitleDOM.classList.add('danger-text');
    else ocupationTitleDOM.classList.remove('danger-text');

    if (!data.ScienceAndSocialStudies &&
        !data.CivicEducation &&
        !data.ClimateChange &&
        !data.FinancialLiteracy &&
        !data.MediaLiteracy &&
        !data.InternetLiteracy) {

        lessonPacksTitleDOM.forEach(l => l.classList.add('danger-text'));
    } else lessonPacksTitleDOM.forEach(l => l.classList.remove('danger-text'));

    if (!data.Email) {
        emailTitleDOM.classList.add('danger-text');
        emailInputDOM.classList.add('danger-border');
    } else {
        emailTitleDOM.classList.remove('danger-text');
        emailInputDOM.classList.remove('danger-border');
    }

    if (!data.PhoneNumber) {
        phoneTitleDOM.classList.add('danger-text');
        phoneInputDOM.classList.add('danger-border');
    } else {
        phoneTitleDOM.classList.remove('danger-text');
        phoneInputDOM.classList.remove('danger-border');
    }

    if (!data.SubscribeToNewsletter) privacyPolicyDOM.classList.add('danger-text');
    else privacyPolicyDOM.classList.remove('danger-text');

    if (!data.Name ||
        !data.Ocupation || (
            !data.ScienceAndSocialStudies &&
            !data.CivicEducation &&
            !data.ClimateChange &&
            !data.FinancialLiteracy &&
            !data.MediaLiteracy &&
            !data.InternetLiteracy) ||
        !data.Email ||
        !data.PhoneNumber ||
        !data.SubscribeToNewsletter) {

        notificationDOM.textContent = 'Please fill the required fields *';
    } else {
        notificationDOM.textContent = null;
        buttonDOM.textContent = 'SUBMITTING...';

        await fetch(window.location.origin + '/Survey/RequestSurveyData', {
            method: "POST",
            body: JSON.stringify(data)
        });

        buttonDOM.textContent = 'SUBMIT';
        successDOM.classList.remove('hide');
    }
});
