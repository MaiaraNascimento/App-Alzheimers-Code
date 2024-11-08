import * as React from "react";
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";

const telaBlocoNotas = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim()) {
      setNotes(prevNotes => [
        ...prevNotes,
        { key: Math.random().toString(), value: note }
      ]);
      setNote('');
    }
  };

  const removeNote = (noteId) => {
    setNotes(prevNotes => prevNotes.filter(note => note.key !== noteId));
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.noteContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          value={note}
          onChangeText={setNote}
        />
       <TouchableOpacity style={styles.addButton} onPress={addNote}>
          <Text style={styles.addButtonText}>Adicionar </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.value}</Text>
            <TouchableOpacity style={styles.btnExcluir}  onPress={() => removeNote(item.key)}>
              <Text style={styles.removeText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.key}
        style={styles.notesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dacadd',
  },
//posição caixa de texto das margens
  noteContainer: {
    padding: 20,
   borderRadius: 50,
  },
//estilo caixa de texto
  input: {
    height: 40,
    width: 320,
    borderColor: '#4C0D62',
    borderWidth: 2,
    marginBottom: 1,
    paddingHorizontal: 5,
    color: 'black',
    borderRadius: 10,
    marginTop: 15,
    top:-20,
  },

  // estilo da nota já adicionada
  noteItem: {
    padding: 10,
    borderBottomWidth: 1,
     borderBottomColor:'#4C0D62',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight:'bold',

  },
  //tamanho fonte
  noteText: {
    fontSize: 15,
  },
  //texto exluir  cor
  removeText: {
    color: '#4C0D62',
    fontWeight:'bold'
  },
  addButton: {
    backgroundColor: '#4C0D62',
    padding: 10,
    borderRadius: 10,
    left: 80,
     width: 150,
    height: 45,
    alignItems: 'center',
  },
addButtonText: {
  color: 'white',
    fontFamily: 'verdana',
    fontSize: 20,
}

});

export default telaBlocoNotas;
