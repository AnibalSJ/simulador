    let canEquipos = 0;
let confirmarEquipos = false;
let tipoEquipos = ['CTL-RTO', 'MANUAL', 'CABLE', 'ADAPTADOR', 'CPE-LAN SWITCH', 'CPE-STB', 'CPE-HPNA', 'CPE-AP', 'CPE-ONT', 'CPE-DSL'];
let generalOption = ['SI', 'NO', 'No Aplica'];
let cables = ['HDMI1', 'AUDIO Y VIDEO', 'RJ 45', 'No Aplica'];
let otrosAcessorios = ['Caja', 'Manuales', 'No Aplica']
let falla = ['Visible', 'No Visible'];
let novedades = ['SERIAL NO COINCIDE CON ORDEN', 'EQUIPO NO COINCIDE CON LA ORDEN', 'No Aplica']

document.getElementById('equi-no-re').addEventListener('click', event=>{
    if(canEquipos < 1){
        let tr = document.createElement('tr');
    tr.setAttribute('id','newRowEq');
    let td = document.createElement('td')
    let input = document.createElement('input')
    input.type = "checkbox";
    td.appendChild(input)
    tr.appendChild(td);
    
    td = document.createElement('td')
    let select = document.createElement('select');
    addselect(tipoEquipos, select);
    td.appendChild(select)
    tr.appendChild(td)

    // tr = document.createElement('tr');
    td = document.createElement('td')
    input = document.createElement('input')
    input.type = "text";
    td.appendChild(input)
    tr.appendChild(td);
    

    // tr = document.createElement('tr');
    td = document.createElement('td')
    input = document.createElement('input')
    input.type = "text";
    td.appendChild(input)
    tr.appendChild(td);

    td = document.createElement('td')
    select = document.createElement('select');
    addselect(generalOption, select);
    td.appendChild(select)
    tr.appendChild(td)

    // tr = document.createElement('tr');
    td = document.createElement('td')
    input = document.createElement('input')
    input.type = "number";
    td.appendChild(input)
    tr.appendChild(td);

    td = document.createElement('td')
    select = document.createElement('select');
    addselect(cables, select);
    td.appendChild(select)
    tr.appendChild(td)

    td = document.createElement('td')
    select = document.createElement('select');
    addselect(otrosAcessorios, select);
    td.appendChild(select)
    tr.appendChild(td)

    td = document.createElement('td')
    select = document.createElement('select');
    addselect(falla, select);
    td.appendChild(select)
    tr.appendChild(td)

    td = document.createElement('td')
    select = document.createElement('select');
    addselect(novedades, select);
    td.appendChild(select)
    tr.appendChild(td)

    // tr = document.createElement('tr');
    td = document.createElement('td')
    input = document.createElement('input')
    input.type = "file";
    td.appendChild(input)
    tr.appendChild(td);

    // tr = document.createElement('tr');
    td = document.createElement('td')
    i = document.createElement('i');
    i.className = 'fa-solid fa-trash';
    i.style.color = "#565e6c";
    td.appendChild(i)
    tr.appendChild(td);
    

    document.getElementById('retoma-equipo').appendChild(tr);   
    }
    canEquipos = canEquipos + 1;

    
})

function addselect(array, select){
    array.forEach(element => {
        let option = document.createElement('option')
        option.value = element;
        option.text = element;
        select.appendChild(option);
        
    });
}
document.getElementById('conequi').addEventListener('click', event=>{
    confirmarEquipos = true;
    if(!document.getElementById('inv-pr').checked){
        $( document ).ready(function() {
            $('#modal-servi-fal').modal('toggle')
        });

    }
    document.getElementById('boleta-retom').style.display = "grid   ";
})
document.getElementById('btn-paso-2-retom').addEventListener('click', event=>{
    document.getElementById('paso-1-retoma').style.display = "none";
    document.getElementById('paso-2-retoma').style.display = "grid";
})
document.getElementById('suspend-retom').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#suspend-retom-mod').modal('toggle')
    });
})