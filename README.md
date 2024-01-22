# NowAle Ecommerce Front

Esse repositório contém a parte da <b>loja</b>. Para acessar a parte do <b>admin</b>, clique <a href="https://github.com/caiolacerdamt/nowale-ecommerce-admin">aqui</a>

Este projeto é um Ecommerce que consiste em uma Loja Online e uma parte de Administração. Na Loja, os usuários podem interagir, avaliar produtos, adicionar e excluir itens do carrinho, e realizar o checkout de pagamento usando a integração com a Stripe. A parte de Administração permite ao Administrador adicionar produtos, criar categorias, configurar informações como frete e políticas de privacidade, e escolher o produto em destaque. Todas as modificações feitas pelo administrador afetam diretamente a loja.

<br> <br>

## 💻 Tecnologias Utilizadas

<div align="center">
 <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" >
  <img align="center" alt="NextJs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" >
  <img align="center" alt="TailwindCSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
  <img align="center" alt="MongoDB" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" />
  <br> <br> <br>
  * As tecnologias React, Next.js, Tailwind CSS e MongoDB foram escolhidas por suas características específicas. O React é uma biblioteca JavaScript para construção de interfaces de usuário. O Next.js adiciona recursos avançados ao React, como renderização do lado do servidor. O Tailwind CSS permite estilizar rapidamente componentes e elementos HTML. O MongoDB é um banco de dados NoSQL orientado a documentos. Essas tecnologias foram escolhidas por sua eficiência, escalabilidade e facilidade de uso no desenvolvimento de aplicações web modernas.
</div>

<br> <br>

## 🔧 Como Rodar o Projeto

1- Clonar o projeto em sua máquina
```bash
https://github.com/caiolacerdamt/nowale-ecommerce-front.git
```

2- Inicializá-lo no editor de texto e instalar as dependências no terminal
```bash
npm install
```

* Para que o projeto rode com suas variáveis de ambiente, você deve usar o <a href="https://github.com/caiolacerdamt/nowale-ecommerce-admin/blob/master/.env.example">.env.example</a> como base para que você construa as suas API Keys
  
3- São necessárias as seguintes API Keys
```bash
MONGODB_URI=
STRIPE_PK=
STRIPE_SK=
PUBLIC_URL=
NEXT_PUBLIC_URL=
NEXTAUTH_URL=
GOOGLE_FRONT_ID=
GOOGLE_FRONT_SECRET=
```
A <b>"GOOGLE_FRONT_ID"</b>e a <b>"GOOGLE_FRONT_SECRET"</b> São as APIs do Google Cloud para que o NextAuth funcione corretamente. 

A <b>"MONGODB_URI"</b> é a própria URI do seu Banco MongoDB.

A <b>"STRIPE_PK"</b> e a <b>"STRIPE_SK"</b> São as API Keys da Stripe para que seja possível adicionar a forma de pagamento.

A <b>"PUBLIC_URL"</b>, <b>"NEXT_PUBLIC_URL"</b> e a <b>"NEXTAUTH_URL"</b> São URLS para comunicação. Caso você esteja rodando a aplicação no <b>localhost:3000</b>, as 3 Keys devem ser <b>http://localhost:3000</b>

4- Rode o projeto como desenvolvedor no terminal do editor de texto
```bash
npm run dev
```

5- Acessar o localhost:3000 no seu navegador
```bash
localhost:3000
```
<br> <br>

## 💼 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE.md).

<br> <br> 


## 🎇 Desafios do Projeto e Aprendizado

* Com esse projeto, pude aprender muito sobre comunicação entre <b>Cliente x Servidor</b>.

* Aprendi também sobre a integração do <b>Banco de Dados</b> na minha aplicação. Por ser o meu primeiro projeto onde utilizei um Banco de Dados, foi um enorme desafio aprender a fazer o tal do <b>CRUD</b> nas chamadas da API e como interagir com ele para que as informações do Banco pudessem ser acessadas na tela.

* Consegui ver sobre o <b>NextAuth</b>, que permite a autenticação dos usuários com o Google, Apple entre outros e como essa autenticação ajuda na resolução de problemas.

* Pude ver mais também sobre a comunicação do <b>Back-end e do Front-end</b>, por ser um projeto <b>Fullstack</b>, tive que aprender um pouco das duas partes.

<br> <br>

## 🤝 Contribuição no Projeto

Para contribuir com o projeto, siga estas etapas:

1- Faça um fork do repositório e clone-o em sua máquina local.

2- Crie uma nova branch para suas alterações: ```bash git checkout -b minha-contribuicao```.

3- Faça as alterações desejadas e teste-as.

4- Commit suas alterações: ```bash git commit -m "Minha contribuição"```.

5- Envie suas alterações para o repositório remoto: ```bash git push origin minha-contribuicao```.

6- Abra um pull request no GitHub, descrevendo suas alterações e explicando o motivo da contribuição.

<br> <br>

## 📸 Algumas Fotos do Projeto no Mobile
<div align="center">
    <img alt="Página Principal" width="200" height="400" src="https://caiolmt-next-ecommerce.s3.us-east-1.amazonaws.com/mobile.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJGMEQCIBsaUu%2F%2BmHJf3sfQLMH9nqx4WxbIxVQlyLBVR%2BaDBZcpAiBP4R%2BX12frxVON0C4dXEuzpRrBUI2PgTdlHK6esijmNSrkAgg8EAAaDDQ3NTY4MjIzODA1MiIMJNAeZBDMXqQ8ILbDKsECbHritu4sXW%2FGySS1ZIBtPEne%2Ff0R1GjAjwokuxaaWzRdhqVOdsGdp1N6LSq%2BgEURWSkXG3jWqv8c8KmP8liWUAIiYqvHll3L6szb6j2aSkxVyEuCBZov9fVHhnQVOS2lW7bLePNm1xcXGgixWmT%2BczsgKjVpevz5ksCoTR63cY5n5f%2Bns81iH%2FklhfY64olvV3T9AYnkZcjcwn%2Fcg3JITj7SMMxb961kIllp0TDzH7%2FtGLIM9%2FhugJdLiDXxoR18KScfBAMh3x6nbArQci5Y%2BJHiu8OcjP5cP70WwtPYv2toILvQKVJk%2F%2B7K2ENH1TAEFG4joZgjJfhhvKf7acdY7c%2BFMfZgMKP%2FLs%2BHELTL9IBjag01hMkjshQhLMBA5aAowunhK%2BmdRITpOIi1I8yKMTlIpiVMdJYiT3YPX41cAAk8MMGlt60GOrQCuM8INVNdgRIWQ48NYekiY1Z%2FUQf89U5LbEDdOd4qfhJC1lqT8hWeNVzVOgq%2FgfgUjb1n4uTffmuDIzxNZEL7xB8TGKwl29xV4S5cnT1bqjyJZQgwXyPuzPHyiNTF0IvdVrkcdpKY%2B7u7lbJh4wWDBmXy3wkCV2XKpIlFDRULTt%2F%2FVnuFtwmyCiar6wHNsPMICQYl5VRbbzpFBy%2BvujV2KuoFfCoCiq4nae2bvWafCp0v2Xcwqyl3c6F1w60oUX%2FzvpXy9CyEx2aWUHesx3B6XA4ZKub%2BKRaTq%2BbFHO2ZQnQlX1GMf2Zrjnx1e%2Beh0FMMwIMemH8WB4PY%2FsxMvnwowte8%2BLupqCHJBreWoF%2FxVzNLSj2ZTaytfKFXbv%2BK90Gup3VW7CfGs8sNe9Ef0WJKrMP1XWI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240122T023211Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW5QG65ZSGQ5NFSDU%2F20240122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=857f042c48484c5b934eb21602248d6304a5a699176b689efd5900cc55a953ad">

  <img alt="Página do Produtos" width="200" height="400" src="https://caiolmt-next-ecommerce.s3.us-east-1.amazonaws.com/mobile.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJGMEQCIBsaUu%2F%2BmHJf3sfQLMH9nqx4WxbIxVQlyLBVR%2BaDBZcpAiBP4R%2BX12frxVON0C4dXEuzpRrBUI2PgTdlHK6esijmNSrkAgg8EAAaDDQ3NTY4MjIzODA1MiIMJNAeZBDMXqQ8ILbDKsECbHritu4sXW%2FGySS1ZIBtPEne%2Ff0R1GjAjwokuxaaWzRdhqVOdsGdp1N6LSq%2BgEURWSkXG3jWqv8c8KmP8liWUAIiYqvHll3L6szb6j2aSkxVyEuCBZov9fVHhnQVOS2lW7bLePNm1xcXGgixWmT%2BczsgKjVpevz5ksCoTR63cY5n5f%2Bns81iH%2FklhfY64olvV3T9AYnkZcjcwn%2Fcg3JITj7SMMxb961kIllp0TDzH7%2FtGLIM9%2FhugJdLiDXxoR18KScfBAMh3x6nbArQci5Y%2BJHiu8OcjP5cP70WwtPYv2toILvQKVJk%2F%2B7K2ENH1TAEFG4joZgjJfhhvKf7acdY7c%2BFMfZgMKP%2FLs%2BHELTL9IBjag01hMkjshQhLMBA5aAowunhK%2BmdRITpOIi1I8yKMTlIpiVMdJYiT3YPX41cAAk8MMGlt60GOrQCuM8INVNdgRIWQ48NYekiY1Z%2FUQf89U5LbEDdOd4qfhJC1lqT8hWeNVzVOgq%2FgfgUjb1n4uTffmuDIzxNZEL7xB8TGKwl29xV4S5cnT1bqjyJZQgwXyPuzPHyiNTF0IvdVrkcdpKY%2B7u7lbJh4wWDBmXy3wkCV2XKpIlFDRULTt%2F%2FVnuFtwmyCiar6wHNsPMICQYl5VRbbzpFBy%2BvujV2KuoFfCoCiq4nae2bvWafCp0v2Xcwqyl3c6F1w60oUX%2FzvpXy9CyEx2aWUHesx3B6XA4ZKub%2BKRaTq%2BbFHO2ZQnQlX1GMf2Zrjnx1e%2Beh0FMMwIMemH8WB4PY%2FsxMvnwowte8%2BLupqCHJBreWoF%2FxVzNLSj2ZTaytfKFXbv%2BK90Gup3VW7CfGs8sNe9Ef0WJKrMP1XWI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240122T023211Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW5QG65ZSGQ5NFSDU%2F20240122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=857f042c48484c5b934eb21602248d6304a5a699176b689efd5900cc55a953ad">

  <img alt="Página do Carrinho dos Produtos" width="200" height="400" src="https://caiolmt-next-ecommerce.s3.us-east-1.amazonaws.com/mobile%20%282%29.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJGMEQCIBsaUu%2F%2BmHJf3sfQLMH9nqx4WxbIxVQlyLBVR%2BaDBZcpAiBP4R%2BX12frxVON0C4dXEuzpRrBUI2PgTdlHK6esijmNSrkAgg8EAAaDDQ3NTY4MjIzODA1MiIMJNAeZBDMXqQ8ILbDKsECbHritu4sXW%2FGySS1ZIBtPEne%2Ff0R1GjAjwokuxaaWzRdhqVOdsGdp1N6LSq%2BgEURWSkXG3jWqv8c8KmP8liWUAIiYqvHll3L6szb6j2aSkxVyEuCBZov9fVHhnQVOS2lW7bLePNm1xcXGgixWmT%2BczsgKjVpevz5ksCoTR63cY5n5f%2Bns81iH%2FklhfY64olvV3T9AYnkZcjcwn%2Fcg3JITj7SMMxb961kIllp0TDzH7%2FtGLIM9%2FhugJdLiDXxoR18KScfBAMh3x6nbArQci5Y%2BJHiu8OcjP5cP70WwtPYv2toILvQKVJk%2F%2B7K2ENH1TAEFG4joZgjJfhhvKf7acdY7c%2BFMfZgMKP%2FLs%2BHELTL9IBjag01hMkjshQhLMBA5aAowunhK%2BmdRITpOIi1I8yKMTlIpiVMdJYiT3YPX41cAAk8MMGlt60GOrQCuM8INVNdgRIWQ48NYekiY1Z%2FUQf89U5LbEDdOd4qfhJC1lqT8hWeNVzVOgq%2FgfgUjb1n4uTffmuDIzxNZEL7xB8TGKwl29xV4S5cnT1bqjyJZQgwXyPuzPHyiNTF0IvdVrkcdpKY%2B7u7lbJh4wWDBmXy3wkCV2XKpIlFDRULTt%2F%2FVnuFtwmyCiar6wHNsPMICQYl5VRbbzpFBy%2BvujV2KuoFfCoCiq4nae2bvWafCp0v2Xcwqyl3c6F1w60oUX%2FzvpXy9CyEx2aWUHesx3B6XA4ZKub%2BKRaTq%2BbFHO2ZQnQlX1GMf2Zrjnx1e%2Beh0FMMwIMemH8WB4PY%2FsxMvnwowte8%2BLupqCHJBreWoF%2FxVzNLSj2ZTaytfKFXbv%2BK90Gup3VW7CfGs8sNe9Ef0WJKrMP1XWI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240122T023159Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW5QG65ZSGQ5NFSDU%2F20240122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f150863253ca219a23e62b023e8fffc2ad2a46e03bb2b54d83e2bdb56ee85f6b">
</div>

<br> <br>

 <div align="center">
  <h2> 🖋 Assinatura: </h2>
  <a href="https://github.com/caiolacerdamt"><img align="center" alt="CaioPNG" width="140" src="https://user-images.githubusercontent.com/122616615/225480551-032ab453-4f73-4978-b666-9432ba0e68ba.jpeg"><br><sub align="center">Caio Lacerda</sub>
  </a><br><br>
  <a href="https://github.com/caiolacerdamt"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
  </div>
  
  <div align="center">
    <h2> Você também pode me achar: </h2>
<a href= https://www.linkedin.com/in/caiolacerdamt/><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
 <a href="https://instagram.com/caiolmt" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>
  


