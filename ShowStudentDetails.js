import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

import { studentDetails, studentDetailsData} from '../Selectors/MySelector'

export default(props) => {

    const navigation = props.navigation

    // const studentDetails = useSelector((state) =>
    //     get(state, 'studentDetails', {}),
    // )

    // const studentDetailsData = useSelector((state) =>
    //     get(state, 'studentDetailsData', []),
    // )

    console.log('\n\nEmployee Details =========>\n', studentDetails, '\n============ END =============\n')
    console.log('\n\nEmployee Details ARRAY =========>\n', studentDetailsData, '\n============ END =============\n')

    return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor='transparent'
                style={
                    styles.buttonStyle
                }
                onPress={() => {
                    //Here we will call our Action
                    navigation.goBack()
                }}
            >
                <Text style={styles.buttonTextStyle}> Go Back</Text>
            </TouchableHighlight>
            <Text style={styles.mainTextStyle}>Show Student Details </Text>
            <View style={styles.textViewStyle}>
                <Text style={styles.textStyle}>Name:   </Text>
                <Text style={styles.textStyle}>{studentDetails.name}</Text>
            </View>

            <View style={styles.textViewStyle}>
                <Text style={styles.textStyle}>School Name:    </Text>
                <Text style={styles.textStyle}>{studentDetails.schoolName}</Text>
            </View>

            <View style={styles.textViewStyle}>
                <Text style={styles.textStyle}>Board Name:   </Text>
                <Text style={styles.textStyle}>{studentDetails.boardName}</Text>
            </View>
 
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#567',


    },
    textViewStyle: {
        flexDirection: 'row',
        paddingBottom: 20,
        // marginTop:50,
        marginHorizontal: 20,
        backgroundColor: '#567',

    },
    textStyle: {
        //width:'100%',
        height: 20,
        //paddingHorizontal:15,
        textAlign: 'left',
        marginTop: 10,
        fontSize: 15,
        color:'#fff'
    },
    mainTextStyle: {
        width: '100%',
        height: 40,
        //paddingHorizontal:15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        backgroundColor: '#567',
        color:'#fff'
    },
    buttonStyle: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignContent: 'center',
        alignSelf: 'center',
    },
    buttonTextStyle: {
        // width: '100%',
        // height: '100%',
        fontSize: 18
    },
})