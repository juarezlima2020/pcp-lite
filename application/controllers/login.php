<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('Login_model');
        $this->load->library('session');
    }

	public function index() {

		$this->load->view('login');
		
	}
	
	public function login( $username, $password ) {		

		$response = array( 'status'=>false, 'message'=>'Usuário ou Senha inválido' );
		
		if ( $username && $password ) {
			
			$id = $this->Login_model->password_verify( $username, $password );

			if ( $id != FALSE ) {
			
				$this->session->set_userdata( 'id', $id );
				$this->session->set_userdata( 'usuario', $username );
				$this->session->set_userdata( 'logado', true );
				$response = array( 'status'=>true );
			
			}			
		
		}

		echo json_encode( $response );
		
	}
	
	public function logout() {
		
		$this->session->sess_destroy();
		redirect(site_url('login'));
	
	}
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/login.php */