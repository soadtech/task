import { database } from './db';
const db = database.openDatabase;
import { queryUsers } from './querys';


export const User = {

    get: () =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(queryUsers.getName, [], (tx, results) => {
                    resolve(results.rows.length > 0)
                }, (error) => {
                    console.log(error)
                    reject(null, error)
                }
                );
            });
        }),
};