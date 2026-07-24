import styles from './CohortDetails.module.css'

const cohorts = [
  {
    name: 'React Bootcamp',
    duration: '6 weeks',
    status: 'ongoing',
    location: 'Bengaluru',
  },
  {
    name: 'Angular Sprint',
    duration: '8 weeks',
    status: 'completed',
    location: 'Hyderabad',
  },
]

function CohortDetails() {
  return (
    <section className={styles.dashboard}>
      <h2 className={styles.title}>Cohort Dashboard</h2>
      <div className={styles.list}>
        {cohorts.map((cohort) => (
          <div className={styles.box} key={cohort.name}>
            <h3
              className={`${styles.statusHeading} ${cohort.status === 'ongoing' ? styles.ongoing : styles.other}`}
            >
              {cohort.status.toUpperCase()}
            </h3>
            <dl>
              <div className={styles.row}>
                <dt>Name</dt>
                <dd>{cohort.name}</dd>
              </div>
              <div className={styles.row}>
                <dt>Duration</dt>
                <dd>{cohort.duration}</dd>
              </div>
              <div className={styles.row}>
                <dt>Location</dt>
                <dd>{cohort.location}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CohortDetails
