window.onload = loadCustomers;
var headers = {};
var url = "http://localhost:3100"
function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        loadCustomers();
    }else{
        window.location.href = "index.html";
    }
}

/*function loadPokemon(){
    axios.get(url + "/customers", headers)
    
    .then(function(res){
        console.log(res);
        loadCustomers(res.data.mesagge);

    }).catch(function(err){
        console.log(err);
    })
}*/

function loadCustomers() {
    
            $('#example tfoot th').each(function () {
                var title = $(this).text();
                $(this).html('<input type="text" placeholder="Filtrar..." class="form-control input-sm" size="3px" />');
            });

            var tabla = $('#example').DataTable({
                dom: "Bfrtip",
                "processing": true,
                //"serverSide": true,
                "responsive": true,
                "ajax": {
                    "url": "http://localhost:3100/customers",
                    "dataSrc": "data",
                    "type": "get",
                    "headers":{'Authorization': "bearer " + localStorage.getItem("token")}
                },
                columns: [
                    { "data": "id" },
                    { "data": "Nombre" },
                    { "data": "Apellido" },
                    { "data": "Telefono" },
                    { "data": "CorreoElectronico" },
                    { "data": "Direccion" },
                    { "data": "btn" },
                    { "data": "actualizar" }
                        
                ],
                "initComplete": function () {
                    this.api().columns().every(function () {
                        var that = this;
                        $('input', this.footer()).on('keyup change', function () {
                            if (that.search() !== this.value) {
                                that
                                    .search(this.value)
                                    .draw();
                            }
                        });
                    });
                },
                "deferRender": true,
                "autoWidth": false,
                "search": {
                    "regex": true,
                    "caseInsensitive": true,
                },
            });
        }

function botones(id) {
                $('#example').DataTable({
                    dom: 'lrtip',
                    destroy: true,
                    "responsive": true,
                    "ajax": {
                        "url": "http://localhost:3100/customers/"+id,
                        "dataSrc": "data",
                        "type": "DELETE"
                    },
                    "columns": [
                        {"data": "id" },
                        { "data": "Nombre" },
                        { "data": "Apellido" },
                        { "data": "Telefono" },
                        { "data": "CorreoElectronico" },
                        { "data": "Direccion" },
                        { "data": "btn" },
                        { "data": "actualizar" }
                    ],
                    "initComplete": function () {
                        this.api().columns().every(function () {
                            var that = this;
                            $('input', this.footer()).on('keyup change', function () {
                                if (that.search() !== this.value) {
                                    that
                                        .search(this.value)
                                        .draw();
                                }
                            });
                        });
                    },
                    "deferRender": true,
                    "autoWidth": false,
                    "search": {
                        "regex": true,
                        "caseInsensitive": true,
                    },
                });
                refrescando();
        }

function actu(id) {
    $('#idu').val(id);
    }

function busqueda(){
    var nombre = document.getElementById('namesearch').value;
    
    $('#example').DataTable({
        dom: 'lrtip',
        destroy: true,
        "responsive": true,
        "ajax": {
            "url": "http://localhost:3100/customers/"+nombre,
            "dataSrc": "data",
            "type": "get"
        },
        "columns": [
            {"data": "id" },
            { "data": "Nombre" },
            { "data": "Apellido" },
            { "data": "Telefono" },
            { "data": "CorreoElectronico" },
            { "data": "Direccion" },
            { "data": "btn" },
            { "data": "actualizar" }
        ],
        "initComplete": function () {
            this.api().columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this.value) {
                        that
                            .search(this.value)
                            .draw();
                    }
                });
            });
        },
        "deferRender": true,
        "autoWidth": false,
        "search": {
            "regex": true,
            "caseInsensitive": true,
        },
    });

}
    
        $("#trigger").hover(function () {
        }, function (e) {
        });
        
        function refrescando() {
            setTimeout(refrescar, 100);
        }
        function refrescar() {
            location.reload();
        }