function ProjectModal(props) {
  const show = props.show? "flex" : "none"
  return (
    <div class={"modal-bg display-" + show} id={props.name + "-modal"} onClick={() => { props.toggle() }}>
      <div class="modal-box" onClick={(e) => { e.stopPropagation(); }}>
        <div class="modal-top-row">
          <div class="x-close-button" onClick={() => { props.toggle() }}>X</div>
        </div>
        {props.content}
      </div>
    </div>
  )
}

function ProjectDisplay(props) {
  const deskBg = {
    background: 'url(' + props.deskBG.image + ')',
    backgroundSize: props.deskBG.size,
    backgroundPosition: props.deskBG.position,
  }
  const mobileBg = {
    background: 'url(' + props.mobileBG.image + ')',
    backgroundSize: props.mobileBG.size,
    backgroundPosition: props.mobileBG.position,
  }
  const modalContent = <h1>{props.title}</h1>

  return (
    <article>
      <h3>{props.title}</h3>
      <div class="project">
        <img class="desktop-frame" style={deskBg} id={props.name + "-desktop"} src="images/monitor-frame-498x291.png" />
        <div class="project-buttons">
          <a href={props.github} target="_blank">GitHub</a>
          <a href={props.live} target="_blank">Live</a>
          {/* <a id={props.name + "-btn"} onClick={() => { props.showProjectModal(props.name) }}>Details</a> */}
        </div>
        <img class="mobile-frame" style={mobileBg} id={props.name + "-mobile"} src="images/mobile-frame-291x144.png" />
      </div>
      <ProjectModal name={props.name} show={props.projectModal === props.name} toggle={props.showProjectModal} content={modalContent} />
    </article>
  )
}

class ProjectsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectModal: 0,
    }
    this.showProjectModal = this.showProjectModal.bind(this);
  }

  showProjectModal(project) {
    this.setState(prevState => ({ projectModal: prevState.projectModal === 0? project : 0 }))
  }
  
  componentDidMount() {
    document.addEventListener('keyup', (e) => { if (e.keyCode === 27) { this.showProjectModal(0); }});
  }
  render() {
    return (
      <section id="projects">
        <h2>Projects</h2>
        <ProjectDisplay name="mrplow" title="Mr. Plow" github="https://github.com/StephenVarela/Mister-Plow" live="https://mr-plow.herokuapp.com" deskBG={{image: 'images/mrplow-desktop.png', size: '95%', position: 'center -25%'}} mobileBG={{image: 'images/mrplow-mobile.png', size: '95%', position: 'center 30%'}} projectModal={this.state.projectModal} showProjectModal={this.showProjectModal} />
        <ProjectDisplay name="mathquiz" title="Math Quiz" github="https://github.com/Lukeveille/math-quiz" live="/math-quiz" deskBG={{image: 'images/mathquiz-desktop.png', size: '115%', position: 'center -14%'}} mobileBG={{image: 'images/mathquiz-mobile.png', size: '90%', position: 'center 65%'}} projectModal={this.state.projectModal} showProjectModal={this.showProjectModal} />
      </section>
    )
  }
}

ReactDOM.render(<ProjectsView />, document.getElementById('projects-component'));