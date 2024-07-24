import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default FlatlistScroll = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21])
    const [selectedIndex, setSelectedIndex] = useState(0);
    const flatlistref = useRef(null);

    useEffect(() => {
        flatlistref.current.scrollToIndex({
            index: selectedIndex,
            animated: true
        })
    }, [selectedIndex])

    return (
        <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginTop: 80, height: '10%', justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    initialScrollIndex={selectedIndex}
                    horizontal data={data}
                    ref={flatlistref}
                    renderItem={({ item, index }) => {
                        return (<View style={{
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'orange',
                            marginHorizontal: 10,
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>{index}</Text></View>)
                    }} />
            </View>



            <View style={{ marginTop: 10, height: '80%', width: '100%', justifyContent: 'center', }}>
                <FlatList
                    //numColumns={3}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (<TouchableOpacity
                            style={{
                                height: 60,
                                width: '91%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'orange',
                                margin: 6,
                                borderRadius: 10,
                                borderColor: '#fff',
                                borderWidth: 2
                            }}
                            onPress={() => {
                                setSelectedIndex(index)
                            }}
                        >
                            <Text style={{ fontSize: 20, color: '#fff' }}>{index}</Text>
                        </TouchableOpacity>)
                    }} />
            </View>
        </View>)
}
