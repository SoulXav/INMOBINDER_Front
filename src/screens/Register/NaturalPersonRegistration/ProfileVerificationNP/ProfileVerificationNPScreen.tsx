// Importa las bibliotecas necesarias
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native'; 
import { Button, Image } from '@rneui/base';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles';
import { styleIndependient } from './ProfileVerificationNPStyles';
import { screen } from '../../../../utils/ScreenName';
import { Ionicons } from '@expo/vector-icons';

// Define el tipo para el documento
type DocumentoType = {
  type: string;
  name: string;
  size: number;
  uri: string;
  lastModified?: number;
  output?: any;
}

// Componente de la pantalla de verificación de perfil
export default function ProfileVerificationNPScreen() {
  
  function handleContinuer(){
    navigation.navigate('MainDrawer' as never);
  }

  // Inicializa el estado para el documento
  const [documento, setDocumento] = useState<DocumentoType | null>(null);

  // Configura la navegación
  const navigation = useNavigation();

  // Función para seleccionar un archivo
  const seleccionarArchivo = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (!result.canceled && result.assets.length > 0) {
      setDocumento(result.assets[0] as DocumentoType);
    }
  }
  
  // Renderiza el componente
  return (
    <SafeAreaView style={styles.container}>

      <View style={styleIndependient.header}> 
        <Image source={require('../../../../../assets/images/INMOBINDER-03.png')} style={styleIndependient.imgLogo} />
      </View>

      <View style={styleIndependient.containerOption}> 
        <Text style={{ ...styleIndependient.textRegister, fontFamily: 'Cairo_700Bold'}}>Verificación de perfil</Text>
        <Text style= {{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular'}}>Fotocopia de carnet</Text>

        <View style={styleIndependient.containerbtnarchivo}>
          <Button containerStyle={styleIndependient.containerBtn} buttonStyle={styleIndependient.btnStyle} onPress={seleccionarArchivo}>
            <Text style={{ ...styleIndependient.textBtn, fontFamily: 'Cairo_400Regular'}}> Seleccionar Archivo</Text>
          </Button>
          <Text style={{ ...styleIndependient.textContainer, fontFamily: 'Cairo_400Regular'}}> {documento ? documento.name : 'Ningún archivo seleccionado'}</Text>
        </View>

        <View style={styleIndependient.contenttext}>
          <Text style={{ ...styleIndependient.text}}>Tipo de archivos permitidos: PDF, DOC, DOCX</Text>
          <Text style={{ ...styleIndependient.text}}>Tamaño máximo de archivo: 2MB</Text>
        </View>

        <View style={styleIndependient.containerbtns}>
          <View >
            <Text style={{ ...styleIndependient.textOmitir}}> Omitir</Text>
          </View>
          <Button buttonStyle={styleIndependient.btnStyle2} onPress={handleContinuer}>
            <Text style={{ ...styleIndependient.textBtn2, fontFamily: 'Cairo_700Bold'}}> Enviar</Text>
          </Button>
        </View>     
      </View>
    </SafeAreaView>
  );
}