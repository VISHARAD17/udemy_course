// import './components/List';
// import List from './components/List';
import Entry from './components/Entry';
import './style.css';
import Emojipedia from './components/Emojipedia';

console.log(Emojipedia);

const creatEntry = (e) => {
  return (
    <Entry
      key = {e.id}
      emoji = {e.emoji}
      name = {e.name}
      description = {e.meaning}
    />
  )
}

const App = () => {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(creatEntry)}
      </dl>
    </div>
  );
}
 
export default App;