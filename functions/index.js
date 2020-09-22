const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_QS21Tzh7pvzhekcP7kuYg3wg');

// API

// APP CONFIG
const app = express();

// MIDDLEWARE
app.use(cors({origin: true}));
app.use(express.json());

// API ROUTES
app.get('/', (request, response) => response.status(200).send('hello'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'USD',
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

//  http://localhost:5001/nickazon-618aa/us-central1/api



