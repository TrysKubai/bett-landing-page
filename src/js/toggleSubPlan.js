const planListsDOM = document.querySelectorAll('.sub-plan');

// resets sub-plan-DOM height on window resize
window.addEventListener('resize', () => {
    for (let planList of planListsDOM) {
        planList.style.height = 'auto';
    }
    setHeight();
})

// setting height for trasnsitions to work
function setHeight() {
    for (let planList of planListsDOM) {

        const height = planList.offsetHeight - 40;

        planList.style.height = height + 'px';
    }
}

// hide/show list of sub-plan
function toggleSubPlan(id) {
    const planListDOM = document.querySelector('#sub-plan-' + id);
    const buttonDOM = document.querySelector('#toggle-sub-plan-' + id);

    const isHide = planListDOM.classList.value.includes('hide');

    if (isHide) {
        planListDOM.classList.remove('hide');

        buttonDOM.classList.remove('more');
        buttonDOM.classList.add('less');
    } else {
        planListDOM.classList.add('hide');

        buttonDOM.classList.remove('less');
        buttonDOM.classList.add('more');
    }
}

setHeight();

for (let planList of planListsDOM) {

    planList.classList.add('hide');
}