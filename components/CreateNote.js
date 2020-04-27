class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.create(this.state)
    this.setState({ content: '' });
  }
  handleChange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    return (
      <div className="col-sm-12">

        <h4 className="mb-4">Crie sua anotação: </h4>
        <form onSubmit={this.handleSubmit}>
          <div class="input-group input-group mb-3 mx-auto col-sm-12 col-md-8">
            <div class="input-group-prepend">
              <span class="input-group-text" id="create-title">Título</span>
            </div>
            <input type="text" class="form-control" value={this.state.content} onChange={this.handleChange} aria-describedby="create-title" />
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

