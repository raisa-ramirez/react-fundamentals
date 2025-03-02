export function createConnection({ serverUrl, roomId }) {
    // Una aplicación real se conectaría al servidor
    if (typeof serverUrl !== 'string') {
      throw Error('Expected serverUrl to be a string. Received: ' + serverUrl);
    }
    if (typeof roomId !== 'string') {
      throw Error('Expected roomId to be a string. Received: ' + roomId);
    }
    return {
      connect() {
        console.log('✅ Conectando a la sala "' + roomId + '" en ' + serverUrl + '...');
      },
      disconnect() {
        console.log('❌ Desconectando de la sala "' + roomId + '" en ' + serverUrl);
      }
    };
}  