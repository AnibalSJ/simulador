let audioR = false;
function alertAudio(idAudio, idimg){
    idAudio = document.getElementById(idAudio);
    console.log(idAudio)
    if(!audioR){
        // alert('repro audio');
        idAudio.play();
        idAudio.currentTime = 0;
        idAudioRepro = idAudio;
        audioR = !audioR;
        cambioParlanteE(idimg)
    }else{
        // alert('pausar audio')
        idAudioRepro.pause();
        idAudioRepro.currentTime = 0;
        idAudioRepro = idAudio;
        idAudio.play()
        cambioParlanteE(idimg)
    }
}
function cambioParlanteE(idimg){
    document.getElementById(idimg).src = "./assets/img/Group 11.svg";
    document.getElementById(idimg).style.animation = 'none';
}