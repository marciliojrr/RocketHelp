import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
// import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {

    // Carregamento de fontes
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    });

    return (
        <NativeBaseProvider theme={THEME}>

            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            {fontsLoaded ? <Routes /> : <Loading />}

        </NativeBaseProvider>
    );
}
