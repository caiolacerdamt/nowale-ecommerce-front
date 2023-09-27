import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import Spinner from "./components/Spinner";

export default function TermsPage() {
  const [terms, setTerms] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchAll().then(() => {
            setIsLoading(false)
        })
    }, [])

    async function fetchAll() {
        await axios.get('/api/settings?name=termsAndConditions').then((res) => {
            setTerms(res.data?.value)
        })
    }

  return (
    <>
      <Header />
      <div className="max-w-[1200px] min-h-full my-0 mx-[auto] py-0 px-[20px]">
        <div>
          <h1 className="text-2xl text-center font-semibold text-gray-900 mt-6 mb-4">
            Termos e Condições
          </h1>
          {isLoading && <Spinner />}
          {!isLoading && (
            <>
              <div className="mx-auto mt-6 max-w-[70%] min-h-[30%]">
                <textarea
                  className="bg-transparent w-full overflow-hidden resize-none text-lg"
                  readOnly
                  disabled
                  rows={30}
                  cols={30}
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                ></textarea>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
