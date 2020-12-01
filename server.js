/* REGION Merge#0: DevANG */
    const express = require('express');
    const app = express();

    const port = 3000;
    app.get('/', (req, res) => {
        res.send({ greet: 'Hi!, Welcome'})
    });

    const server = app.listen(port, ()=> {
        console.log(`Server is running in http://localhost:${port}`);
    })
/* ENDREGION Merge#0: DevANG */

/* REGION: DevQA Err */
    console.log('ConflicMerge#2: CORRECCION__.DevANG -> DevQA'); // @OVERRIDE-ConflicMerge#2: DevANG 
/* ENDREGION: DevQA Err */

/* REGION: DevANG -> DevQA */
    console.log('Merge#1: DevANG -> DevQA -> Main'); // @OVERRIDE-Merge#1: DevANG

    /* REGION: BOTH CHANGES */
        console.log('ConflicMerge#1: DevANG -> DevQA'); // @OVERRIDE-ConflicMerge#1: DevANG
        console.log('Rebase#1: DevANG -> DevQA'); // Rebase#1: DevQA
    /* ENDREGION: BOTH CHANGES */

/* ENDREGION: DevANG -> DevQA */


