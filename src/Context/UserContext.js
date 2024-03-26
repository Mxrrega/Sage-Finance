import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

    

function UserProvider({children}) 
{
    const[ usuario, setUsuario ] = useState(null);
    const[ logado, setLogado ] = useState(null);

    async function Login( email, senha )
    {
        if( email == "teste@gmail.com" && senha == "123")
        {
            await AsyncStorage.setItem( "usuario" , "Matheus" );
            setLogado( true );
        }
    }

    async function infoUsuario()
    {
        const usuario = await AsyncStorage.getItem( "usuario" );
        setUsuario( usuario );
    }
    return(
        <UserContext.Provider value={{usuario: usuario, logado: logado, Login, infoUsuario }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;