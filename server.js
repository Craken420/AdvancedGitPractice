/* REGION All FROM DevQA: Rebase DevANG onto DevQA */// @DevANG: Merge#2

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
        console.log('ConflicMerge#2: CORRECCION__.DevANG -> DevQA'); // @DevANG: ConflicMerge#2
        console.log('ConflicRebase#1: ERR DevQA'); // @DevQA: ConflicRebase#1
    /* ENDREGION: DevQA Err */

    /* REGION: DevANG -> DevQA */
        console.log('Merge#1: DevANG -> DevQA -> Main'); // @DevANG: Merge#1

        /* REGION: BOTH CHANGES */
            console.log('ConflicMerge#1: DevANG -> DevQA'); // @DevANG: ConflicMerge#1
            console.log('Rebase#1: DevANG -> DevQA'); // @DevQA: Rebase#1
        /* ENDREGION: BOTH CHANGES */

    /* ENDREGION: DevANG -> DevQA */

/* ENDREGION All FROM DevQA: Rebase DevANG onto DevQA */// @DevANG: Merge#2
