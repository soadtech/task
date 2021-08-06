import { database } from './db';
const db = database.openDatabase;
import {

} from './querys';


export const Movimientos = {

    createMovimientosImpuestos: ({ }) =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(
                    //Query,
                    ['valores'],
                    (tx, results) => {
                        // Result
                    },
                    (error) => console.log(error),
                );
            });
        }),
};