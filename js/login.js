function alertLogin(){
    document.getElementById('alert-info').style.display = 'block';
    var audio = document.getElementById("audio");
    audio.play();
}
document.getElementById('submitlogin').addEventListener('click', event=>{
    if(document.getElementById('username').value == "escueladigital"){
        if(document.getElementById('password').value == "digital"){
            
            $( document ).ready(function() {
                $('#modal-loading').modal('toggle')
            });
            setTimeout(() => {
                $( document ).ready(function() {
                    $('#modal-loading').modal('hide')
                    window.location.href = './dashboard.html';
                });
              }, "4000");
        }
    }else{
        $('#usuarioerroneo').modal('show')
    }
})
