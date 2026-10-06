// Everything on the About / Skills / Education pages. Edit freely.

export const profile = {
  // Cutout photo shown on the left. Try "/images/ullas2.png" if you prefer that pose.
  portrait: "/images/ullas1.png",
  role: "Software Developer",

  // small captions on the bottom-left (one per page: About, Skills, Education)
  captions: [
    "Software Developer & CSE Student",
    "Turning ideas into real-world software solutions",
    "B.E. in Computer Science",
  ],

  // tiny decorative code lines near the top (one per page)
  code: [
    'const about = {\n  passion: "building",\n  learning: true,\n};',
    'const skills = [\n  "C++", "Python", "Java",\n];',
    'const degree =\n  "B.E. in Computer Science";',
  ],

  about: {
    location: "Based in India",
    status: "Open to opportunities",
    text:
      "I am a Computer Science student passionate about building real-world applications, solving problems, and learning new technologies. I enjoy working on projects that combine clean design, efficient systems, and meaningful impact.",
    stats: [
      { value: "3", label: "Years learning & building" },
      { value: "10", label: "Projects completed" },
      { value: "20", label: "Technologies explored" },
    ],
  },

  skills: {
    subtitle: "Languages & Technologies",
    // left / top / w / h are % of the page, rot = tilt in degrees.
    // If you add a pill, copy one line and move it to a free spot.
    pills: [
      { label: "C++", left: 49.1, top: 37.2, w: 8.5, h: 10.5, rot: -2 },
      { label: "Python", left: 59.0, top: 35.9, w: 12.8, h: 11.4, rot: -1.5 },
      { label: "Java", left: 73.6, top: 35.3, w: 10.9, h: 11.5, rot: 1.5 },
      { label: "Data Structures & Algorithms", left: 51.6, top: 51.2, w: 32.2, h: 10.7, rot: -0.8 },
      { label: "HTML/CSS", left: 47.4, top: 66.3, w: 15.5, h: 10.3, rot: -2 },
      { label: "Machine Learning", left: 64.4, top: 68.3, w: 25.0, h: 12.3, rot: 3 },
    ],
  },

  education: {
    subtitle: "Academic Background",
    // placeholders: replace with your real college / school names and years
    items: [
      { title: "B.E. in Computer Science", place: "Your College / University name", year: "20XX – 20XX", status: "Pursuing" },
      { title: "Pre-University (12th)", place: "Your College name", year: "20XX – 20XX" },
      { title: "High School (10th)", place: "Your School name", year: "20XX" },
    ],
  },
};