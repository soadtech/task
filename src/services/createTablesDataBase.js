import { database } from './db';
import { createTableUser } from '../services/querys'

const db = database.openDatabase;

export const createTablesDatabase = async (force = false) => {
    if (force) {
        //await deleteTablesExisting();
        const nameTables = ['users']
        const createSql = [createTableUser]

        const deleteTablesArray = []
        const createTablesArray = []
        for (let i = 0; i < nameTables.length; i++) {
            // deleteTablesArray.push(deleteTablesExisting(nameTables[i]))
            createTablesArray.push(createTables(createSql[i], nameTables[i]))

        }
        // const resultDeleteTables = await Promise.all(deleteTablesArray)
        try {
            const resultCreateTables = await Promise.all(createTablesArray)
        } catch (error) {
            console.log("se exploto las db", error)
        }

        return;
    }
};

const createTables = (sql, table) => new Promise(function (resolve, reject) {
    db.transaction((tx) => {
        tx.executeSql(sql, [], (tx, results) =>
            tx.executeSql(`SELECT name FROM sqlite_master WHERE type='table' AND name=?;`, [table], (tx, results) => {
                if (results.rows.length === 1) {

                    resolve(`Tabla ${table} creada correctamente`)
                } else {
                    resolve(`No se puedo crear la tabla ${table}`)
                }
            })
        );
    }, error => console.log(error));
})

