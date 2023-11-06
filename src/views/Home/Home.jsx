import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Home.css";
import DiwaliLamp from "./diwali-lamp.png";
import Lamp from "./lamp.png";

const GREETINGS = [
  "दिन दिन दिवाळी, गाई म्हशी ओवाळी, इडा – पिडा जाऊ दे, बळीचं राज येऊ दे! दिवाळीच्या हार्दिक शुभेच्छा!",
  "स्नेहाचा सुगंध दरवळला, आनंदाचा सण आला. विनंती आमची परमेश्वराला, सौख्य, समृध्दी लाभो तुम्हाला. दिवाळीच्या हार्दिक शुभेच्छा!",
  "सगळा आनंद सगळे सौख्य, सगळ्या स्वप्नांची पूर्णता, यशाची सगळी शिखरे, सगळे ऐश्वर्य, हे आपल्याला मिळू दे, ही दीपावली आपल्या आयुष्याला एक नवा उजाळा देवू दे…",
  "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा, सोबत आमच्या लक्ष लक्ष शुभेच्छा!"
]

function Home() {
  const [searchParams] = useSearchParams();

  const [to, setTo] = useState(searchParams.get("to"));
  const [from, setFrom] = useState(searchParams.get("from"));
  const [greetingNumber, setGreetingNumber] = useState( searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0);
  const [themeNumber, setThemeNumber] = useState(searchParams.get("t"));


  return (
    <div>
      <div className={`greetings-container ${`theme-${themeNumber}`}`}>

        <img src={DiwaliLamp} className="diwali-lamp left-lamp" />

        <img src={DiwaliLamp} className="diwali-lamp right-lamp" />

        <br /><br /><br />
        <span>Dear {to} 💐</span>
        <p>
        {GREETINGS[greetingNumber]}
        </p>

        <span className="from-text">
        🙏 आपला शुभेच्छुक {from}
        </span>

        <br /><br /><br />

        <img src={Lamp} className="lamp" />
      </div>

      <p className="create-your-own">
        Do you want to create your own Diwali Greeting? Customize it here 👇
      </p>

      <p className="url" onClick={() => {

        const url = `${import.meta.env.VITE_BASE_URL}?to=${to}&from=${from}&g=${greetingNumber}&t=${themeNumber}`;
        navigator.clipboard.writeText(url);
        alert(`Copied to clipboard: ${url}`);

      } }>
        {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={themeNumber}
      </p>

      <div className="input-container">
        <input type="text" placeholder="To"
          className="input"
          value={to}
          onChange={(e) => {
            setTo(e.target.value)
          }
        } />

      <input type="text" placeholder="From"
          className="input"
          value={from}
          onChange={(e) => {
            setFrom(e.target.value)
          }
        } />

        <select value={greetingNumber}
        className="input"
        onChange={(e) => {
          setGreetingNumber(e.target.value)
        }}>
          <option value="0">Greeting 1</option>
          <option value="1">Greeting 2</option>
          <option value="2">Greeting 3</option>
          <option value="3">Greeting 4</option>
        </select>

        <select value={themeNumber}
        className="input"
        onChange={(e) => {
          setThemeNumber(e.target.value)
        }}>
          <option value="0">None</option>
          <option value="1">Theme 1</option>
          <option value="2">Theme 2</option>
          <option value="3">Theme 3</option>
          <option value="4">Theme 4</option>
          <option value="5">Theme 5</option>
        </select>
      </div>
   </div>
  )
}

export default Home
