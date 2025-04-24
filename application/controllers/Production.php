<?php

date_default_timezone_set('America/Bahia');

class Production extends CI_Controller
{

    private $result = '';
    private $disableMenuItem;

    public function __construct()
    {
        // Construct the parent class
        parent::__construct();
        $this->load->library('FunctionsHelper');
        $this->load->library('EnumOrderHelper');
        $this->load->model('Production_model');
        $this->load->model('Empresa_model');

    }

    public function ProductionOrderItemStatusFinished($id)
    {

        $this->Production_model->ProductionOrderItemStatusFinished($id);

    }

    public function ProductionOrderItemStatusProduction($id)
    {

        $this->Production_model->ProductionOrderItemStatusProduction($id);

    }    

    public function ProductionOrderStatusRelease($id)
    {

        $this->Production_model->ProductionOrderStatusRelease($id);

    }

    public function ProductionOrderStatusCancel($id)
    {

        $this->Production_model->ProductionOrderStatusCancel($id);

    }    

    public function ProductionOrderItemDelete($id) {

      $this->Production_model->DeleteItem($id);

    }

    public function ProductionOrderSave() {

        $data = $this->input->post();        

        return $this->Production_model->Save($data);
  
    }
  
    public function production_order()
    {

        $this->load->view('production-order/production-order-list');

    }

    public function production_planning()
    {

        $this->load->view('production-order/production-order-planning');

    }

    public function production_order_edit($id)
    {
        $data['body'] = $this->Production_model->getProductionOrder($id);
        $data['body']['Items'] = $this->Production_model->getProductionOrderItems($id);
        $data['body']['Empresas'] = $this->Empresa_model->getEmpresas();
        $data['body']['Components'] = $this->Production_model->getProductComponents($id);
        $this->load->view('production-order/production-order-edit', $data);
    }

    private function getDataFinalPrevGui($row)
    {
        
        return 'Prev.:<br>' . $row['DataFinalPrevFmt'];

    }

    private function getDataFinalRealGui($row)
    {

        $breakLine = isset($row->DATA_INIC_REAL) ? 'Em Andamento' : '';
        $return = isset($row->DATA_FINAL_REAL) ? $this->functionshelper->DateTimeShortFormat($row->DATA_FINAL_REAL) : $breakLine;
        return '<br><br>Real.:<br>' . $return;

    }

    private function getDataInitRealGui($row)
    {

        $return = isset($row['DataInitReal']) ? $row['DataInitRealFmt'] : '';
        return '<br><br>Real.:<br>' . $return;

    }

    private function getDataInitPrevGui($row)
    {
        
        return 'Prev.:<br>' . $row['DataInitPrevFmt'];

    }

    private function getDataCreatedGui($row)
    {

        $breakLine = isset($row['DataInitReal']) ? '<br>' : '<br><br>';
        $return = isset($row['DataInitReal']) ? $row['DataCreatedFmt'] . $breakLine :  $row['DataCreatedFmt'];
        return $return . '<br><br>' . $breakLine;

    }

    public function htmlProductComponents($id)
    {

        $this->result = '';

        $data = $this->Production_model->getProductComponents($id);

        foreach ($data as $item) {
            $this->result .= '<tr ';
            $this->result .= $item['CheckEstoque'] ? '' : 'class="text-danger"';
            $this->result .= '>';
            $this->result .= '  <td class="text-right">' . $item['IdProduto'] . '</td>';
            $this->result .= '  <td class="text-left"> ' . $item['Produto'] . '</td>';
            $this->result .= '  <td class="text-right">' . $item['Estoque'] . '</td>';
            $this->result .= '  <td class="text-right">' . $item['Quantidade'] . '</td>';
            $this->result .= '  <td class="text-right">0,00</td>';
            $this->result .= '  <td class="text-right">0,00</td>';
            $this->result .= '  <td class="text-center">';
            $this->result .= '     <a data-toggle="modal" data-target="#md-similar" href="#" class="text-danger"><i class="fa fa-edit"></i></a></td>';
            $this->result .= '</tr>';
        }

        echo json_encode(array('result' => $this->result, 'total' => count($data)));

    }

    public function htmlProductionOrders($status) {

        $data = $this->Production_model->getProductionOrders( $status );

        foreach ( $data as $row ) {

            $hRefEdit = $row['Status'] == $this->enumorderhelper->getOrderEditingValue() ? '' : 'btn disabled';
            $hRefRelease = $row['Status'] == $this->enumorderhelper->getOrderEditingValue() ? '' : 'btn disabled';
            $hRefCancel = in_array($row['Status'], [$this->enumorderhelper->getOrderReleasedValue(), $this->enumorderhelper->getOrderProductionValue()]) ? '' : 'btn disabled';

            $this->result .= '<tr class="h6 header even pointer">';
            $this->result .= '    <td class=" last">';
            $this->result .= '       <div class="btn-group">';
            $this->result .= '           <button data-toggle="dropdown" class="btn btn-default dropdown-toggle" type="button" aria-expanded="false">Selecione <span class="caret"></span>';
            $this->result .= '           </button>';
            $this->result .= '           <ul role="menu" class="dropdown-menu class-production">';
            $this->result .= '               <li><a class="pull-left ' . $hRefEdit . '" href="/pcp-lite/production/production_order_edit/' . $row['IdOrdem'] . '">Editar</a></li>';
            $this->result .= '               <li><a data-toggle="collapse" data-target="#accordion-' . $row['IdOrdem'] . '" href="#">Detalhar</a></li>';
            $this->result .= '               <li id="menu-release-op" data-id="' . $row['IdOrdem'] . '"><a class="class-processar-op pull-left ' . $hRefRelease . '" data-toggle="modal" data-id="' . $row['IdOrdem'] . '" data-target="#md-pcp-result" href="#">Liberar</a></li>';
            $this->result .= '               <li id="menu-print-op" data-id="' . $row['IdOrdem'] . '"><a class="pull-left" href="#">Imprimir</a></li>';
            $this->result .= '               <li id="menu-cancel-op" data-id="' . $row['IdOrdem'] . '"><a class="pull-left ' . $hRefCancel . '" href="#">Cancelar</a></li>';
            $this->result .= '           </ul>';
            $this->result .= '       </div>';
            $this->result .= '   </td>';
            $this->result .= '   <td class="">' . $row['IdOrdem'] . '</td>';

            $percent = 0;
            if (isset($row['DataInitReal'])) {
                $dataFinal = isset($row['DataFinalReal']) ? $row['DataFinalReal'] : $row['DataFinalPrev'];
                $percent = floor($this->functionshelper->DatesProgress($row['DataInitReal'], $dataFinal));
                $percent = $percent > 100 ? 100 : $percent;

                //progress-bar-danger
            }

            $this->result .= '   <td class="">' . $row['Descricao'];
            $this->result .= '       <div class="w_center w_55">';
            $this->result .= '           <div class="progress h-18p mb-0">';
            $this->result .= '               <div class="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="' . $percent . '" aria-valuemin="0" aria-valuemax="100" style="width: ' . $percent . '%;">' . $percent . '%';
            $this->result .= '               </div>';
            $this->result .= '           </div>';
            $this->result .= '       </div>';
            $this->result .= '   </td>';

            $dataCreated = $this->getDataCreatedGui($row);
            $dataInic = $this->getDataInitPrevGui($row) . $this->getDataInitRealGui($row);
            $dataFinal = $this->getDataFinalPrevGui($row) . $this->getDataFinalRealGui($row);

            $this->result .= '   <td class="text-nowrap">' . $dataCreated . '<br><br>';
            $this->result .= 'CUSTO<br>UNITÁRIO:<br>' . $this->functionshelper->MoneyFormat($row['CustoUnitario']) . '</td>';

            $this->result .= '   <td class="text-nowrap">' . $dataInic . '<br><br>';
            $this->result .= 'CUSTO<br>KG:<br>' . $this->functionshelper->MoneyFormat($row['CustoKG']) . '</td>';

            $this->result .= '   <td class="text-nowrap">' . $dataFinal . '<br><br>';
            $this->result .= 'CUSTO<br>TOTAL:<br>' . $this->functionshelper->MoneyFormat($row['CustoTotal']) . '</td>';

            $this->result .= '   <td class=""><kbd>' . $this->functionshelper->DateTimeDiff($row['DataInitPrev'], $row['DataFinalPrev']) . '</kbd><br><kbd>' . $this->functionshelper->DateTimeDiff($row['DataInitReal'], isset($row['DataFinalReal']) ? $row['DataFinalReal'] : date("Y-m-d H:i:s")) . '</kbd></td>';
            $this->result .= '   <td class="">' . $this->enumorderhelper->getStatusOrderGui($row['Status']) . '</td>';
            $this->result .= '</tr>';

            $items = $this->Production_model->getProductionOrderItems($row['IdOrdem']);

            $this->result .= '<tr id="accordion-' . $row['IdOrdem'] . '" class="collapse">';
            $this->result .= '   <td colspan="10">';
            $this->result .= '       <div class="" >';
            $this->result .= '           <table class="table table-hover table-border-left">';
            $this->result .= '               <thead style="background-color: white; color: #73879C">';
            $this->result .= '                   <tr>';
            $this->result .= '                       <th class="text-center">Quantidade</th>';
            $this->result .= '                       <th>Ref</th>';
            $this->result .= '                       <th class="text-left">Produto</th>';
            $this->result .= '                       <th width="70" class="column-title">Início da Produção</th>';
            $this->result .= '                       <th width="70" class="column-title">Fim da Produção</th>';
            $this->result .= '                       <th width="70" class="column-title">Lote Número</th>';
            $this->result .= '                       <th>Ações</th>';
            $this->result .= '                   </tr>';
            $this->result .= '               </thead>';
            $this->result .= '               <tbody>';

            foreach ($items as $item) {

                // desabilita o menu dos itens se a "Ordem" não estiver sido "Processada"
                $this->disableMenuItem = in_array($row['Status'], [$this->enumorderhelper->getOrderReleasedValue(), $this->enumorderhelper->getOrderProductionValue()]) ? '' : 'disabled';

                $this->result .= $this->htmlProductionOrdersItem($item);

            }

            $this->result .= '                </tbody>';
            $this->result .= '           </table>';
            $this->result .= '       </div>';
            $this->result .= '   </td>';
            $this->result .= '</tr>';

        }

        echo json_encode(array('result' => $this->result, 'total' => count($data)));

    }

    public function htmlProductionPlanning($status) {

        $data = $this->Production_model->getProductionOrders( $status );

        foreach ( $data as $row ) {

            $hRefEdit = $row['Status'] == $this->enumorderhelper->getOrderEditingValue() ? '' : 'btn disabled';
            $hRefRelease = $row['Status'] == $this->enumorderhelper->getOrderEditingValue() ? '' : 'btn disabled';
            $hRefCancel = in_array($row['Status'], [$this->enumorderhelper->getOrderReleasedValue(), $this->enumorderhelper->getOrderProductionValue()]) ? '' : 'btn disabled';

            $this->result .= '<tr class="h6 header even pointer">';
            $this->result .= '   <td class="">' . $row['IdOrdem'] . '</td>';

            $percent = 0;
            if (isset($row['DataInitReal'])) {
                $dataFinal = isset($row['DataFinalReal']) ? $row['DataFinalReal'] : $row['DataFinalPrev'];
                $percent = floor($this->functionshelper->DatesProgress($row['DataInitReal'], $dataFinal));
                $percent = $percent > 100 ? 100 : $percent;
            }

            $this->result .= '   <td class="">' . $row['Descricao'];
            $this->result .= '       <div class="w_center w_55">';
            $this->result .= '           <div class="progress h-18p mb-0">';
            $this->result .= '               <div class="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="' . $percent . '" aria-valuemin="0" aria-valuemax="100" style="width: ' . $percent . '%;">' . $percent . '%';
            $this->result .= '               </div>';
            $this->result .= '           </div>';
            $this->result .= '       </div>';
            $this->result .= '   </td>';

            $this->result .= '   <td class="text-nowrap">' . $row['DataCreatedFmt'] . '</td>';
            $this->result .= '   <td class="text-nowrap">' . $row['DataInitPrevFmt'] . '</td>';
            $this->result .= '   <td class="text-nowrap">' . $row['DataFinalPrevFmt'] . '</td>';
            $this->result .= '   <td class="text-nowrap">' . $row['DataInitRealFmt'] . '</td>';
            $this->result .= '   <td class="text-nowrap">' . $row['DataFinalRealFmt'] . '</td>';
            $this->result .= '   <td class="text-nowrap">' . $row['CustoUnitarioFmt'] . '</td>';
            $this->result .= '   <td class="text-nowrap">' . $row['CustoKGFmt'] . '</td>';
            $this->result .= '   <td class="text-nowrap">' . $row['CustoTotalFmt'] . '</td>';
            $this->result .= '   <td class=""><kbd>' . $this->functionshelper->DateTimeDiff($row['DataInitPrev'], $row['DataFinalPrev']) . '</kbd><br><kbd>' . $this->functionshelper->DateTimeDiff($row['DataInitReal'], isset($row['DataFinalReal']) ? $row['DataFinalReal'] : date("Y-m-d H:i:s")) . '</kbd></td>';
            $this->result .= '   <td class="">' . $this->enumorderhelper->getStatusOrderGui($row['Status']) . '</td>';
            $this->result .= '</tr>';

        }

        echo json_encode(array('result' => $this->result, 'total' => count($data)));

    }    

    public function htmlProductionOrdersItem($item)
    {

        $htmlItem = '';

        if (isset($item)) {

            // habilita o item "Iniciar Produção" se status for "Pendente"
            $hRefStart = $item['Status'] == $this->enumorderhelper->getItemPendantValue() ? '' : 'btn disabled';

            // habilita o item "Finalizar Produção" se status for "Em Produção"
            $hRefFinish = $item['Status'] == $this->enumorderhelper->getItemProductionValue() ? '' : 'btn disabled';

            // desabilita todo o menu se status for "Finalizado"
            $hRefMenu = $item['Status'] == $this->enumorderhelper->getItemFinishedValue() ? 'btn disabled' : $this->disableMenuItem;

            $dataFinal = isset($item['DataFinalReal']) ? $item['DataFinalRealFmt'] : '<br>';
            $dataInic = isset($item['DataInitReal'])   ? $item['DataInitRealFmt']  : '<br>';
            $loteNumero = isset($item['DataInitReal'])   ? $item['LoteNumero']  : '<br>';

            $htmlItem .= '  <tr id="order-item' . $item['IdItem'] . '" class="h6">';
            $htmlItem .= '    <td class="text-center">' . $this->functionshelper->FloatFormat($item['Quantidade']) . '</td>';
            $htmlItem .= '    <td>' . $item['IdProduto'] . '</td>';
            $htmlItem .= '    <td class="text-left">' . $item['Produto'] . '</td>';

            $htmlItem .= '    <td class="text-nowrap">' . $dataInic . '<br><br><br>';
            $htmlItem .= 'CUSTO<br>UNITÁRIO:<br>' . $item['CustoUnitarioFmt'] . '</td>';

            $htmlItem .= '    <td class="text-nowrap">' . $dataFinal . '<br><br><br>';
            $htmlItem .= 'CUSTO<br>KG:<br>' . $item['CustoKGFmt'] . '</td>';

            $htmlItem .= '    <td class="text-nowrap">' . $loteNumero . '<br><br><br>';
            $htmlItem .= 'CUSTO<br>TOTAL:<br>' . $item['CustoTotalFmt'] . '</td>';

            $htmlItem .= '    <td class=" last">';
            $htmlItem .= '      <div class="btn-group">';
            $htmlItem .= '        <button data-toggle="dropdown" class="btn btn-default dropdown-toggle"' . $hRefMenu . ' type="button" aria-expanded="false"> ' . $this->enumorderhelper->getStatusOrderItemGui($item['Status']) . ' <span class="caret"></span>';
            $htmlItem .= '        </button>';
            $htmlItem .= '        <ul role="menu" class="dropdown-menu class-item-production">';
            $htmlItem .= '          <li data-url="/pcp-lite/production/ProductionOrderItemStatusProduction/" data-id="' . $item['IdItem'] . '"><a class="pull-left ' . $hRefStart . '"  href="#">Iniciar Produção</a></li>';
            $htmlItem .= '          <li data-url="/pcp-lite/production/ProductionOrderItemStatusFinished/" data-id="' . $item['IdItem'] . '"><a class="pull-left ' . $hRefFinish . '" href="#">Finalizar Produção</a></li>';
            $htmlItem .= '        </ul>';
            $htmlItem .= '      </div>';
            $htmlItem .= '    </td>';
            $htmlItem .= '  </tr>';

        }

        return $htmlItem;

    }

    public function htmlPrintProductionOrder($id)
    {
        $data['body'] = $this->Production_model->getProductionOrder($id);
        $data['body']['Items'] = $this->Production_model->getProductionOrderItems($id);
        $data['body']['Components'] = $this->Production_model->getProductComponents($id);

        $this->load->view('production-order/production-order-print', $data);

    }

}
