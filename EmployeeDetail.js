import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import { saveEmployeeDetails, saveEmployeeDetailsData, saveEmployeeName } from '../Actions/saveEmployeeDetailAction'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'
import { useNavigation } from '@react-navigation/native';

export default EmployeeDetails = ({ navigation }) => {

    const [name, setName] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [companyName, setCompanyName] = useState('')

    // const navigation = useNavigation()

    const employeeDetailsData = useSelector((state) =>
        get(state, 'employeeDetailsData', []),
    )

    const dispatcher = useDispatch()

    return (
        <View style={styles.mainView}>
            <Text style={styles.mainTextStyle}>Submit Employee Details</Text>
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
            <Text style={styles.textStyle}>Enter Your Company Name</Text>
            <TextInput
                style={styles.textInputStyle}
                underlineColorAndroid='transparent'
                placeholderTextColor='#cccccc'
                placeholder='Enter Your Company Name'
                onChangeText={companyName => {
                    setCompanyName(companyName)
                }}
            />

            <TouchableHighlight
                underlayColor='transparent'
                style={
                    styles.buttonStyle
                }
                onPress={() => {
                    //Here we will call our Action
                    var employeeDetails = {};
                    employeeDetails['name'] = name
                    employeeDetails['schoolName'] = schoolName
                    employeeDetails['companyName'] = companyName

                    var tempArr = [...employeeDetailsData]

                    tempArr.push(employeeDetails)
                    dispatcher(saveEmployeeName(name))
                    dispatcher(saveEmployeeDetails(employeeDetails))
                    dispatcher(saveEmployeeDetailsData(tempArr))
                    navigation.push('ShowEmployeeDetails')
                }}
            >
                <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='transparent'
                style={
                    styles.buttonStyle
                }
                onPress={() => {
                    //Here we will call our Action
                    navigation.navigate('ShowEmployeeDetails')
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
        backgroundColor: 'lightgray',
        //   paddingHorizontal:10,
        paddingBottom: 50
    },
    mainView: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginBottom: 10,
        marginTop: 10
    },
    textStyle: {
        width: '100%',
        height: 20,
        //paddingHorizontal:15,
        textAlign: 'left',
        marginTop: 10,
        fontSize: 15
    },
    mainTextStyle: {
        width: '100%',
        height: 40,
        //paddingHorizontal:15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    },
    buttonStyle: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 20
    },
    buttonTextStyle: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18
    },
})