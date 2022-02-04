import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { axiosInstance } from '../src/config/configureaxios'
import { TouchableOpacity } from 'react-native';
import { routesConfig } from '../src/config/routes'
import axios from 'axios';
import { getcheckservice, postcheckservice, putcheckservice, allcheckservice } from '../src/Services/ApiCheckService'

function ApiCheck(props) {

const [MyData, setMyData] = useState([]);

const [GetData, setGetData] = useState([]);

//    const reqOne = axios.get('https://jsonplaceholder.typicode.com/todos/1');
//    const reqTwo = axios.get('https://reqres.in/api/users?page=2');

//    allcheckservice([reqOne, reqTwo]).then(res => console.log(res[0]))
//                                         .catch(err => console.log(err))

const callgetapi = () => {

    getcheckservice(routesConfig.auth.getdata).then(res => {
        const persons = res.data;
        setMyData(persons);
        console.log("==========>>>",persons);
    });
      
}

const hello1 = () => {

    postcheckservice(routesConfig.auth.login,{
        name: "morpheus",
        job: "leader"
    }).then(res => {
        const persons = res.data;
       // setMyData(persons);
        console.log("==========>>>",persons);
    })
    .catch((err)=>{
        console.log("ERROR==========>>>",JSON.stringify(err));
    })
      
}

const Hai = () => {
    axios.post('https://reqres.in/api/users', { name: "morpheus", job: "leader" })
      .then((res) => setGetData(res.data))
      .catch((error) => console.log("====>>>>",error));
}


   const calldeleteapi = () => {
    deletecheckservice(routesConfig.auth.login,{})
    .then(res => console.log(res))
    .catch((err) => console.log("ERROR==========>>>",JSON.stringify(err)))
   }

   const callputapi = () => {
    putcheckservice(routesConfig.auth.login,{
        "name": "morpheus",
        "job": "zion resident"
    })
    .then(res => console.log(res))
    .catch((err) => console.log("ERROR==========>>>",JSON.stringify(err)))
   }


   const Hhh = () => {
      GetData.map(item => {
       return <Text>{item.email}</Text>
     })
   }

    return (
        <View style={{  justifyContent:'center', alignItems:'center', backgroundColor:'red', flex:1}}>
            <TouchableOpacity onPress={() => callgetapi()}>
            <View>
                <Text>Axios Fetch</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => calldeleteapi()} style={{ marginTop:30}}>
            <View>
                <Text>Axios Fetch</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => callputapi()} style={{ marginTop:30}}>
            <View>
                <Text>Axios Put</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Hai()} style={{ marginTop:30}}>
            <View>
                <Text>Test Hai</Text>
            </View>
            </TouchableOpacity>

             <FlatList data={GetData} renderItem={({item}) => { return(<View><Text>{item.email}</Text></View>)}} /> 
           
        </View>
    );
}

export default ApiCheck;
-----------------------------------------------------------------------------------------------------------------------------------------
  
  
import { axiosInstance } from '../config/configureaxios'
import { routesConfig } from '../config/routes'

  export const getcheckservice = (path) => {
    return axiosInstance.get(path)
  }

  export const postcheckservice = (path,payload) => {
    return axiosInstance.post(path,payload)
  }

  export const putcheckservice = (path,payload) => {
    return axiosInstance.put(path,payload)
  }


  export const deletecheckservice = (path,payload) => {
    return axiosInstance.delete(path,payload)
  }

  export const allcheckservice = (path) => {
    return axiosInstance.all(path)
  }

----------------------------------------------------------------------------------------------------------------------------------------------

export const appConfig = {
    api: {
      host:'https://reqres.in/',
      timeout: 20000,
    },
  }
---------------------------------------------------------------
      
      import axios from "axios";

import { appConfig } from "./config"; 

const axiosConfiguration = () => {
    return axios.create({
       baseURL: appConfig.api.host,
       timeout: appConfig.api.timeout,
      })
}

const axiosInstance = axiosConfiguration();

  axiosInstance.interceptors.request.use(function (config) {
    console.log('req');
     return config;
   }, function (error) {
    
     return Promise.reject(error);
   });
   
   // Add a response interceptor
  axiosInstance.interceptors.response.use(function (response) {
       console.log('res');
   
     return response;
   }, function (error) {
    
     return Promise.reject(error);
   }); 

   export { axiosInstance }
   
   -------------------------------------------------------------------------------
     
     const routesConfig = {
    auth: {
      login: 'api/users',
      getdata : 'api/users?page=2'
    }
}

const add = (a, b) => {
  return a + b;
}

export { routesConfig, add }
