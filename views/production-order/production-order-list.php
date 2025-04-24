<?php

session_start();

define('__ROOT__', $_SERVER["DOCUMENT_ROOT"] . '/pcp-lite');

?>

<!DOCTYPE html>
<html lang="br-pt">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc.. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title> Ideal Brasil</title>

    <!-- Bootstrap -->
    <link href="/pcp-lite/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/pcp-lite/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/pcp-lite/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="/pcp-lite/vendors/iCheck/skins/flat/green.css" rel="stylesheet">
    <!-- Custom Theme Style -->
    <link href="/pcp-lite/build/css/custom.min.css?v=2" rel="stylesheet">
</head>

<body class="nav-md">
    <input id="order-op-index" type="hidden">
    <input id='id-ordem' type="hidden">
    <header>
        <div id="md-pcp-result" class="modal fade" tabindex="-1" role="dialog" >        
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Resultado da analise do PCP</h3>
                    </div>
                    <div class="modal-body overflow-auto d-block" style="height: 70vh;">
                        <div class="container-fluid">

                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th class="text-right">Código</th>
                                <th>Matéria Prima</th>
                                <th class="text-right">Estoque</th>
                                <th class="text-right">Quantidade</th>
                                <th class="text-right">Norma</th>
                                <th class="text-right">Sobra</th>
                                <th class="text-right">Similar</th>
                              </tr>
                            </thead>
                            <tbody id="product-components" name="product-components">                              
                            </tbody>
                          </table>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="btn-release-op" class="btn btn-primary" data-dismiss="modal">Liberar</button>
                        <button class="btn" data-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="md-similar" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" style="max-width:70%">
                <div class="modal-content" data-toggle="popover" title="Analise PCP" data-placement="bottom" data-content="Matéria prima similar que possa substituir a original" >
                    <div class="modal-header">
                        <div class="title_left">
                            <h3>Matéria Prima <small>similares</small></h3>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                          <img src="/pcp-lite/images/no-image.png" class="img-responsive">

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </header>

    <div class="container body">

        <div class="main_container">

            <!-- menu bar content -->
            <?php include_once __ROOT__ . "/includes/side-bar.php";?>
            <!-- /menu bar content -->

            <!-- header bar content -->
            <?php include_once __ROOT__ . "/includes/header.php";?>
            <!-- /header bar content -->

            <!-- page content -->
            <div class="right_col" role="main">
                <div class="">
                    <div class="page-title">
                        <div class="title_left">
                            <h3>Ordem de Produção <small>lista</small></h3>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="row">

                        <div class="clearfix"></div>

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="x_panel">
                                <div class="x_title">

                                    <div class="x_title">

                                        <div class="form-group">
                                            <button type="button" onclick="location.href='/pcp-lite/production/production_order_edit/0';"
                                                class="btn btn-primary"><i class="fa fa-plus"> </i> Adicionar Ordem
                                            </button>
                                        </div>

                                    </div>

                                    <div class="x_content">
                                        <div id="filter-group" class="form-group btn-group-toggle">
                                            <button type="button" value="0" class="btn btn-default active"><i class="fa fa-edit"> </i> &nbsp;Em Edição</button>
                                            <button type="button" value="1" class="btn btn-default"><i class="fa fa-unlock-alt"></i> &nbsp;Liberadas</button>
                                            <button type="button" value="2" class="btn btn-default"><i class="fa fa-lock"></i> &nbsp;Em Produção</button>
                                            <button type="button" value="4" class="btn btn-default"><i class="fa fa-lock"></i> &nbsp;Finalizadas</button>
                                            <button type="button" value="3" class="btn btn-default"><i class="fa fa-stop"></i> &nbsp;Canceladas</button>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                                <div class="x_content" >

                                    <div class="table-responsive">
                                        <table class="table table-striped jambo_table">

                                            <thead>
                                                <tr class="headings" >
                                                    <th class="column-title no-link last"><span class="nobr">Ações</span>
                                                    <th class="column-title">Ordem </th>
                                                    <th class="column-title">Descrição </th>
                                                    <th width="70" class="column-title">Data Criação </th>
                                                    <th width="70" class="column-title">Data Início</th>
                                                    <th width="70" class="column-title">Data Término</th>
                                                    <th width="100" class="column-title">Tempo Produção </th>
                                                    <th class="column-title">Situação </th>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody id="result">
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
            <?php include_once __ROOT__ . "/includes/footer.php";?>
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

    <!-- bootstrap-progressbar -->
    <script src="/pcp-lite/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>

    <!-- iCheck -->
    <script src="/pcp-lite/vendors/iCheck/icheck.min.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="/pcp-lite/build/js/custom.min.js"></script>

    <!-- PNotify -->
    <script src="/pcp-lite/vendors/pnotify/dist/pnotify.js" type="text/javascript"></script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

    <script type="text/javascript">

        $( document ).ready(function() {

            filterProductionOrder( 0 );

            function filterProductionOrder( i ) {
                $('#order-op-index').val( i );
                $.ajax({

                    url : '/pcp-lite/production/htmlProductionOrders/'+i,
                    type: 'POST',
                    dataType: 'json',

                    success: function ( data ) {
                        $( '#result' ).html( data.result );
                    },

                    error: function (jqXHR, textStatus, exception) {
                        swal.fire(
                            'Ops!',
                            jqXHR.responseText,
                            'error'
                        )
                    }
                });
            }

            $(document).on("click", "ul.class-item-production li", function(e) {

                var id  = $(this).attr('data-id');
                var url = $(this).attr('data-url');

                $.ajax({

                    url : url+id,
                    type: 'POST',
                    dataType: 'json',

                    success: function ( data ) {
                        if ( data.result ) {
                            var i = $('#order-op-index').val();
                            filterProductionOrder( i );
                        }
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

            $(document).on("click", "#menu-release-op", function(e) {

                $('#id-ordem').val($(this).attr('data-id'));

            });

            $(document).on("click", "#menu-print-op", function(e) {             

                var id  = $(this).attr('data-id');                

                $.ajax({
                    
                    url : '/pcp-lite/production/htmlPrintProductionOrder/'+id,
                    type: 'GET',

                    success: function ( data ) {
                        var mywindow = window.open('', 'my div', 'height=400,width=600,toolbars=no,scrollbars=no,status=no,resizable=no');
                        mywindow.document.writeln(data);
                        mywindow.document.close();
                        mywindow.focus();
                        mywindow.print();
                        mywindow.close();
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

            $(document).on("click", "#menu-cancel-op", function(e) {             

                var id  = $(this).attr('data-id');                

                $.ajax({

                    url : '/pcp-lite/production/ProductionOrderStatusCancel/'+id,
                    type: 'POST',
                    dataType: 'json',

                    success: function ( data ) {
                        if ( data.result ) {
                            var i = $('#order-op-index').val();
                            filterProductionOrder( i );
                        }
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

            $('#filter-group button').on('click', function() {

                $(this).addClass('active').siblings().removeClass('active');
                filterProductionOrder( $(this).val() );

            });

            $('#btn-release-op').on('click', function() {

                var idOrdem = $('#id-ordem').val();

                $.ajax({

                    url : '/pcp-lite/production/ProductionOrderStatusRelease/'+idOrdem,
                    type: 'POST',
                    dataType: 'json',

                    success: function ( data ) {
                        if ( data.result ) {
                            var i = $('#order-op-index').val();
                            filterProductionOrder( i );
                        }
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

            $(document).on("click", ".class-processar-op", function () {

                var idOrdem = $( this ).attr( 'data-id' );

                $.ajax({

                    url : '/pcp-lite/production/htmlProductComponents/'+idOrdem,
                    type: 'POST',
                    dataType: 'json',

                    success: function ( data ) {
                        $('#product-components').html( data.result );
                    },

                    error: function (jqXHR, textStatus, exception) {
                        swal.fire(
                            'Ops!',
                            jqXHR.responseText,
                            'error'
                        )
                    }
                });

            })

        });

    </script>

</body>

</html>