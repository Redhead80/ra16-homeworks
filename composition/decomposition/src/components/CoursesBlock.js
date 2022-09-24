// Курсы

import CourseItem from "./CourseItem";

function CoursesBlock(props) {
  const {courseItems} = props;

  return (
    <div>
      <ul className="courses">
        {
          courseItems.map((courseItem, index) => {
            return (<li key={index}>
              <CourseItem courseItem={courseItem}/>
            </li>);
          })
        }
      </ul>
    </div>
  );
}

export default CoursesBlock;