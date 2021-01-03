/*
* variables
*/
let app = {
    wrapper : document.querySelector('.js_wrapper'),
    settings: {
        scheme: getCookie('scheme')
    },
    chat_message_content : document.querySelector(".chat-message-content"),
    messages: []
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
    appScheme(app.settings.scheme)
});

function appendDataCircle(selector, width, stroke, strokeWidth, value)
{

    let svgns = 'http://www.w3.org/2000/svg',

        vhWidth = width,
        vhRadius = width/2,
        vhPathRadius = width/2 - strokeWidth/2,
        vhStrokeWidth = strokeWidth,

        circleMainBlock = document.querySelector(`.${selector}`),
        mainCircleSvg = document.createElementNS(svgns, 'svg'),
        mainCircle = document.createElementNS(svgns, 'circle'),
        mainPath = document.createElementNS(svgns, 'path');

    mainCircleSvg.setAttribute('width',vhWidth);
    mainCircleSvg.setAttribute('height', vhWidth);

    mainCircle.setAttribute('width', vhWidth);
    mainCircle.setAttribute('height', vhWidth);
    mainCircle.setAttribute('fill', 'none');
    mainCircle.setAttribute('stroke', 'rgba(0, 0, 0, 0.2)');
    mainCircle.setAttribute('stroke-width', '8');
    mainCircle.setAttribute('r', vhPathRadius);
    mainCircle.setAttribute('cx', vhRadius);
    mainCircle.setAttribute('cy', vhRadius);

    mainPath.setAttribute('class', `${selector}__path`);
    mainPath.setAttribute('fill', 'none');
    mainPath.setAttribute('stroke-linecap', 'round');
    mainPath.setAttribute('stroke', stroke);
    mainPath.setAttribute('stroke-width', vhStrokeWidth);
    mainPath.setAttribute('d', describeArc(vhRadius, vhRadius, vhPathRadius, value));

    mainCircleSvg.appendChild(mainCircle);
    mainCircleSvg.appendChild(mainPath);

    circleMainBlock.innerHTML = '';
    circleMainBlock.appendChild(mainCircleSvg);

    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    function describeArc(x, y, radius, value){

        let endAngle = calculatePercent(value);

        var endAngleOriginal = endAngle;
        if(endAngleOriginal - 0 === 360){
            endAngle = 359;
        }

        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, 0);

        var arcSweep = endAngle - 0 <= 180 ? '0' : '1';

        if(endAngleOriginal - 0 === 360){
            var d = [
                'M', start.x, start.y,
                'A', radius, radius, 0, arcSweep, 0, end.x, end.y, 'z'
            ].join(' ');
        }
        else{
            var d = [
                'M', start.x, start.y,
                'A', radius, radius, 0, arcSweep, 0, end.x, end.y
            ].join(' ');
        }

        return d;
    }

    function calculatePercent(value) {
        if (value > 100) return 360;
        else return 360 * value / 100;
    }
}

$('.js_input_text')
    .focus(function () {
        $(this).parent().animate({
            height: '250px'
        }, 200);
    })
    .blur(function () {
        $(this).parent().animate({
            height: '80px'
        }, 200);
});

$('.js_burger_left_open').on('click', function () {
    $('.js_burger_left').addClass('active');
});

$('.js_burger_left_close').on('click', function () {
    $('.js_burger_left').removeClass('active');
});

$('.js_burger_right_open').on('click', function () {
    $(this).toggleClass('active');
    $('.js_burger_right').toggleClass('active');
});

$('.js_burger_right_close').on('click', function () {
    $('.js_burger_right').removeClass('active');
});

$('.js_burger_overlay').on('click', function () {
    $('.js_burger_right_open').removeClass('active');
    $('.js_burger_left').removeClass('active');
    $('.js_burger_right').removeClass('active');
});

$('.js_theme_switcher').on('click', function () {
    let $wrapper = $('.js_wrapper');
    let $sliderButton = $('.js_slider_button');
    if($wrapper.hasClass('light')){
        $wrapper.removeClass('light');
        setCookie('scheme', 'dark');
        console.log(document.cookie)
    } else {
        $wrapper.addClass('light');
        setCookie('scheme', 'light');
        console.log(document.cookie)
    }
});

// function to fix mobile-browser height
(function init100vh(){
    function setHeight() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

/*
* functions calls
* */
