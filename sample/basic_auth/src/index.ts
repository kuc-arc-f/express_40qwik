
import express from 'express';
import { renderToString } from 'react-dom/server';
import basicAuth  from "express-basic-auth";
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/About';
import Contact from './pages/Contact';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
//console.log("EXTERNAL_API_URL=", process.env.EXTERNAL_API_URL)
app.use(basicAuth({
  users: { "test": "1111" },
  challenge: true,
}));
//
const errorObj = {ret: "NG", messase: "Error"};
// route

//MPA
app.get('/contact', (req: any, res: any) => {
  try { res.send(renderToString(Contact())); } catch (error) { res.sendStatus(500);}
});
app.get('/about', (req: any, res: any) => {
  try { res.send(renderToString(About())); } catch (error) { res.sendStatus(500);}
});
app.get('/', (req: any, res: any) => {
  try {
    res.send(renderToString(Top()));
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
