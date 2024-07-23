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

app.get('/api/search',(req,res)=>{
    const query_name = req.query;

    const result = products.filter(p => p.name.toLowerCase().includes(query_name.name.toLowerCase()));

    if(result.length !==0){
        res.json(result);
    }
    else {
        res.status(404).json({message : 'product not found'});
    }
});

app.get('/api/products/:category/search',(req,res)=>{
    const category_params = req.params;
    const name_product = req.query;

    const category_product = products.filter(params => params.Category.toLowerCase().includes(category_params.category.toLowerCase()));
    const result_product = products.find(q => q.name.toLowerCase() === name_product.name.toLocaleLowerCase());
    const match = category_product.filter(p => p.name.toLowerCase().includes(name_product.name.toLowerCase()));


    if(category_product.length !== 0){
        if(result_product){
            if(match){
                res.json(match);
            }
            else{
                res.status(404).json({message :"name and category do not match"});
            }
        }
        else {
            res.status(404).json({message : 'name product not found'});
        }
    }
    else {
        res.status(404).json({message : 'category product not found'});
    }

});


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});