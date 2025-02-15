export function Avatar(){
    const avatar = "https://randomuser.me/api/portraits/women/52.jpg"
    const description = "User"
    const user = {
        name: "Raisa",
        theme: {
            color: 'purple',
            fontWeight: 'bolder',
            fontSize:"13px",
            backgroundColor: 'pink',
            width: '8%',
            textAlign: 'center',
            padding: '10px'
        }
    }
    return (
        <>
            <p style={user.theme}>{user.name}</p>
            <img  
                style={
                    {
                        borderRadius: "20px",
                        border: "1px dashed blue"
                    }
                }      
                className="avatar"
                src={avatar}
                alt={description}
            />
        </>
      );
}