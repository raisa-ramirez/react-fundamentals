export default function createConnection(){
    return {
        connect() {
            console.log('Connecting...')
        },
        disconnect() {
            console.log('Disconnecting')
        }
    }
}

export function createEncryptedConnection(roomId) {
    // Una implementación real se conectaría realmente al servidor 
    return {
      connect() {
        console.log('✅ 🔐 Conectando a "' + roomId + '... (encriptado)');
      },
      disconnect() {
        console.log('❌ 🔐 Desconectando de la sala "' + roomId + '" (encriptado)');
      }
    };
  }
  
  export function createUnencryptedConnection(roomId) {
    // Una implementación real se conectaría realmente al servidor 
    return {
      connect() {
        console.log('✅ Conectando a "' + roomId + '... (sin encriptado)');
      },
      disconnect() {
        console.log('❌ Desconectando de la sala "' + roomId + '" (sin encriptado)');
      }
    };
  }
  