export default {
    tablesSource: 'wss://js-assignment.evolutiongaming.com/ws_api',
    credentials: {
        username: 'user1234',
        password: 'password1234'
    },
    maxParticipants: 12,
    messageTypes: {
        login: 'login',
        loginSuccess: 'login_successful',
        loginFail: 'login_failed',
        ping: 'ping',
        pong: 'pong',
        subscribeTables: 'subscribe_tables',
        unsubscribeTables: 'unsubscribe_tables',
        tableList: 'table_list',
        notAuthorized: 'not_authorized',
        addTable: 'add_table',
        updateTable: 'update_table',
        removeTable: 'remove_table',
        removalFailed: 'removal_failed',
        updateFailed: 'update_failed',
        tableAdded: 'table_added',
        tableRemoved: 'table_removed',
        tableUpdated: 'table_updated'
    }
};
