import React from 'react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import App from "./App";
class AppContainer extends React.Component {
    render() {
        console.log(App)
        return (
            <ActionSheetProvider>
                <App />
            </ActionSheetProvider>
        );
    }
}

export default AppContainer
