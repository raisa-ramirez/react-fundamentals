export default function Arrays() {
    const people = [
        'Creola Katherine Johnson: matemática',
        'Mario José Molina-Pasquel Henríquez: químico',
        'Mohammad Abdus Salam: físico',
        'Percy Lavon Julian: químico',
        'Subrahmanyan Chandrasekhar: astrofísico'
    ];

    const list = people.map((person,id) => <li key={id}>{person}</li>)
    return <>
        {list}
    </>
}