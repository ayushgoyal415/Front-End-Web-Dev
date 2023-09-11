import Jokes from './Components/Jokes';
import db from './db/db';

export default function App() {
  return (
    <main>
      {db.map(joke => (
        <Jokes key={joke.id} {...joke} />
      ))}
    </main>
  );
}
