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
--------------------------------------------------------------------------------------------
interface HashtagGenerator {
  id: string;
  name: string;
}

interface HashtagGeneratorData {
  id: string;
  type: string;
  attributes: HashtagGenerator[];
}

interface HashtagGeneratorResponse {
  data: HashtagGeneratorData[];
}

const hashtagGeneratorResponse: HashtagGeneratorResponse = {
  "data": [
    {
      "id": "1",
      "type": "hashtag_generator",
      "attributes": [{
        "id": "1",
        "name": "cricketnewss"
      }]
    },
    {
      "id": "2",
      "type": "hashtag_generator",
      "attributes": [{
        "id": "2",
        "name": "holidaynews"
      }]
    }
  ]
};

----------------------------------------------------------------------------------
interface HashtagGenerator {
  id: string;
  name: string;
}

interface HashtagGeneratorData {
  id: string;
  type: string;
  attributes: HashtagGenerator[];
}

interface HashtagGeneratorResponse {
  data: HashtagGeneratorData;
}

const hashtagGeneratorResponse: HashtagGeneratorResponse = {
  "data": 
    {
      "id": "1",
      "type": "hashtag_generator",
      "attributes": [{
        "id": "1",
        "name": "cricketnewss"
      }]
    }
    };
------------------------------------------------------------------------------------------------------
type ItemType = {
  attributes: {
    name?: string;
    // add any other properties of the attributes object here
  }
  // add any other properties of the item object here
}

const renderItem = (item: ItemType) => {
  return (
    <View style={{ borderColor: 'red', borderWidth: 0, padding: 10 }}>
      <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>
        {item?.attributes?.name}
      </Text>
    </View>
  );
}



