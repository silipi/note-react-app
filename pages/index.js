import Layout from '../components/Layout'
import CreateNote from '../components/CreateNote'
import NoteList from '../components/NoteList'

function Home() {
  return (
    <Layout>
      <CreateNote />
      <NoteList />
    </Layout>
  )
}

export default Home;

