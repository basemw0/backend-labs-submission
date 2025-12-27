import React from 'react';
import { coursesData } from '../data/dummyData';
import { images } from '../data/images';

const CoursesSection = () => {
  const courseImages = [images.course1, images.course2, images.course3, images.course4];

  return (
    <section className="courses-section">
      <div className="container">
        <h2 className="section-title">{coursesData.title}</h2>
        <p className="section-subtitle">{coursesData.subtitle}</p>
        
        <div className="categories-row">
          {coursesData.categories.map((category, index) => (
            <button key={index} className="category-btn">{category}</button>
          ))}
        </div>
        
        <div className="courses-grid">
          {coursesData.courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image">
                <img src={courseImages[index]} alt={course.title} />
                <div className="course-wishlist">❤️</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">{course.instructor}</p>
                
                <div className="course-rating-row">
                  <span className="course-rating">{course.rating}</span>
                  <div className="stars">
                    {'★'.repeat(Math.floor(course.rating))}
                    {'☆'.repeat(5 - Math.floor(course.rating))}
                  </div>
                  <span className="course-reviews">({course.reviews})</span>
                </div>
                
                <div className="course-meta">
                  {course.badge && <span className="course-badge">{course.badge}</span>}
                </div>
                
                <div className="course-price">{course.price}</div>
                
                {course.discount && (
                  <div className="course-discount">{course.discount}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="show-all-courses">
          <button className="btn btn-secondary">{coursesData.showAllText}</button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;