# Object Oriented Programing & Design Pattern


1. Object Oriented Programing
Object Oriented programing merupakan suatu paradigma yang berbasis object nyata pada kehidupan sehari-hari didalam melakukan pembuatan pemrograman,dimana didalam object tersebut memiliki property dan metode cara/fungsi didalam melakukan suatu proses property tersebut.

    class adalah instansiasi pada suatu object dimana class ini merupakan design awal didalam membentuk suatu object.

    contoh: mobil memiliki setir dan pedal  dalam rem & gas dimana mobil sebagai object, setir dan pedal rem & gas itu sebagai     property yang mana prosedur/metodenya yang dilakukan seperti setir itu untuk membelokan mobil kekiri dan kekanan dan pedal     sebagai rem dan gas untuk memperlambat dan memacu kendaraan.

- pembuatan class didalam javascript

       class Hewan { constructor(jenis) { 
       this.jenis = jenis;
         }
          binatang() {
          console.log(this.jenis);
           }
        }
        const hewan = new Hewan("onta");
        hewan.binatang();
        
- ada beberapa method dialam membuat class :
    * static method
    * method chaining
    * Encapsulation
    * Inheritance
    * Polymorphism
 
