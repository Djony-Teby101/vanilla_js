// Map traitement et Approche.
const numbers = [1, 4, 9];
const roots = numbers.map((num) => num % 2);

console.log(roots)

// Recuperer des items dans un Arrays.
const products=[
    {id:1, name:'Orange', prix:250},
    {id:2, name:'Pomme', prix:350},
    {id:3, name:'Cerise', prix:150},
    {id:4, name:'Avocat', prix:550},
    {id:5, name:'Ginger', prix:450}
];

let id=parseInt(3);
const product=products.filter(product=> product.id===id);
console.log(product);

// Create un nouveau produit.

let ajoutProduct=(id, name, prix)=>{
    const create={
    id:id,
    name:name,
    prix:prix,
    created_at: new Date().toISOString()
    
  }
  products.push(create);
  console.log(products);
}

ajoutProduct(6, 'Papaye', 700);








