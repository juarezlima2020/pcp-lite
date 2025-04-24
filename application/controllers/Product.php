<?php

date_default_timezone_set('America/Bahia');

class Product extends CI_Controller {

  public function __construct() {
    // Construct the parent class
    parent::__construct();    
    $this->load->model('Product_model');
  }

  public function search() {

    $term = $this->input->get("term");
    $page = $this->input->get("page");

    return $this->Product_model->search($term, $page);

  }  

}
