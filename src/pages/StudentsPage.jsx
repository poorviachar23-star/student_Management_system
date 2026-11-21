import StudentTable from '../components/StudentTable';
import Button from '../components/Button';

export default function StudentsPage({ students, onDelete }) {
  // Pass the student data and delete handler down to the table component.
  return (
    <main className="page">

      <div className="page-heading">

        <div>
          <p className="eyebrow">RECORDS</p>

          <h1>Students</h1>

          <p className="intro">
            There {students.length === 1 ? 'is' : 'are'} {students.length}{' '}
            student{students.length === 1 ? '' : 's'}.
          </p>
        </div>

        <Button href="/add-student">
          + Add Student
        </Button>

      </div>

      <StudentTable students={students} onDelete={onDelete} />

    </main>
  );
}
