import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


export default function App() { 
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();


  function HomeScreen(props: any) {
    // console.log(">> check props: ", props)
    const navigation: any = useNavigation()

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{marginVertical: 10}}>
          <Button 
          title='go to detail' 
          onPress={() => navigation.navigate('Details')} 
          />
        </View>
        
        <View style={{marginVertical: 10}}>
          <Button 
          title='go user id = 1' 
          onPress={() => navigation.navigate('Details', {
            userId: 1, name: 'khac tu 1'
          })} 
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Button 
          title='go user id = 2' 
          onPress={() => navigation.navigate('Details', {
            userId: 2, name: 'khac tu 2'
          })} 
          />
        </View>
       
      </View>
    );
  }

  function DetailsScreen(props: any) {
    console.log(">> check props: ", props)
    console.log(">> check route: ", props.route)

    const navigation: any = useNavigation()
    const route: any = useRoute()
    console.log(">> check route: ", route.params)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>User id = {route?.params?.userId}</Text>
        <Button 
        title='go back home' 
        onPress={() => navigation.goBack()} 
        />
      </View>
    );
  }
  
  
  return (    
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Trang chủ' }} />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={({route}: {route: any}) => ({ 
            headerTitle: `Xem chi tiết ${route?.params?.userId ?? ''}`,            
        })} />
      </Stack.Navigator> */}

    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>

    </NavigationContainer>
  );
}

