<?php

date_default_timezone_set('America/Bahia');

class myFunctions {

	function DatesProgress( $dateTime1, $dateTime2 ) {		

		$begin= strtotime( $dateTime1 );
		$now = time();
		$end = strtotime( $dateTime2 );
		
		return ($now-$begin) / ($end-$begin) * 100;          

	}

}

class Functions {

	public static function DatesProgress( $dateTime1, $dateTime2 ) {		

		$begin= strtotime( $dateTime1 );
		$now = time();
		$end = strtotime( $dateTime2 );
		
		return ($now-$begin) / ($end-$begin) * 100;          

	}

	public static function DateFormat( $value ) {
		return $value ? date_format( date_create( $value ), 'd/m/Y' ) : '';
	}

	public static function MoneyFormat( $value, $symbol = 'R$' ) {
		return $symbol . number_format( $value, 2, ',', '.' );
	}

	public static function FloatFormat( $value ) {
		return self::MoneyFormat( $value, '' );
	}

	public static function DateTimeDiff ( $dateTime1, $dateTime2 ) {

		$datetime1 = new DateTime( $dateTime1 );

		$datetime2 = new DateTime( $dateTime2 );
		
		$difference = $datetime1->diff( $datetime2 );

		return sprintf( '%02dd:%02dh:%02dm', $difference->d, $difference->h, $difference->m );
		
	}

}