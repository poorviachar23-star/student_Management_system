
export default function HomePage({ studentCount }) {

  function handlePrint() {
    window.print();
  }

  return (
    <main className="page">

      <section className="welcome-card">

        <p className="eyebrow">
          STUDENT MANAGEMENT
        </p>

        <h1>
          Keep your student records in one place.
        </h1>

        <p className="intro">
          Add, view, update, and remove student
          details with this simple app.
        </p>

        <div className="home-actions">

          <a className="button" href="/students">
            View Students
          </a>

          <a className="button secondary-button" href="/add-student">
            Add a Student
          </a>

          <button
            className="button outline-button"
            onClick={handlePrint}
          >
            Print Summary
          </button>

          <a className="button outline-button" href="/students">
            Explore Records
          </a>

        </div>

      </section>

      <section className="summary-card">

        <span className="summary-label">
          Students registered
        </span>

        <strong>{studentCount}</strong>

      </section>

    </main>
  );
}
