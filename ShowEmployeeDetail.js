import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

export default ShowEmployeeDetail = (props) => {

    const navigation = props.navigation

    const employeeDetails = useSelector((state) =>
        get(state, 'employeeDetails', {}),
    )

    const employeeDetailsData = useSelector((state) =>
        get(state, 'employeeDetailsData', []),
    )

    console.log('\n\nEmployee Details =========>\n', employeeDetails, '\n============ END =============\n')
    console.log('\n\nEmployee Details ARRAY =========>\n', employeeDetailsData, '\n============ END =============\n')

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
            <Text style={styles.mainTextStyle}>Show Employee Details </Text>
            <View style={styles.textViewStyle}>
                <Text style={styles.textStyle}>Name:   </Text>
                <Text style={styles.textStyle}>{employeeDetails.name}</Text>
            </View>

            <View style={styles.textViewStyle}>
                <Text style={styles.textStyle}>School Name:    </Text>
                <Text style={styles.textStyle}>{employeeDetails.schoolName}</Text>
            </View>

            <View style={styles.textViewStyle}>
                <Text style={styles.textStyle}>Company Name:   </Text>
                <Text style={styles.textStyle}>{employeeDetails.companyName}</Text>
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
        backgroundColor: 'lightgray',


    },
    textViewStyle: {
        flexDirection: 'row',
        paddingBottom: 20,
        // marginTop:50,
        marginHorizontal: 20
    },
    textStyle: {
        //width:'100%',
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