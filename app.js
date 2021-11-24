const { render } = require('@nexrender/core')


let job =  {
    template: {
        "src":"file:///d:/Interactive-Motion/Nexrender/Prototype/PrototypeAe.aep",
        "composition": "Final"
},
"assets": [
    {
        "composition": "Final",
        "src": "file:///d:/Interactive-Motion/Nexrender//Prototype/Assets/newplace.jpg",
        "type": "image",
        "layerIndex": "8"
    },
    {
        "src": "file:///d:/Interactive-Motion/Nexrender//Prototype/Assets/testsong.mp3",
        "type": "audio",
        "layerName": "audio"
    },
    {   
        "composition": "Banner",
        "type": "data",
        "layerIndex": "1",
        "property": "Source Text",
        "value": "Chime - Lifelong"
    },
    {   
        "composition": "Banner",
        "type": "data",
        "layerIndex": "4",
        "property": "Source Text",
        "value": "Kiki Rama"
    },
    {
        "composition": "Final",
        "type": "data",
        "layerIndex": "3",
        "property": "Effects.4-Color Gradient.Positions & Colors.Color 1",
        "value": "[1,0,0]"
    },
    {
        "composition": "Final",
        "type": "data",
        "layerIndex": "3",
        "property": "Effects.4-Color Gradient.Positions & Colors.Color 2",
        "value": "[1,0,0]"
    },
    {
        "composition": "Final",
        "type": "data",
        "layerIndex": "3",
        "property": "Effects.4-Color Gradient.Positions & Colors.Color 3",
        "value": "[1,0,0]"
    },
    {
        "composition": "Final",
        "type": "data",
        "layerIndex": "3",
        "property": "Effects.4-Color Gradient.Positions & Colors.Color 4",
        "value": "[1,0,0]"
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