import FaultyCounter from './Components/1-FaultyCounter';
import WorkingCounter from './Components/2-WorkingCounter';
import HappySad from './Components/3-HappySad';
import List from './Components/4-List';
import Contact from './Components/5-Contact';

export default function App() {
  return (
    <div>
      <FaultyCounter />
      <WorkingCounter />
      <HappySad />
      <List />
      <Contact />
    </div>
  );
}
