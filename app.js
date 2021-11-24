const { render } = require('@nexrender/core')
const { getAudioDurationInSeconds } = require('get-audio-duration');



function videoAutomatisation(){
    // HERE IS THE INPUT OF PROPERTIES YOU WANT TO CHANGE
        //Song
        let theSong = "Assets/Songs/testsong.mp3";
        //Background Image
        let theBackgroundImage = "Assets/Backgrounds/newplace.jpg";
        //Song Name       (note: the longer the song the longer the render)
        let theSongName = "Riot - Overkill";
        //Video Maker aka your name
        let yourName = "Bertshj";
        //Colors of the ball
        let gradientColor1 = [1,0,0];
        let gradientColor2 = [0,1,0];
        let gradientColor3 = [1,1,0];
        let gradientColor4 = [0,1,1];
   
    //getting the frames to set a automatic endtime depending on the songtime.
    getAudioDurationInSeconds(theSong).then((duration) => {
    let songTime = duration * 25;
    let songTimeFrames = songTime.toString();
  
    //the json that gets pushed to the render
    let job =  {
        template: {
            "src":"file:///d:/Interactive-Motion/Nexrender/Prototype/PrototypeAe.aep",
            "composition": "Final",
            "frameStart": "1",
            "frameEnd": `${songTimeFrames}`
    },
    "assets": [
        {
            "composition": "Final",
            "src": `file:///d:/Interactive-Motion/Nexrender//Prototype/${theBackgroundImage}`,
            "type": "image",
            "layerIndex": "6"
        },
        {
            "src": `file:///d:/Interactive-Motion/Nexrender//Prototype/${theSong}`,
            "type": "audio",
            "layerName": "audio"
        },
        {   
            "composition": "Banner",
            "type": "data",
            "layerIndex": "1",
            "property": "Source Text",
            "value": `${theSongName}`
        },
        {   
            "composition": "Banner",
            "type": "data",
            "layerIndex": "4",
            "property": "Source Text",
            "value": `${yourName}`
        },
        {
            "composition": "Final",
            "type": "data",
            "layerIndex": "7",
            "property": "Effects.Kleur1.Color",
            "value": gradientColor1
        },
        {
            "composition": "Final",
            "type": "data",
            "layerIndex": "7",
            "property": "Effects.Kleur2.Color",
            "value": gradientColor2
        },
        {
            "composition": "Final",
            "type": "data",
            "layerIndex": "7",
            "property": "Effects.Kleur3.Color",
            "value": gradientColor3
        },
        {
            "composition": "Final",
            "type": "data",
            "layerIndex": "7",
            "property": "Effects.Kleur4.Color",
            "value": gradientColor4
        },
    
      
    
    ],
    "actions":{
        "postrender": [
            {
                "module": "@nexrender/action-encode",
                "preset": "mp4",
                "output": "encoded.mp4"
            },
            {
                "module": "@nexrender/action-copy",
                "input": "encoded.mp4",
                "output": "d:/Interactive-Motion/Nexrender/Prototype/render.mp4"
            }
        ]
    }
    }
    
    const main = async () => {
        const result = await render(job, {
            skipCleanup: true,
        });
    }
    
    main().catch(console.error);
    
});
}

videoAutomatisation();