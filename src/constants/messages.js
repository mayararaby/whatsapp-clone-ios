import salah from '../assetes/users/7.JPG'
import gawaher from '../assetes/users/1.JPG'
import AboFofa from '../assetes/users/2.jpg'
import Atef from '../assetes/users/3.JPG'
import bta3Elmosab2a from '../assetes/users/4.JPG'
import lemby from '../assetes/users/5.JPG'
import Ashoor from '../assetes/users/6.jpg'
import iti from '../assetes/communitiy/iti.png'
import penta from '../assetes/communitiy/penta-b.png'
import * as SettingsIcons from '../assetes/settings/icons'
export const messagesData = [
  {
    name:"Abo salah ebn el nazer",
    imageUrl :salah,
    time:"8:57 PM",
    lastMessage:"موتسيكلات وعجل ترابيزات بلياردو وبينج",
    send:false,
    received:true,
    unReadMesseagesNumber:2,
    hasStory:true
  },
  {
    name:"El-set Gwaher",
    imageUrl :gawaher,
    time:"1:45 PM",
    lastMessage:"اطلع يا عاشور",
    send:false,
    received:true,
    unReadMesseagesNumber:5,
    hasStory:false
  },
  {
    name:"Abo fofa",
    imageUrl :AboFofa,
    time:"5:00 PM",
    lastMessage:"هتشوفك يعني هتشوفك",
    send:true,
    isRead:true,
    received:false,
    unReadMesseagesNumber:0,
    hasStory:true
  },
  {
    name:"Atef",
    imageUrl :Atef,
    time:"10:00 AM",
    lastMessage:"أنت يا حيوان يا متخلف انت يا اطرش",
    send:false,
    received:true,
    unReadMesseagesNumber:4,
    hasStory:true
  }, {
    name:"El-ragel bta3 el mosab2a",
    imageUrl :bta3Elmosab2a,
    time:"12:00 PM",
    lastMessage:"السؤال دلوقتي لمدرسة عاشور",
    send:true,
    isRead:false,
    received:false,
    unReadMesseagesNumber:0,
    hasStory:true
  }, {
    name:"El-lemby",
    imageUrl :lemby,
    time:"8:57 PM",
    lastMessage:"ايه دا مين ابو صلاح ابن الناظر ! دا الدنيا ضيقه يا جدعان",
    send:false,
    received:true,
    unReadMesseagesNumber:1,
    hasStory:false
  }, {
    name:"El-nazer Ashoor",
    imageUrl :Ashoor,
    time:"7:00 Am",
    lastMessage:"واقف في الطابور و بتهرش في دماغك يا وغد",
    send:true,
    isRead:true,
    received:false,
    unReadMesseagesNumber:0,
    hasStory:true
  }
]


export const Communities = [
  {name:"Penta-b",
  imageUrl:penta

  },
  {
    name:'ITI Aswan',
    imageUrl:iti
  },
  {
    name:'Frontend developers',
  },{
    name:'Whatsapp Community'
  }
]


export const settingsUser = [
  {
    name:'Avatar',
    icon:SettingsIcons.User,
    backgroundColor:'#3E75F6'
  }
]

export const settingsChat = [
  {
  name:'Starred Messages',
  icon:SettingsIcons.Star,
  backgroundColor:'#FFC605'
}, {
  name:'Linked Devices',
  icon:SettingsIcons.Laptop,
  backgroundColor:'#0DA9B9'
}]

export const generalSettings = [{
  name:'Account',
  icon:SettingsIcons.Key,
  backgroundColor:'#0078FF'
},{
  name:'Privacy',
  icon:SettingsIcons.Lock,
  backgroundColor:'#32AADF'
},{
  name:'Chats',
  icon:SettingsIcons.WhatsApp,
  backgroundColor:'#48DA5E'
},{
  name:'Notifications',
  icon:SettingsIcons.Notification,
  backgroundColor:'#FC3B3C'
},{
  name:'Storage and Data',
  icon:SettingsIcons.Storage,
  backgroundColor:'#39C656'
}]

export const optionalSettings = [{
  name:'Help',
  icon:SettingsIcons.Help,
  backgroundColor:'#0074FF'
},{
  name:'Tell a Friend',
  icon:SettingsIcons.Friend,
  backgroundColor:'#F0335D'
}]