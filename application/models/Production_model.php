<?php

class Production_model extends CI_Model {

    public function __construct()
    {
        // Construct the parent class
        parent::__construct();
        $this->load->helper('log_manager_helper');

    }

    public function ProductionOrderItemStatus($id, $status)
    {

        $this->db->trans_start();
        $sql = "UPDATE ORDEM_PRODUCAO_ITEM SET STATUS = ? WHERE ID_OITEM = ?";
        $this->db->query($sql, [$status, $id]);
        $this->db->trans_complete();

        echo json_encode(array('result' => true));

    }

    private function getSQLProductionOrders($status)
    {
        $sql = "SELECT ORDEM_PRODUCAO.*, EMPRESA.NOME_TRAT EMPRESA FROM ORDEM_PRODUCAO JOIN EMPRESA ON EMPRESA.ID_EMP=ORDEM_PRODUCAO.ID_EMP WHERE STATUS = %d ";
        return sprintf($sql, $status);
    }

    private function mappProductionOrder($row)
    {
      $data['IdOrdem'] = $row->ID_ORDEM;
      $data['Descricao'] = iconv("Windows-1252", "utf-8//IGNORE", $row->DESCRICAO);
      $data['IdEmpresa'] = $row->ID_EMP;
      $data['Empresa'] = $row->EMPRESA;
      $data['DataCreated'] = $row->DATA_CREATED;
      $data['DataInitPrev'] = $row->DATA_INIC_PREV;
      $data['DataFinalPrev'] = $row->DATA_FINAL_PREV;
      $data['DataInitReal'] = $row->DATA_INIC_REAL;
      $data['DataFinalReal'] = $row->DATA_FINAL_REAL;
      $data['DataCreatedFmt'] = $this->functionshelper->DateTimeShortFormat($row->DATA_CREATED);
      $data['DataInitPrevFmt'] = $this->functionshelper->DateTimeShortFormat($row->DATA_INIC_PREV);
      $data['DataFinalPrevFmt'] = $this->functionshelper->DateTimeShortFormat($row->DATA_FINAL_PREV);
      $data['DataInitRealFmt'] = $this->functionshelper->DateTimeShortFormat($row->DATA_INIC_REAL);
      $data['DataFinalRealFmt'] = $this->functionshelper->DateTimeShortFormat($row->DATA_FINAL_REAL);
      $data['CustoUnitario'] = $row->CUSTO_UNIT;
      $data['CustoUnitarioFmt'] = $this->functionshelper->MoneyFormat($row->CUSTO_UNIT);
      $data['CustoTotal'] = $row->CUSTO_TOTAL;
      $data['CustoTotalFmt'] = $this->functionshelper->MoneyFormat($row->CUSTO_TOTAL);
      $data['CustoKG'] = $row->CUSTO_KG;
      $data['CustoKGFmt'] = $this->functionshelper->MoneyFormat($row->CUSTO_KG);
      $data['Status'] = $row->STATUS;
      $data['StatusGui'] = $this->enumorderhelper->getStatusOrderGui($row->STATUS);
      $data['Observacao'] = $row->OBSERVACAO;

      return $data;
              
    }

    public function getProductionOrders($status)
    {

        $query = $this->db->query($this->getSQLProductionOrders($status));

        $rows = $query->result();

        $data = array();
        if ($query->num_rows() > 0) {
            foreach ($rows as $row) {
                array_push($data, $this->mappProductionOrder($row));
            }
        }

        return $data;

    }

    public function getProductionOrderItems($id)
    {

        $query = $this->db->query($this->getSQLProductionOrderItems($id));

        $rows = $query->result();

        $data = array();
        if ($query->num_rows() > 0) {
            foreach ($rows as $row) {
                array_push($data, array(
                    'IdItem' => $row->ID_OITEM,
                    'IdOrdem' => $row->ID_ORDEM,
                    'IdProduto' => $row->ID_PRO,
                    'Produto' => iconv("Windows-1252", "utf-8//IGNORE", $row->DESCRICAO),
                    'Embalagem' => iconv("Windows-1252", "utf-8//IGNORE", $row->EMBALAGEM),
                    'Quantidade' => $row->QUANTIDADE,
                    'LoteNumero' => $row->LOTE_NUMERO,
                    'DataFabricacao' => $row->FABRICACAO,
                    'DataValidade' => $row->VALIDADE,
                    'DataInitPrev' => $row->DATA_INIC_PREV,
                    'DataFinalPrev' => $row->DATA_FINAL_PREV,
                    'DataInitReal' => $row->DATA_INIC_REAL,
                    'DataFinalReal' => $row->DATA_FINAL_REAL,                  
                    'DataFabricacaoFmt' => $this->functionshelper->DateTimeShortFormat($row->FABRICACAO),
                    'DataValidadeFmt' => $this->functionshelper->DateTimeShortFormat($row->VALIDADE),
                    'DataInitPrevFmt' => $this->functionshelper->DateTimeShortFormat($row->DATA_INIC_PREV),
                    'DataFinalPrevFmt' => $this->functionshelper->DateTimeShortFormat($row->DATA_FINAL_PREV),
                    'DataInitRealFmt' => $this->functionshelper->DateTimeShortFormat($row->DATA_INIC_REAL),
                    'DataFinalRealFmt' => $this->functionshelper->DateTimeShortFormat($row->DATA_FINAL_REAL),                    
                    'CustoUnitario' => $row->CUSTO_UNIT,
                    'CustoUnitarioFmt' => $this->functionshelper->MoneyFormat($row->CUSTO_UNIT),                    
                    'CustoTotal' => $row->CUSTO_TOTAL,
                    'CustoTotalFmt' => $this->functionshelper->MoneyFormat($row->CUSTO_TOTAL),
                    'CustoKG' => $row->CUSTO_KG,
                    'CustoKGFmt' => $this->functionshelper->MoneyFormat($row->CUSTO_KG),
                    'Status' => $row->STATUS,
                    'StatusGui' => $this->enumorderhelper->getStatusOrderItemGui($row->STATUS),
                    'Observacao' => iconv("Windows-1252", "utf-8//IGNORE", $row->OBSERVACAO)));
            }
        }

        return $data;

    }    

    private function getSQLProductionOrder($id)
    {
        $sql = "SELECT ORDEM_PRODUCAO.*, EMPRESA.NOME_TRAT EMPRESA FROM ORDEM_PRODUCAO JOIN EMPRESA ON EMPRESA.ID_EMP=ORDEM_PRODUCAO.ID_EMP WHERE ID_ORDEM = %d ";
        return sprintf($sql, $id);
    }

    public function getProductionOrder($id)
    {
      $query = $this->db->query($this->getSQLProductionOrder($id));
      if ($query->num_rows() > 0) {
        return $this->mappProductionOrder($query->row(0));
      }else{
        return null; 
      }
    }

    private function getSQLProductionOrderItems($id)
    {
        $sql = "SELECT * FROM VW_ORDEM_PRODUCAO_ITEM WHERE ID_ORDEM = %d ORDER BY ID_OITEM ";
        return sprintf($sql, $id);
    }

    private function getSQLProductComponents($id)
    {

        $sql = "SELECT * FROM VW_PRODUTO_ESTRUTURA WHERE ID_ORDEM = %d ";
        return sprintf($sql, $id);

    }

    public function getProductComponents($id)
    {

        $query = $this->db->query($this->getSQLProductComponents($id));

        $rows = $query->result();

        $data = array();
        if ($query->num_rows() > 0) {
            foreach ($rows as $row) {
                array_push($data, array(
                    'IdOrdem' => $row->ID_ORDEM,
                    'IdItem' => $row->ID_OITEM,
                    'IdEmpresa' => $row->ID_EMP,
                    'IdProduto' => $row->ID_PRO,
                    'Produto' => iconv("Windows-1252", "utf-8//IGNORE", $row->DESCRICAO),
                    'Unidade' => iconv("Windows-1252", "utf-8//IGNORE", $row->UNIDADE),
                    'Estoque' => $row->ESTOQUE,
                    'Quantidade' => $row->QUANTIDADE,
                    'PrecoUnitario' => $row->PRECO_UNIT,
                    'CheckEstoque' => $row->ESTOQUE >= $row->QUANTIDADE));
            }
        }

        return $data;

    }

    public function ProductionOrderItemStatusFinished($id)
    {

        $this->ProductionOrderItemStatus($id, $this->enumorderhelper->getItemFinishedValue());

    }

    public function ProductionOrderItemStatusProduction($id)
    {

        $this->ProductionOrderItemStatus($id, $this->enumorderhelper->getItemProductionValue());

    }

    public function ProductionOrderStatus($id, $status)
    {

        $this->db->trans_start();
        $sql = "UPDATE ORDEM_PRODUCAO SET STATUS = ? WHERE ID_ORDEM = ?";
        $this->db->query($sql, [$status, $id]);
        $this->db->trans_complete();

        echo json_encode(array('result' => true));

    }

    public function ProductionOrderStatusRelease($id)
    {

        $this->ProductionOrderStatus($id, $this->enumorderhelper->getOrderReleasedValue());

    }

    public function ProductionOrderStatusCancel($id)
    {

        $this->ProductionOrderStatus($id, $this->enumorderhelper->getOrderCanceledValue());

    }

    public function getProductionOrderItem($id)
    {

        $sql = "SELECT * FROM VW_ORDEM_PRODUCAO_ITEM WHERE ID_OITEM = %d ";
        $query = $this->db->query(sprintf($sql, $id));

        $item = $query->row(1);

        return $this->htmlProductionOrdersItem($item);

    }

    public function DeleteItem($id)
    {

        $sql = "DELETE FROM ORDEM_PRODUCAO_ITEM WHERE ID_OITEM = %d ";
        $this->db->query(sprintf($sql, $id));

        echo json_encode(array('result'=>true));

    }
    
    public function Save($data)
    {

        $sql = 'EXECUTE PROCEDURE SP_ORDEM_PRODUCAO_SAVE(?,?,?,?,?,?)' ;
        $query = $this->db->query( $sql, [$data['idOrdem'], $data['descricao'], $data['idEmpresa'], $data['dataInitPrev'], $data['dataFinalPrev'], $data['observacao']]);

        $data['idOrdem'] = $query->row(1)->NEW_ORDEM_ID;

        if ( isset( $data['items'] ) ) {

            foreach( $data['items'] as $item ) {

                $sql = "EXECUTE PROCEDURE SP_ORDEM_PRODUCAO_ITEM_SAVE(?,?,?,?,?,?,?) ";
                $this->db->query( $sql, [$data['idOrdem'], $item['idProduct'], $item['quanty'], $item['lotNumber'], $data['dataInitPrev'], $data['dataFinalPrev'], $item['note']]);

            }

        }

        echo json_encode( array( 'result'=>true ) );

    }

}