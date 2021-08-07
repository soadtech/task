import { database } from './db';
const db = database.openDatabase;
import { queryUsers } from './querys';


export const User = {

    get: () =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(queryUsers.getName, [], (tx, results) => {
                    resolve(results.rows.raw())
                }, (error) => {
                    console.log(error)
                    reject(null, error)
                }
                );
            });
        }),
    create: (name) =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(queryUsers.createName, [name], (tx, results) => {
                    resolve(results.rows.length > 0)
                }, (error) => {
                    console.log(error)
                    reject(null, error)
                }
                );
            });
        }),
};