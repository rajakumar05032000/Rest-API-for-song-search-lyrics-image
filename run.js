const GoogleImages = require('google-images');
const express = require('express')
const client = new GoogleImages('cb67a31fb5f35507c', 'AIzaSyD-k_r9pk_7j4_9pgOufj2t8u2mJj7mNpQ');
const app = express()


app.get('/songimg/:songname', function(req,res)
{
 var song_name = req.params.songname;
 client.search(song_name).then(images => {
    console.log(images[0]['url']);
    res.send(images[0]['url']);
 })
    
})

app.listen(3000);
