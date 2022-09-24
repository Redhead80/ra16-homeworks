// Элемент в категории "Курсы"

function CourseItem(props) {
  return (
    <div className="course-item">
      <div className="space">{props.courseItem.name}</div>
      <div className="space">{props.courseItem.value}</div>
      <div className="space">{props.courseItem.change}</div>
    </div>
  );
}

export default CourseItem;