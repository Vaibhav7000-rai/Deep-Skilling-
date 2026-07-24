import { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

const books = [
  { id: 1, title: 'React Basics', author: 'Alex Carter' },
  { id: 2, title: 'JavaScript Patterns', author: 'Sara Hill' }
];

const blogs = [
  { id: 1, title: 'React Conditional Rendering', category: 'React' },
  { id: 2, title: 'Using map() in JSX', category: 'JavaScript' }
];

const courses = [
  { id: 1, name: 'React Fundamentals', duration: '4 weeks' },
  { id: 2, name: 'Advanced React', duration: '6 weeks' }
];

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);
  const [viewMode, setViewMode] = useState('all');

  const toggleSection = (section) => {
    if (section === 'books') setShowBooks((prev) => !prev);
    if (section === 'blogs') setShowBlogs((prev) => !prev);
    if (section === 'courses') setShowCourses((prev) => !prev);
  };

  const renderSection = () => {
    switch (viewMode) {
      case 'books':
        return <BookDetails books={books} />;
      case 'blogs':
        return <BlogDetails blogs={blogs} />;
      case 'courses':
        return <CourseDetails courses={courses} />;
      default:
        return (
          <>
            <BookDetails books={books} />
            <BlogDetails blogs={blogs} />
            <CourseDetails courses={courses} />
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <h1>Blogger App</h1>
      <p>Conditional rendering examples, multiple components, list components, keys, and map()</p>

      <div className="controls">
        <button onClick={() => setViewMode('all')}>Show All</button>
        <button onClick={() => setViewMode('books')}>Books Only</button>
        <button onClick={() => setViewMode('blogs')}>Blogs Only</button>
        <button onClick={() => setViewMode('courses')}>Courses Only</button>
      </div>

      <div className="toggles">
        <label>
          <input type="checkbox" checked={showBooks} onChange={() => toggleSection('books')} />
          Show Book Details
        </label>
        <label>
          <input type="checkbox" checked={showBlogs} onChange={() => toggleSection('blogs')} />
          Show Blog Details
        </label>
        <label>
          <input type="checkbox" checked={showCourses} onChange={() => toggleSection('courses')} />
          Show Course Details
        </label>
      </div>

      <div className="sections">
        {viewMode === 'all' && showBooks && <BookDetails books={books} />}
        {viewMode === 'all' && showBlogs && <BlogDetails blogs={blogs} />}
        {viewMode === 'all' && showCourses && <CourseDetails courses={courses} />}
        {viewMode !== 'all' && renderSection()}
      </div>
    </div>
  );
}

export default App;
