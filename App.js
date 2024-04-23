import 'react-native-gesture-handler'
import  UserProvider  from './src/Context/UserContext';

import Rotas from './src/Rotas';
import { ReceitasProvider } from './src/Context/ReceitasContext';
import { DespesasProvider } from './src/Context/DespesasContext';

export default function App() {

  return (
    <UserProvider>
      <ReceitasProvider>
        <DespesasProvider>
        <Rotas />
        </DespesasProvider>
      </ReceitasProvider>
    </UserProvider>
  );
}

