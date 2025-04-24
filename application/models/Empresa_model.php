<?php

class Empresa_model extends CI_Model {

    private function getSQLEmpresas() {
        return "SELECT * FROM EMPRESA ";
    }

    public function getEmpresas() {

        $query = $this->db->query($this->getSQLEmpresas());

        $rows = $query->result();

        $data = array();
        if ($query->num_rows() > 0) {
            foreach ($rows as $row) {
                $data[$row->ID_EMP] =  iconv("Windows-1252", "utf-8//IGNORE", $row->NOME_TRAT);
            }
        }

        return $data;

    }

}