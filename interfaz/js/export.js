        function dataContentExportExl(memberId, filename = '') {
            var fourceFileSaveDataUrl;
            var dataFileType = 'application/vnd.ms-excel';
            var tableSelect = document.getElementById(memberId);
            var dataContentSource = tableSelect.outerHTML.replace(/ /g, '%20');


            // Specify file name
            filename = filename ? filename + '.xls' : 'export_excel_data.xls';

            // Create download link element
            fourceFileSaveDataUrl = document.createElement("a");

            document.body.appendChild(fourceFileSaveDataUrl);

            if (navigator.msSaveOrOpenBlob) {
                var blob = new Blob(['\ufeff', dataContentSource], {
                    type: dataFileType
                });
                navigator.msSaveOrOpenBlob(blob, filename);
            } else {
                // Create a link to the file
                fourceFileSaveDataUrl.href = 'data:' + dataFileType + ', ' + dataContentSource;

                // Setting the file name
                fourceFileSaveDataUrl.download = filename;

                //triggering the function
                fourceFileSaveDataUrl.click();
            }
        }
        
        const $btnExportar = document.querySelector("#btnExportar21"),
            $tabla = document.querySelector("#example");

        $btnExportar.addEventListener("click", function () {
            let tableExport = new TableExport($tabla, {
                exportButtons: false, // No queremos botones
                filename: "Idea", //Nombre del archivo de Excel
                sheetname: "My idea table", //Título de la hoja
            });
            let datos = tableExport.getExportData();
            let preferenciasDocumento = datos.tabla.xlsx;
            tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
        });
