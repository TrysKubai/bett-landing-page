const formDOM = document.querySelector('#sign-up-form');
const notificationDOM = document.querySelector('#notification');
const successDOM = document.querySelector('.success');

const data = {
    Name: '',
    Ocupation: '',
    ScienceAndSocialStudies: false,
    CivicEducation: false,
    ClimateChange: false,
    FinancialLiteracy: false,
    MediaLiteracy: false,
    InternetLiteracy: false,
    PhoneNumber: '',
    Email: '',
    SubscribeToNewsletter: false
}

const formHaveEmptyInput = false;

formDOM.addEventListener('submit', async e => {
    e.preventDefault();

    data.Name = document.querySelector('#name').value;

    const ocupation = document.getElementsByName('ocupation');
    for (let o of ocupation) {
        if (o.checked) data.Ocupation = o.id;
    }

    data.ScienceAndSocialStudies = document.querySelector('#science').checked;
    data.CivicEducation = document.querySelector('#civic').checked;
    data.ClimateChange = document.querySelector('#climate').checked;
    data.FinancialLiteracy = document.querySelector('#financial').checked;
    data.MediaLiteracy = document.querySelector('#media').checked;
    data.InternetLiteracy = document.querySelector('#internet').checked;

    data.PhoneNumber = document.querySelector('#phone').value;
    data.Email = document.querySelector('#email').value;
    data.SubscribeToNewsletter = document.querySelector('#agree').checked;

    if (!data.Name ||
        !data.Ocupation || (
            !data.ScienceAndSocialStudies &&
            !data.CivicEducation &&
            !data.ClimateChange &&
            !data.FinancialLiteracy &&
            !data.MediaLiteracy &&
            !data.InternetLiteracy) ||
        !data.PhoneNumber ||
        !data.Email ||
        !data.SubscribeToNewsletter) {

        notificationDOM.textContent = 'Please fill the required fields *';
    } else {
        notificationDOM.textContent = null;

        await fetch(window.location.origin + '/Survey/RequestSurveyData', {
            method: "POST",
            body: JSON.stringify(data)
        });

        successDOM.classList.remove('hide');
    }
});
