import { openDatabase } from 'react-native-sqlite-storage';

export const database = {
    openDatabase: openDatabase(
        { name: 'tasks.db' },
        (openCB) => console.log('Database OPENED'),
        (err) => console.log("Error on opening database 'tasks'", err),
    ),
    successCB: () => {

    },
};