interface name {
    first:string,
    last:string
}

interface data {
    id:number
    attributes : name[];
}

const hhh:data = {id:1,attributes:[{ first:"Sundar", last:"Kumar"}]};
------------------------------------------------------------------------------------------------

interface name {
    first:string,
    last:string
}

interface data {
    id:number
    attributes : name;
}

const hhh:data = {id:1,attributes:{ first:"Sundar", last:"Kumar"}};
--------------------------------------------------------------------------------------------------

interface name {
    first:string,
    last:string
}

interface email {
    personal:string,
    official:string
}

interface data {
    id:number
    attributes : { name:name[], email:email[] };
}

const hhh:data = { id:1,
                   attributes:{ 
                               name :[{first:"Sundar", last:"Kumar"}],
                               email:[{personal:"kumarsun53",official:"sundar.kumar"}] 
                      
                   }
    
                 };
-------------------------------------------------------------------------------------------------
    
interface  name {
    first:string,
    last:string
}

interface email {
    personal:string,
    official:string
}

interface data {
    id:number
    attributes : { name:name, email:email};
}

const hhh:data = { id:1,
                   attributes:{ 
                               name :{first:"Sundar", last:"Kumar"},
                               email:{personal:"kumarsun53",official:"sundar.kumar"}
                      
                   }
    
                 };


