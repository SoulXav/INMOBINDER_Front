import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    avatarContainer: {
        backgroundColor: '#2E2323',
        flex: 1,
    },
    avatar: {
        width: 100,
        height: 100,      
        marginTop: 50,
        marginBottom: 50,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    menuContainer: {
        marginVertical: 1,
        paddingVertical: 1,
        paddingHorizontal: 10,
    },

    menuTexto: {
        flex: 2,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginVertical:20,
        marginHorizontal: 0,
        alignSelf: 'flex-start'

    },

    menuTextoCerrarSesion: {
        fontSize: 15,
        fontWeight: 'bold',        // Negrita
        color: '#000000',         // Color del texto
        marginVertical: 60,      // Margen vertical (espacio arriba y abajo)
        marginHorizontal: 5,     // Margen horizontal (espacio a los lados)
        alignSelf: 'flex-start'     // Posicionamiento propio en el extremo derecho
    },

    menuLateralgestac: {
        width: 180,
        height: 100,      
        alignSelf: 'center',
        resizeMode: 'contain'
    }
    
    
    
    
    
});


