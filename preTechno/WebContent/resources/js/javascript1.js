/**
 * js kodehive
 */

function tambah(a, b) {
	var tambahAngka;
	tambahAngka = a + b;
	
	return tambahAngka;
}

function funcReturn(angka1, angka2) {
	
	var modulus;
	modulus = angka1 % angka2;
	
	return modulus;
}

const a = 900;

var a2 = 900.2;

function ubahVariable() {
	a2 = 901;
	document.writeln("var a2 diubah ke - "+ a2);
	document.writeln("var a diubah ke - "+ a);	
}

function aritmatika(a, b) {
	var hasil1 = a+b;
	var enter = "<br />"
	document.write(hasil1 + enter);
	
	var hasil2 = ++a;
	document.write(hasil2 + enter);

	var hasil3= --a;
	document.write(hasil3 + enter);
}

function operatorPerbandingan(a, b) {
	var hasil1 = a == b;
	var enter = "<br />"
		document.write("Output equals = "+hasil1 + enter);
	
	var hasil2 = b != a;
	document.write("Output not equals = "+hasil2 + enter);
	
	var hasil3= b < a;
	document.write("Output kurang dari sama dengan = "+hasil3 + enter);
}

function loopInForIn() {
	var array= ["rambut", "telinga", "mata", "bibir"]
	
	var item;
	for ( item in array) {
		console.log(array[item]+"\n")
	}
}

function indexOfArray() {
	var kh = "kodehive academy";
	
	var y = kh.indexOf('e', 1);
	document.write("cari e setelah index ke -5, e berada pada index ke - "+ y)
	
}

var mobil = {
		nama : "Toyota",
		plat : "B001Z",
		harga: 200000000
	}

function motor(merk, tahun, harga) {
	
	var bioMotor = {}
	bioMotor.merk = merk;
	bioMotor.tahun = tahun;
	bioMotor.harga = harga;
	
	return bioMotor
}

var astrea = motor('Honda Astrea', '2000', 5000000)
var mio = motor('Mio Z', '2012', 15000000)
var Vario = motor('Vario 125', '2014', 18000000)

function motorContructor(merk, tahun, harga) {
	
	this.merk = merk;
	this.tahun = tahun;
	this.harga = harga;
	
	this.kualitas = function() {
		return "kualitas dari " + this.merk + "adalah baru"
	}
	
	this.gantiHarga = function(hargaBaru) {
		this.harga = hargaBaru;
	}
	
}

// motorContructor.prototype.pembelian = function(jumlahBeli) {
//	var totalHarga = this.harga *= jumlahBeli // = harga * jumlahBeli
//	return "pembelian pada bulan April ini untuk produk "+ this.merk +" mencapai "+ totalHarga
// }

var Vixion = new motorContructor('Vixion 2', 2021, 28000000)

function hai() {
	const self = this
	setTimeout(() => {
		console.log(self.name)
	}, 200);
}























/* soal js 1.6
function awesomeFunction(){
	  var a = 2;

	  var multiplyBy2 = function(){
	    console.log(a*2); 						// Can access variable "a" since a and multiplyBy2 both are written inside the same function
	  }
	}
	console.log(a); 					// 	Throws reference error since a is written in local scope and cannot be accessed outside

	multiplyBy2(); 							// 	Throws reference error since multiplyBy2 is written in local scope
*/