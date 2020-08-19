import path from 'path'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants'

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'src','database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    useNullAsDefault: true,
}