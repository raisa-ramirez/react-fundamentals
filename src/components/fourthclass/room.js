export function createConnection(serverUrl, roomId) {
    // Una implementación real se conectaría realmente al servidor.
    return {
      connect() {
        console.log('✅ Conectando a la sala "' + roomId + '" en ' + serverUrl + '...');
      },
      disconnect() {
        console.log('❌ Desconectando de "' + roomId + '" en ' + serverUrl);
      }
    };
}  