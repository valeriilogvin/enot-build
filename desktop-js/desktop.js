Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

var app = {
    body: document.querySelector('body'),
    theme_switcher: document.querySelector('.js_theme_switcher'),
    btn_public: document.querySelector('.js_mob_btn_public'),

    chat: {
        message_content: document.querySelector('.js_chat_message_content'),
        input_text: document.querySelector('.js_input_text'),
        file_input_button: document.getElementById('js_file_input_button'),
        file_input: document.getElementById('js_file_input')
    },

    menu: {
        btn: document.getElementById('menu-btn'),
        main_menu: document.getElementById('main-menu'),
        settings_btn_open: document.getElementById('settings-btn-open'),
        settings_btn_close: document.getElementById('settings-btn-close'),
        settings_drop_menu: document.getElementById('settings-dropdown-menu'),
    },

    sidebar: {
        tabs: document.querySelectorAll(".tab-item"),
        tab_content_item: document.querySelectorAll(".tab-content-item"),
        photo_container: document.querySelector('.js_photo_container'),
        file_container: document.querySelector('.js_sidebar_file_container'),
        archive_container: document.querySelector('.js_sidebar_archive_container'),
    },

    messages: [],
    settings: {
        scheme: getCookie('scheme')
    },

    indicator_stop_timeout: 5000,
};
let tree_icons_indexes_default = tree_icons.map((x,i)=>i);
let __tree_icons_indexes_tmp = shuffle(tree_icons_indexes_default);

function app_init() {

    function openSettingsHandler() {
        app.menu.settings_drop_menu.classList.add('active')
    }

    function closeSettingsHandler() {
        app.menu.settings_drop_menu.classList.remove('active')
    }

    function menuDropdownHandler() {
        if (app.menu.main_menu.classList.contains('active')) {
            app.menu.main_menu.classList.remove('active')
        } else {
            app.menu.main_menu.classList.add('active')
        }
    }

    function checkTargetHandler(e) {
        const target = e.target;

        if (!app.menu.settings_drop_menu.contains(target)) {
            app.menu.settings_drop_menu.classList.remove('active');
        }

        if (!app.menu.main_menu.contains(target) && !app.menu.btn.contains(target)) {
            app.menu.main_menu.classList.remove('active');
        }
    }

    function removeClass(element, className) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.remove(className)
        }
    }


    for (let i = 0; i < app.sidebar.tabs.length; i++) {
        const dataTabName = app.sidebar.tabs[i].dataset.tab.toLowerCase();
        app.sidebar.tabs[i].addEventListener("click", function () {
            for (let j = 0; j < app.sidebar.tab_content_item.length; j++) {
                const dataContentTabName = app.sidebar.tab_content_item[j].dataset.tab.toLowerCase();
                if (dataTabName === dataContentTabName) {
                    removeClass(app.sidebar.tab_content_item, "active");
                    removeClass(app.sidebar.tabs, "active");
                    app.sidebar.tab_content_item[j].classList.add("active");
                    app.sidebar.tabs[i].classList.add("active");
                }
            }
        });
    }

    document.addEventListener('mouseup', checkTargetHandler);

    if (app.menu.settings_btn_open || app.menu.settings_btn_close || app.menu.btn) {
        app.menu.settings_btn_open.addEventListener('click', openSettingsHandler)
        app.menu.settings_btn_close.addEventListener('click', closeSettingsHandler)
        app.menu.btn.addEventListener('click', menuDropdownHandler)
    }

    app.theme_switcher.addEventListener('click', () => {
        if (app.theme_switcher.checked) {
            document.documentElement.classList.remove('light');
            app.body.classList.remove('light');
            setCookie('scheme', 'dark');
            // console.log('checked');
        } else {
            document.documentElement.classList.add('light');
            app.body.classList.add('light');
            setCookie('scheme', 'light');
            // console.log('unchecked');
        }
    });

    app.chat.file_input_button.addEventListener("click", (e) => {
        app.chat.file_input.click();
    }, false);
}

// preloader
function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined
}

let app_wrapper = document.querySelector('body');
let color = getCookie("scheme");
if (color === 'light') {
    app_wrapper.classList.add('light');
    app.theme_switcher.checked = false
}
// preloader : END

/*
setCookie Аргументы:

name
название cookie
value
значение cookie (строка)
props
Объект с дополнительными свойствами для установки cookie:
expires
Время истечения cookie. Интерпретируется по-разному, в зависимости от типа:
Если число - количество секунд до истечения.
Если объект типа Date - точная дата истечения.
Если expires в прошлом, то cookie будет удалено.
Если expires отсутствует или равно 0, то cookie будет установлено как сессионное и исчезнет при закрытии браузера.
path
Путь для cookie.
domain
Домен для cookie.
secure
Пересылать cookie только по защищенному соединению.
*/
function setCookie(name, value, props) {

    props = props || {};

    var exp = props.expires;

    if (typeof exp == "number" && exp) {

        var d = new Date();

        d.setTime(d.getTime() + exp * 1000);

        exp = props.expires = d

    }

    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString()
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in props) {

        updatedCookie += "; " + propName;

        var propValue = props[propName];

        if (propValue !== true) {
            updatedCookie += "=" + propValue
        }
    }

    document.cookie = updatedCookie

}

function deleteCookie(name) {
    setCookie(name, null, {expires: -1})
}


/*
* secondary functions
* */
function shuffle(arr) {

    var arra1 = arr.map(x => x);
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function note_amount_set(amount) {
    for (let el of app.note_amount) el.innerHTML = note_amount_get(amount)
}

function note_amount_get(amount) {
    if (amount === 0 || undefined) return `Вы&nbsp;не&nbsp;можете отправить&nbsp;заметку`;
    if (amount === 1 || undefined) return `Вы&nbsp;можете&nbsp;отправить&nbsp;еще <span>${amount}</span> заметку`;
    if (amount > 1 && amount < 4) return `Вы&nbsp;можете&nbsp;отправить&nbsp;еще <span>${amount}</span> заметки`;
    if (amount > 4) return `Вы&nbsp;можете&nbsp;отправить&nbsp;еще <span>${amount}</span> заметок`;
}

function wrapper_slide_visibility(type, callback) {
    callback = callback ? callback : () => {
    };
    if (app.wrapper.dataset.slide === type) return;

    switch (type) {
        case 0: {
            callback();
            app.wrapper.dataset.slide = '0';
        }
            break;
        case 1: {
            callback();
            app.wrapper.dataset.slide = '1';
        }
            break;
        case 2: {
            callback();
            app.wrapper.dataset.slide = '2';
        }
            break;
        case 3: {
            callback();
            app.wrapper.dataset.slide = '3';
        }
            break;
        case 4: {
            callback();
            app.wrapper.dataset.slide = '4';
        }
            break;
        default:
            app.wrapper.dataset.slide = '0';
    }
}

const escapeHTML = str => str.replace(/[&<>'"]/g,
    tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag]));

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function randomHSL() {
//  hue, saturation, lightness
    return "hsla(" + ~~(360 * Math.random()) + "," + (40 + 10 * Math.random()) + '%,'
        + "55%, 1)";
}

function randomColor() {
    return randomHSL();

    // or
    /*
        let colors = ['#ec488f', '#8fbb4a', '#fcd160',
        '#ec5657', '#45a0d9', '#1070bc','#7151a4',
        '#4f9734', '#efaa45'
        ];

        return colors.random();
    //*/
}

function randomTree() {
    return tree_icons.random();
}

function getRealRandomTree() {
    if (__tree_icons_indexes_tmp.length == 0) __tree_icons_indexes_tmp = shuffle(tree_icons_indexes_default);
    return tree_icons[__tree_icons_indexes_tmp.shift()];
}

function image_onload(element_id, src) {
    let img = new Image(),
        img_block = document.querySelector(`.image_${element_id}`),
        img_tree = img_block.querySelector(`.placeholder-tree`),
        img_color_block = img_block.querySelector(`.placeholder`);
    img.src = src;
    img.setAttribute('class', 'main');
    img.onload = function () {
        setTimeout(() => {
            img_block.appendChild(img);
            img_tree.remove();
            img_color_block.remove();
        }, 3000); // test option
    };
}

function is_archive_file(file_format) {
    return /^(rar|zip|7z|7zip|tar|tz|gz|ace|arj)$/i.test(file_format);
}

const indexOfIdGet = (array, id) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return i;
        }
    }
    return false;
};

function getExtension(fname) {
    if (!fname) return "";
    return fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);
}

function readAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onerror = reject;
        fr.onload = function () {
            resolve({src: fr.result, filename: file.name});
        };
        fr.readAsDataURL(file);
    });
}

function initializeLightGallery(id) {
    lightGallery(document.getElementById('lg_' + id));
}

/*
setCookie Аргументы:

name
название cookie
value
значение cookie (строка)
props
Объект с дополнительными свойствами для установки cookie:
expires
Время истечения cookie. Интерпретируется по-разному, в зависимости от типа:
Если число - количество секунд до истечения.
Если объект типа Date - точная дата истечения.
Если expires в прошлом, то cookie будет удалено.
Если expires отсутствует или равно 0, то cookie будет установлено как сессионное и исчезнет при закрытии браузера.
path
Путь для cookie.
domain
Домен для cookie.
secure
Пересылать cookie только по защищенному соединению.
*/


/*
* indicators
* */
function indicator_encryption_svg_get() {
    return `
<svg class="circular-loader" viewBox="25 25 50 50">
    <circle class="loader-path" cx="50" cy="50" r="20" fill="none"
        stroke-width="4" stroke-dasharray="150, 200" stroke-dashoffset="-10" />
</svg>
<svg class="circular" viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" stroke-width="4"
        stroke-dasharray="150, 200" />
</svg>
<div class="loader__icon">
    <svg width="10" height="13" viewBox="0 0 10 13" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.65796 5.29537V4.09863C8.65796 2.13553 7.061 0.538574 5.09817 0.538574C3.13507 0.538574 1.53824 2.13553 1.53824 4.09863V5.29537H0.384766V12.5386H9.8113V5.29537H8.65796ZM3.01643 4.09863C3.01643 2.95066 3.95033 2.01676 5.09817 2.01676C6.246 2.01676 7.1799 2.95066 7.1799 4.09863V5.29537H3.01643V4.09863ZM5.69044 9.85277V11.4541H4.50576V9.85277C4.23021 9.66387 4.0493 9.34715 4.0493 8.98756C4.0493 8.4084 4.51887 7.93883 5.09804 7.93883C5.6772 7.93883 6.14677 8.4084 6.14677 8.98756C6.1469 9.34702 5.96599 9.66373 5.69044 9.85277Z"
            fill="#5D6066" />
    </svg>
</div>
`;
}

function indicator_loader_html_get() {
    return `
<svg class="circular-loader" viewBox="25 25 50 50">
    <circle class="loader-path" cx="50" cy="50" r="20" fill="none"
        stroke-width="4" stroke-dasharray="150, 200" stroke-dashoffset="-10" />
</svg>
<svg class="circular" viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" stroke-width="4"
        stroke-dasharray="150, 200" />
</svg>
<div class="loader__icon">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.5573 0.187402C9.97542 -0.174185 9.20972 0.00311595 8.84744 0.58459L3.91144 8.51095L2.25793 6.1545C1.86469 5.5938 1.08973 5.45806 0.528644 5.85108C-0.0323252 6.2446 -0.168661 7.0179 0.225074 7.5791L2.95655 11.4718C3.18946 11.8032 3.56907 12 3.97302 12C3.98416 12 3.99584 12 4.00701 11.9995C4.4235 11.9878 4.80672 11.7685 5.02674 11.415L10.955 1.89599C11.3177 1.31387 11.1392 0.549224 10.5573 0.187402Z"
            fill="#5D6066" />
    </svg>

</div>
`;
}

function chat_message_indicator_stop(message_id, indicator_type) {
    let this_message_id = document.getElementById('message_' + message_id),
        this_indicator = this_message_id.querySelector(`.${indicator_type}`);

    setTimeout(() => {
        this_indicator.classList.add('stop');
//        this_indicator.style.visibility = 'hidden';
    }, app.indicator_stop_timeout)

}

function indicator_encrypt_stop(message_id) {
    chat_message_indicator_stop(message_id, 'indicator_encrypt')
}

function indicator_loading_stop(message_id) {
    chat_message_indicator_stop(message_id, 'indicator_loading')
}


/*
* returning functions
* */
function chat_message_text_html_get(text, element_id) {
    return `<div class="message-item message-item-text" id="message_${element_id}">
${text}                            
    <div class="message-item-actions">
        <div class="action-item action-delete" onclick="item_delete_handler(${element_id})">
            ${action_item_delete_svg_get()}
        </div>
    </div>
</div>`;
}

function chat_message_image_html_get(src, filename, element_id) {
    return `
<div class="message-item message-item-image" id="message_${element_id}">
    <div class="message-item-image__left">
        <div class="message-item-image__inner"><img src="${src}" alt=""></div>
        <div class="message-item-image__info">${filename}</div>
    </div>
    <div class="message-item-image__right">
        <div class="message-item-image__indicators">
            <div class="loader indicator_encrypt">
                ${indicator_encryption_svg_get()}
            </div>
            <div class="loader indicator_loading">
                ${indicator_loader_html_get()}
            </div>
        </div>
        <div class="message-item-actions message-item-image__actions">
            <div class="action-item action-delete">
                ${action_item_delete_svg_get()}
            </div>
            <div class="action-item action-see">
                ${action_item_see_svg_get()}
            </div>
        </div>
    </div>
</div>`;
}

// function chat_message_album_html_get(image_objects) {
//     /*
// image_objects = [{
//     url,
//     file_name,
//     element_id
// }]
//     */
//
//     var img_items = [];
//
//     for (let i = 0; i < image_objects.length; i++) {
//         img_items.push(`
//             <div class="message-item-image">
//                 <div class="message-item-image__left">
//                     <div class="message-item-image__inner"><img src="${image_objects[i].src}" alt=""></div>
//                     <div class="message-item-image__info">${escapeHTML(image_objects[i].filename)}</div>
//                 </div>
//                 <div class="message-item-image__right">
//                     <div class="message-item-actions message-item-image__actions">
//                         <div class="action-item action-delete">
//                             ${action_item_delete_svg_get()}
//                         </div>
//                     </div>
//                     <div class="message-item-image__indicators">
//                         <div class="loader indicator_encrypt">
//                             ${indicator_encryption_svg_get()}
//                         </div>
//                         <div class="loader indicator_loading">
//                             ${indicator_loader_html_get()}
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//         `);
//     }
//
//     return `
// <div class="message-item message-item-albom">
//     ${img_items.join("\n")}
// </div>`;
// }

function chat_message_image_item_html_get(element_id, src, filename)
{
    return `
        
        <div href="${src}" class="img-block message-item-image" id="message_${element_id}" onclick="return false;">
            <div class="message-item-image__left">
                <div class="message-item-image__inner image_${element_id}">
                    <div class="placeholder" style="background: ${randomColor()}"></div>
                    <img class="placeholder-tree" src="${getRealRandomTree()}" alt="">
                </div>
                <div class="message-item-image__info">${filename}</div>
            </div>
            <div class="message-item-image__right">
                <div class="message-item-actions message-item-image__actions">
                    <div class="action-item action-delete" onclick="item_delete_handler(${element_id})">
                        ${action_item_delete_svg_get()}
                    </div>
                </div>
                <div class="message-item-image__indicators">
                    <div class="loader indicator_encrypt">
                        ${indicator_encryption_svg_get()}
                    </div>
                    <div class="loader indicator_loading">
                        ${indicator_loader_html_get()}
                    </div>
                </div>
                
            </div>
        </div>
`;
}

function chat_message_file_html_get(file_name, file_format, file_size, element_id) {
    return `
<div class="message-item message-item-file" id="message_${element_id}">
    <div class="message-item-file__left">
        <div class="message-item-file__info">
            <p class="message-item-file__title">${file_name}</p>
            <div class="message-item-file__data">
                <p>Формат: ${file_format}</p>
                <p>Размер: ${bytesToSize(file_size)}</p>
            </div>
        </div>
        <div class="message-item-file__icon">
            ${is_archive_file(file_format) ? icon_file_archive_svg_get() : icon_file_svg_get()}
        </div>
    </div>
    <div class="message-item-file__right">
        <div class="message-item-file__indicators">
            <div class="loader indicator_encrypt">
                ${indicator_encryption_svg_get()}
            </div>
            <div class="loader indicator_loading">
                ${indicator_loader_html_get()}
            </div>
        </div>
        <div class="message-item-actions message-item-file__actions">
            <div class="action-item action-delete" onclick="item_delete_handler(${element_id})">
                ${action_item_delete_svg_get()}
            </div>
            <div style="display: none;" class="action-item action-download" /*onclick="item_download_handler(${element_id})"*/>
                ${action_item_filedownload_svg_get()}
            </div>
        </div>
    </div>
</div>`;
}

function action_item_delete_svg_get() {
    return `
<svg width="13" height="17" viewBox="0 0 13 17" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M10.2063 1.3471H9.44857C9.24709 0.908462 8.80469 0.599976 8.29284 0.599976H4.46523C3.95338 0.599976 3.51099 0.908462 3.30825 1.3471H2.55049C1.14759 1.3471 0 2.49532 0 3.89884H12.7568C12.7575 2.49595 11.6099 1.3471 10.2063 1.3471Z"
        fill="#5D6066" />
    <path
        d="M0.776123 14.3585C0.776123 15.5912 1.78418 16.5999 3.0175 16.5999H9.74163C10.9756 16.5999 11.983 15.5912 11.983 14.3585V4.64587H0.776123V14.3585ZM8.62032 6.88725C8.62032 6.47489 8.95508 6.14013 9.36744 6.14013C9.7798 6.14013 10.1139 6.47489 10.1139 6.88725V14.3585C10.1139 14.7715 9.7798 15.105 9.36744 15.105C8.95508 15.105 8.62032 14.7702 8.62032 14.3585V6.88725ZM5.63244 6.88725C5.63244 6.47489 5.96658 6.14013 6.37956 6.14013C6.79255 6.14013 7.12669 6.47489 7.12669 6.88725V14.3585C7.12669 14.7715 6.79255 15.105 6.37956 15.105C5.96658 15.105 5.63244 14.7702 5.63244 14.3585V6.88725ZM2.64331 6.88725C2.64331 6.47489 2.97745 6.14013 3.38981 6.14013C3.80279 6.14013 4.13694 6.47489 4.13694 6.88725V14.3585C4.13694 14.7715 3.80279 15.105 3.38981 15.105C2.97745 15.105 2.64331 14.7702 2.64331 14.3585V6.88725Z"
        fill="#5D6066" />
</svg>`;
}

function action_item_see_svg_get() {
    return `
<svg width="20" height="12" viewBox="0 0 20 12" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M19.8507 5.68266C19.6722 5.48352 15.3782 0.800049 10 0.800049C4.62181 0.800049 0.32791 5.48352 0.149355 5.68266C-0.0497851 5.90524 -0.0497851 6.24173 0.149355 6.4643C0.32791 6.66344 4.62189 11.3469 10 11.3469C15.3781 11.3469 19.6721 6.66344 19.8507 6.4643C20.0498 6.24173 20.0498 5.90524 19.8507 5.68266ZM10 10.175C7.73865 10.175 5.89845 8.33485 5.89845 6.07348C5.89845 3.81212 7.73865 1.97192 10 1.97192C12.2614 1.97192 14.1016 3.81212 14.1016 6.07348C14.1016 8.33485 12.2614 10.175 10 10.175Z"
        fill="#5D6066" />
    <path
        d="M10.5859 4.90161C10.5859 4.31216 10.8786 3.7936 11.3237 3.47466C10.9243 3.27017 10.4787 3.1438 10 3.1438C8.38465 3.1438 7.07031 4.45813 7.07031 6.07348C7.07031 7.68883 8.38465 9.00317 10 9.00317C11.4462 9.00317 12.6433 7.94715 12.8798 6.56731C11.6998 6.94719 10.5859 6.05481 10.5859 4.90161Z"
        fill="#5D6066" />
</svg>
`;
}

function action_item_filedownload_svg_get() {
    return `
<svg width="16" height="17" viewBox="0 0 16 17" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M11.855 7.89298C11.774 7.71398 11.596 7.59998 11.4 7.59998H9.39996V1.09998C9.39996 0.823976 9.17596 0.599976 8.89996 0.599976H6.89996C6.62396 0.599976 6.39996 0.823976 6.39996 1.09998V7.59998H4.39996C4.20396 7.59998 4.02596 7.71498 3.94496 7.89298C3.86296 8.07198 3.89496 8.28098 4.02396 8.42898L7.52396 12.429C7.61896 12.538 7.75596 12.6 7.89996 12.6C8.04396 12.6 8.18096 12.537 8.27596 12.429L11.776 8.42898C11.906 8.28198 11.936 8.07198 11.855 7.89298Z"
        fill="#5D6066" />
    <path
        d="M13.3999 11.6V14.6H2.3999V11.6H0.399902V15.6C0.399902 16.153 0.847902 16.6 1.3999 16.6H14.3999C14.9529 16.6 15.3999 16.153 15.3999 15.6V11.6H13.3999Z"
        fill="#5D6066" />
</svg>
`;
}

function icon_file_svg_get() {
    return `
<svg width="42" height="55" viewBox="0 0 42 55" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M28.8965 16.1133C26.8233 16.1133 25.1367 14.4267 25.1367 12.3535V0H5.9082C2.65042 0 0 2.65042 0 5.9082V49.0918C0 52.3496 2.65042 55 5.9082 55H35.9863C39.2441 55 41.8945 52.3496 41.8945 49.0918V16.1133H28.8965ZM8.80859 38.6719H16.6203C17.5102 38.6719 18.2316 39.3933 18.2316 40.2832C18.2316 41.1731 17.5102 41.8945 16.6203 41.8945H8.80859C7.91871 41.8945 7.19727 41.1731 7.19727 40.2832C7.19727 39.3933 7.91871 38.6719 8.80859 38.6719ZM7.19727 31.6895C7.19727 30.7996 7.91871 30.0781 8.80859 30.0781H32.4414C33.3313 30.0781 34.0527 30.7996 34.0527 31.6895C34.0527 32.5793 33.3313 33.3008 32.4414 33.3008H8.80859C7.91871 33.3008 7.19727 32.5793 7.19727 31.6895ZM32.4414 21.4844C33.3313 21.4844 34.0527 22.2058 34.0527 23.0957C34.0527 23.9856 33.3313 24.707 32.4414 24.707H8.80859C7.91871 24.707 7.19727 23.9856 7.19727 23.0957C7.19727 22.2058 7.91871 21.4844 8.80859 21.4844H32.4414Z"
        fill="#5D6066" />
    <path
        d="M28.3594 12.3537C28.3594 12.6499 28.6003 12.8908 28.8965 12.8908H41.1763C40.8815 12.3466 40.5023 11.8468 40.0468 11.4157L29.6888 1.61645C29.2869 1.23618 28.8391 0.918965 28.3595 0.668457V12.3537H28.3594Z"
        fill="#5D6066" />
</svg>
`;
}

function icon_file_archive_svg_get() {
    return `
<svg width="49" height="55" viewBox="0 0 49 55" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M1.6812e-06 41.3397L2.15249e-06 52.1216C2.22186e-06 53.7087 1.29106 55 2.87842 55L45.5377 55C47.1248 55 48.4162 53.7087 48.4162 52.1216V41.3397C48.4162 39.7523 47.1248 38.4613 45.5377 38.4613L2.87842 38.4613C1.29106 38.461 1.61181e-06 39.7523 1.6812e-06 41.3397ZM42.0774 43.458V50.1634C42.0774 50.9369 41.4503 51.5637 40.6771 51.5637C39.9038 51.5637 39.2768 50.9369 39.2768 50.1634V43.458C39.2768 42.6845 39.9038 42.0578 40.6771 42.0578C41.4503 42.0578 42.0774 42.6845 42.0774 43.458ZM22.5678 43.458V50.1634C22.5678 50.9369 21.9407 51.5637 21.1675 51.5637C20.3943 51.5637 19.7672 50.9369 19.7672 50.1634L19.7672 43.458C19.7672 42.6845 20.3943 42.0578 21.1675 42.0578C21.9407 42.0578 22.5678 42.6845 22.5678 43.458ZM16.9566 43.458V50.1634C16.9566 50.9369 16.3295 51.5637 15.5563 51.5637C14.7831 51.5637 14.156 50.9369 14.156 50.1634V43.458C14.156 42.6845 14.7831 42.0578 15.5563 42.0578C16.3295 42.0578 16.9566 42.6845 16.9566 43.458ZM11.3451 43.458V50.1634C11.3451 50.9369 10.718 51.5637 9.94481 51.5637C9.17157 51.5637 8.54452 50.9369 8.54452 50.1634L8.54452 43.458C8.54452 42.6845 9.17157 42.0578 9.94481 42.0578C10.718 42.0578 11.3451 42.6845 11.3451 43.458ZM8.40598e-07 22.1091L1.31189e-06 32.8909C1.38127e-06 34.4783 1.29134 35.7694 2.87842 35.7694L45.5377 35.7694C47.1248 35.7694 48.4162 34.4783 48.4162 32.8909V22.1091C48.4162 20.522 47.1248 19.2306 45.5377 19.2306L2.87842 19.2306C1.29106 19.2304 7.71224e-07 20.522 8.40598e-07 22.1091ZM42.0774 24.2274V30.9328C42.0774 31.7063 41.4503 32.3331 40.6771 32.3331C39.9038 32.3331 39.2768 31.7063 39.2768 30.9328V24.2274C39.2768 23.4539 39.9038 22.8271 40.6771 22.8271C41.4503 22.8271 42.0774 23.4539 42.0774 24.2274ZM22.5678 24.2274V30.9328C22.5678 31.7063 21.9407 32.3331 21.1675 32.3331C20.3943 32.3331 19.7672 31.7063 19.7672 30.9328V24.2274C19.7672 23.4539 20.3943 22.8271 21.1675 22.8271C21.9407 22.8271 22.5678 23.4539 22.5678 24.2274ZM16.9566 24.2274V30.9328C16.9566 31.7063 16.3295 32.3331 15.5563 32.3331C14.7831 32.3331 14.156 31.7063 14.156 30.9328V24.2274C14.156 23.4539 14.7831 22.8271 15.5563 22.8271C16.3295 22.8271 16.9566 23.4539 16.9566 24.2274ZM11.3451 24.2274V30.9328C11.3451 31.7063 10.718 32.3331 9.94481 32.3331C9.17157 32.3331 8.54452 31.7063 8.54452 30.9328L8.54452 24.2274C8.54452 23.4539 9.17157 22.8271 9.94481 22.8271C10.718 22.8271 11.3451 23.4539 11.3451 24.2274ZM0 2.87843L4.71292e-07 13.6603C5.40665e-07 15.2474 1.29134 16.5387 2.87842 16.5387L45.5377 16.5387C47.1248 16.5387 48.4162 15.2474 48.4162 13.6603V2.87842C48.4162 1.29106 47.1248 -6.93732e-08 45.5377 0L2.87842 1.8647e-06C1.29106 -0.000278122 -6.93857e-08 1.29107 0 2.87843ZM42.0774 4.99705V11.7022C42.0774 12.4757 41.4503 13.1024 40.6771 13.1024C39.9038 13.1024 39.2768 12.4757 39.2768 11.7022V4.99705C39.2768 4.22353 39.9038 3.59677 40.6771 3.59677C41.4503 3.59677 42.0774 4.22353 42.0774 4.99705ZM22.5678 4.99705V11.7022C22.5678 12.4757 21.9407 13.1024 21.1675 13.1024C20.3943 13.1024 19.7672 12.4757 19.7672 11.7022V4.99705C19.7672 4.22353 20.3943 3.59677 21.1675 3.59677C21.9407 3.59677 22.5678 4.22353 22.5678 4.99705ZM16.9566 4.99705L16.9566 11.7022C16.9566 12.4757 16.3295 13.1024 15.5563 13.1024C14.7831 13.1024 14.156 12.4757 14.156 11.7022V4.99705C14.156 4.22353 14.7831 3.59677 15.5563 3.59677C16.3295 3.59677 16.9566 4.22353 16.9566 4.99705ZM11.3451 4.99705L11.3451 11.7022C11.3451 12.4757 10.718 13.1024 9.9448 13.1024C9.17157 13.1024 8.54452 12.4757 8.54452 11.7022V4.99705C8.54452 4.22353 9.17157 3.59677 9.9448 3.59677C10.718 3.59677 11.3451 4.22353 11.3451 4.99705Z"
        fill="#5D6066" />
</svg>

`;
}

function sidebar_file_html_get(file_name, file_format, file_size, element_id) {
    return`
    <div id="sidebar_item_${element_id}">
        <h4 class="file-item__title">${file_name}</h4>
        <div class="file-item__group" >
            <div class="file-item__info">
                <div class="file-item__icon icon-document">
                    ${is_archive_file(file_format) ? icon_file_archive_svg_get() : icon_file_svg_get()}
                </div>
                <div class="file-item__data">
                    <p>Формат: ${file_format}</p>
                    <p>Размер: ${bytesToSize(file_size)}</p>
                </div>
            </div>
            <div class="file-item__actions">
                <div class="action-item action-delete" onclick="item_delete_handler(${element_id})">
                    ${action_item_delete_svg_get()}
                </div>
                <div class="action-item action-download">
                    ${action_item_filedownload_svg_get()}
                </div>  
            </div>
        </div>
    </div>
    `
}

function sidebar_photo_item_get(element_id, src, filename) {
// function sidebar_photo_item_get(element_id, image_objects[i].src, image_objects[i].filename)) {
    return `
        <div class="photo-item" id="sidebar_item_${element_id}">
            <div class="photo-item__img"><img src="${src}" alt="">
            </div>
            <div class="photo-item__name clip">${filename}</div>
            <!--<div class="photo-item__bottom">
                <div class="photo-item__info">
                    <p>Формат: jpg</p>
                    <p>Размер: 251 Кб</p>
                </div>
            </div>-->
            <div class="action-item sidebar-action-delete" onclick="item_delete_handler(${element_id})">
                ${action_item_delete_svg_get()}
            </div>
        </div>
    `
}


/*
* append to app.messages
* */
function app_messages_object_text_append(text, element_id) {
    app.messages.push({
        id: element_id,
        body: text, //text or blob
        type: 'text',
        parts: [
            {
                encrypted_body: text, //blob|text
                encrypted: true,
                sent: false
            },
        ], // по умолчанию будет один элемент
        is_full_encrypted: false,
        sent: false
    })
}

function app_messages_object_image_append(image_objects, element_id) {
    app.messages.push({
        id: element_id,
        body: image_objects, //text or blob
        type: 'image',
        parts: [
            {
                encrypted_body: image_objects, //blob|text
                encrypted: true,
                sent: false
            },
        ], // по умолчанию будет один элемент
        is_full_encrypted: false,
        sent: false
    })
}

function app_messages_object_file_append(file_name, file_format, file_size, element_id) {
    app.messages.push({
        id: element_id,
        body: {
            file_name: file_name,
            file_format: file_format,
            file_size: file_size,
        }, //text or blob
        type: 'file',
        parts: [
            {
                encrypted_body: '???', //blob|text
                encrypted: true,
                sent: false
            },
        ], // по умолчанию будет один элемент
        is_full_encrypted: false,
        sent: false
    })
}

function chat_content_scroll_to_bottom() {
    app.chat.message_content.scrollTop = app.chat.message_content.scrollHeight
}


/*
* message append
* */
function chat_message_text_append(text, element_id) {
    app.chat.message_content.insertAdjacentHTML('beforeend', chat_message_text_html_get(escapeHTML(text), element_id));
}

function chat_message_album_append(image_objects){
    let imageItem = document.createElement("div"),
        galleryId = randomInteger(10000, 60000);

    imageItem.setAttribute('class', 'message-item message-item-albom');
    imageItem.setAttribute('id', `lg_${galleryId}`);
    app.chat.message_content.appendChild(imageItem);


    for (let i=0; i<image_objects.length; i++)
    {
        let element_id = randomInteger(10000, 60000);
        imageItem.insertAdjacentHTML('beforeend', `
            ${chat_message_image_item_html_get(element_id, image_objects[i].src, image_objects[i].filename)}
        `);
        image_onload(element_id, image_objects[i].src);
        chat_message_indicator_stop(element_id, 'indicator_loading');
        chat_message_indicator_stop(element_id, 'indicator_encrypt');
        app_messages_object_image_append(image_objects[i], element_id)
        app.sidebar.photo_container.insertAdjacentHTML('beforeend', `
            ${sidebar_photo_item_get(element_id, image_objects[i].src, image_objects[i].filename)}
        `)
    }

    initializeLightGallery(galleryId);
}

function chat_message_file_append(file_name, file_format, file_size, element_id) {
    app.chat.message_content.insertAdjacentHTML('beforeend', chat_message_file_html_get(escapeHTML(file_name), escapeHTML(file_format), parseInt(file_size), element_id));
    indicator_encrypt_stop(element_id);
    indicator_loading_stop(element_id);
}

function message_file_append(file_name, file_format, file_size) {
    let element_id = randomInteger(10000, 60000);

    chat_message_file_append(file_name, file_format, file_size, element_id);

    if(is_archive_file(file_format)){
        app.sidebar.archive_container.insertAdjacentHTML('beforeend', `
            ${sidebar_file_html_get(escapeHTML(file_name), escapeHTML(file_format), parseInt(file_size), element_id)}
        `)
    } else {
        app.sidebar.file_container.insertAdjacentHTML('beforeend', `
            ${sidebar_file_html_get(escapeHTML(file_name), escapeHTML(file_format), parseInt(file_size), element_id)}
        `)
    }

    app_messages_object_file_append(file_name, file_format, file_size, element_id);
    chat_slide_btn_public_visibility_handler();
    chat_content_scroll_to_bottom();
}

function message_text_append(text) {
    let element_id = randomInteger(10000, 60000);

    chat_message_text_append(text, element_id);
    app_messages_object_text_append(text, element_id);
    chat_slide_btn_public_visibility_handler();
    chat_content_scroll_to_bottom();
}

function message_images_append(image_objects)
{
    if (image_objects.length==0) return false;
    chat_message_album_append(image_objects);
    chat_slide_btn_public_visibility_handler();
    chat_content_scroll_to_bottom();
}

/*
* handlers
* */
function chat_btn_send_handler() {
    if (app.chat.input_text.value !== '') {
        message_text_append(app.chat.input_text.value);
        app.chat.input_text.value = '';
    }
}

function item_delete_handler(element_id) {
    let this_item_id = 'message_' + element_id,
        this_item_sidebar_id = 'sidebar_item_' + element_id,
        $this_element = document.getElementById(this_item_id),
        $this_sidebar_element = document.getElementById(this_item_sidebar_id);

    if (indexOfIdGet(app.messages, element_id) !== false) {
        if ($this_element.classList.contains('img-block')) {
            //lg-uid
            event.stopPropagation();

            let lg_id = $this_element.parentElement.getAttribute('lg-uid');
            let items_length = window.lgData[lg_id].items.length;

            window.lgData[lg_id].destroy(true);
            delete window.lgData[lg_id];

            let parentElement = $this_element.parentElement;

            if (!$this_element.nextElementSibling && !$this_element.previousElementSibling) {
                $this_element.parentElement.remove();
                if($this_sidebar_element) $this_sidebar_element.remove();
                app.messages.splice(indexOfIdGet(app.messages, element_id), 1);
            } else {
                $this_element.remove();

                if($this_sidebar_element) $this_sidebar_element.remove();

                app.messages.splice(indexOfIdGet(app.messages, element_id), 1);
            }

            if (items_length > 1)
                initializeLightGallery(parentElement.id.split("_")[1]);

        } else {
            $this_element.remove();
            if($this_sidebar_element) $this_sidebar_element.remove();
            app.messages.splice(indexOfIdGet(app.messages, element_id), 1);
        }
    } else {
        event.stopPropagation();

        if ($this_element.classList.contains('img-block')) {
            //lg-uid
            event.stopPropagation();

            let lg_id = $this_element.parentElement.getAttribute('lg-uid');
            let items_length = window.lgData[lg_id].items.length;

            window.lgData[lg_id].destroy(true);
            delete window.lgData[lg_id];

            let parentElement = $this_element.parentElement;

            if (!$this_element.nextElementSibling && !$this_element.previousElementSibling) {
                $this_element.parentElement.remove();
                app.open_messages.splice(indexOfIdGet(app.open_messages, element_id), 1);
            } else {
                $this_element.remove();
                app.open_messages.splice(indexOfIdGet(app.open_messages, element_id), 1);
            }

            if (items_length > 1)
                initializeLightGallery(parentElement.id.split("_")[1]);

        } else {
            console.log('2');

            $this_element.remove();
            app.open_messages.splice(indexOfIdGet(app.open_messages, element_id), 1);
        }
    }
    chat_slide_btn_public_visibility_handler();

}

function chat_slide_btn_public_visibility_handler()
{
    if(app.messages.length > 0){
        app.btn_public.classList.remove('hide')
    } else {
        app.btn_public.classList.add('hide')
    }
}

// TODO!

app_init();

function sidebar_image_add(src, file_format, file_size) {
    return `
<div class="photo-item">
    <div class="photo-item__img"><img src="${src}" alt=""></div>
    <div class="photo-item__name">Название файла</div>
    <div class="photo-item__bottom">
        <div class="photo-item__info">
            <p>Формат: ${file_format.toLowerCase()}</p>
            <p>Размер: ${bytesToSize(file_size)}</p>
        </div>
        <div class="photo-item__actions">
            <div class="action-item action-delete">
                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.2063 1.3471H9.44857C9.24709 0.908462 8.80469 0.599976 8.29284 0.599976H4.46523C3.95338 0.599976 3.51099 0.908462 3.30825 1.3471H2.55049C1.14759 1.3471 0 2.49532 0 3.89884H12.7568C12.7575 2.49595 11.6099 1.3471 10.2063 1.3471Z"
                        fill="#5D6066" />
                    <path
                        d="M0.776123 14.3585C0.776123 15.5912 1.78418 16.5999 3.0175 16.5999H9.74163C10.9756 16.5999 11.983 15.5912 11.983 14.3585V4.64587H0.776123V14.3585ZM8.62032 6.88725C8.62032 6.47489 8.95508 6.14013 9.36744 6.14013C9.7798 6.14013 10.1139 6.47489 10.1139 6.88725V14.3585C10.1139 14.7715 9.7798 15.105 9.36744 15.105C8.95508 15.105 8.62032 14.7702 8.62032 14.3585V6.88725ZM5.63244 6.88725C5.63244 6.47489 5.96658 6.14013 6.37956 6.14013C6.79255 6.14013 7.12669 6.47489 7.12669 6.88725V14.3585C7.12669 14.7715 6.79255 15.105 6.37956 15.105C5.96658 15.105 5.63244 14.7702 5.63244 14.3585V6.88725ZM2.64331 6.88725C2.64331 6.47489 2.97745 6.14013 3.38981 6.14013C3.80279 6.14013 4.13694 6.47489 4.13694 6.88725V14.3585C4.13694 14.7715 3.80279 15.105 3.38981 15.105C2.97745 15.105 2.64331 14.7702 2.64331 14.3585V6.88725Z"
                        fill="#5D6066" />
                </svg>
            </div>
            <div class="action-item action-see">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.8507 5.68266C19.6722 5.48352 15.3782 0.800049 10 0.800049C4.62181 0.800049 0.32791 5.48352 0.149355 5.68266C-0.0497851 5.90524 -0.0497851 6.24173 0.149355 6.4643C0.32791 6.66344 4.62189 11.3469 10 11.3469C15.3781 11.3469 19.6721 6.66344 19.8507 6.4643C20.0498 6.24173 20.0498 5.90524 19.8507 5.68266ZM10 10.175C7.73865 10.175 5.89845 8.33485 5.89845 6.07348C5.89845 3.81212 7.73865 1.97192 10 1.97192C12.2614 1.97192 14.1016 3.81212 14.1016 6.07348C14.1016 8.33485 12.2614 10.175 10 10.175Z"
                        fill="#5D6066" />
                    <path
                        d="M10.5859 4.90161C10.5859 4.31216 10.8786 3.7936 11.3237 3.47466C10.9243 3.27017 10.4787 3.1438 10 3.1438C8.38465 3.1438 7.07031 4.45813 7.07031 6.07348C7.07031 7.68883 8.38465 9.00317 10 9.00317C11.4462 9.00317 12.6433 7.94715 12.8798 6.56731C11.6998 6.94719 10.5859 6.05481 10.5859 4.90161Z"
                        fill="#5D6066" />
                </svg>
            </div>
        </div>
    </div>
</div>`;
}

message_text_append("Привет! Посмотри на эту фотографию");
message_file_append("Очень длинное название файла", "7zip", "11 kb");
message_file_append("Очень длинное название файла", "doc", "14 kb");
message_images_append([
    {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    // {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    // {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    // {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    // {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    // {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"}
]);
message_images_append([
    {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    // {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    // {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"},
    // {src: "desktop-img/msg-img-1.jpg", filename: "Image.jpg"}
]);
message_text_append("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae qui impedit optio quam aspernatur corporis molestias deserunt officiis? Accusamus laborum ea ex suscipit libero est culpa exercitationem? Repellendus, ipsa accusantium. Dolor a esse iusto dignissimos distinctio tempora iste totam, recusandae magnam ipsa eveniet, ut in soluta cum commodi. Ducimus nesciunt quos maxime possimus? Reprehenderit deleniti facere ipsam temporibus nobis porro? Soluta voluptates necessitatibus delectus voluptate, nisi accusantium sit vel eum impedit esse neque velit autem aspernatur quia quisquam obcaecati illum non cumque recusandae consequatur labore eos, laudantium veritatis? Aliquam, iusto. Nesciunt quibusdam facere delectus perferendis dolores nam rerum aperiam velit omnis illo, iusto aut repellendus fugit molestiae, commodi pariatur! Molestiae cumque ipsa esse aliquam alias ex autem obcaecati repellat voluptatibus! Quaerat libero vitae sunt autem unde facilis nisi sit illum nulla labore asperiores dolores voluptas incidunt est veritatis nostrum ipsa aspernatur ullam dolorem, reprehenderit dicta fugiat eligendi inventore in? Adipisci? Nihil error culpa harum minima dolore, nulla ullam molestias soluta odio aut modi ab vitae eveniet nam deleniti aliquid qui officiis dolorum praesentium. Facere hic molestias quod iusto temporibus accusamus. Fuga excepturi dolorum perferendis accusantium quaerat consequatur. Iusto rem velit numquam libero dolore nulla expedita ut! Quod ullam commodi dolorum cupiditate magnam ab ut autem deleniti nostrum! Placeat, cum exercitationem. Distinctio dolor, consequatur quidem aperiam quo soluta. Quis consequuntur ipsa, sapiente, quos dolores modi fugit quam dolor maxime libero facere minus temporibus vero, molestiae alias voluptas impedit iste labore reprehenderit! Cumque quos facere explicabo repellendus amet quibusdam aspernatur illum est esse impedit, sed illo fuga recusandae quas sapiente maiores. Debitis quia inventore nihil dignissimos. Nam laboriosam sunt corporis possimus! Aliquid? Veniam inventore earum dolorum id deleniti. Minima placeat autem natus ipsam atque mollitia, laborum, modi fuga accusamus ipsa sint! Magnam qui cumque, quos vero exercitationem corporis autem cupiditate. Delectus, pariatur.");
