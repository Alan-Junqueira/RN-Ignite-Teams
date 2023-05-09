import { ThemeProvider } from 'styled-components';

import { Groups } from '@screens/Groups';
import { defaultTheme } from 'src/theme';


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Groups />
    </ThemeProvider>
  );
}
