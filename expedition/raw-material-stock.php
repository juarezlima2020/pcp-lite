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
    <link href="../build/css/custom.min.css" rel="stylesheet">

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
                            <h3>Matéria Prima <small>estoque</small></h3>
                        </div>

                        <div class="title_right">
                            <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Localizar...">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="row">

                        <div class="clearfix"></div>

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="x_panel">
                                <div class="x_title">

                                    <div class="x_content">
                                        <div class="form-group">
                                        <button type="button" class="btn btn-default"> <i class="fa fa-minus-square"></i> Positivo </button>
                                        <button type="button" class="btn btn-default"> <i class="fa fa-plus-square"></i> Negativo </button>
                                        <button type="button" class="btn btn-default"> <i class="fa fa-stop"></i> Zerado </button>

                                        <button data-toggle="dropdown" class="btn btn-default dropdown-toggle" type="button" aria-expanded="false"> Fornecedor <span class="caret"></span>
                                        </button>
                                        <ul role="menu" class="dropdown-menu">
                                            <li><a data-toggle="collapse" data-target="#accordion-02" href="#">BATURROS CONFECÇÕES E IMPRESSOS LTDA - EPP</a>
                                            </li>
                                            <li><a data-toggle="collapse" data-target="#accordion-01" href="#">BRUXS TEXTIL LTDA</a>
                                            </li>
                                        </ul>

                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                                <div class="x_content" data-toggle="popover" title="Matéria Prima" data-placement="top" data-content="Lista de estoque da matéria prima por endereçamento" >

                                    <div class="table-responsive">
                                        <table class="table table-striped jambo_table">

                                            <thead>
                                                <tr class="headings">
                                                    <th class="column-title">Ref </th>
                                                    <th class="column-title">Descrição </th>
                                                    <th class="column-title">Unid </th>
                                                    <th class="column-title">Saldo Estoque </th>
                                                    <th class="column-title">Depósito </th>
                                                    <th class="column-title">Local </th>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr class="header even pointer">
                                                    <td class=" ">121000040</td>
                                                    <td class=" ">ALMOFADINHA PICOLÉ, AMARELO, INTERNO </td>
                                                    <td class=" ">MT</td>
                                                    <td class=" ">150</td>
                                                    <td class=" ">CONFECCAO</td>
                                                    <td class=" ">A13</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15245</td>
                                                <td class=" ">ALMOFADINHA PICOLÉ, AMARELO, INTERNO</td>
                                                <td class=" ">MT</td>
                                                <td class=" ">11</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">13</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15246</td>
                                                <td class=" ">ALMOFADINHA PICOLÉ, ROSA, INTERNO</td>
                                                <td class=" ">MT</td>
                                                <td class=" ">34</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">14</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15247</td>
                                                <td class=" ">BRIM SANTORINI, PINK 0340, PARANATEX</td>
                                                <td class=" ">MT</td>
                                                <td class=" ">11</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">15</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <tr class="even pointer">
                                                <td class=" ">15248</td>
                                                <td class=" ">BRIM SANTORINI, PT 040, PARANATEX</td>
                                                <td class=" ">MT</td>
                                                <td class=" ">22</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">16</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15249</td>
                                                <td class=" ">BRIM SANTORINI, ROSA 3010, PARANATEX</td>
                                                <td class=" ">MT</td>
                                                <td class=" ">33</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">17</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <tr class="even pointer">
                                                <td class=" ">15250</td>
                                                <td class=" ">CORDÃO 5/2 GEOTEX 100% POLIPROPILENO (TUBO 1KG REND. 160MT - R$20,00), BRANCO, DIMASOL</td>
                                                <td class=" ">MT</td>
                                                <td class=" ">44</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">18</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15251</td>
                                                <td class=" ">CURSOR E PUXADOR FZP, IMPORTADO, BRANCO, DIMASOL</td>
                                                <td class=" ">MT</td>
                                                <td class=" ">56</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">19</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15252</td>
                                                <td class=" ">ENCHIMENTO RETANGULAR P/M, BRANCO, CELSO</td>
                                                <td class=" ">MT</td>
                                                <td class=" ">150</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">20</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15253</td>
                                                <td class=" ">ESTAMPA CILINDRO, CLF017 LISTRADO FINO CHOCOLATE, 2 CORES, MODAL</td>
                                                <td class=" ">MT</td>
                                                <td class=" ">45</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">21</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15254</td>
                                                <td class=" ">ESTAMPA CILINDRO, CLF017 LISTRADO FINO ROSA NEON, 2 CORES, MODAL</td>
                                                <td class=" ">UN</td>
                                                <td class=" ">350</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">22</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15255</td>
                                                <td class=" ">ESTAMPA CILINDRO, CPI016 PICOLÉ NAPOLITANO, 5 CORES, MODAL</td>
                                                <td class=" ">UN</td>
                                                <td class=" ">150</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">23</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15256</td>
                                                <td class=" ">FIO 100% POLIÉSTER TEXTURIZADO OVERLOQUE, BRANCO 000, REF 23 TEX, WLAMAR</td>
                                                <td class=" ">UN</td>
                                                <td class=" ">-152</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">24</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15257</td>
                                                <td class=" ">LINHA 100% POLIAMIDA, BEGE 215, NZ-60, LINHASITA</td>
                                                <td class=" ">UN</td>
                                                <td class=" ">150</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">25</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15258</td>
                                                <td class=" ">LINHA 100% POLIAMIDA, PINK 240, NZ-60, LINHASITA</td>
                                                <td class=" ">UN</td>
                                                <td class=" ">-1</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">26</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15259</td>
                                                <td class=" ">LINHA 100% POLIAMIDA, ROSA 237, NZ-60, LINHASITA</td>
                                                <td class=" ">UN</td>
                                                <td class=" ">0</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">27</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15260</td>
                                                <td class=" ">LINHA 100% POLIAMIDA, ROSA BB CLARO 239, NZ-60, LINHASITA</td>
                                                <td class=" ">UN</td>
                                                <td class=" ">212</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">28</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15261</td>
                                                <td class=" ">LINHA 100% POLIESTER, BEGE 29, REF XIK 120, SETTA</td>
                                                <td class=" ">UN</td>
                                                <td class=" ">150</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">29</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15262</td>
                                                <td class=" ">LINHA 100% POLIESTER, ROSA BB CLARO 854, REF XIK 120, SETTA</td>
                                                <td class=" ">PC</td>
                                                <td class=" ">150</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">30</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15263</td>
                                                <td class=" ">PINO PLÁSTICO 40MM, 100% POLIPROPILENO, NEUTRO, WORLD PEÇAS </td>
                                                <td class=" ">PC</td>
                                                <td class=" ">34</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">31</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15264</td>
                                                <td class=" ">SACO PLÁSTICO M, CRISTAL (75X110X0,08 - 16 UN/KG / MÍNIMO COMPRA 30KG), ALTER</td>
                                                <td class=" ">PC</td>
                                                <td class=" ">54</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">32</td>
                                                </tr>

                                                <tr class="header odd pointer">
                                                <td class=" ">15265</td>
                                                <td class=" ">TAG WOOF, BRANCO, ART GRÁFICA DESIGN</td>
                                                <td class=" ">PC</td>
                                                <td class=" ">789</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">33</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15266</td>
                                                <td class=" ">TNT G120, PRETO, SANTA FÉ </td>
                                                <td class=" ">CX</td>
                                                <td class=" ">65</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">34</td>
                                                </tr>

                                                <td class=" ">15267</td>
                                                <td class=" ">TNT G40, BRANCO, SANTA FÉ </td>
                                                <td class=" ">CX</td>
                                                <td class=" ">4</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">35</td>
                                                </tr>

                                                <tr class="even pointer">
                                                <td class=" ">15268</td>
                                                <td class=" ">ZÍPER FZP,IMPORTADO. BRANCO, DIMASOL</td>
                                                <td class=" ">CX</td>
                                                <td class=" ">3</td>
                                                <td class=" ">CONFECCAO</td>
                                                <td class=" ">36</td>
                                                </tr>                                                
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

</body>

</html>