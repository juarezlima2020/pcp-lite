<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class EnumOrderHelper {

	const OrderEditingEnum    = 0;
	const OrderReleasedEnum   = 1;
	const OrderProductionEnum = 2;
	const OrderCanceledEnum   = 3;
	const OrderFinishedEnum   = 4;

	const ItemPendantEnum    = 0;
	const ItemProductionEnum = 1;
	const ItemFinishedEnum   = 2;	

	private $statusOrder     = array('Em Edição', 'Liberado', 'Em Produção', 'Cancelado', 'Finalizado');
	private $statusOrderItem = array('Pendente', 'Em Produção', 'Finalizado');

	public static function getOrderEditingValue() {
	  	return self::OrderEditingEnum;
	}

	public static function getOrderReleasedValue() {
		return self::OrderReleasedEnum;
  	}

	public static function getOrderProductionValue() {
	  	return self::OrderProductionEnum;
	}

	public static function getOrderCanceledValue() {
		return self::OrderCanceledEnum;
  	}	

	public static function getOrderFinishedValue() {
		return self::OrderFinishedEnum;
  	}

	public static function getItemPendantValue() {
		return self::ItemPendantEnum;
	}
	  
	public static function getItemProductionValue() {
		return self::ItemProductionEnum;
	}
	  
	public static function getItemFinishedValue() {
		return self::ItemFinishedEnum;
  	}

	public function getStatusOrderGui( $statusEnum ) {
		return $this->statusOrder[$statusEnum];
	}

	public function getStatusOrderItemGui( $statusEnum ) {
		return $this->statusOrderItem[$statusEnum];
	}

}