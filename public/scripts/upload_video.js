let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/lumosmaxima/video/upload';
let CLOUDINARY_UPLOAD_PRESET = 'i6vsfqut';

let imgPreview = document.getElementById('img-preview');
let fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(event){
    
    console.log(event);

    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url : CLOUDINARY_URL,
        method : 'POST',
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        data : formData
    }).then(function(res){
        console.log(res);
        //video_thumb.src = res.data.secure_url;
        alert('URL : ' + res.data.secure_url);
    }).catch(function(err){
        console.log(err);
    });
});