const Spiderman=require("./../app/spiderman")

describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
    
        //Codigo a ejecuat para la prueba
      const andrewGarfield=new Spiderman ("The Amazing Spiderman",31,"Andrew Garfield",2,"Sony")
      

      //Comprobación de respuestas
      expect(andrewGarfield.name).toBe("The Amazing Spiderman");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");
      
    });

    test('2)Message from the spiderman',()=>{
        //Creamos el objeto con los datos de Tom HOlland
        const TomHolland=new Spiderman("MCU The Spiderman",25,"Tom Holland",3,"Marvel Studios")

        //Y escribimos lo que esperamos de resultado
        expect(TomHolland.getInfo).toBe(`Hey, I'm Tom Holland from Marvel Studios, and you are watching Disney Channel`)
    })
  })