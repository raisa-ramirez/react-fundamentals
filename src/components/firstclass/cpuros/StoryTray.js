export default function StoryTray({ stories }) {

    let data = [...stories]
    data.push({
      id: 'create',
      label: 'Crear historia'
    });
  
    return (
      <ul>
        {data.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    );
  }