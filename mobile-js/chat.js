/*
* secondary functions
* */
const escapeHTML = str => str.replace(/[&<>'"]/g,
    tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag]));
function bytesToSize(bytes)
{
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
function randomInteger(min, max)
{
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function is_archive_file(file_format)
{
    return /^(rar|zip|7z|7zip|tar|tz|gz|ace|arj)$/i.test(file_format);
}
function action_item_delete_svg_get()
{
    return `
        <svg width="13" height="17" viewBox="0 0 13 17" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.2063 1.3471H9.44857C9.24709 0.908462 8.80469 0.599976 8.29284 0.599976H4.46523C3.95338 0.599976 3.51099 0.908462 3.30825 1.3471H2.55049C1.14759 1.3471 0 2.49532 0 3.89884H12.7568C12.7575 2.49595 11.6099 1.3471 10.2063 1.3471Z"/>
            <path
                d="M0.776123 14.3585C0.776123 15.5912 1.78418 16.5999 3.0175 16.5999H9.74163C10.9756 16.5999 11.983 15.5912 11.983 14.3585V4.64587H0.776123V14.3585ZM8.62032 6.88725C8.62032 6.47489 8.95508 6.14013 9.36744 6.14013C9.7798 6.14013 10.1139 6.47489 10.1139 6.88725V14.3585C10.1139 14.7715 9.7798 15.105 9.36744 15.105C8.95508 15.105 8.62032 14.7702 8.62032 14.3585V6.88725ZM5.63244 6.88725C5.63244 6.47489 5.96658 6.14013 6.37956 6.14013C6.79255 6.14013 7.12669 6.47489 7.12669 6.88725V14.3585C7.12669 14.7715 6.79255 15.105 6.37956 15.105C5.96658 15.105 5.63244 14.7702 5.63244 14.3585V6.88725ZM2.64331 6.88725C2.64331 6.47489 2.97745 6.14013 3.38981 6.14013C3.80279 6.14013 4.13694 6.47489 4.13694 6.88725V14.3585C4.13694 14.7715 3.80279 15.105 3.38981 15.105C2.97745 15.105 2.64331 14.7702 2.64331 14.3585V6.88725Z"/>
        </svg>`;
}
function action_item_see_svg_get()
{
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


/*
* indicators
* */
function indicator_encryption_html_get()
{
    return `
<svg class="circular-loader" viewBox="25 25 50 50">
    <circle class="loader-path js_loader-path" cx="50" cy="50" r="20" fill="none"
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
function indicator_loader_html_get()
{
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
function chat_message_indicator_stop(message_id, indicator_type)
{
    let this_message_id = document.getElementById('message_' + message_id),
        this_indicator = this_message_id.querySelector(`.${indicator_type}`);

    setTimeout(() => {
        this_indicator.classList.add('stop');
    }, app.indicator_stop_timeout)

}
function indicator_encrypt_stop(message_id)
{
    chat_message_indicator_stop(message_id, 'indicator_encrypt')
}
function indicator_loading_stop(message_id)
{
    chat_message_indicator_stop(message_id, 'indicator_loading')
}


/*
* returning functions
* */
function icon_file_svg_get()
{
    return `
<svg width="55" height="55" viewBox="0 0 42 55" fill="none"
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
function icon_file_archive_svg_get()
{
    return `
<svg width="49" height="55" viewBox="0 0 49 55" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M1.6812e-06 41.3397L2.15249e-06 52.1216C2.22186e-06 53.7087 1.29106 55 2.87842 55L45.5377 55C47.1248 55 48.4162 53.7087 48.4162 52.1216V41.3397C48.4162 39.7523 47.1248 38.4613 45.5377 38.4613L2.87842 38.4613C1.29106 38.461 1.61181e-06 39.7523 1.6812e-06 41.3397ZM42.0774 43.458V50.1634C42.0774 50.9369 41.4503 51.5637 40.6771 51.5637C39.9038 51.5637 39.2768 50.9369 39.2768 50.1634V43.458C39.2768 42.6845 39.9038 42.0578 40.6771 42.0578C41.4503 42.0578 42.0774 42.6845 42.0774 43.458ZM22.5678 43.458V50.1634C22.5678 50.9369 21.9407 51.5637 21.1675 51.5637C20.3943 51.5637 19.7672 50.9369 19.7672 50.1634L19.7672 43.458C19.7672 42.6845 20.3943 42.0578 21.1675 42.0578C21.9407 42.0578 22.5678 42.6845 22.5678 43.458ZM16.9566 43.458V50.1634C16.9566 50.9369 16.3295 51.5637 15.5563 51.5637C14.7831 51.5637 14.156 50.9369 14.156 50.1634V43.458C14.156 42.6845 14.7831 42.0578 15.5563 42.0578C16.3295 42.0578 16.9566 42.6845 16.9566 43.458ZM11.3451 43.458V50.1634C11.3451 50.9369 10.718 51.5637 9.94481 51.5637C9.17157 51.5637 8.54452 50.9369 8.54452 50.1634L8.54452 43.458C8.54452 42.6845 9.17157 42.0578 9.94481 42.0578C10.718 42.0578 11.3451 42.6845 11.3451 43.458ZM8.40598e-07 22.1091L1.31189e-06 32.8909C1.38127e-06 34.4783 1.29134 35.7694 2.87842 35.7694L45.5377 35.7694C47.1248 35.7694 48.4162 34.4783 48.4162 32.8909V22.1091C48.4162 20.522 47.1248 19.2306 45.5377 19.2306L2.87842 19.2306C1.29106 19.2304 7.71224e-07 20.522 8.40598e-07 22.1091ZM42.0774 24.2274V30.9328C42.0774 31.7063 41.4503 32.3331 40.6771 32.3331C39.9038 32.3331 39.2768 31.7063 39.2768 30.9328V24.2274C39.2768 23.4539 39.9038 22.8271 40.6771 22.8271C41.4503 22.8271 42.0774 23.4539 42.0774 24.2274ZM22.5678 24.2274V30.9328C22.5678 31.7063 21.9407 32.3331 21.1675 32.3331C20.3943 32.3331 19.7672 31.7063 19.7672 30.9328V24.2274C19.7672 23.4539 20.3943 22.8271 21.1675 22.8271C21.9407 22.8271 22.5678 23.4539 22.5678 24.2274ZM16.9566 24.2274V30.9328C16.9566 31.7063 16.3295 32.3331 15.5563 32.3331C14.7831 32.3331 14.156 31.7063 14.156 30.9328V24.2274C14.156 23.4539 14.7831 22.8271 15.5563 22.8271C16.3295 22.8271 16.9566 23.4539 16.9566 24.2274ZM11.3451 24.2274V30.9328C11.3451 31.7063 10.718 32.3331 9.94481 32.3331C9.17157 32.3331 8.54452 31.7063 8.54452 30.9328L8.54452 24.2274C8.54452 23.4539 9.17157 22.8271 9.94481 22.8271C10.718 22.8271 11.3451 23.4539 11.3451 24.2274ZM0 2.87843L4.71292e-07 13.6603C5.40665e-07 15.2474 1.29134 16.5387 2.87842 16.5387L45.5377 16.5387C47.1248 16.5387 48.4162 15.2474 48.4162 13.6603V2.87842C48.4162 1.29106 47.1248 -6.93732e-08 45.5377 0L2.87842 1.8647e-06C1.29106 -0.000278122 -6.93857e-08 1.29107 0 2.87843ZM42.0774 4.99705V11.7022C42.0774 12.4757 41.4503 13.1024 40.6771 13.1024C39.9038 13.1024 39.2768 12.4757 39.2768 11.7022V4.99705C39.2768 4.22353 39.9038 3.59677 40.6771 3.59677C41.4503 3.59677 42.0774 4.22353 42.0774 4.99705ZM22.5678 4.99705V11.7022C22.5678 12.4757 21.9407 13.1024 21.1675 13.1024C20.3943 13.1024 19.7672 12.4757 19.7672 11.7022V4.99705C19.7672 4.22353 20.3943 3.59677 21.1675 3.59677C21.9407 3.59677 22.5678 4.22353 22.5678 4.99705ZM16.9566 4.99705L16.9566 11.7022C16.9566 12.4757 16.3295 13.1024 15.5563 13.1024C14.7831 13.1024 14.156 12.4757 14.156 11.7022V4.99705C14.156 4.22353 14.7831 3.59677 15.5563 3.59677C16.3295 3.59677 16.9566 4.22353 16.9566 4.99705ZM11.3451 4.99705L11.3451 11.7022C11.3451 12.4757 10.718 13.1024 9.9448 13.1024C9.17157 13.1024 8.54452 12.4757 8.54452 11.7022V4.99705C8.54452 4.22353 9.17157 3.59677 9.9448 3.59677C10.718 3.59677 11.3451 4.22353 11.3451 4.99705Z"
        fill="#5D6066" />
</svg>

`;
}
function chat_message_text_html_get(text, element_id)
{
    return `<div class="item text" id="message_${element_id}">
        ${text}
            <div class="message-item-actions">
                <div class="action-item action-delete" onclick="item_delete_handler(${element_id})">
                    ${action_item_delete_svg_get()}
                </div>
            </div>
        </div>`;
}
function chat_message_image_item_html_get(element_id, src, filename)
{
    return `
        <div class="img-block" id="message_${element_id}">
            <div>
                <div class="image">
                    <img src="${src}" alt="">
                </div>
                <p class="name">${filename}</p>
            </div>
            <div class="indicators">
                <div class="loader indicator_encrypt">
                    ${indicator_encryption_html_get()}
                </div>
                <div class="loader indicator_loading">
                    ${indicator_loader_html_get()}
                </div>
                <div class="delete" onclick="item_delete_handler(${element_id})">
                    ${action_item_delete_svg_get()}
                </div>
            </div>
        </div>
`;
}
function chat_message_image_container_html_get(src, filename, element_id)
{
    return `
        <div class="item img">
            ${chat_message_image_item_html_get(element_id, src, filename)}
        </div>`;
}
function chat_message_file_html_get(file_name, file_format, file_size, element_id)
{
    return `
        <div class="item file"  id="message_${element_id}">
            <div class="text-block">
                <p class="name clip">${file_name}</p>
                <p class="format">Формат: ${file_format}</p>
                <p class="size">Размер: ${bytesToSize(file_size)}</p>
            </div>
            ${is_archive_file(file_format)?icon_file_archive_svg_get():icon_file_svg_get()}
            <div class="indicators">
                <div class="loader indicator_encrypt">
                    ${indicator_encryption_html_get()}
                </div>
                <div class="loader indicator_loading">
                    ${indicator_loader_html_get()}
                </div>
                <div class="delete" onclick="item_delete_handler(${element_id})">
                    ${action_item_delete_svg_get()}
                </div>
            </div>
        </div>`;
}


/*
* functions to append
* */
function chat_message_text_add(text, element_id)
{
    app.chat.message_content.insertAdjacentHTML('beforeend', chat_message_text_html_get(escapeHTML(text),  element_id));

}
function chat_message_image_add(src, filename)
{
    let element_id = randomInteger(10000, 60000);
    app.chat.message_content.insertAdjacentHTML('beforeend', chat_message_image_container_html_get(src, escapeHTML(filename),  element_id));
    indicator_encrypt_stop(element_id);
    indicator_loading_stop(element_id);
}
function chat_message_file_add(file_name, file_format, file_size, element_id)
{
    app.chat.message_content.insertAdjacentHTML('beforeend', chat_message_file_html_get(escapeHTML(file_name), escapeHTML(file_format), parseInt(file_size), element_id));
}
function chat_message_album_add(image_objects)
{
    let imageItem = document.createElement("div");
    imageItem.setAttribute('class', 'item img');
    app.chat.message_content.appendChild(imageItem);

    for (let i=0; i<image_objects.length; i++)
    {
        let element_id = randomInteger(10000, 60000);
        imageItem.insertAdjacentHTML('beforeend', `
            ${chat_message_image_item_html_get(element_id, image_objects[i].src, image_objects[i].filename)}
        `);
        chat_message_indicator_stop(element_id, 'indicator_loading');
        chat_message_indicator_stop(element_id, 'indicator_encrypt');
        app_messages_object_image_append(image_objects[i], element_id)
    }
}


/*
* append to app.messages
* */
function app_messages_object_text_append(text, element_id)
{
    app.messages.push({
        id: element_id,
        body: text, //text or blob
        type: 'text',
        parts : [
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
function app_messages_object_image_append(image_objects, element_id)
{
    app.messages.push({
        id: element_id,
        body: image_objects, //text or blob
        type: 'file',
        parts : [
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
function app_messages_object_file_append(file_name, file_format, file_size, element_id)
{
    app.messages.push({
        id: element_id,
        body: {
            file_name: file_name,
            file_format: file_format,
            file_size: file_size,
        }, //text or blob
        type: 'file',
        parts : [
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


/*
* handlers
* */
function chat_slide_btn_public_visibility_handler()
{
    if(app.messages.length > 0){
        app.btn_public.classList.remove('hide')
    } else {
        app.btn_public.classList.add('hide')
    }
}
function chat_btn_send_handler()
{
    if(app.chat.input_text.value !== ''){
        message_text_add(app.chat.input_text.value);
        app.chat.input_text.value = '';
    }
}
function chat_message_clear()
{
    app.messages = [];
    app.chat.message_content.innerHTML = '';
}
function chat_visibility(type) // true/false
{
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
function item_delete_handler(element_id)
{
    let this_item_id = 'message_' + element_id,
        $this_element = document.getElementById(this_item_id);

    if(indexOfIdGet(app.messages, element_id) !== false){
        if($this_element.classList.contains('img-block')){
            console.log( );
            if(!$this_element.nextElementSibling && !$this_element.previousElementSibling){
                $this_element.parentElement.remove();
                app.messages.splice(indexOfIdGet(app.messages, element_id), 1);
            } else {
                $this_element.remove();
                app.messages.splice(indexOfIdGet(app.messages, element_id), 1);
            }
        } else {
            $this_element.remove();
            app.messages.splice(indexOfIdGet(app.messages, element_id), 1);
        }
    }
}
// scroll content block (not working)
function chat_content_scroll_to_bottom() {
    app.chat.message_content_wrap.scrollTop = app.chat.message_content_wrap.scrollHeight
}


/*
* function to build
* */
function message_text_add(text)
{
    let element_id = randomInteger(10000, 60000);

    chat_message_text_add(text, element_id);
    app_messages_object_text_append(text, element_id);
    chat_slide_btn_public_visibility_handler();
    chat_content_scroll_to_bottom();
}
function message_images_add(image_objects)
{
    chat_message_album_add(image_objects);
    chat_slide_btn_public_visibility_handler();
    chat_content_scroll_to_bottom();
}
function message_file_add(file_name, file_format, file_size){
    let element_id = randomInteger(10000, 60000);

    chat_message_file_add(file_name, file_format, file_size, element_id);
    indicator_encrypt_stop(element_id);
    indicator_loading_stop(element_id);
    app_messages_object_file_append(file_name, file_format, file_size, element_id);
    chat_content_scroll_to_bottom();
}


// TODO!
// chat_message_text_add("Привет! Посмотри на эту фотографию");
// chat_message_image_add("mobile-img/img1.png", "Image.jpg");
// chat_message_text_add("Эта фотография будет прекрасно смотреться над камином. Давай сегодня же распечатаем ее! Максимальная ширина текста — 720 пикс. А вот еще несколько полезных файлов:");
// chat_message_file_add("Очень длинное название файла Очень длинное название файла Очень длинное название файла", "docx", "11 kb");
// chat_message_file_add("Очень длинное название файла", "7zip", "11 kb");
// chat_message_album_add([
//     {src:"desktop-img/msg-img-1.jpg", filename:"Image.jpg"},
//     {src:"desktop-img/msg-img-1.jpg", filename:"Image.jpg"},
//     {src:"desktop-img/msg-img-2.jpg", filename:"Image.jpg"},
//     {src:"desktop-img/msg-img-1.jpg", filename:"Image.jpg"},
//     {src:"desktop-img/msg-img-4.jpg", filename:"Image.jpg"},
//     {src:"desktop-img/msg-img-1.jpg", filename:"Image.jpg"}
// ]);
// message_text_add('test');


function main(){
    message_text_add('test');
    message_images_add([
        {src:"desktop-img/msg-img-1.jpg", filename:"Image.jpg"},
    ]);
    message_images_add([
        {src:"desktop-img/msg-img-1.jpg", filename:"Image1.jpg"},
        {src:"desktop-img/msg-img-2.jpg", filename:"Image2.jpg"},
    ]);
    message_file_add("Очень длинное название файла Очень длинное название файла Очень длинное название файла", "docx", "11 kb");
    message_file_add("Очень длинное название файла", "7zip", "11 kb");    
}

