function app_init()
{
    app = {
        wrapper: document.querySelector('.js_wrapper'),
        theme_switcher: document.querySelector('.js_theme_switcher'),
        btn_public: document.querySelector('.js_mob_btn_public'),

        note_amount: document.querySelectorAll('.js_note_amount'),

        burger: {
            left: document.querySelector('.js_burger_left'),
            right: document.querySelector('.js_burger_right'),
            left_btn_open: document.querySelector('.js_burger_left_btn_open'),
            left_btn_close: document.querySelector('.js_burger_left_btn_close'),
            right_btn: document.querySelector('.js_burger_btn_right'),
            overlay: document.querySelector('.js_burger_overlay'),
        },

        chat: {
            input_block: document.querySelector('.js_chat_input_block'),
            input_text: document.querySelector('.js_input_text'),
            message_content: document.querySelector('.js_chat_message_content'),
            message_content_wrap: document.querySelector('.js_chat_message_content_wrap'),
            btn_send: document.querySelector('.js_chat_btn_send'),
            file_input_button: document.getElementById('js_file_input_button'),
            file_input: document.getElementById('js_file_input')
        },

        share: {
            wrap: document.querySelector('.js_share_wrap'),
            footer: document.querySelector('.js_share_footer'),
            copy_btn: document.querySelector('.js_copy_btn'),
            input_link: document.querySelector('.js_share_link'),
        },

        note_open: {
            alert: document.querySelector('.js_open_wrap_alert'),
            buttons: document.querySelector('.js_note_open_buttons')
        },

        messages: [],

        open_messages: [
            {
                body: 'sadsdasd',
                type: 'text',
                id: 19843
            },
            {
                body: {
                    filename: "Image1.jpg",
                    src: "desktop-img/msg-img-1.jpg"
                },
                type: "image",
                id: 48693
            },
            {
                body: {
                    filename: "Image1.jpg",
                    src: "desktop-img/msg-img-3.jpg"
                },
                type: "image",
                id: 50784
            },
            {
                body: {
                    filename: "Image1.jpg",
                    src: "desktop-img/msg-img-1.jpg"
                },
                type: "image",
                id: 13497
            },
            {
                body: {
                    filename: "Image1.jpg",
                    src: "desktop-img/msg-img-3.jpg"
                },
                type: "image",
                id: 59355
            },
            {
                body: {
                    filename: "Image1.jpg",
                    src: "desktop-img/msg-img-2.jpg"
                },
                type: "image",
                id: 29546
            },
            {
                body: {
                    file_format: "docx",
                    file_name: "Очень длинное название файла Очень длинное название файла Очень длинное название файла",
                    file_size: "11 kb"
                },
                type: "file",
                id: 12394
            },
            {
                body: {
                    file_format: "zip",
                    file_name: "Название файла",
                    file_size: "11111 kb"
                },
                type: "file",
                id: 120909
            },
            {
                body: {
                    filename: "Image1.jpg",
                    src: "desktop-img/msg-img-1.jpg"
                },
                type: "image",
                id: 43965
            },
            {
                body: {
                    filename: "Image1.jpg",
                    src: "desktop-img/msg-img-3.jpg"
                },
                type: "image",
                id: 34056
            },
        ],

        settings: {
            scheme: getCookie('scheme')
        },

        indicator_stop_timeout: 5000,

        licenseKey : "1234567890"
        //licenseKey : null
    };

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
        app.burger.right_btn.classList.remove('active');
    });

    app.theme_switcher.addEventListener('click', () => {
        if (app.wrapper.classList.contains('light')) {
            document.documentElement.classList.remove('light');
            app.wrapper.classList.remove('light');
            setCookie('scheme', 'dark');
        } else {
            app.wrapper.classList.add('light');
            document.documentElement.classList.add('light');
            setCookie('scheme', 'light');
        }
    });

    app.chat.file_input_button.addEventListener("click", (e) => {
        app.chat.file_input.click();
        e.preventDefault(); // prevent navigation to "#"
    }, false);

    app.chat.file_input.addEventListener("change", async (e) => {
        var fileList = Array.from(e.target.files);

        // readAsDataURL(file)
        var messages = [];
        var arr_last_type = "";
        var arr = [];
        var arr_last_index = -1;

        var fileCollection_images = fileList.filter(file=>/\.(bmp|png|jpe?g|gif)$/i.test(file.name));
        var fileCollection_files = fileList.filter(file=>!/\.(bmp|png|jpe?g|gif)$/i.test(file.name));

        fileCollection_files.map(file=>{
            let extension = getExtension(file.name);
            message_file_add(file.name, extension, bytesToSize(file.size));
        });

        var images = await Promise.all(fileCollection_images.map(file=>readAsDataURL(file)));
        message_images_add(images);

        app.chat.file_input.value = "";

    }, false);

    if (isIOS)
        document.querySelector(".download").style.display = "none";
}