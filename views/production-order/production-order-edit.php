<?php
  session_start();

  date_default_timezone_set('America/Bahia');

  define('__ROOT__', $_SERVER["DOCUMENT_ROOT"] . '/pcp-lite' );
?>  

<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ideal Brasil</title>
    <!-- Bootstrap -->
    <link href="/pcp-lite/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/pcp-lite/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/pcp-lite/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="/pcp-lite/vendors/iCheck/skins/flat/green.css" rel="stylesheet">
    <!-- Custom Theme Style -->
    <link href="/pcp-lite/build/css/custom.min.css" rel="stylesheet">
    <!-- bootstrap-daterangepicker  -->
    <link href="/pcp-lite/vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">
    <!-- bootstrap-datetimepicker  -->
    <link href="/pcp-lite/vendors/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css" rel="stylesheet">
    <!-- Bootstrap Colorpicker -->
    <link href="/pcp-lite/vendors/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css" rel="stylesheet">
    <!-- Ion.RangeSlider -->
    <link href="/pcp-lite/vendors/normalize-css/normalize.css" rel="stylesheet">
    <link href="/pcp-lite/vendors/ion.rangeSlider/css/ion.rangeSlider.css" rel="stylesheet">
    <!-- Select2 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet">
</head>

<body class="nav-md">

    <div class="container body">
        <div class="main_container">

            <!-- menu bar content -->
            <?php include_once __ROOT__."/includes/side-bar.php"; ?>
            <!-- /menu bar content -->

            <!-- header bar content -->
            <?php include_once __ROOT__."/includes/header.php"; ?>
            <!-- /header bar content -->        

            <!-- page content -->
            <div class="right_col" role="main">
                <div class="">
                    <div class="page-title">
                        <div class="title_left">
                            <h3>Ordem de Produção <small>editar</small></h3>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                        <div class="clearfix"></div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="x_panel">

                                <div class="x_content">
                                    <form id="form-order" name="form-order" class="form-horizontal">
                                        <div class="table-responsive">
                                            <table id="product-order" class="table table-striped jambo_table ">
                                                <thead>
                                                    <tr class="headings">
                                                        <th class="column-title">Produto </th>
                                                        <th class="column-title">Quantidade </th>
                                                        <th class="column-title">Lote </th>
                                                        <th class="column-title">Observação </th>
                                                        <th class="column-title no-link last"><span class="nobr">Ações</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody> 
                                                    <?php
                                                        foreach($body['Items'] as $item) { ?>
                                                            <tr class="header even pointer">
                                                                <td class=" ">
                                                                    <div class="col-md-12 col-sm-12 col-xs-12"><?php echo $item['Produto'];?> </div>
                                                                </td>
                                                                <td width="150" class=" ">
                                                                    <div class="col-md-12 col-sm-12 col-xs-12"><?php echo $item['Quantidade'];?> </div>
                                                                </td>
                                                                <td width="150" class=" ">
                                                                    <div class="col-md-12 col-sm-12 col-xs-12"><?php echo $item['LoteNumero'];?> </div>
                                                                </td>
                                                                <td width="250" class=" ">
                                                                    <div class="col-md-12 col-sm-12 col-xs-12"><?php echo $item['Observacao'];?> </div>
                                                                </td>
                                                                <td>
                                                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                                                        <a href="#"><i id="<?php echo $item['IdItem']; ?>" class="class-item-op fa fa-trash-o fa-lg"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        <?php }; ?>
                                                </tbody>
                                            </table>
                                            <div class="form-group">
                                            <button type="button" id="btn-add-product" name="btn-add-product"
                                                class="btn btn-primary"><i class="fa fa-plus"> </i> Adicionar Produto 
                                            </button>
                                            </div>

                                            <div class="ln_solid"></div>
                                            
                                        </div>
                                        <div class="item form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Código da Ordem
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input disabled id="id-order" class="form-control col-md-7 col-xs-12" name="name" type="text" value="<?php echo isset( $body['IdOrdem'] ) ? $body['IdOrdem'] : 0 ;?>">
                                            </div>
                                        </div>
                                        <div class="item form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Descrição <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input id="descricao" type="text" required="required" class="form-control col-md-7 col-xs-12" value="<?php echo isset( $body['Descricao'] ) ? $body['Descricao'] : '' ; ?>">
                                            </div>
                                        </div>
                                        <div class="item form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Empresa <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <?php
                                                    echo form_dropdown('empresa-name', $body['Empresas'] , isset( $body['IdEmpresa'] ) ? $body['IdEmpresa'] : -1 , 'class="form-control" id="id-empresa"');
                                                ?>
                                            </div>
                                        </div>

                                        <div class="item form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-6">Data de início previsto <span class="required">*</span>
                                            </label>
                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                <div class='input-group date' id='date-inicio-op'>                                              
                                                    <input id="data-init-prev" type='text' class="form-control"  />
                                                    <span class="input-group-addon">
                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-6">Data de fim previsto <span class="required">*</span>
                                            </label>
                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                <div class='input-group date' id='date-fim-op'>
                                                    <input id="data-final-prev" type='text' class="form-control"/>
                                                    <span class="input-group-addon">
                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Notas
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <textarea id="observacao" cols="45" rows="5" class="form-control col-md-7 col-xs-12"><?php echo isset( $body['Observacao'] ) ? $body['Observacao'] : ''  ;?></textarea>
                                            </div>
                                        </div>
                                        <div class="ln_solid"></div>
                                        <div class=" form-group">
                                            <div class="col-md-2 col-md-offset-5">
                                                <input id="save-order" class="btn btn-primary" value="Salvar Produção">
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-12 col-sm-12 col-xs-12" >
                            <div class="x_panel">

                                <div class="title_left">
                                    <h3>Composição <small>lista</small></h3>
                                </div>

                                <div class="x_content">

                                    <div class="table-responsive">
                                        <table class="table table-striped jambo_table">

                                            <thead>
                                                <tr class="headings">
                                                    <th class="column-title">Ref</th>
                                                    <th class="column-title">Descrição</th>
                                                    <th class="column-title">Unid</th>
                                                    <th class="column-title text-right">Layout </th>
                                                    <th class="column-title text-right">Quant</th>
                                                    <th class="column-title text-right">Sobra</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <?php
                                                foreach($body['Components'] as $component) { ?>
                                                <tr class="header even pointer">
                                                    <td class=" "><?php echo $component['IdProduto']?></td>
                                                    <td class=" "><?php echo $component['Produto'] ?></td>
                                                    <td class=" "><?php echo $component['Unidade'] ?></td>
                                                    <td class="text-right">0,00</td>
                                                    <td class="text-right"><?php echo $component['Quantidade'] ?></td>
                                                    <td class="text-right">0</td>
                                                </tr>
                                                <?php };?>

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- /page content -->

            <!-- footer content -->
            <?php include_once __ROOT__."/includes/footer.php"; ?>
            <!-- /footer content -->
            
        </div>
    </div>
    
    <!-- jQuery -->
    <script src="/pcp-lite/vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/pcp-lite/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/pcp-lite/vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/pcp-lite/vendors/nprogress/nprogress.js"></script>
    <!-- iCheck -->
    <script src="/pcp-lite/vendors/iCheck/icheck.min.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="/pcp-lite/build/js/custom.min.js"></script>
    <script src="/pcp-lite/vendors/moment/min/moment.min.js"></script>
    <script src="/pcp-lite/vendors/bootstrap-daterangepicker/daterangepicker.js"></script>
    <!-- bootstrap-datetimepicker -->
    <script src="/pcp-lite/vendors/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
    <!-- Ion.RangeSlider -->
    <script src="/pcp-lite/vendors/ion.rangeSlider/js/ion.rangeSlider.min.js"></script>
    <!-- Bootstrap Colorpicker -->
    <script src="/pcp-lite/vendors/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js"></script>    
    <!-- select2 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.full.js"></script>
    <!-- swal dialog -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <!-- validate form -->
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
    
    <script>

        $(document).ready(function() { 

            var iCount = 0;

            initializeSelect2();            

            $('#date-inicio-op').datetimepicker({
                format: 'DD.MM.YYYY HH:mm',
                defaultDate:  '<?php echo isset( $body['DataInitPrev'] ) ? $body['DataInitPrev'] : '' ;?>'
            });

            $('#date-fim-op').datetimepicker({
                format: 'DD.MM.YYYY HH:mm',
                defaultDate:  '<?php echo isset( $body['DataFinalPrev'] ) ? $body['DataFinalPrev'] : '' ;?>'
            });
           
            function initializeSelect2() {
            
                $(".auto-product").select2({                
                    placeholder: "Informe o produto",
                    minimumInputLength: 3,                
                    allowClear: true,
                    ajax: {
                        dataType: 'json',                    
                        delay: 250,
                        url: '/pcp-lite/product/search',
                        cache: false,
                        data: function ( params ) {                        
                            var query = {
                                term: params.term,
                                page: params.page || 1,
                            }                        
                            return query;
                        },                    
                        processResults: function( data, params ) {
                            params.page = params.page || 1;                        
                            return {
                                results: $.map(data.results, function (item) {
                                    return {
                                        text: item.description,
                                        id: item.id,
                                        page: params.page,
                                        pagination:  {more: (params.page * 30) < data.total}
                                    }
                                })
                            };
                        }
                    }
                });

            }

            $(document).on("click", ".class-item-op", function(e) {
                
                var id = $(this).attr('id');

                $.ajax({

                    url : '/pcp-lite/production/ProductionOrderItemDelete/'+id,
                    type: 'POST',
                    dataType: 'json',

                    success: function ( data ) {
                        window.location.reload(false); 
                    },

                    error: function (jqXHR, textStatus, exception) {
                        swal.fire(
                            'Ops!',
                            jqXHR.responseText,
                            'error'
                        )
                    }
                });

            });    

            $('#btn-add-product').click(function(){
                
                var row = '';
                iCount++;

                row += '<tr id="row'+iCount+'" data-id="'+iCount+'" class="header even pointer select-product">';
                row += '  <td width="450" class="">';
                row += '    <div class="col-md-12 col-sm-12 col-xs-12">';
                row += '        <select name="idproduct" id="id-product'+iCount+'" class="auto-product select-to-select2 form-control col-md-7 col-xs-6"></select>';
                row += '    </div>';
                row += '  </td>';
                row += '  <td width="150" class="">';
                row += '    <div class="col-md-12 col-sm-12 col-xs-12">';
                row += '        <input name="quanty" id="quanty'+iCount+'" class="form-control col-md-7 col-xs-6" type="number">';
                row += '    </div>';
                row += '  </td>';
                row += '  <td width="150" class="">';
                row += '    <div class="col-md-12 col-sm-12 col-xs-12">';
                row += '        <input name="lot-number" id="lot-number'+iCount+'" class="form-control col-md-7 col-xs-6" type="text">';
                row += '    </div>';
                row += '  </td>';
                row += '  <td width="250" class="">';
                row += '    <div class="col-md-12 col-sm-12 col-xs-12">';
                row += '        <input name="note" id="note'+iCount+'" class="form-control col-md-7 col-xs-6" type="text">';
                row += '    </div>';
                row += '  </td>';
                row += '  <td class="align-middle">';
                row += '    <div class="col-md-12 col-sm-12 col-xs-12">';
                row += '        <a><i class="fa fa-trash-o fa-lg"></i></a>';
                row += '    </div>';
                row += '  </td>';
                
                $('#product-order').append(row);            
                
                initializeSelect2();
                
            });        

            function getItems( items ) {

                var valid = true;
                
                $('.select-product').each( function() {
                        
                    var id = $(this).attr('data-id');
                    var idProduct = parseInt( $('#id-product'+id).val() ) || 0;
                    var quanty = parseFloat( $('#quanty'+id).val() ) || 0;
                    var lotNumber = $('#lot-number'+id).val();
                    var note = $('#note'+id).val();
                        
                    if ( idProduct == 0 || quanty == 0 ) {
                        valid = false;                            
                    }

                    items.push( { idProduct: idProduct, quanty: quanty, lotNumber: lotNumber, note: note } );

                } );
                    
                return valid;                

            };

            $('#save-order').click(function(){         

                var items = [];
                var valid = getItems( items );

                if ( valid ) {

                    var idOrdem = $('#id-order').val();
                    var descricao = $('#descricao').val();
                    var idEmpresa = parseInt( $('#id-empresa').val() ) || 0;
                    var dataInitPrev = $('#data-init-prev').val();
                    var dataFinalPrev = $('#data-final-prev').val();
                    var observacao = $('#observacao').val();

                    console.log(dataFinalPrev);


                    if ( dataInitPrev == ''  || dataFinalPrev == '' || idEmpresa == 0 || descricao == '') {
                        swal.fire(  'Ops!',
                                    'Preencha os campos obrigatórios!',
                                    'error'
                        );

                    }else{
                        
                        var data = { idOrdem: idOrdem,
                                    descricao: descricao,
                                    idEmpresa: idEmpresa,
                                    dataInitPrev: dataInitPrev,
                                    dataFinalPrev: dataFinalPrev,
                                    observacao: observacao,
                                    items: items,
                        };

                        $.ajax({

                            url : '/pcp-lite/production/ProductionOrderSave/',
                            type: 'POST',
                            dataType: 'json',
                            data: data,
                            success: function ( data ) {
                                document.location.reload(true);
                                return false;
                            },

                            error: function (jqXHR, textStatus, exception) {
                                swal.fire('Ops!',
                                        jqXHR.responseText,
                                        'error'
                                )
                            }
                        });
                    }

                }else{
                    swal.fire('Ops!',
                              'Preencha os campos obrigatórios!',
                              'error'
                    );
                }
                
            });

        });

    </script>

</body>

</html>