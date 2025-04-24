<?php

class Product_model extends CI_Model {

    public function __construct() {
        // Construct the parent class
        parent::__construct();
        //$this->load->helper('log_manager_helper');
    }    

    public function search($term, $page) {
    
        $resultCount = 20;
        $end = ($page - 1) * $resultCount;       
        $start = $end + $resultCount;
     
        $sql = "SELECT FIRST $start SKIP $end ID_PRO, DESCRICAO FROM PRODUTO WHERE UPPER(DESCRICAO) LIKE UPPER( '%$term%' ) ORDER BY ID_PRO ";
    
        $query = $this->db->query($sql);
        $rows = $query->result();
    
        $data = array();
        if ( $query->num_rows() > 0 ) {        
          foreach( $rows as $row ) {
            array_push( $data, array( 
              'id'          =>$row->ID_PRO,
              'description' =>iconv("Windows-1252", "utf-8//IGNORE", $row->DESCRICAO ) ) );
          }
        }
    
        $more = count( $data ) >= $resultCount;
    
        echo json_encode( array( 'sql' => $sql, 'results' => $data, 'total' => count($data), 'pagination' => array('more'=>$more)) );
    
    }
}
