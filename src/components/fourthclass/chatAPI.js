export default function createConnection(){
    return {
        connect() {
            console.log('Connecting...')
        },
        disconect() {
            console.log('Disconnecting')
        }
    }
}