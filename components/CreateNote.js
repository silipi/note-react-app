import NoteList from './NoteList';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      subtitulo: '',
      texto: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTitulo = this.handleChangeTitulo.bind(this);
    this.handleChangeSubtitulo = this.handleChangeSubtitulo.bind(this);
    this.handleChangeTexto = this.handleChangeTexto.bind(this);
  }

  handleSubmit(event) {
    alert('Uma nota foi adicionada: ' + this.state.titulo);
    event.preventDefault();
    this.setState({ titulo: '' }); this.setState({ subtitulo: '' }); this.setState({ texto: '' });
    this.render(<NoteList informacao={this.state.titulo} />)
  }

  handleChangeTitulo(event) {
    this.setState({ titulo: event.target.value });
  }
  handleChangeSubtitulo(event) {
    this.setState({ subtitulo: event.target.value });
  }
  handleChangeTexto(event) {
    this.setState({ texto: event.target.value });
  }

  render() {
    return (

      <div>
        <h4 className="mt-5 mb-4">Crie sua anotação: </h4>
        <form onSubmit={this.handleSubmit}>
          <div class="input-group input-group mb-3 mx-auto col-sm-12 col-md-8">
            <div class="input-group-prepend">
              <span class="input-group-text" id="create-title">Título</span>
            </div>
            <input type="text" class="form-control" value={this.state.titulo} onChange={this.handleChangeTitulo} aria-describedby="create-title" />
          </div>

          <div class="input-group input-group mb-3 col-sm-12 col-md-8 mx-auto">
            <div class="input-group-prepend">
              <span class="input-group-text" id="create-subtitle">Subtítulo</span>
            </div>
            <input type="text" class="form-control" value={this.state.subtitulo} onChange={this.handleChangeSubtitulo} aria-describedby="create-subtitle" />
          </div>

          <div class="form-group col-sm-12 col-md-8 mx-auto">
            <label for="create-text">Sua anotação:</label>
            <textarea class="form-control" id="create-text" value={this.state.texto} onChange={this.handleChangeTexto} rows="4"></textarea>
          </div>
          <div class="col-sm-12 col-md-8 mx-auto">
            <input type="submit" class="btn btn-success float-right shadow-sm" value="Salvar" />
          </div>
        </form>



      </div>



    );
  }
}

export default CreateNote;

