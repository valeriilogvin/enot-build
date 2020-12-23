document.addEventListener('DOMContentLoaded', function() {

    const settingsBtnOpen = document.getElementById('settings-btn-open');
    const settingsBtnClose = document.getElementById('settings-btn-close');
    const settingsDropMenu = document.getElementById('settings-dropdown-menu');
    const menuBtn = document.getElementById('menu-btn');
    const mainMenu = document.getElementById('main-menu');
    const tabItem = document.querySelectorAll(".tab-item");
    const tabContentItem = document.querySelectorAll(".tab-content-item");
    
    function openSettingsHundler() {
        settingsDropMenu.classList.add('active')
    }

    function closeSettingsHundler() {
        settingsDropMenu.classList.remove('active')
    }

    function menuDropdownHundler() {
        if (mainMenu.classList.contains('active')) {
            mainMenu.classList.remove('active')
        } else {
            mainMenu.classList.add('active')
        }
    }

    function checkTargetHundler(e) {
        const target = e.target;

        if (!settingsDropMenu.contains(target)) {
            settingsDropMenu.classList.remove('active');
        }

        if (!mainMenu.contains(target) && !menuBtn.contains(target)) {
            mainMenu.classList.remove('active');
        }
    }


    function removeClass(element, className) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.remove(className)
        }
    }

    
    for (let i = 0; i < tabItem.length; i++) {
        const dataTabName = tabItem[i].dataset.tab.toLowerCase();
        tabItem[i].addEventListener("click", function() {
            for (let j = 0; j < tabContentItem.length; j++) {
                const dataContentTabName = tabContentItem[j].dataset.tab.toLowerCase();
                if (dataTabName === dataContentTabName) {
                    removeClass(tabContentItem, "active");
                    removeClass(tabItem, "active");
                    tabContentItem[j].classList.add("active");
                    tabItem[i].classList.add("active");
                }
            }
        });
    }

    document.addEventListener('mouseup', checkTargetHundler);
    if (settingsBtnOpen || settingsBtnClose || menuBtn) {
        settingsBtnOpen.addEventListener('click', openSettingsHundler)
        settingsBtnClose.addEventListener('click', closeSettingsHundler)
        menuBtn.addEventListener('click', menuDropdownHundler)
    }
	
});
