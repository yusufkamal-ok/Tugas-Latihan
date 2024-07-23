const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [
    {id : 1, "name": "Laptop", "Category" : "Elektronik"},
    {id : 2, "name" : "Meja", "Category" : "Perabotan"}
];

app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.get('/api/products/:id',(req,res)=>{
    const product_id = parseInt(req.params.id);
    const product  = products.find(p => p.id === product_id);

    if(product){
        res.json(product);
    }
    else {
        res.status(404).json({message : "product not found"});
    }
});


app.post('/api/products',(req,res)=>{
    const new_product = req.body;
    new_product.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(new_product);
    res.status(201).json(new_product);
});

app.put('/api/products/:id',(req,res)=>{
    const product_id = parseInt(req.params.id);
    const product_index = products.findIndex(p => p.id === product_id);

    if(product_index !== -1){
        products[product_index] = {id : product_id, ...req.body};
        res.json(products[product_index]);
    }
    else {
        res.status(404).json({message : "product not found"});
    }
});

app.delete('/api/products/:id', (req,res)=>{
    const product_id = parseInt(req.params.id);
    products = products.filter(p => p.id !== product_id);
    res.status(204).send();
    
});

app.get('/search',(req,res)=>{
    const query_name = req.query;
    if (!query_name) {
        return res.status(400).send('parameter name is required');
      }
    const searchResult = products.filter(p => p.name.toLowerCase().includes(query_name.toLowerCase()));
    if(searchResult.length ===0){
        return res.status(404).send('No products found');
    }
    res.json(searchResult);
});


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}/api/products`);
});