const express = require('express');
const swaggerDocs = require('./swagger');
const blogRouter = require('./router/blog.routes');

const app = express();
app.use(express.json());

const db = require('./database/connection');
db.sequelize.sync();

const port = process.env.port || 3000;
app.use('/api/blogs', blogRouter);

app.listen(port,() => {
    console.log('Server listening on port: ', port);
});
swaggerDocs(app, port);

