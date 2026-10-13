export interface Job {
  org: string;
  orgUrl?: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
}

export const experience: Job[] = [
  {
    org: 'Laboratory for Atmospheric and Space Physics (LASP)',
    orgUrl: 'https://lasp.colorado.edu/',
    role: 'Software Engineer',
    location: 'Boulder, CO',
    start: 'Apr 2021',
    end: 'Present',
    summary:
      'Building and maintaining data pipelines that process telemetry from NASA mission instruments into publicly available scientific data products used by researchers worldwide.',
    highlights: [
      'Primary engineer on processing and correcting data from the Spectral Irradiance Monitor (SIM) instrument on the Total and Spectral Solar Irradiance Sensor (TSIS) mission.',
      'Developing monitoring tools that check both the health of the data processing pipeline and the performance of physical components integral to the TSIS-SIM instrument.',
      'Working with mission operations teams, instrument scientists and other data engineers to understand and improve science data products.',
    ],
  },
  {
    org: 'Crunch Technologies',
    orgUrl: 'https://crunchtec.com/',
    role: 'Head of Product Development',
    location: 'Boulder, CO',
    start: 'Oct 2018',
    end: 'Apr 2021',
    summary:
      'Led product development at a startup focused on engineering and producing ultrafast laser systems and related laboratory instruments.',
    highlights: [
      'Lead developer of software applications for new ultrafast laser measurement products.',
      'Spearheaded the design of integrated laboratory laser diagnostic systems.',
      'Drew on extensive hands-on experience with optical components and instruments to build and improve ultrafast laser system components.',
    ],
  },
  {
    org: 'Photon Kinetics, Inc.',
    role: 'Measurement Engineer',
    location: 'Beaverton, OR',
    start: 'Oct 2017',
    end: 'Sep 2018',
    summary:
      'Redesign, software development and production management for optical characterization instruments used in large-scale optical fiber manufacturing facilities worldwide.',
    highlights: [
      'Redesigned fiber-production measurement systems for significantly lower manufacturing cost and better reliability.',
      'Created and automated production processes to improve lead times and uniformity.',
      'Supported customer systems through remote diagnosis of technical issues.',
      'Designed new hardware and software for existing products to fit unique customer needs.',
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript'] },
  { label: 'Data analysis', items: ['Pandas', 'Matplotlib', 'NumPy', 'SciPy', 'AstroPy'] },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Oracle DB', 'Firestore'] },
  { label: 'Web', items: ['Django', 'React', 'HTML', 'CSS', 'AWS (EC2, Elastic Beanstalk, Amplify, S3, Route 53)'] },
  { label: 'Embedded', items: ['Arduino (C/C++)', 'Touch screen ISRs'] },
  { label: 'Scripting', items: ['Bash', 'PowerShell'] },
];

export const education = {
  school: 'University of Colorado',
  location: 'Boulder, CO',
  degree: 'M.S. Physics (Atomic, Molecular and Optical) and B.A. Physics',
  start: 'Aug 2011',
  end: 'Dec 2016',
  highlights: [
    'Concurrent B.A./M.S. physics program with a concentration in experimental ultrafast optics.',
    'Master’s thesis: “A Simplified Method for the Repetition Rate Stabilization of Modelocked Lasers: A PDH-Based Technique” (2016).',
    'Wrote Python software to process image data and detect subtle changes in the reflectivity of specialized optical devices.',
  ],
};
