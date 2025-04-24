<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login_model extends CI_Model {

	private function getSQLCommand( $user, $pass) {

		return "SELECT ID_USU, NOME FROM USUARIO WHERE INATIVO = 0 AND NOME = UPPER( '$user' ) AND SENHA = '$pass'";

	}

	public function password_verify($login = '', $senha = ''){		
		
		$id = FALSE;

		if( $login && $senha ) {		

			$senha = rawurldecode( $senha );
      		$query = $this->db->query( $this->getSQLCommand( $login, $senha ) );

	      	foreach ($query->result() as $row) {
	        	$id = $row->ID_USU;
	        	break;
	      	}       	
			
		}

		return $id;
		
	}
	
}