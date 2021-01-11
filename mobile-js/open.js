let testArr = [
    {
        body: 'sadsdasd',
        type: 'text'
    },
    {
        body: {
            filename: "Image1.jpg",
            src: "desktop-img/msg-img-1.jpg"
        },
        type: "file",
    },
    {
        body: {
            filename: "Image1.jpg",
            src: "desktop-img/msg-img-3.jpg"
        },
        type: "file",
    },
    {
        body: {
            filename: "Image1.jpg",
            src: "desktop-img/msg-img-2.jpg"
        },
        type: "file",
    },
    {
        body: {
            file_format: "docx",
            file_name: "Очень длинное название файла Очень длинное название файла Очень длинное название файла",
            file_size: "11 kb"
        },
        type: "file",
    },
];

function open_message_album_add(image_objects)
{
    let imageItem = document.createElement("div"),
        galleryId = randomInteger(10000, 60000);
    imageItem.setAttribute('class', 'item img');
    imageItem.setAttribute('id', `lg_${galleryId}`);
    app.chat.message_content.appendChild(imageItem);


    for (let i=0; i<image_objects.length; i++)
    {
        let element_id = randomInteger(10000, 60000);
        imageItem.insertAdjacentHTML('beforeend', `
            ${chat_message_image_item_html_get(element_id, image_objects[i].src, image_objects[i].filename)}
        `);
        chat_message_indicator_stop(element_id, 'indicator_loading');
        chat_message_indicator_stop(element_id, 'indicator_encrypt');
    }

    initializeLightGallery(galleryId);

}

function open_note_content_append(arr) {
    for (let i = 0; i < arr.length; i++){
        if(arr[i].type === 'text'){
            chat_message_text_add(arr[i].body)
        }
        if(arr[i].type === 'file'){
            let imgarray = [];
            imgarray.push(arr[i].body);
            console.log(imgarray);
            if(arr[i].body.src){
                open_message_album_add(imgarray)
            } else {
                message_file_add(arr[i].body.file_name, arr[i].body.file_format, arr[i].body.file_size)
            }
        }
    }
}

open_note_content_append(testArr);
