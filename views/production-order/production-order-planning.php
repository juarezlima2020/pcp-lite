<?php
  session_start();

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

    <title> Ideal Brasil</title>

    <!-- Bootstrap -->
    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="../vendors/iCheck/skins/flat/green.css" rel="stylesheet">
    <!-- Custom Theme Style -->
    <link href="../build/css/custom.min.css?v=2.1" rel="stylesheet">
    <!-- Date Picker Range -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

</head>

<body class="nav-md">
    <input id="order-op-index" type="hidden">
    <div class="container body">
        <div class="main_container">

            <!-- menu bar content -->
            <?php include_once __ROOT__."/includes/side-bar.php"; ?>
            <!-- /menu bar content -->

            <!-- header bar content -->
            <?php include_once __ROOT__."/includes/header.php"; ?>
            <!-- /header bar content -->        

            <!-- page content -->
            <div class="right_col" role="main" >
                <div class="" >
                    <div class="page-title">
                        <div class="title_left">
                            <h3>Planejamento <small>produção</small></h3>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="row">

                        <div class="clearfix"></div>

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="x_panel">
                                <div class="x_title">

                                    <div class="x_content">
                                        <div id="filter-group" class="form-group">
                                            <button type="button" value="0" class="btn btn-default active"><i class="fa fa-edit"> </i> &nbsp;Em Edição</button>
                                            <button type="button" value="1" class="btn btn-default"><i class="fa fa-unlock-alt"></i> &nbsp;Liberadas</button>
                                            <button type="button" value="2" class="btn btn-default"><i class="fa fa-lock"></i> &nbsp;Em Produção</button>
                                            <button type="button" value="4" class="btn btn-default"><i class="fa fa-lock"></i> &nbsp;Finalizadas</button>
                                            <button type="button" value="3" class="btn btn-default"><i class="fa fa-stop"></i> &nbsp;Canceladas</button>
                                            <div class="float-right col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" class="btn btn-default" />
                                            </div>
                                        </div>

                                    </div>

                                    
                                    <div class="clearfix"></div>
                                </div>

                                <div class="x_content" >

                                    <div class="table-responsive">
                                        <table class="table table-striped jambo_table">

                                            <thead>
                                                <tr class="headings">
                                                    <th class="column-title">Ordem </th>
                                                    <th class="column-title">Descrição </th>
                                                    <th class="column-title">Criação </th>
                                                    <th class="column-title">Início Previsto </th>
                                                    <th class="column-title">Término Previsto</th>
                                                    <th class="column-title">Início Realizado</th>
                                                    <th class="column-title">Término Realizado</th>
                                                    <th class="column-title">Custo Unitário</th>
                                                    <th class="column-title">Custo KG</th>
                                                    <th class="column-title">Custo<br>Total</th>
                                                    <th class="column-title">Tempo Produção</th>
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
            <?php include_once __ROOT__."/includes/footer.php"; ?>
            <!-- /footer content -->
        </div>
    </div>

    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    
    <!-- Bootstrap -->
    <script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- FastClick -->
    <script src="../vendors/fastclick/lib/fastclick.js"></script>

    <!-- NProgress -->
    <script src="../vendors/nprogress/nprogress.js"></script>

    <!-- bootstrap-progressbar -->
    <script src="../vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>

    <!-- iCheck -->
    <script src="../vendors/iCheck/icheck.min.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="../build/js/custom.min.js"></script>

    <!-- moment -->
    <script src="/pcp-lite/vendors/moment/min/moment.min.js"></script>

    <!-- date Picker Range -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

    <script type="text/javascript">

        $( document ).ready(function() {

            filterProductionOrder( 0 );

            function filterProductionOrder( i ) {

                $('#order-op-index').val( i );

                $.ajax({

                    url : '/pcp-lite/production/htmlProductionPlanning/'+i,
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

            $('#filter-group button').on('click', function() {

                $(this).addClass('active').siblings().removeClass('active');
                filterProductionOrder( $(this).val() );

            });

            $('input[name="daterange"]').daterangepicker({
                opens: 'left',
                startDate: moment().startOf('hour'),
                locale: {
                    format: 'DD/MM/YYYY'
                }
            }, function(start, end, label) {
                console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
            });

        });

    </script>    

</body>

</html>