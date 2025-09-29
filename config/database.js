const mysql = require('mysql2');
require ('dotenv').config();

const connection = mysql.createPool(
    {
        host: process.env.DB_HOST, // host: process.env.DB_HOST || 'localhost, > CAN USE
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        waitForConnections: true,
        connetionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = connection.promise();

promisePool.getConnection((err, connection) => {
    if(err){
        console.error('Error connecting to the database: ', err);
    }
    if(connection) connection.release();
    console.log('Database connected successfully');
    return;
});

module.exports = promisePool; 