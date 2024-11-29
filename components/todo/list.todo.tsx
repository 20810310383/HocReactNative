import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 10,
        padding: 15
    },  
});

interface IProps {
    todoList: ITodo[]
    deleteTodo: (v:number) => void
}
const ListTodo = (props: IProps) => {
   
    const {todoList, deleteTodo} = props
    console.log(todoList)
   
    return (
        <>
        <FlatList
            style={{
            marginTop: 20, 
            borderColor: "red", 
            borderWidth: 2
            }}
            data={todoList}
            renderItem={({item}) => {
                // console.log(">>> check data: ", data)
                return (
                    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                        <Text style={styles.todo}>{item.title} </Text>
                    </TouchableOpacity>                
                )
            }}
            keyExtractor={item => item.id + ''}
        />     
        </>
    )
}
export default ListTodo