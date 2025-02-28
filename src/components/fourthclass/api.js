export async function fetchBio(person) {
    const delay = person === 'Bob' ? 2000 : 200;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Esta es la biografía de ' + person + '.');
      }, delay);
    })
}  