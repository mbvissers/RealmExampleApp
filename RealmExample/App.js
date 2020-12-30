import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, FlatList, View, TouchableOpacity} from 'react-native';
import realm, {
    getAllBooks,
    addBook,
    deleteAllBooks,
    updateAllBookEditions,
    getBigBooks,
    getAllAuthors,
    getAuthorById,
    addAuthor
} from "./Database";

const App = () => {
    // Set initial states
    const [books, setBooks] = useState(getAllBooks());
    const [authors, setAuthors] = useState(getAllAuthors());

    //addAuthor(0, "Fox", "Stevenson")
    //addAuthor(2, "Unknwn", "Mnmlst")
    //addAuthor(3, "First", "Last")

    // Render
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={{padding: 16}}>
                {/* Our buttons for books */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{paddingVertical: 8}}
                          onPress={() => {
                              addBook("Chronicles of JavaScript", Math.floor(Math.random() * 500), null, getAuthorById(1)[0])
                              setBooks(getAllBooks())
                          }}>Add book</Text>

                    <Text style={{paddingVertical: 8}}
                          onPress={() => {
                              updateAllBookEditions()
                              setBooks(getAllBooks())
                          }}>Update edition</Text>

                    <Text style={{paddingVertical: 8}}
                          onPress={() => {
                              deleteAllBooks()
                              setBooks(getAllBooks())
                          }}>Delete all books</Text>
                </View>

                {/* List for all books */}
                <Text style={{marginTop: 8, fontWeight: 'bold'}}>Books</Text>
                <FlatList
                    data={books}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>{item.title}</Text>
                                <Text>{item.pages}</Text>
                                <Text>{item.edition === null ? 'null' : item.edition}</Text>
                                <Text>{item.author === null ? 'null' : item.author.firstName + ' ' + item.author.lastName}</Text>
                            </View>
                        )
                    }} />

                {/* List for all authors */}
                <Text style={{marginTop: 8, fontWeight: 'bold'}}>Authors</Text>
                <FlatList
                    data={authors}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>{item.id}</Text>
                                <Text>{item.firstName + ' ' + item.lastName}</Text>
                            </View>
                        )
                    }} />

            </SafeAreaView>
        </>
    );
};

export default App;
