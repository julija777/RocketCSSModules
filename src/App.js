
import styles from './App.module.css';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke'

function App() {
  return (
    <div className={styles.App}>
      <Title />
      <Background />
      <Grid />
      <Rocket />
      <Smoke />

    </div>
  );
}

export default App;
