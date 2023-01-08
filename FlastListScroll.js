/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';



const BookingProcess = ({}) => {
    const flatListRef = useRef(FlatList);
    
    const nextPress = index => {
        if (index <= 2) {
            flatListRef?.current?.scrollToIndex({
                animated: true,
                index: index + 1
            });
        }
    };

    const backPress = index => {
        if (index >= 1) {
            flatListRef?.current?.scrollToIndex({
                animated: true,
                index: index - 1
            });
        }
    };

    return (
        <View
            style={{
                ...styles.cardView,
                padding: 0,
                elevation: 0,
                borderWidth: 1,
                borderColor: '#f2f2f2',
                overflow: 'hidden'
            }}>
            <View
                style={{
                    padding:2,
                    backgroundColor: '#fff'
                }}>
                <Text
                    style={{
                        color: '#fff'
                    }}>
                    Booking Process
                </Text>
            </View>
            <Text
                style={{
                    padding: 2,
                    paddingBottom: 0
                }}>
                You can reserve your parking slot in advance. Please follow
                these four simple steps to book your parking slot.
            </Text>
            <FlatList
                data={[{id:1, name:'Sundar', address:'Patna', description:'My Name Is Khan'},{id:2, name:'Sundar', address:'Patna', description:'My Name Is Khan'},{id:3, name:'Sundar', address:'Patna', description:'My Name Is Khan'},{id:4, name:'Sundar', address:'Patna', description:'My Name Is Khan'}]}
                horizontal={true}
                ref={flatListRef}
                contentContainerStyle={{ padding: 2 }}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.innerCard}>
                            <View>
                            <Text>{item.id}</Text>
                            </View>
                            <View style={styles.ButtonBox}>
                                <TouchableOpacity
                                    onPress={() => backPress(index)}
                                    style={{
                                        backgroundColor: 'red',
                                        borderRadius: 50,
                                        width:50,
                                        height:50
                                        }}>
                                   <Text>Left</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => nextPress(index)}
                                    style={{
                                        backgroundColor:'#765432',
                                        borderRadius: 50,
                                         width:50,
                                        height:50
                                    }}>
                                    <Text>Right</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.innercardHeaderView}>
                                <Text style={styles.headingTextNumber}>
                                    {item.name}. {item.address}
                                </Text>
                            </View>

                            <Text style={styles.description}>
                                {item.description}
                            </Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default BookingProcess;
const styles = StyleSheet.create({
    cardView: {
        backgroundColor: '#fff',
        margin: 2,
        elevation: 4,
        borderRadius: 2,
        padding: 2,
        width: 494,
        height: 194,
        //flex:1
    },
    innerCard: {
        flexDirection:'column',
        margin: 2,
        borderRadius: 2,
        padding: 2,
        paddingTop: 0,
        paddingHorizontal: 0,
        overflow: 'hidden',
        width: 290,
        elevation: 5,
        marginLeft: 0,
        padding: 2,
        backgroundColor: '#fff'
    },
    ButtonBox: {
        position: 'absolute',
        flexDirection: 'row',
        right: 0,
        justifyContent: 'space-between',
        width: 20,
        padding: 2
    },
    innercardHeaderView: {
        backgroundColor: '#0000',
        flexDirection: 'column',
        padding: 2,
        paddingBottom: 0,
        alignItems: 'center'
    },
    headingTextNumber: {
        color:'#878787',
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
    description: {
        paddingHorizontal: 2,
        textAlign: 'justify'
    }
})