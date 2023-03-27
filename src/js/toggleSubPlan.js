const planListsDOM = document.querySelectorAll('.sub-plan');
const buttonsDOM = document.querySelectorAll('.toggle-sub-plan-btn');

// resets sub-plan-DOM height on window resize
let lastScreenSize = window.screen.width

window.addEventListener('resize', () => {
    const currentScreenSize = window.screen.width;
    const difference = Math.max(lastScreenSize, currentScreenSize) - Math.min(lastScreenSize, currentScreenSize);

    if (difference) {
        if (window.screen.width < 1240) {
            for (let planList of planListsDOM) {
                planList.classList.remove('hide');
                planList.style.height = 'auto';

                const height = planList.offsetHeight;

                planList.style.height = height + 'px';
            }
        } else setHeightforDesktop();

        addClassNames();
        lastScreenSize = currentScreenSize;
    }
});

// setting height for trasnsitions to work
function setHeight() {
    if (window.screen.width < 1240) {
        for (let planList of planListsDOM) {
            planList.style.height = 'auto';

            const height = planList.offsetHeight - 40;

            planList.style.height = height + 'px';
        }
    } else setHeightforDesktop();
}

// setting list height for bigger width size
// (need edit if conditions if text was chanched in one of the list to mach size)
function setHeightforDesktop() {
    for (let planList of planListsDOM) {
        if (window.screen.width < 1495) {
            planList.style.height = '276px';
        } else if (window.screen.width < 1618) {
            planList.style.height = '246px';
        } else if (window.screen.width < 1796) {
            planList.style.height = '216px';
        } else if (window.screen.width < 1887) {
            planList.style.height = '186px';
        } else {
            planList.style.height = '156px';
        }
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

// setup class names by window width size
function addClassNames() {
    if (window.screen.width < 1240) {
        for (let planList of planListsDOM) {
            planList.classList.add('hide');
        }

        for (let button of buttonsDOM) {
            button.classList.remove('less');
            button.classList.add('more');
        }

    } else {
        for (let planList of planListsDOM) {
            planList.classList.remove('hide');
        }

        for (let button of buttonsDOM) {
            button.classList.remove('more');
            button.classList.add('less');
        }
    }
}

setHeight();
addClassNames();