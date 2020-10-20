import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { add, subtract, addnote } from './stores/Actions'

interface RootStates {
    counter: number
    name: string
    note: string
}
  
export default function Counter() {

    const { counter, name, note } = useSelector((state: RootStates) => state)
    const dispatch = useDispatch()

    function handleADD (){
        dispatch(add())
    }

    function handleSUBTRACT (){
        dispatch(subtract())
    }

    return (
        <View style={styles.container}>

            <Text style={{ marginTop: 20, marginBottom: 30 }}>{name}</Text>

            <Button onPress={handleADD} title="Add" color="#a0f" />
            <Text style={{ margin:10 }}>{counter}</Text>            
            <Button onPress={handleSUBTRACT} title="Subtract" color="#a0f" />

            <TextInput 
                value={note} 
                onChangeText={text => dispatch(addnote(text))} 
                placeholder='Enter with any text'
                style={{backgroundColor: '#ccc', width: '80%', padding: 20, margin: 30}}
            />            
            <Text style={{ marginTop: 20, marginBottom: 20 }}>{note}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})