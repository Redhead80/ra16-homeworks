function ProjectList(props) {
  const {projects} = props;

  return (
    <div className="project-list">
      {projects.map((project, index) => {
        return (
          <img
            key={index}
            src={project.img}
            alt=""
          >
          </img>
        )
      })}
    </div>
  )
}

export default ProjectList;
