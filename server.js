const express = require('express')
const app = express()
const PORT = 8000

const FNAF = {
    'bonnie': { 
        'model': 'bunny',   
        'employment': 'guitarist',
        'mainColor': 'indigo',
        'eyeColor': 'pink'
    },
    'freddy': {
        'model': 'bear',
        'employment': 'lead vocalist, mascot of freddy fazbears pizza',
        'mainColor': 'brown',
        'eyeColor': 'blue'
    },
    'chica':{
        'model': 'chicken',
        'employment': 'backup singer',
        'mainColor': 'yellow',
        'eyeColor': 'magenta'
    },
    'foxy':{
        'model': 'fox',
        'employment': 'pirate entertainer',
        'mainColor': 'crimson',
        'eyeColor': 'yellow'
    },
    'goldren freddy':{
        'mainColor': 'gold',
        'eyeColor': 'silver',
    },
    'puppet':{
        'mainColor': 'black',
        'eyeColor': 'white, green',
        'firstAppearance': 'Five Nights at Freddys 2'
    },
    'circus baby':{
        'mainColor': 'white',
        'eyeColor': 'green',
        'firstAppearance': 'Sister Location'
    },
    'balloon boy':{
        'mainColor': 'peach',
        'eyeColor': 'blue',
        'firstAppearance': 'Five Nights at Freddys 2'
    },
    'ballora':{
        'mainColor': 'white',
        'eyeColor': 'pink, blue',
        'firstAppearance': 'Sister Location'
    },
    'unknown':{
        'mainColor': 'unknown',
        'eyeColor': 'unknown',
        'firstAppearance': 'unknown',
        'model': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname +'/index.html')
})

app.get('/api/:name', (request,response)=>{
    const fnafCharacter = request.params.name.toLowerCase()
    if(FNAF [fnafCharacter]) {
        response.json(FNAF[fnafCharacter])
    }else{
        response.json(FNAF['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log('The server is running on port ${PORT}!')
})