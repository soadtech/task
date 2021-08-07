import { database } from './db';
const db = database.openDatabase;
import {
    queryTask
} from './querys';


export const Task = {
    create: ({ title, description, type }) =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(
                    queryTask.createTask,
                    [title, description, type],
                    (tx, results) => {
                        resolve(results.rows.length > 0)
                    },
                    (error) => {
                        console.log('error', error);
                        reject(null, error)
                    },
                );
            });
        }),
    get: () =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(
                    queryTask.getAlltask,
                    [],
                    (tx, results) => {
                        resolve(results.rows.raw())
                    },
                    (error) => {
                        console.log('error', error);
                        reject(null, error)
                    },
                );
            });
        }),
    getStats: () =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(
                    queryTask.getStats,
                    [],
                    (tx, results) => {
                        console.log(results.rows.raw());
                        resolve(results.rows.raw())
                    },
                    (error) => {
                        console.log('error', error);
                        reject(null, error)
                    },
                );
            });
        }),
    getByType: (type) =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(
                    queryTask.getTaskByType,
                    [type],
                    (tx, results) => {
                        resolve(results.rows.raw())
                    },
                    (error) => {
                        console.log('error', error);
                        reject(null, error)
                    },
                );
            });
        }),
    completeTask: (id) =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(
                    queryTask.completeTask,
                    [id],
                    (tx, results) => {
                        console.log(results.rows.raw());
                        resolve(results.rows.raw())
                    },
                    (error) => {
                        console.log('error', error);
                        reject(null, error)
                    },
                );
            });
        }),
    updateTask: (description, id) =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(
                    queryTask.updateTask,
                    [description, id],
                    (tx, results) => {
                        resolve(results.rows.raw())
                    },
                    (error) => {
                        console.log('error', error);
                        reject(null, error)
                    },
                );
            });
        }),
    delete: (id) =>
        new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(
                    queryTask.deleteTask,
                    [id],
                    (tx, results) => {
                        resolve(results.rows.raw())
                    },
                    (error) => {
                        console.log('error', error);
                        reject(null, error)
                    },
                );
            });
        }),
};