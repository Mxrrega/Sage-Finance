import React, { useState } from "react";
import { Text, View, Switch } from "react-native";

export default function Opcoes() {
  const [modoEscuro, setModoEscuro] = useState(false);
  const corHeader = modoEscuro ? '#2980B9' : '#2C3E50';

  return (
    <View>
      <View style={{ backgroundColor: corHeader, padding: 50 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Opções</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 16 }}>🌙 Modo Escuro</Text>
        <Switch
          style={{ marginLeft: 'auto' }}
          value={modoEscuro}
          onValueChange={(value) => setModoEscuro(value)}
        />
      </View>
    </View>
  );
}
