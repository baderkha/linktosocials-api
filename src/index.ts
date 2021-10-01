import express from 'express';
const app = express();


if (process.env.IS_LOCAL==="true") {
    app.listen(parseInt(process.env.PORT,10) , ()=>{
        console.log('listening on =>' , process.env.PORT)
    })
}
