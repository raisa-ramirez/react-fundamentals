export default function LightSwitch() {
    function handleClick() {
      // let bodyStyle = document.body.style;
      // if (bodyStyle.backgroundColor === 'black') {
      //   bodyStyle.backgroundColor = 'white';
      // } else {
      //   bodyStyle.backgroundColor = 'black';
      // }

      let div = document.getElementById('mySquare')
      let divStyle = div.style
      if(divStyle.backgroundColor==='black'){
        divStyle.backgroundColor = 'white';
      } else {
        divStyle.backgroundColor = 'black';
      }
    }
  
    return (
        <>
            <h3>Challenge #1</h3>
            <button onClick={handleClick}>
                Alterna las luces
            </button>
        </>
    );
  }
  