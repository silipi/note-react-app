import React from 'react'

export default function NoteList({ notes, deleteNote }) {

  const notelist = notes.length ? (
    notes.map(note => {
      return (
        <div key={note.id}>
          <span class="list-group-item  d-flex justify-content-between align-items-center" key={note.id}>
            {note.content}
            <div className="d-flex justify-content-center align-items-center btn btn-primary" onClick={() => { deleteNote(note.id) }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="white">
                <path d="M10 2L9 3L5 3C4.448 3 4 3.448 4 4C4 4.552 4.448 5 5 5L19 5C19.552 5 20 4.552 20 4C20 3.448 19.552 3 19 3L15 3L14 2L10 2 z M 5 7L5 20C5 21.1 5.9 22 7 22L17 22C18.1 22 19 21.1 19 20L19 7L5 7 z M 9.4101562 10.414062C9.6654063 10.414062 9.9207344 10.510578 10.115234 10.705078L12 12.589844L13.884766 10.705078C14.273766 10.316078 14.905922 10.316078 15.294922 10.705078C15.683922 11.094078 15.683922 11.726234 15.294922 12.115234L13.410156 14L15.294922 15.884766C15.683922 16.273766 15.683922 16.905922 15.294922 17.294922C14.905922 17.683922 14.273766 17.683922 13.884766 17.294922L12 15.410156L10.115234 17.294922C9.7262344 17.683922 9.0940781 17.683922 8.7050781 17.294922C8.3160781 16.905922 8.3160781 16.273766 8.7050781 15.884766L10.589844 14L8.7050781 12.115234C8.3160781 11.726234 8.3160781 11.094078 8.7050781 10.705078C8.8995781 10.510578 9.1549062 10.414062 9.4101562 10.414062 z" fill="#FFFFFF" />
              </svg>
            </div>
          </span>
        </div>
      )
    })
  ) : (
      <p className="center">Que vazio está aqui... você se importaria em escrever uma anotação? <span role="img" aria-label="sheep">😉</span></p>
    );

  return (
    <div class="list-group col-sm-12 mt-5">
      {notelist}
    </div>

  )
}

