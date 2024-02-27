
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/About';
import Contact from './pages/Contact';
import Test from './pages/Test';
import TestShow from './pages/Test/TestShow';
//
//import testRouter from './routes/test'; 
//import commonRouter from './routes/commonRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
//console.log("EXTERNAL_API_URL=", process.env.EXTERNAL_API_URL)
//
const errorObj = {ret: "NG", messase: "Error"};
// route
//app.use('/api/common', commonRouter);

//MPA
app.get('/test', (req: any, res: any) => {
  try { res.send(renderToString(Test())); } catch (error) { res.sendStatus(500);}
});
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
