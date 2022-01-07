import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { saveStudentDetails, saveStudentDetailsData, saveStudentName } from '../Actions/saveStudentDetailsAction'

import { useDispatch, useSelector } from 'react-redux';
// import { studentDetailsData} from '../Selectors/MySelector'

import { get } from 'lodash'

export default({ navigation }) => {

    const [name,       setName]       = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [board,      setBoard]      = useState('')


    const studentDetailsData = useSelector((state) =>
        get(state, 'studentDetailsData', []),
    )

    const dispatcher = useDispatch()

    return (
        <View style={styles.mainView}>
            <Text style={styles.mainTextStyle}>Submit Student Details</Text>
            <Text style={styles.textStyle}>Enter Your Name</Text>
            <TextInput
                style={styles.textInputStyle}
                underlineColorAndroid='transparent'
                placeholderTextColor='#cccccc'
                placeholder='Enter Your Name'
                onChangeText={name => {
                    setName(name)
                }}
            />
            <Text style={styles.textStyle}>Enter Your School Name</Text>
            <TextInput
                style={styles.textInputStyle}
                underlineColorAndroid='transparent'
                placeholderTextColor='#cccccc'
                placeholder='Enter Your School Name'
                onChangeText={schoolName => {
                    setSchoolName(schoolName)
                }}
            />
            <Text style={styles.textStyle}>Enter Your Board Name</Text>
            <TextInput
                style={styles.textInputStyle}
                underlineColorAndroid='transparent'
                placeholderTextColor='#cccccc'
                placeholder='Enter Your Board Name'
                onChangeText={board => {
                    setBoard(board)
                }}
            />

            <TouchableOpacity
               // underlayColor='transparent'
                style={
                    styles.buttonStyle
                }
                onPress={() => {
                    //Here we will call our Action
                    var studentDetails = {};
                    studentDetails['name'] = name
                    studentDetails['schoolName'] = schoolName
                    studentDetails['board'] = board

                    var tempArr = [...studentDetailsData]

                    tempArr.push(studentDetails)
                    dispatcher(saveStudentName(name))
                    dispatcher(saveStudentDetails(studentDetails))
                    dispatcher(saveStudentDetailsData(tempArr))
                    navigation.push('ShowStudentDetails')
                   // navigation.navigate('ShowStudentDetails')

                }}
            >
                <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>

            <TouchableHighlight
                underlayColor='transparent'
                style={
                    styles.buttonStyle
                }
                onPress={() => {
                    //Here we will call our Action
                    navigation.navigate('ShowStudentDetails')
                    // navigation.push('ShowEmployeeDetails')

                }}
            >
                <Text style={styles.buttonTextStyle}>Go To Details</Text>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
      //  backgroundColor: '#876465',
        //   paddingHorizontal:10,
        paddingBottom: 50
    },
    mainView: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#567',

    },
    textInputStyle: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginBottom: 10,
        marginTop: 10,
      //  backgroundColor: '#567',

    },
    textStyle: {
        width: '100%',
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
        color:'#fff',
        backgroundColor: '#567',

    },
    buttonStyle: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#567',

    },
    buttonTextStyle: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18,
        color:'#fff',

    },
})