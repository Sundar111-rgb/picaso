import React from 'react';
import { Text, View } from 'react-native';


const Testimport = (props) => {

     import('../src/config/routes').then((hhh) => {
         const { login, getdata } = hhh.routesConfig.auth
         console.log(getdata,'---------68678------',hhh.add(16,26));
     })

    //  import("../src/config/routes").then(math => {
    //     console.log(math.add(16, 26));
    //  });

    const logine  =  import('../src/config/routes').then((hhh) => hhh.add(16,28)).catch((err) => console.log(err));
    console.log('=====>>>>>',logine);

    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}

export default Testimport;
