export default function Clock({ time }) {
    let hours = time.getHours()
    let classN = (hours >= 0 && hours <= 6)?'night':'day'
    return (
      <h1 id="time" className={classN}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }