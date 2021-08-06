import { database } from './db';
const db = database.openDatabase;
import { queryUsers } from './querys';


export const User = {

    get: () =>
        new Promise(function (resolve, reject) {
            console.log('llego')
            db.transaction((tx) => {
                console.log('llego x2');
                tx.executeSql(queryUsers.getName, [], (tx, results) => {
                    console.log('Aki ->', results.rows);
                    resolve(results)
                }, (error) => {
                    console.log(error)
                    reject(null, error)
                }
                );
            });
        }),
};