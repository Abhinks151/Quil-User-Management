import express from 'express';
import dotenv from 'dotenv';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import bodyparser from 'body-parser';
import connectDB from './src/config/db.js';
import landingRoute from './src/routes/landingRoute.js';
import userRoutes from './src/routes/user/index.js';
import adminRoutes from './src/routes/admin/index.js'
import methodOverride from 'method-override';
// import indexRoute from './src/routes/indexRoute.js';


dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();

const app = express();
app.use(methodOverride('_method'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));

console.log('MONGO_URI:', process.env.MONGO_URI);


app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.use('/static', express.static('public', {
  setNoCacheHeaders: (res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
  },
}));



// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: mongoStore.create({
//       mongoUrl: process.env.MONGO_URI,
//       collectionName: 'sessions',
//     }),
//     cookie: {
//       httpOnly: true,
//       maxAge: 1000 * 60 * 60,
//     },
//   })
// );

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGO_URI,
//       collectionName: 'sessions',
//     }),
//     cookie: {
//       httpOnly: true,
//       maxAge: 1000 * 60 * 60,
//     },
//   })
// );


// Setup shared MongoStore
const store = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: 'sessions',
});

// Session middlewares
const userSession = session({
  name: 'user.sid',
  secret: process.env.SESSION_SECRET + '_user',
  resave: false,
  saveUninitialized: false,
  store,
  cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 }
});

const adminSession = session({
  name: 'admin.sid',
  secret: process.env.SESSION_SECRET + '_admin',
  resave: false,
  saveUninitialized: false,
  store,
  cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 }
});


// app.use('/', indexRoute);
// app.use('/v1/', indexRoute);

app.use('/', landingRoute);
app.use('/user', userSession, userRoutes);
app.use('/admin', adminSession, adminRoutes);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


