import { StatusBar, Text } from 'react-native';
import Route from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={"transparent"} translucent={true}/>
      <Text>ROute</Text>
      <Route />
    </>
  )
}

export default App;
