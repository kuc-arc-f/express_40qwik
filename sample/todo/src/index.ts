
import express from 'express';
import { renderToString } from 'react-dom/server';
import basicAuth  from "express-basic-auth";
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/About';
import Contact from './pages/Contact';
import Test from './pages/Test';
import Test2 from './pages/Test2';
import Test2Show from './pages/Test2Show';
import Todo from './pages/Todo';
import TodoShow from './pages/TodoShow';

//
//import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
console.log("EXTERNAL_API_URL=", process.env.EXTERNAL_API_URL)
//auth
app.use(basicAuth({
  users: { "test": "1111" },
  challenge: true,
}));
// 
const errorObj = {ret: "NG", messase: "Error"};
// route
app.use('/api/common', commonRouter);

//MPA
app.get('/test_api/show', (req: any, res: any) => {
  try { res.send(renderToString(Test2Show())); } catch (error) { res.sendStatus(500);}
});
app.get('/test_api', (req: any, res: any) => {
  try { res.send(renderToString(Test2())); } catch (error) { res.sendStatus(500);}
});
//
app.get('/todos/show', (req: any, res: any) => {
  try { res.send(renderToString(TodoShow())); } catch (error) { res.sendStatus(500);}
});
app.get('/todos', (req: any, res: any) => {
  try { res.send(renderToString(Todo())); } catch (error) { res.sendStatus(500);}
});
app.get('/test1', (req: any, res: any) => {
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
