function agregar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var correoElectronico = document.getElementById('correo').value;
    var direccion = document.getElementById('direccion').value;

    console.log(nombre, apellido, telefono, correo, direccion);

    axios({
        method: 'post',
        url: 'http://localhost:3100/customers',
        data:{
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correoElectronico: correoElectronico,
            direccion: direccion
        }
    }).then(function(res){
        console.log(res);
        alert("Registro exitoso");
        refrescar();
    }).catch(function(err){
        console.log(err);
    });

}

function actualizado(){

    var id = document.getElementById('idu').value;
    var nombre = document.getElementById('nombreu').value;
    var apellido = document.getElementById('apellidou').value;
    var telefono = document.getElementById('telefonou').value;
    var correoElectronico = document.getElementById('correou').value;
    var direccion = document.getElementById('direccionu').value;

    console.log(id,nombre, apellido, telefono, correo, direccion);

    axios({
        method: 'PUT',
        url: 'http://localhost:3100/customers/'+id,
        data:{
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correoElectronico: correoElectronico,
            direccion: direccion
        }
    }).then(function(res){
        console.log(res);
        alert("Actualización exitosa");
        refrescar();
    }).catch(function(err){
        console.log(err);
    });

}

function refrescando() {
    setTimeout(refrescar, 100);
}
function refrescar() {
    location.reload();
}