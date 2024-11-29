import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native"
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    },

});
interface Iprops {
    addTodo: (v: string) => void
}
const InputTodo = (props: Iprops) => {

    const {addTodo} = props
    const [name, setName] = useState<string>("")

    const handleAddNewTodo = () => {
        // validate
        if(!name) {
            Alert.alert("Vui long khong duoc de trong", 'Tieu de khong duoc de trong', [
                // {
                //   text: 'Cancel',
                //   onPress: () => console.log('Cancel Pressed'),
                //   style: 'cancel',
                // },
                {text: 'OK Bro', onPress: () => console.log('OK Pressed')},
            ])
            return
        }

        addTodo(name)
        setName('')
    }
   
    return (
        <>
        <View style={{marginBottom: 20}}>
            <TextInput 
            onChangeText={v => setName(v)}
            value={name}
            autoCapitalize='words'
            // keyboardType='numeric'
            // maxLength={6}
            // multiline={true}
            autoCorrect={false}
            style={styles.todoInput}
            /> 
            
            {/* <Button 
                title="Add new" 
                color={"green"} 
                onPress={() => handleAddNewTodo()} 
            /> */}

            <MineButton 
             onPress={handleAddNewTodo} 
             title={'add new'} 
            />
        </View>
        </>
    )
}
export default InputTodo