var label = document.createElement("label");
let textLabel = document.createTextNode("AP 1");
label.appendChild(textLabel);
label.setAttribute("id", "label-wp");
let select = document.createElement("select");
select.setAttribute("id", "select-wp");
let optionUno  = document.createElement("option")
optionUno.value = "D41FED078809554A0";
optionUno.text = "D41FED078809554A0";
select.appendChild(optionUno)
let optionDos  = document.createElement("option");
optionDos.value = "1A84EF8E4A43A48C0";
optionDos.text = "1A84EF8E4A43A48C0";
select.appendChild(optionDos)
let optionTres  = document.createElement("option")
optionTres.value = "294D3F8E4A43C3DB0";
optionTres.text = "294D3F8E4A43C3DB0";
select.appendChild(optionTres)  

conSva.appendChild(label);
conSva.appendChild(select);




// Verificación paso 2
document.getElementById('btn-paso-3-verifi').addEventListener('click', event=>{
    let valueTvbox = document.getElementById('tvbox-p2').value;
    if(valueTvbox == 'no'){
        $( document ).ready(function() {
            $('#desis-tvbox').modal('toggle')
        });
    }else{
        let tr = document.createElement('tr');
        let td = document.createElement('td') ;
        let img = document.createElement('img');
        document.getElementById('serialAP').innerHTML = document.getElementById('select-wp').value;
        td.innerHTML = "TV BOX OBSEQUIO"
        tr.appendChild(td);
        addinventariotvbox(document.getElementById('tvbox-p2').value)
        td = document.createElement('td');
        tr.appendChild(td);
        td = document.createElement('td');
        img.src = "../assets/img/trafficlight-green.png";
        td.className ='content-img';
        td.appendChild(img);
        tr.appendChild(td);
        document.getElementById('tvbox-dr').appendChild(tr);

        document.getElementById('flujo-btn').style.display = "none";
        ontValue = document.getElementById('ont-select-p2').value
        document.getElementById('ont-ps3').innerHTML = ontValue;
        document.getElementById('ont-ps3').innerHTML = ontValue;
        document.getElementById('serialps3-ont').innerHTML = `Serial equipo: ${ontValue}`;
        document.getElementById('serialps3-ont-2').innerHTML = `Serial equipo: ${ontValue}`;
        document.getElementById('nombretdontps6').innerHTML = `Serial equipo: ${ontValue}`;
        document.getElementById('serialtdontps6').innerHTML = `Serial equipo: ${ontValue}`;
        $( document ).ready(function() {
            $('#modal-loading').modal('toggle')
        });
        setTimeout(() => {
            $( document ).ready(function() {
                $('#modal-loading').modal('hide')
                document.getElementById('paso-2').style.display = 'none';
                document.getElementById('paso-3').style.display = 'grid';
                document.getElementById('con-venta-SVA').style.display = 'none';
                document.getElementById('pasoli-2').classList.remove("active");
                document.getElementById('pasoli-2').className = "done";
                document.getElementById('pasoli-3').className = "active";
            });
          }, "3000");
    }
})
// Pasar paso 3

document.getElementById('btn-paso-3-ri').addEventListener('click', ()=>{
    //Mostrar la sección 3 y ocultar la sección 2
    document.getElementById('serialAP').innerHTML = document.getElementById('select-wp').value;
    $( document ).ready(function() {
        $('#desis-tvbox').modal('hide')
    });
    addinventariotvbox(document.getElementById('sel-d-tvb').value)
    document.getElementById('tvbox-b').style.display = 'none';
    // let li = document.createElement('li')
    // let img = document.createElement('img')
    // let p = document.createElement('p')
    // img.src = "../assets/img/arrow-turn-down-right.svg";
    // li.appendChild(img);
    // img.src = "../assets/img/file.svg";
    // li.appendChild(img);
    // p.innerHTML = `Motivo: ${document.getElementById('sel-d-tvb').value}`;
    // li.appendChild(p);
    // document.getElementById('item-tv').appendChild(li)
    document.getElementById('flujo-btn').style.display = "none";
    ontValue = document.getElementById('ont-select-p2').value
    document.getElementById('ont-ps3').innerHTML = ontValue;
    document.getElementById('ont-ps3').innerHTML = ontValue;
    document.getElementById('serialps3-ont').innerHTML = `Serial equipo: ${ontValue}`;
    document.getElementById('serialps3-ont-2').innerHTML = `Serial equipo: ${ontValue}`;
    document.getElementById('nombretdontps6').innerHTML = `Serial equipo: ${ontValue}`;
    document.getElementById('serialtdontps6').innerHTML = `Serial equipo: ${ontValue}`;
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-2').style.display = 'none';
            document.getElementById('paso-3').style.display = 'grid';
            document.getElementById('con-venta-SVA').style.display = 'none';
            document.getElementById('pasoli-2').classList.remove("active");
            document.getElementById('pasoli-2').className = "done";
            document.getElementById('pasoli-3').className = "active";
        });
      }, "3000");
    
});

document.getElementById('btn-con-s-tvbox').addEventListener("click", ()=>{
    modal_confirm_after = document.getElementById('modal-confirm-after');
    let timerInterval;
    Swal.fire({
        title: 'INFORMACIÓN',
        color:'#1285B6',
        html: 
            '<p>Se encuentra realizando una validación del servicio con el cliente, por favor espere 1 minuto. La encuesta se envió al Correo: zurzabapsi@vusra.com</p><br>' +
            '0 Dia, 0 hora, 0 minuto, <strong></strong> segundos<br>',
        timer: 5000,
        didOpen: () =>{
            const content = Swal.getHtmlContainer()
            const $ = content.querySelector.bind(content)

            Swal.showLoading()

            timerInterval = setInterval(() => {
                Swal.getHtmlContainer().querySelector('strong')
                  .textContent = (Swal.getTimerLeft() / 1000)
                    .toFixed(0)
            }, 100)
        },willClose: () => {
            clearInterval(timerInterval)
        }
    }).then(() => {
        modal_confirm_after.style.display = 'block';
        modal_confirm.style.display = 'none';
    })
});

function addinventariotvbox(valueInput){
    let tr = document.createElement('tr');
    tr.setAttribute('id','filatvbox')
    let td = document.createElement('td');
    td.innerHTML = "Serializado";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = "TV BOX";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = valueInput;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = "TVBX";
    tr.appendChild(td);
    document.getElementById('inven-tbox').appendChild(tr)
}