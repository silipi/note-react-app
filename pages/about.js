import Layout from '../components/Layout'


export default function About() {
  return (
    <Layout>
      <div className="container">
        <h4>Objetivo:</h4>
        <p className="mb-5">Este pequeno e simples aplicativo tem como objetivo realizar anotações gerais, lista de afazeres, lista de compras e etc.</p>
        <h4>Desenvolvimento:</h4>
        <img src="/stack.png" width="45%" />
        <p>Foi desenvolvido para testar o framework Next.js. Utilizado React.js e Bootstrap para o frontend.</p>
      </div>
    </Layout>
  )
}
