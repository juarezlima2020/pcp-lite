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
    <title>Ordem de Produção</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <!-- Bootstrap -->
    <link href="/pcp-lite/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {            
            width: 210mm;
            display: table-cell;
            vertical-align: middle;            
        }

        html {
            display: table;
            margin: auto;
        }

        table{
            border-left: 1px solid red;
            border-right: 1px solid red;
        }

        th,
        td {
            vertical-align: middle;
            
        }
        .text-body {
            font-size: 12px;
            height: 20px;
        }
        .h-25{
            height: 25px;
        }
        .h-10{
            height: 10px;
        }
        .w-50{
            width: 50px;
        }

    </style>

</head>

<body>
    <table class="table table-hover">
        <tbody>
            <tr>
                <td style="width: 50px; height: 50px; text-align: center;"><img
                        src="/pcp-lite/images/logo.png" onerror="this.src='/pcp-lite/images/no-image.png'"
                        width="50" height="50" /></td>
                <td colspan="5" class="text-center"><strong><?php echo $body['Empresa']; ?><br/>ORDEM Nº <?php echo $body['IdOrdem']; ?></strong></td>
                <td class="text-body text-center w-50">IMPRESSO<br /><?php echo date('d/m/Y'); ?><br/><?php echo date('H:i'); ?></td>
            </tr>
            <tr rowspan="6" style="padding: 0; margin: 0; height: 10px;">
            </tr>
            <tr>
                <td colspan="7" class="text-center h-25"><strong>DADOS DA ORDEM DE PRODUÇÃO</strong>
                </td>
            </tr>
            <tr class="text-body">
                <td>DESCRI&Ccedil;&Atilde;O</td>
                <td colspan="4"><?php echo $body['Descricao']?></td>
                <td>SITUA&Ccedil;&Atilde;O</td>
                <td class="text-nowrap"><?php echo $body['StatusGui'];?></td>
            </tr>
            <tr class="text-body">
                <td>PREVISÃO INÍCIO</td>
                <td colspan="4"><?php echo $body['DataInitPrevFmt'];?></td>
                <td>PREVISÃO FIM</td>
                <td class="text-nowrap"><?php echo $body['DataFinalPrevFmt'];?></td>
            </tr>
            <tr class="text-body">
                <td>RESPONSÁVEL</td>
                <td colspan="4">JO&Atilde;O DA SILVA</td>
                <td>CRIA&Ccedil;&Atilde;O</td>
                <td class="text-nowrap"><?php echo $body['DataCreatedFmt'];?></td>
            </tr>
            <tr class="text-body">
                <td>OBSERVAÇÃO</td>
                <td colspan="6"><?php echo $body['Observacao'];?></td>
            </tr>

            <tr rowspan="6" class="h-10">
            </tr>
            <tr class="h-25">
                <td colspan="7" class="text-center"><strong>PRODUTOS</strong></td>
            </tr>
            <tr class="h-25">
                <th>QUANTIDADE</th>
                <th>REF</th>
                <th>PRODUTO</th>
                <th colspan="3" style="width: 0px; text-align: center;">UNIDADE</th>
                <th>Lote</th>
            </tr>

            <?php
            foreach ($body['Items'] as $item) { ;?>           
                <tr class="text-body">
                    <td><?php echo $this->functionshelper->FloatFormat($item['Quantidade']); ?></td>
                    <td><?php echo $item['IdProduto']; ?></td>
                    <td><?php echo $item['Produto']; ?></td>
                    <td colspan="3" class="text-center"><?php echo $item['Embalagem']; ?></td>
                    <td class="text-nowrap"><?php echo $item['LoteNumero']; ?></td>
                </tr>

            <?php } ;?>

            <tr class="h-25">
                <td colspan="7" class="text-center"><strong>COMPOSIÇÃO</strong></td>
            </tr>

            <tr class="h-25">
                <th>QUANTIDADE</th>
                <th>REF</th>
                <th colspan="4">PRODUTO</th>
                <th class="text-center">UNIDADE</th>
            </tr>

            <?php
            foreach ($body['Components'] as $item) { ;?>           
                <tr class="text-body">
                    <td><?php echo $this->functionshelper->FloatFormat($item['Quantidade']); ?></td>
                    <td><?php echo $item['IdProduto']; ?></td>
                    <td colspan="4" ><?php echo $item['Produto']; ?></td>
                    <td class="text-center"><?php echo $item['Unidade']; ?></td>
                    
                </tr>
            <?php } ;?>       
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td colspan="4">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </tbody>
    </table>

</body>

</html>