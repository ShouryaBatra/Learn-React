import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';


function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <h2>Examasdfples</h2>
          <menu>
            <TabButton onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3></h3>
            <p></p>
            <pre>
              <code>

              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
