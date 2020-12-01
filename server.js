/* REGION: Dev-Ang */
    const express = require('express');
    const app = express();

    const port = 3000;
    app.get('/', (req, res) => {
        res.send({ greet: 'Hi!, Welcome'})
    });

    const server = app.listen(port, ()=> {
        console.log(`Server is running in http://localhost:${port}`);
    })
    console.log('Merge#1-Merge DEV-ANG__DEV-QA__Main'); // Merge DEV-ANG__DEV-QA__Main

/* ENDREGION: Dev-Ang */
