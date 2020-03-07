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
   
* static method
             
      suatu method pada class yang mana memanggil methodnya tanpa membuat class dari method tersebut.
      contohnya :
      
      //static method pada class
      class Hewan {
      constructor(jenis, jumlahKaki, negara) {
      this.jenis = jenis;
      this.jumlahKaki = jumlahKaki;
      this.negara = negara;
      }
      static instance() {
      return new Hewan("onta", 4, "mesir");
      }
      printJenis() {
      console.log(`hewan ${this.jenis} berasal dari negara ${this.negara}`);
      }
      }
      const hewan = Hewan.instance();
      hewan.printJenis();
      
* Method chaining (metode berantai)
 
      suatu method yang memangil secara berantai/beruntun dengan mereturn/mengembalikan nilai value yang sama
      contoh :
      
      //class method chaining
      class Hewan {
      constructor(jenis) {
       this.jenis = jenis;
       }
      setCountry(negara) {
       this.negara = negara;
       return this;
       }
      setJumlahKaki(kaki) {
      this.kaki = kaki;
      return this;
      }
      printAll() {
      console.log(this.jenis, this.negara, this.kaki);
      }
      }
       const hewan = new Hewan("onta");
      hewan
        .setJumlahKaki(4)
        .setCountry("mesir")
        .printAll();

      
  

 
 
