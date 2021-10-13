//Dada uma lista qualquer de votantes contendo os objetos nome, idade, voto(boolean)
//emite um "relatorio" apresentando a relação faixa etaria total eleitores vs votos true

//Exemplo de lista

const citizens = [
    { name: 'Bob', age: '30', voted: true },
    { name: 'Jake', age: '32', voted: true },
    { name: 'Kate', age: '25', voted: false },
    { name: 'Sam', age: '20', voted: false },
    { name: 'Phil', age: '21', voted: true },
    { name: 'Ed', age: '55', voted: true },
    { name: 'Tami', age: '54', voted: true },
    { name: 'Marcy', age: '31', voted: false },
    { name: 'Becky', age: '43', voted: false },
    { name: 'Joey', age: '41', voted: true },
    { name: 'Jeff', age: '30', voted: true },
    { name: 'Zack', age: '19', voted: false }
];

function analisys(citizens){
    const youngs     = citizens.filter(citizen => 18 <= citizen.age & citizen.age <= 25)
    const mids       = citizens.filter(citizen => 26 <= citizen.age & citizen.age <= 35)
    const olds       = citizens.filter(citizen => 36 <= citizen.age & citizen.age <= 45)
    const youngPresence  = youngs.filter(young => young.voted)
    const midPresence    = mids.filter(mid => mid.voted)
    const oldPresence    = olds.filter(old => old.voted);

    let result = [{YoungPeople:youngs.length,
                   YoungVotes:youngPresence.length},
                  {MidPeople:mids.length, 
                   MidVotes:midPresence.length},
                  {OldPeople:olds.length, 
                   OldVotes:oldPresence.length}]
return{
      result        
}};

console.table(analisys(citizens));

