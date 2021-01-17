<!DOCTYPE html>
<html lang="en" translate="no" class="notranslate">

<head>
    <title>Enot App</title>
    <!--favicon-->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <meta name="google" content="notranslate"/>

    <meta name="robots" content="noindex">
    <meta charset="UTF-8">

    <meta name="description" content="Enot App">
    <meta name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">

    <link rel="stylesheet" href="css/lightgallery.css">
    <link rel="stylesheet" href="desktop-css/main.css">
    <link rel="stylesheet" href="desktop-css/dark.css">
    <link rel="stylesheet" href="desktop-css/scale.css">

</head>

<body class="wrapper">

<div id="app">

	<?php //include( "preloader.php" ); ?>

    <header class="header">
        <div class="container">
            <div class="header__left">
                <div class="burger-icon" id="menu-btn">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="3" rx="1.5" fill="#F4F4F4"/>
                        <rect y="8" width="21" height="3" rx="1.5" fill="#F4F4F4"/>
                        <rect y="16" width="21" height="3" rx="1.5" fill="#F4F4F4"/>
                    </svg>
                </div>
            </div>
            <div class="header__center">
                <a href="#" class="header__logo">
                    <svg width="120" height="35" viewBox="0 0 120 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M79.7557 9.53842L83.2811 7.17291H73.4985L77.0239 9.53842L78.3974 17.6575L79.7557 9.53842Z"
                              fill="#F4F4F4"/>
                        <path
                                d="M84.2729 13.8422L78.9314 21.1218L88.485 28.1268L81.4953 31.0417V28.3557H75.2687V31.057L68.2637 28.1268L77.8631 21.0913L72.5217 13.8116L59.8242 23.1058L65.1657 30.3855L75.2687 34.5976H81.4953H81.5106L91.5831 30.3855L96.9246 23.1058L84.2729 13.8422ZM82.2279 20.1604L84.7307 17.6575L87.2336 20.1604H82.2279ZM72.0638 17.6575L74.5667 20.1604H69.5762L72.0638 17.6575Z"
                                fill="#F4F4F4"/>
                        <path d="M84.2725 7.17295L95.1996 15.0936L94.7723 3.70862L84.2725 7.17295Z" fill="#F4F4F4"/>
                        <path d="M72.5219 7.17295L61.5947 15.0936L62.0068 3.70862L72.5219 7.17295Z" fill="#F4F4F4"/>
                        <path
                                d="M43.7998 34.5975L39.1756 29.9733V21.5185H39.1604L34.353 16.6959L34.3836 21.6559V34.5822H37.0238L43.7998 34.5975Z"
                                fill="#F4F4F4"/>
                        <path
                                d="M59.3359 34.5975L54.7118 29.958V11.9496L50.0723 7.32545H50.0418V7.27967H36.2913V7.2644H29.5L34.3073 12.0565L35.6961 12.0717H35.9861H41.0834H48.0425L49.9197 13.9336V34.5822H52.5599L59.3359 34.5975Z"
                                fill="#F4F4F4"/>
                        <path
                                d="M28.6456 11.8733L24.0061 7.23383H17.2301L17.2759 7.27961H6.7913L6.77604 7.24909H0L4.83785 12.1022L11.6291 12.0717H22.0679L23.8382 13.842V18.4357H15.9939V23.2277H23.8382V23.243H28.6303V11.8733H28.6456Z"
                                fill="#F4F4F4"/>
                        <path
                                d="M28.6306 29.8054H11.3701L9.99654 28.4166V21.5947H9.98128L5.15869 16.7722L5.20448 22.4799V30.37V30.4158L9.44713 34.6737L16.2079 34.6585L16.1469 34.5974H28.6306V29.8054Z"
                                fill="#F4F4F4"/>
                        <path
                                d="M120 34.5822L115.208 29.7902H108.89L107.44 28.3251V21.427H107.425L102.603 16.6044L102.648 22.3121V24.9218L102.633 30.3243L106.891 34.5822H106.906H115.208V34.567L120 34.5822Z"
                                fill="#F4F4F4"/>
                        <path
                                d="M112.323 14.3304H117.115L112.323 9.55361V9.53835H108.966H106.982V0H102.175H97.4131L102.175 4.76154V9.53835L106.982 14.3457L109.134 14.3304H112.323Z"
                                fill="#F4F4F4"/>
                    </svg>
                </a>
            </div>
            <div class="header__right">
                <div class="settings-menu">
                    <div class="settings-menu__open" id="settings-btn-open">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="0.666687" width="4" height="4" rx="2" fill="#F4F4F4"/>
                            <rect x="8" y="8" width="4" height="4" rx="2" fill="#F4F4F4"/>
                            <rect x="8" y="15.3333" width="4" height="4" rx="2" fill="#F4F4F4"/>
                        </svg>
                    </div>
                    <div class="settings-menu__dropdown" id="settings-dropdown-menu">
                        <div class="settings-menu__top">
                            <div class="settings-menu__close" id="settings-btn-close">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.666748" y="12" width="4" height="4" rx="2"
                                          transform="rotate(-90 0.666748 12)" fill="#5D6066"/>
                                    <rect x="8" y="12" width="4" height="4" rx="2" transform="rotate(-90 8 12)"
                                          fill="#5D6066"/>
                                    <rect x="15.3333" y="12" width="4" height="4" rx="2"
                                          transform="rotate(-90 15.3333 12)"
                                          fill="#5D6066"/>
                                </svg>
                            </div>
                        </div>
                        <nav class="settings-menu__nav">
                            <ul>
                                <li><a href="#">Настройки</a></li>
                                <li><a href="#">Enot FAQ</a></li>
                                <li><a href="#">Купить лицензию</a></li>
                                <li><a href="#">Еще пункт меню</a></li>
                            </ul>
                        </nav>
                        <div class="settings-menu__bottom">
                            <div class="theme-color">
                                <div class="switch-wrap">
                                    <div class="switch-icon">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                    d="M14.9998 7.48608C10.8565 7.48608 7.48584 10.8574 7.48584 15.0007C7.48584 19.144 10.8565 22.5153 14.9998 22.5153C19.1424 22.5153 22.5137 19.1446 22.5137 15.0007C22.5137 10.8568 19.1424 7.48608 14.9998 7.48608Z"
                                                    fill="#5D6066"/>
                                            <path
                                                    d="M15.0003 5.27723C14.1905 5.27723 13.5342 4.6209 13.5342 3.81178V1.46612C13.5342 0.656333 14.1905 0 15.0003 0C15.8101 0 16.4664 0.656333 16.4664 1.46612V3.81178C16.4664 4.6209 15.8094 5.27723 15.0003 5.27723Z"
                                                    fill="#5D6066"/>
                                            <path
                                                    d="M15.0003 24.7222C14.1905 24.7222 13.5342 25.3785 13.5342 26.1883V28.5333C13.5342 29.3437 14.1905 30.0001 15.0003 30.0001C15.8101 30.0001 16.4664 29.3437 16.4664 28.5333V26.1883C16.4664 25.3785 15.8094 24.7222 15.0003 24.7222Z"
                                                    fill="#5D6066"/>
                                            <path
                                                    d="M21.8743 8.12509C21.3023 7.55246 21.3023 6.62442 21.8743 6.05179L23.5331 4.39302C24.105 3.82106 25.0337 3.82106 25.6063 4.39302C26.179 4.96566 26.179 5.89435 25.6063 6.46632L23.9476 8.12509C23.3756 8.69772 22.4476 8.69772 21.8743 8.12509Z"
                                                    fill="#5D6066"/>
                                            <path
                                                    d="M8.12515 21.8756C7.55252 21.3024 6.62449 21.3024 6.05186 21.8756L4.39309 23.5338C3.82112 24.1057 3.82046 25.0351 4.39309 25.607C4.96572 26.179 5.89442 26.179 6.46638 25.607L8.12515 23.9476C8.69778 23.3756 8.69778 22.447 8.12515 21.8756Z"
                                                    fill="#5D6066"/>
                                            <path
                                                    d="M24.7222 15C24.7222 14.1902 25.3785 13.5339 26.1883 13.5339H28.5339C29.3437 13.5339 30.0001 14.1902 30.0001 15C30.0001 15.8098 29.3437 16.4654 28.5339 16.4654H26.1883C25.3785 16.4654 24.7222 15.8098 24.7222 15Z"
                                                    fill="#5D6066"/>
                                            <path
                                                    d="M5.27723 15C5.27723 14.1902 4.6209 13.5339 3.81111 13.5339H1.46612C0.656333 13.5339 0 14.1902 0 15C0 15.8098 0.656333 16.4654 1.46612 16.4654H3.81178C4.6209 16.4654 5.27723 15.8098 5.27723 15Z"
                                                    fill="#5D6066"/>
                                            <path
                                                    d="M21.8741 21.8756C22.4467 21.3036 23.3754 21.3036 23.9473 21.8756L25.6061 23.5343C26.1787 24.1056 26.1787 25.035 25.6061 25.607C25.0335 26.1789 24.1054 26.1789 23.5328 25.607L21.8741 23.9482C21.3014 23.3756 21.3014 22.4475 21.8741 21.8756Z"
                                                    fill="#5D6066"/>
                                            <path
                                                    d="M8.12491 8.1251C8.69754 7.55247 8.69754 6.62444 8.12491 6.05181L6.46615 4.39371C5.89352 3.82108 4.96548 3.82108 4.39285 4.39371C3.82022 4.96567 3.82022 5.89437 4.39285 6.46634L6.05162 8.1251C6.62425 8.6984 7.55228 8.6984 8.12491 8.1251Z"
                                                    fill="#5D6066"/>
                                        </svg>
                                    </div>
                                    <label class="switch">
                                        <input class="js_theme_switcher" type="checkbox" checked>
                                        <span class="switch__slider round"></span>
                                    </label>
                                </div>
                                <div class="theme-color__icon">
                                    <svg width="27" height="30" viewBox="0 0 27 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                                d="M14.246 30C6.66628 30 0.5 24.0687 0.5 16.7781C0.5 11.9303 3.23845 7.52486 7.58339 5.21191C7.13324 6.59571 6.90606 8.04225 6.91026 9.49747C6.91026 17.4209 13.5914 23.8668 21.8023 23.8668C23.311 23.8707 24.8119 23.6502 26.2559 23.213C23.8469 27.3775 19.2767 30 14.246 30Z"
                                                fill="#F4F4F4"/>
                                        <path
                                                d="M11.939 8.50864C12.1326 8.7022 12.4357 8.73218 12.6634 8.58035L16.0952 6.29121L19.2219 8.56691C19.4412 8.72657 19.7426 8.71061 19.944 8.52853C20.1454 8.34673 20.1916 8.0484 20.0549 7.81394L18.0386 4.35894L20.351 0.89246C20.5028 0.665002 20.4729 0.361913 20.2793 0.16863C20.086 -0.0249329 19.7829 -0.0549058 19.5555 0.0969192L16.1092 2.39558L12.6631 0.0969192C12.4354 -0.0554661 12.132 -0.0254932 11.9385 0.16807C11.7449 0.361633 11.7152 0.665283 11.8673 0.89274L14.1663 4.33878L11.8673 7.78453C11.7158 8.01227 11.7457 8.31508 11.939 8.50864Z"
                                                fill="#F4F4F4"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="main-menu" id="main-menu">
            <div class="container">
                <ul>
                    <li><a href="#">О компании</a></li>
                    <li><a href="#">Пункт меню 2</a></li>
                    <li><a href="#">Пункт меню 3</a></li>
                    <li><a href="#">Пункт меню 4</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main class="main-content">
        <div class="top-info">
            <div class="container">
                <div class="top-info__left">
                    <p>Вы можете отправить еще <span>5</span> записок</p>
                </div>
                <div class="top-info__right">
                    <a class="btn js_mob_btn_public hide">
                        <span class="btn__icon">
                            <svg width="28" height="30" viewBox="0 0 28 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M21.9913 0C18.7858 0 16.1783 2.60734 16.1783 5.81274C16.1783 6.42076 16.2729 7.00712 16.4471 7.55852L10.1506 11.1345C9.08582 9.94102 7.53635 9.18746 5.81378 9.18746C2.60791 9.18746 0 11.7948 0 15.0003C0 18.2058 2.60791 20.8131 5.81378 20.8131C7.53636 20.8131 9.08571 20.0595 10.1505 18.8662L16.4471 22.4412C16.2729 22.9926 16.1782 23.5791 16.1782 24.1873C16.1782 27.3927 18.7857 30 21.9912 30C25.1963 30 27.8035 27.3925 27.8035 24.1873C27.8037 20.9814 25.1965 18.3734 21.9913 18.3734C20.2683 18.3734 18.7187 19.1272 17.6538 20.3209L11.3572 16.7459C11.5313 16.1947 11.626 15.6085 11.626 15.0005C11.626 14.3925 11.5313 13.8063 11.3572 13.2551L17.6533 9.67926C18.7181 10.8734 20.268 11.6274 21.991 11.6274C25.1963 11.6274 27.8034 9.01921 27.8034 5.81289C27.8037 2.60737 25.1965 0 21.9913 0ZM18.6181 5.81274C18.6181 3.95313 20.1315 2.43984 21.9913 2.43984C23.8507 2.43984 25.3638 3.95309 25.3638 5.81274C25.3638 7.67355 23.8505 9.18746 21.9913 9.18746C20.1316 9.18746 18.6181 7.67351 18.6181 5.81274ZM2.43997 15.0005C2.43997 13.1408 3.95369 11.6274 5.81391 11.6274C7.67324 11.6274 9.18629 13.1407 9.18629 15.0005C9.18629 16.86 7.67311 18.3734 5.81391 18.3734C3.95369 18.3734 2.43997 16.8599 2.43997 15.0005ZM18.6181 24.1874C18.6181 22.327 20.1316 20.8132 21.9913 20.8132C23.8506 20.8132 25.3638 22.327 25.3638 24.1874C25.3638 26.0469 23.8506 27.5603 21.9913 27.5603C20.1315 27.5603 18.6181 26.0469 18.6181 24.1874Z"
                                      fill="#F4F4F4"></path>
                            </svg>
                        </span>
                        Опубликовать записку
                    </a>
                </div>
            </div>
        </div>
        <div class="chat-container">
            <div class="container">
                <aside class="left-sidebar">
                    <div class="left-sidebar__top">
                        <p>Все загруженные файлы</p>
                        <ul class="tab-lists">
                            <li class="tab-item active" data-tab="photo">Фото</li>
                            <li class="tab-item" data-tab="files">Файлы</li>
                        </ul>
                    </div>
                    <div class="tab-content left-sidebar__content">
                        <div class="tab-content-item active" data-tab="photo">
                            <div class="photo-wrap">
                                <div class="photo-items js_photo_container"></div>
                            </div>
                        </div>
                        <div class="tab-content-item" data-tab="files">
                            <div class="files-wrap">
                                <div class="file-item js_sidebar_file_container"></div>
                                <div class="file-item js_sidebar_archive_container"></div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div class="chat-wrap">
                    <div class="chat-message-content js_chat_message_content">

                    </div>
                    <div class="chat-text-area">
                        <div class="chat-text-area__attach attach-file" id="js_file_input_button">
                            <input type="file" id="js_file_input" multiple style="display:none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M15.4358 8.22734C15.8176 7.84555 15.8176 7.22662 15.4358 6.84467C15.0541 6.46289 14.435 6.46289 14.0532 6.84467L6.14086 14.757C4.9417 15.9563 4.9417 17.9077 6.14103 19.1068C6.7406 19.7064 7.52827 20.0062 8.31577 20.0062C9.10343 20.0062 9.8911 19.7064 10.4907 19.1068L14.2717 15.326L14.2718 15.3258L20.6358 8.9617C22.4547 7.14277 22.4547 4.18307 20.6358 2.36414C18.8169 0.545203 15.8572 0.545373 14.0382 2.36414L5.30175 11.1006C5.28596 11.1162 5.27187 11.133 5.25745 11.1495L3.82505 12.5819C2.64813 13.7588 2 15.3292 2 17.0035C2 18.6778 2.64813 20.2481 3.82505 21.425C5.00196 22.6019 6.5722 23.2501 8.24651 23.2501C9.92081 23.2501 11.4912 22.6019 12.6681 21.425L19.8716 14.2216C20.2533 13.8398 20.2533 13.2207 19.8716 12.8389C19.4898 12.457 18.8707 12.457 18.4889 12.8389L11.2853 20.0423C10.4778 20.85 9.39864 21.2946 8.24651 21.2946C7.09437 21.2946 6.01524 20.85 5.20771 20.0423C4.40001 19.2348 3.95525 18.1555 3.95525 17.0035C3.95525 15.8514 4.40001 14.7723 5.20771 13.9646L12.4111 6.76115C12.4269 6.74537 12.4412 6.72856 12.4556 6.71192L15.4207 3.7468C16.4773 2.69024 18.1966 2.69024 19.253 3.74663C20.3095 4.80319 20.3095 6.52248 19.253 7.57904L17.0207 9.81133C17.0205 9.8115 17.0203 9.81167 17.0202 9.81184L9.10802 17.7242C8.67124 18.1609 7.96047 18.1609 7.52369 17.7242C7.08673 17.2874 7.08673 16.5766 7.52369 16.1397L15.4358 8.22734Z"
                                        fill="#5D6066"/>
                            </svg>
                        </div>
                        <div class="text-message-wrap">
                            <textarea class="text-message js_input_text"
                                      placeholder="Напишите сообщение или перетащите сюда файлы"></textarea>
                        </div>
                        <div class="chat-text-area__send send-message" onclick="chat_btn_send_handler()">
                            <svg width="20" height="23" viewBox="0 0 20 23" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M12.1203 18.1139C7.0285 24.2365 -1.13813e-08 22.8698 -1.13813e-08 22.8698C9.20734 17.3954 7.26278 9.42975 7.26278 9.42975L1.8196 9.42975L10.8942 0.339549L20 9.42975L14.549 9.42975C14.7286 15.404 12.1203 18.1139 12.1203 18.1139Z"
                                        fill="#5D6066"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<script type="text/javascript">
	<?php
	include("trees.php");
	//$trees_count = 7
	echo(trees_jscode_generate(7));

	?>

</script>

<script type="text/javascript" src="scripts/script-pack.js"></script>
<script src="desktop-js/desktop.js"></script>
</body>

</html>