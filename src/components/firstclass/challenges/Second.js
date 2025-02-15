import { getImageUrl } from './utils.js';
import Profile from './Profile.js';

export default function Gallery() {
    let profileData = [
        {
            name:  'Maria Skłodowska-Curie',
            imageUrl: getImageUrl(3),
            width: '80',
            height: '100',
            profession: 'física y química',
            awards: ['Premio Nobel de Física', 'Premio Nobel de Química', 'Medalla Davy', 'Medalla Matteucci'],
            discoveries: 'polonio (elemento químico)'
        },
        {
            name:  'Katsuko Saruhashi',
            imageUrl: getImageUrl(9),
            width: '80',
            height: '100',
            profession: 'geoquímica',
            awards: ['Premio Miyake de geoquímica', 'Premio Tanaka'],
            discoveries: 'un método para medir el dióxido de carbono en el agua de mar'
        }
    ]

    return (
        <div>
            <h1>Científicos Notables</h1>
            <Profile person={profileData[0]}/>
            <Profile person={profileData[1]}/>
        </div>
    );
}