import 'react-native-gesture-handler'
import  UserProvider  from './src/Context/UserContext';

import Rotas from './src/Rotas';
import { ReceitasProvider } from './src/Context/ReceitasContext';

export default function App() {

  return (
    <UserProvider>
      <ReceitasProvider>
        <Rotas />
      </ReceitasProvider>
    </UserProvider>
  );
}

