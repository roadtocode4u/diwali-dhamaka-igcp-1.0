import { useSearchParams } from "react-router-dom";
import "./Home.css";

const GREETINGS = [
  "दिन दिन दिवाळी, गाई म्हशी ओवाळी, इडा – पिडा जाऊ दे, बळीचं राज येऊ दे! दिवाळीच्या हार्दिक शुभेच्छा!",
  "स्नेहाचा सुगंध दरवळला, आनंदाचा सण आला. विनंती आमची परमेश्वराला, सौख्य, समृध्दी लाभो तुम्हाला. दिवाळीच्या हार्दिक शुभेच्छा!",
  "सगळा आनंद सगळे सौख्य, सगळ्या स्वप्नांची पूर्णता, यशाची सगळी शिखरे, सगळे ऐश्वर्य, हे आपल्याला मिळू दे, ही दीपावली आपल्या आयुष्याला एक नवा उजाळा देवू दे…",
  "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा, सोबत आमच्या लक्ष लक्ष शुभेच्छा!"
]

function Home() {
  const [searchParams] = useSearchParams();

  const to = searchParams.get("to");
  const from = searchParams.get("from");
  const greetingNumber = searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0;

  return (
    <div className="greetings-container">
      <span>Dear {to} 💐</span>
      <p>
       {GREETINGS[greetingNumber]}
      </p>
      <span className="from-text">
      🙏 आपला शुभेच्छुक {from}
      </span>
    </div>
  )
}

export default Home
