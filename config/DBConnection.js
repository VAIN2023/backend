/**
____________  _____                             _   _               _     
|  _  \ ___ \/  __ \                           | | (_)             (_)    
| | | | |_/ /| /  \/ ___  _ __  _ __   ___  ___| |_ _  ___  _ __    _ ___ 
| | | | ___ \| |    / _ \| '_ \| '_ \ / _ \/ __| __| |/ _ \| '_ \  | / __|
| |/ /| |_/ /| \__/\ (_) | | | | | | |  __/ (__| |_| | (_) | | | |_| \__ \
|___/ \____/  \____/\___/|_| |_|_| |_|\___|\___|\__|_|\___/|_| |_(_) |___/
                                                                  _/ |    
                                                                 |__/     
 */

const Pool = require('pg').Pool;
const connectionString = "postgresql://postgres:YdZYSm8AGVbLDZX5s620@containers-us-west-85.railway.app:7665/railway"

/**
 * @notes Your Postgres credentials go here!
 */
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'vain',
//     password: 'student',
//     dialect: 'postgres',
//     port: 5432
// }); //Pool for local

const pool = new Pool({
	connectionString,
})

/**
 * @notes Testing the pool, will fail if not connected properly.
 */
pool.connect((err, client, release) => {
    if (err){
        return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, res) => {
        release();
        if (err) {
            return console.error('Error executing query', err.stack);
        }
        console.log('Connected to database!');
    });
});

module.exports = { pool }