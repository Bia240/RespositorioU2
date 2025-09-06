
/*


POO (Programacion Orientada a Objetos) Este es un paradigma de programacion que se usa muchisimo actualmente.

Hay conceptos asociados a la POO como Clases, Objetos, etc.

El concepto de objeto que vamos a aprender hoy, si bien tiene el mismo nombre que este concepto base de la programación que se aplica en muchos lenguajes, no es el mismo. JavaScript lo maneja diferente.

Objeto en Javascript -> Son la abstraccion a la programacion, de I cualquier concepto real.

Es una estructura de datos que se almacenan con el formato clave (atributo o propiedad) -valor.

Sintaxis:

let nombreobjeto = {

atributo1:valor,
atributo2:valor,
atributo3:valor,

};

LOS ATRIBUTOS SIGUEN LA REGLA DE NOMBRES DE LAS VARIABLES.

Los valores son datos, por ende si son strings, deben in entre comillas.

Los valores pueden ser de cualquier tipo o estructura de datos, incluyendo otros objetos

//ejemplo:
//crea un objeto de persona 

*/
 let person = {

    name:"Bianca Bereche",
    age: 17,
    cellphone:"8758591257",
    hobbies: ["reading","traveling","cooking"]

 };

 console.log(person.name);

 console.log(person["age"]);


 console.log(person.cellphone);
 console.log(person.hobbies);
 console.log(person.hobbies[0]);
 console.log(person.hobbies[1]);


 console.log("Actualizamos dato")

 person.cellphone="7894565696456";
    console.log(person.cellphone);


    console.log("Agregar un nuevo nuevo atributo al objeto")
      person.birthDate="09-05-1999";
      console.log(person);

      let heroes = {
  squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [
      {
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    
  ]   
}; 

  console.log(heroes);
  console.log(heroes.formed);
  console.log(heroes.active);

  console.log(heroes.members);

  console.log("Primer elemento de heroes.members")
  console.log(heroes.members[0]);

  console.log(heroes.members[0].name);
  console.log(heroes.members [0].secretIdentity);

  console.log(heroes.members[0].powers[1]);


  



