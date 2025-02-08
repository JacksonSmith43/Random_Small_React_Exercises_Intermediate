import './App.css';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/GlobalStyles'
import ReactionTimeGame from './components/ReactionTimeGame';

function App() {

  return (
    <ThemeProvider theme={theme}>

      <ReactionTimeGame />

    </ThemeProvider>
  );
}

export default App;
