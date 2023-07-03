import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp } from '../pages';

import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();


const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="signin">
                <Stack.Screen options={{headerShown: false}} name="signin" component={SignIn} />
                <Stack.Screen options={{headerShown: false}} name="signup" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;