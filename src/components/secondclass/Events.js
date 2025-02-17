function Button({ doSomething, children }) {
    return (
      <button onClick={doSomething}>
        {children}
      </button>
    );
}

function UploadingImage({imageName}) {
    const onHandleClick = () => alert('Image: '+imageName)

    return <Button doSomething={onHandleClick}>Upload Image</Button>
}

function PlayingMovie({movieName}) {
    const onHandleClick = () => alert('Playing: '+movieName)

    return <Button doSomething={onHandleClick}>Play Movie</Button>
}

function Toolbar({handleClick}){
    return <>
        <UploadingImage imageName="portada.jpg"/>
        <PlayingMovie movieName="Lucifer"/>
    </>
}

export default Toolbar;