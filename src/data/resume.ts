// Text here mirrors public/files/Resume_Luke_Charbonneau.pdf word for word (minus locations).
// Keep the two in sync when the resume changes.

export interface Job {
  org: string;
  orgUrl?: string;
  role: string;
  dates: string;
  summary: string;
  highlights: string[];
}

export const summary =
  'Data engineer and back‑end web developer with professional experience that includes building data processing pipelines for NASA missions and leading the development of scientific software products from idea to market. I enjoy writing self‑explanatory code to achieve meaningful technical goals that improve the bottom line.';

export const experience: Job[] = [
  {
    org: 'Laboratory for Atmospheric and Space Physics (LASP)',
    orgUrl: 'https://lasp.colorado.edu/',
    role: 'Software Engineer',
    dates: 'Apr. 2021 - Present',
    summary:
      'Building and maintaining data pipelines to process telemetry from NASA mission instruments into publicly‑available scientific data products utilized by researchers in various fields worldwide.',
    highlights: [
      'Primarily working on the Total and Spectral solar Irradiance Sensor (TSIS) mission to process and apply corrections to the data collected by its Spectral Irradiance Monitor (SIM) instrument.',
      'Developing various monitoring tools that check both the functionality of the data processing pipeline and performance of physical components that are integral to operation of the TSIS‑SIM instrument',
      'Working with other stakeholders including mission operation teams, instrument scientists and other data engineers to understand and improve science data products',
    ],
  },
  {
    org: 'Crunch Technologies',
    orgUrl: 'https://crunchtec.com/',
    role: 'Head of Product Development',
    dates: 'Oct. 2018 - Apr. 2021',
    summary:
      'In charge of development and improvement of products at Crunch Technologies, a startup focused on the production and engineering of ultrafast laser systems and related laboratory instruments.',
    highlights: [
      'Lead developer of software applications for use in new ultrafast laser measurement products',
      'Spearheaded design of integrated laboratory laser diagnostic systems',
      'Leveraged extensive hands‑on experience with numerous optical components, devices and instruments to build and improve ultrafast laser system components',
    ],
  },
  {
    org: 'Photon Kinetics, Inc.',
    role: 'Measurement Engineer',
    dates: 'Oct. 2017 - Sep. 2018',
    summary:
      'Played a key role in redesign efforts, software development and production management of optical characterization instruments used in large‑scale optical fiber manufacturing facilities across the globe.',
    highlights: [
      'Successfully redesigned fiber‑production measurement systems for significantly reduced manufacturing cost and enhanced reliability',
      'Created and automated production processes to improve product lead times and uniformity',
      'Supported existing customer systems via remote diagnosis of technical issues',
      'Performed new hardware design and software development for existing products to fit unique customer needs',
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript'] },
  { label: 'Data Analysis', items: ['Pandas', 'Matplotlib', 'Numpy', 'Scipy', 'AstroPy'] },
  { label: 'Databases', items: ['Postgres', 'MongoDB', 'Redis', 'Oracle DB', 'Firestore'] },
  { label: 'Web Apps', items: ['Django', 'ReactJS', 'HTML', 'CSS', 'AWS (EC2, EB, Amplify, S3, Route 53)'] },
  { label: 'Embedded', items: ['Arduino (C/C++)', 'Touch Screen ISRs'] },
  { label: 'Scripting', items: ['Bash', 'Powershell'] },
];

export const education = {
  school: 'University of Colorado',
  degree: 'M.S. (Atomic, Molecular and Optical) Physics and B.A. Physics',
  dates: 'Aug. 2011 - Dec. 2016',
  highlights: [
    'Concurrent BA/MS physics program; Concentration in experimental ultrafast optics',
    'Master’s thesis, ”A Simplified Method for the Repetition Rate Stabilization of Modelocked Lasers: A PDH‑Based Technique”, defended in 2016',
    'Wrote software in Python to process image data with the objective of detecting subtle changes in reflectivity of specialized optical devices',
  ],
};
