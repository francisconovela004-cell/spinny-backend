const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Dados da empresa
const companyInfo = {
    name: 'Spinny Biscuitos',
    email: 'francisconovela004@gmail.com',
    mainPhone: '871736540',
    altPhone: '842493332',
    facebook: 'https://www.facebook.com/franciscomaladro.maluco',
    whatsapp: 'https://wa.me/258871736540',
    logo: '',
    description: 'Deliciosos biscoitos artesanais feitos com ingredientes selecionados em Moçambique.',
    address: 'Moçambique'
};

// Produtos
const products = [
    {
        id: 1,
        name: 'Biscoitos de Manteiga',
        description: 'Deliciosos biscoitos feitos com manteiga de qualidade superior.',
        price: '55.00',
        priceKg: '50.00',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Biscoitos de Chocolate',
        description: 'Biscoitos crocantes com pedaços de chocolate belga.',
        price: '60.00',
        priceKg: '55.00',
        image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

// Rotas da API
app.get('/api', (req, res) => {
    res.json({
        message: 'Bem-vindo à API Spinny Biscuitos!',
        version: '1.0.0',
        endpoints: [
            '/api/products',
            '/api/company'
        ]
    });
});

app.get('/api/products', (req, res) => {
    res.json({
        products: products,
        total: products.length
    });
});

app.get('/api/company', (req, res) => {
    res.json({
        company: companyInfo
    });
});

// Rota principal
app.get('/', (req, res) => {
    res.json({ 
        message: '🚀 API Spinny Biscuitos Online!',
        version: '1.0.0',
        endpoints: [
            '/api',
            '/api/products', 
            '/api/company'
        ]
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`🚀 Servidor Spinny Biscuitos rodando!`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`🌐 API: http://localhost:${PORT}/api`);
    console.log(`📦 ${products.length} produtos carregados`);
});



