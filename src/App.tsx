import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  thing: {
    color: 'green',
  },
});

const Hello = () => {
  const css = useStyles();
  return (
    <div>
      <div className={css.thing}>app</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;
