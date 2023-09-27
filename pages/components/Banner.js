import axios from "axios";
import { useEffect, useState } from "react";

export default function Banner() {
    const [banner, setBanner] = useState('')

    useEffect(() => {
        getImageBanner();
      }, [])
    
      async function getImageBanner() {
        await axios.get('/api/settings?name=images').then((res) => {
          const data = res.data?.value
          const banner1 = data[0]
          setBanner(banner1);
        })
      }

    return(
        <div className="w-full max-h-[750px]">
            <img src={banner} alt="Banner" className="w-full max-h-[700px]" />
        </div>
    )
}