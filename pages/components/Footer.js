import Link from "next/link";
import Input from "./Input";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Footer() {
  const [emailNewsletter, setEmailNewsletter] = useState("");
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [numberPhone, setNumberPhone] = useState('')
  const [instagram, setInstagram] = useState('')

  async function signInNewsletter() {
    const data = {emailNewsletter}
    try {
      await axios.post('/api/newsletter', data).then(res => {
        setEmailNewsletter('');
        setSuccessMessage('Email cadastrado com sucesso!')
        setErrorMessage('')
      })
    } catch (error) {
      setEmailNewsletter('');
      setErrorMessage('Email Já cadastrado, Obrigado!');
      setSuccessMessage('');
    }
    
  }

  useEffect(() => {
    fetchAll();
  }, [])

  async function fetchAll() {
    await axios.get('/api/settings?name=numberPhone').then((res) => {
      setNumberPhone(res.data?.value)
    })
    await axios.get('/api/settings?name=instagram').then((res) => {
      setInstagram(res.data?.value)
    })
  }

  return (
    <div className="relative bottom-0 bg-gray-900 text-white w-full py-4 px-[20px] mt-[20px]">
      <div className="max-w-[1000px] my-4 mb-8 mx-[auto] grid grid-cols-1 gap-4 min-[768px]:grid-cols-4 ">
        <div className="flex flex-col mx-auto text-center mt-2 min-[768px]:mt-0 gap-2 order-3">
          <h1 className="text-[.9rem] mb-2">Políticas</h1>
          <div className="flex flex-col text-sm text-gray-500">
            <Link href={"/politics"}>Política de Privacidade</Link>
            <Link href={"/terms"}>Termos e Condições</Link>
          </div>
        </div>
        <div className="mx-auto mb-4 text-center">
          <h1 className="text-[.9rem] mb-2">Inscreva-se na nossa NewsLetter</h1>
          <div className="text-black py-1 text-sm">
            <Input
              type="text"
              placeholder="Digite seu email"
              value={emailNewsletter}
              name="emailNewsletter"
              onChange={(e) => setEmailNewsletter(e.target.value)}
            />
          </div>

          <button
            onClick={signInNewsletter}
            className="w-full bg-blue-900 py-2 px-4 text-sm rounded-md"
          >
            Enviar
          </button>

          {successMessage && (
            <p className="text-sm mt-2 text-green-500">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-sm mt-2 text-red-500">{errorMessage}</p>
          )}

        </div>

        <div className="flex flex-col items-center mb-2 mx-auto gap-2">
          <h1 className="text-[.9rem] mb-2">Siga-nos</h1>
          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white p-1">
            <Link href={instagram}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mx-auto flex flex-col text-center gap-2">
          <h1 className="text-[.9rem] mb-2">Contato</h1>
          <Link className="text-sm text-gray-600" href={"/"}>{numberPhone}</Link>
        </div>
      </div>
      <div className="my-2 border-t border-t-gray-500 w-full"></div>
      <div className="mt-4 flex w-full justify-center items-center">
        <h1 className="text-gray-500 text-sm">
        ©Copyright 2023. Todos os direitos reservados.
        </h1>
      </div>
    </div>
  );
}
