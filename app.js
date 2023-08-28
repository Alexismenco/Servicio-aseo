const express = require('express');
var session = require('express-session');
const app = express();
const servicios = require('./public/js/servicioAseo');
require('dotenv').config();
const nodemailer=require('nodemailer');

const WebpayPlus = require('transbank-sdk').WebpayPlus;
const { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } = require("transbank-sdk");



// configuracion server
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.set('view engine',"ejs");
app.set("views",__dirname+"/views");

// Inicio
app.get('/', async (req,res) => {
  res.render('index');
});

// Planes -> pagar/plan
app.get('/planes', async (req, res) => {
  res.render('planes');
});

app.get('/nosotros', async (req, res) => {
  res.render('nosotros');
});
module.exports={app}