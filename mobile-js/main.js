/*
* variables
*/
let app = {
    wrapper : document.querySelector('.js_wrapper'),
    theme_switcher : document.querySelector('.js_theme_switcher'),
    btn_public: document.querySelector('.js_mob_btn_public'),

    note_amount: document.querySelectorAll('.js_note_amount'),

    burger : {
        left : document.querySelector('.js_burger_left'),
        right : document.querySelector('.js_burger_right'),
        left_btn_open: document.querySelector('.js_burger_left_btn_open'),
        left_btn_close: document.querySelector('.js_burger_left_btn_close'),
        right_btn : document.querySelector('.js_burger_btn_right'),
        overlay : document.querySelector('.js_burger_overlay'),
    },

    chat : {
        input_block: document.querySelector('.js_chat_input_block'),
        input_text: document.querySelector('.js_input_text'),
        message_content : document.querySelector('.js_chat_message_content'),

    },

    share: {
        wrap: document.querySelector('.js_share_wrap'),
        footer: document.querySelector('.js_share_footer'),
    },

    messages: [],

    settings: {
        scheme: getCookie('scheme')
    },

    indicator_stop_timeout: 5000
};

/*
* main functions
* */
function appScheme(color){
    if( color === 'light') app.wrapper.classList.add('light')
    else app.wrapper.classList.remove('light')
}

// возвращает cookie если есть или undefined
function getCookie(name)
{

    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined
}

// уcтанавливает cookie
function setCookie(name, value, props) {

    props = props || {};

    var exp = props.expires;

    if (typeof exp == "number" && exp) {

        var d = new Date();

        d.setTime(d.getTime() + exp*1000);

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for(var propName in props){

        updatedCookie += "; " + propName;

        var propValue = props[propName];

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie

}

// удаляет cookie
function deleteCookie(name) {
    setCookie(name, null, { expires: -1 })

}

/*
Аргументы:

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

document.addEventListener("DOMContentLoaded", () => {
    appScheme(app.settings.scheme);

    app.chat.input_text.addEventListener('focus', () => {
        app.chat.input_text.parentElement.style.height = '250px';
    });

    app.chat.input_text.addEventListener('blur', () => {
        app.chat.input_text.parentElement.style.height = '80px';
    });

    app.burger.left_btn_open.addEventListener('click', () => {
        app.burger.left.classList.add('active');
    });

    app.burger.left_btn_close.addEventListener('click', () => {
        app.burger.left.classList.remove('active');
    });

    app.burger.right_btn.addEventListener('click', () => {
        app.burger.right_btn.classList.toggle('active');
        app.burger.right.classList.toggle('active');
    });

    app.burger.overlay.addEventListener('click', () => {
        app.burger.left.classList.remove('active');
        app.burger.right.classList.remove('active');
    });

    app.theme_switcher.addEventListener('click', () => {
        if(app.wrapper.classList.contains('light')){
            app.wrapper.classList.remove('light');
            setCookie('scheme', 'dark');
        } else {
            app.wrapper.classList.add('light');
            setCookie('scheme', 'light');
        }
    })
});

function note_amount_set(amount) {
    for (let el of app.note_amount) el.innerText = amount
}

function share_slide_visibility(type) {
    if(type){
        app.share.wrap.style.display = 'flex';
        app.share.footer.style.display = 'block';
    } else {
        app.share.wrap.style.display = 'none';
        app.share.footer.style.display = 'none';
    }
}

function chat_slide_btn_public_visibility_handler() {
    if(app.messages.length > 0){
        app.btn_public.classList.remove('hide')
    } else {
        app.btn_public.classList.add('hide')
    }
}

function btn_public_handler() {
    chat_message_visibility(false);
    share_slide_visibility(true);
}

function share_slide_btn_create_handler() {
    chat_message_visibility(true);
    share_slide_visibility(false);
    chat_message_clear();
    chat_slide_btn_public_visibility_handler();
}

function chat_message_clear() {
    app.messages = [];
    app.chat.message_content.innerHTML = '';

}

function chat_message_visibility(type) {
    if(type){
        app.btn_public.classList.remove('hide');
        app.chat.message_content.style.display = 'flex';
        app.chat.input_block.style.display = 'flex';
    } else {
        app.btn_public.classList.add('hide');
        app.chat.message_content.style.display = 'none';
        app.chat.input_block.style.display = 'none';
    }
}

// function to fix mobile-browser height
(function init100vh(){
    function setHeight() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

// TODO!
note_amount_set(4);