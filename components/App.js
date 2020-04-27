import React from 'react'
import CreateNote from './CreateNote'
import NoteList from './NoteList'

class App extends React.Component {

  state = {
    notes: [
      { id: 1, content: "I'm baby keffiyeh farm-to-table blog kombucha copper mug." }
    ]
  }

  deleteNote = (id) => {
    const notes = this.state.notes.filter(note => {
      return note.id !== id
    });
    this.setState({
      notes
    });
  }

  create = (note) => {
    note.id = Math.random();
    let notes = [...this.state.notes, note];
    this.setState({
      notes
    });
  }

  render() {
    return (



      <div className="container">
        <div className="row"><CreateNote create={this.create} /></div>

        <div className="row"><NoteList notes={this.state.notes} deleteNote={this.deleteNote} /></div>
      </div>


    )
  }
}

export default App;