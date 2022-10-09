import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYzqQ-guO8P-Gn4imLN831vUR-iZ1oQI4",
  authDomain: "sifatullah-api.firebaseapp.com",
  databaseURL: "https://sifatullah-api-default-rtdb.firebaseio.com",
  projectId: "sifatullah-api",
  storageBucket: "sifatullah-api.appspot.com",
  messagingSenderId: "694468053197",
  appId: "1:694468053197:web:3e8fc955f9697549228184",
  measurementId: "G-VFT35WE23Z",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//////////////////
//////////////////
import {
  getDatabase,
  ref,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
const db = getDatabase();
//////////////////

//////////////////
const dbRef = ref(getDatabase());
get(child(dbRef, `Data/`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      const a = snapshot.val();
      setTimeout(() => {
        JSON.toLo;
        document.write(a);
      }, 1000);
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

//////////////////

fetch("https://dindar-patro-patri-default-rtdb.firebaseio.com/Data.json")
  .then((response) => response.json())
  .then((res) => {
    const datas = [];
    for (let key in res) {
      datas.unshift({ ...res[key] });
    }
    //////////////////
    datas.map((data) => {
      const {
        // id,
        Time,
        পাত্র_পাত্রী,
        নাম,
        বয়স,
        উচ্চতা,
        ওজন,
        গায়ের_রং,
        বৈবাহিক_অবস্থা,
        স্হায়ী_ঠিকানা,
        বর্তমানঠিকানা,
        পেশা,
        মাসিকইনকাম,
        শিক্ষাগতযোগ্যতা,
        বাবারপেশা,
        মায়েরপেশা,
        আপনিকি_নিওমিত_নামাজপড়েন,
        আপনিকি_কুরআান_পড়তে_যানেন,
        আপনিকি_সন্তানআছে_এমন_কাউকে_বিবাহকরতেচান,
        আপনারকিশারিরিকঅঙ্গহানিবাবড়োকোনোরোগআছে,
        আপনারকিসুন্নতিদারিআছে,
        আপনিকিপর্দাকরেন,
        দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান,
        পাএপাএীবয়স,
        পাত্রপাত্রীউচ্চতা,
        পাত্রপাত্রীগায়েররং,
        পাএপাএীলেখাপড়া,
        এস্ট্রাকিছু,
        img,
        মোবাইল,
        এফবিআইডিলিংক,
        আমাদেরসেবা,
      } = data;

      document.write(`
   
    <div
      class="container"
            style="
        width: max-content;
        height: max-content;
        display: inline-block;
        padding: 10px;
        background-color: rgb(32, 31, 31);
        text-align: justify;
        border: 2px solid rgb(129, 129, 129);
        margin: 10px;
      "
    >
   
    <p class="idNumber"  style="width: 200px; height:max-content; color: rgb(250, 30, 238)">
      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >Time: 
        </span>
        <span style="color: rgb(245, 245, 245)">${Time}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >পাত্র/পাত্রীঃ
        </span>
        <span style="color: rgb(245, 245, 245)">${পাত্র_পাত্রী}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >নামঃ 
        </span>
        <span style="color: rgb(245, 245, 245)">${নাম}</span>
      </div>
      
      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >বয়সঃ  
        </span>
        <span style="color: rgb(245, 245, 245)">${বয়স}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >উচ্চতাঃ   
        </span>
        <span style="color: rgb(245, 245, 245)">${উচ্চতা}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >ওজনঃ    
        </span>
        <span style="color: rgb(245, 245, 245)">${ওজন}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >গায়ের রংঃ    
        </span>
        <span style="color: rgb(245, 245, 245)">${গায়ের_রং}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >বৈবাহিক অবস্থাঃ    
        </span>
        <span style="color: rgb(245, 245, 245)">${বৈবাহিক_অবস্থা}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >স্থায়ী ঠিকানাঃ     
        </span>
        <span style="color: rgb(245, 245, 245)">${স্হায়ী_ঠিকানা}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >বর্তমান ঠিকানাঃ      
        </span>
        <span style="color: rgb(245, 245, 245)">${বর্তমানঠিকানা}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >পেশাঃ       
        </span>
        <span style="color: rgb(245, 245, 245)">${পেশা}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >মাসিক ইনকামঃ        
        </span>
        <span style="color: rgb(245, 245, 245)">${মাসিকইনকাম}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >শিক্ষাগত যোগ্যতাঃ         
        </span>
        <span style="color: rgb(245, 245, 245)">${শিক্ষাগতযোগ্যতা}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >বাবার পেশাঃ          
        </span>
        <span style="color: rgb(245, 245, 245)">${বাবারপেশা}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >মায়ের পেশাঃ          
        </span>
        <span style="color: rgb(245, 245, 245)">${মায়েরপেশা}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >নামাজ পড়ে কিনাঃ           
        </span>
        <span style="color: rgb(245, 245, 245)">${আপনিকি_নিওমিত_নামাজপড়েন}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >কুরআন জানে কিনাঃ            
        </span>
        <span style="color: rgb(245, 245, 245)">${আপনিকি_কুরআান_পড়তে_যানেন}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >সন্তান আছে এমন কাউকে বিবাহ করতে চায় কিনাঃ             
        </span>
        <span style="color: rgb(245, 245, 245)">${আপনিকি_সন্তানআছে_এমন_কাউকে_বিবাহকরতেচান}</span>
      </div>
      
      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >শারিরীক অঙ্গহানী আছে কিনাঃ             
        </span>
        <span style="color: rgb(245, 245, 245)">${আপনারকিশারিরিকঅঙ্গহানিবাবড়োকোনোরোগআছে}</span>
      </div>
      
      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >(পুরুষ হলে) দাড়ি আছে কিনাঃ             
        </span>
        <span style="color: rgb(245, 245, 245)">${আপনারকিসুন্নতিদারিআছে}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >(মেয়ে হলে) পর্দা করে কিনাঃ             
        </span>
        <span style="color: rgb(245, 245, 245)">${আপনিকিপর্দাকরেন}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >যেমন জান্নাতি সাথি চায়ঃ              
        </span>
        <span style="color: rgb(245, 245, 245)">${দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >পাত্র/পাত্রীর বয়সঃ               
        </span>
        <span style="color: rgb(245, 245, 245)">${পাএপাএীবয়স}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >পাত্র/পাত্রীর উচ্চতাঃ                
        </span>
        <span style="color: rgb(245, 245, 245)">${পাত্রপাত্রীউচ্চতা}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >পাত্র/পাত্রীর গায়ের রংঃ                 
        </span>
        <span style="color: rgb(245, 245, 245)">${পাত্রপাত্রীগায়েররং}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >পাত্র/পাত্রীর লেখাপড়াঃ                  
        </span>
        <span style="color: rgb(245, 245, 245)">${পাএপাএীলেখাপড়া}</span>
      </div>

      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >এক্সটা কিছু লেখাঃ                   
        </span>
        <span style="color: rgb(245, 245, 245)">${এস্ট্রাকিছু}</span>
      </div>
      
      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >মোবাইলঃ                   
        </span>
        <span style="color: rgb(245, 245, 245)">${মোবাইল}</span>
      </div>
      
      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >ফেসবুকঃ                    
        </span>
        <span style="color: rgb(245, 245, 245)">${এফবিআইডিলিংক}</span>
      </div>
      
      <div style="padding: 5px">
        <span style="color: rgb(245, 245, 245); font-weight: bold"
          >আমাদের সেবা কেমন লাগলোঃ                     
        </span>
        <span style="color: rgb(245, 245, 245)">${আমাদেরসেবা}</span>
      </div>              
     </div>
         `);
      document.querySelector(
        ".idNumber"
      ).textContent = `বায়োডাটা সংখ্যাঃ ${datas.length} টি`;
      document.body.style.backgroundColor = "black";
      document.body.style.width = "2000px";
      document.body.style.color = "rgb(245, 245, 245)";
      document.body.style.fontFamily = " Arial, Helvetica, sans-serif";
      document.body.style.letterSpacing = "1px";
      document.title = "দ্বিনদ্বার পাত্র/পাত্রীর সন্ধান এর ফরম তথ্য";
      //////////////////
    });
  });
