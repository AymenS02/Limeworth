// Single source of truth for clinic information. Content mirrors the
// official Limeworth materials — update here, not in components.

import type { IconName } from '../components/ui/Icon';

export const clinic = {
  name: 'Limeworth X-Ray & Ultrasound',
  legalName: 'Limeworth X-ray & Ultrasound Inc.',
  building: 'Wentworth Limeridge Medical Centre',
  address: {
    suite: 'Suite 102',
    street: '849 Upper Wentworth St',
    city: 'Hamilton',
    province: 'ON',
    postal: 'L9A 5H4',
    country: 'Canada',
  },
  landmark: 'In the Wentworth Limeridge Medical Centre, across from CF Lime Ridge Mall',
  phone: { display: '905-574-7755', href: 'tel:+19055747755' },
  fax: { display: '905-574-0384' },
  email: { display: '849xray@gmail.com', href: 'mailto:849xray@gmail.com' },
  yearsServing: '20+',
  languages: ['English', 'Arabic', 'Urdu'],
  mapEmbedUrl:
    'https://maps.google.com/maps?q=849%20Upper%20Wentworth%20St%2C%20Hamilton%2C%20ON%20L9A%205H4&z=15&output=embed',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=849+Upper+Wentworth+St+Suite+102+Hamilton+ON+L9A+5H4',
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Limeworth+X-Ray+%26+Ultrasound+849+Upper+Wentworth+St+Hamilton',
} as const;

export const fullAddress = `${clinic.address.suite}, ${clinic.address.street}, ${clinic.address.city}, ${clinic.address.province} ${clinic.address.postal}`;

/** Weekly hours. `day` uses JS getDay() numbering (0 = Sunday). Times are 24h "HH:MM". */
export interface HoursEntry {
  label: string;
  days: number[];
  open?: string;
  close?: string;
}

export const hours: HoursEntry[] = [
  { label: 'Monday – Friday', days: [1, 2, 3, 4, 5], open: '08:00', close: '18:00' },
  { label: 'Saturday', days: [6], open: '08:00', close: '16:00' },
  { label: 'Sunday', days: [0] },
];

export interface ServiceStep {
  title: string;
  items: string[];
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: IconName;
  tagline: string;
  highlight: string;
  summary: string;
  booking: 'walk-in' | 'appointment';
  bookingNote: string;
  intro: string;
  /** Optional headed list rendered on the detail page (exam types, eligibility…). */
  list?: { title: string; items: string[]; footnote?: string };
  steps: ServiceStep[];
  duration: string;
  facts: { title: string; body: string }[];
}

export const services: Service[] = [
  {
    slug: 'x-ray',
    name: 'Walk-in X-Ray',
    shortName: 'X-Ray',
    icon: 'xray',
    tagline: 'No appointment needed',
    highlight: 'Walk in',
    summary:
      'Digital X-ray for chest, spine, pelvis, joints and extremities. Just walk in with your OHIP card and requisition.',
    booking: 'walk-in',
    bookingNote: "Please don't forget your OHIP card and requisition.",
    intro:
      'Walk-in X-ray services during clinic hours, no appointment required. We use modern digital equipment, and every exam is performed by a certified technologist and reviewed by a qualified radiologist.',
    list: {
      title: 'X-ray exams we perform',
      items: [
        'Chest X-rays',
        'Extremities: arms, legs, hands and feet',
        'Spine and pelvis',
        'Joint and skeletal imaging',
      ],
    },
    steps: [
      {
        title: 'What to bring',
        items: ["Valid doctor's requisition", 'OHIP card', 'Metal-free clothing when possible'],
      },
      {
        title: 'Your visit',
        items: [
          'Walk in during clinic hours and register at reception',
          'Your X-ray is performed by a certified technologist',
          'Images are reviewed by a qualified radiologist',
          'Results are sent directly to your referring physician',
        ],
      },
    ],
    duration: 'Most visits take 15–30 minutes, depending on the exam and patient volume.',
    facts: [
      {
        title: 'OHIP coverage',
        body: 'Standard diagnostic X-rays and radiologist interpretation are typically covered by OHIP when medically indicated with a valid requisition.',
      },
      {
        title: 'Safety',
        body: 'X-rays use low levels of radiation. We follow strict safety guidelines and use advanced digital systems to minimize exposure.',
      },
    ],
  },
  {
    slug: 'ultrasound',
    name: 'Ultrasound',
    shortName: 'Ultrasound',
    icon: 'ultrasound',
    tagline: 'Same-day ultrasound available',
    highlight: 'Same day',
    summary:
      'Abdominal, pelvic, obstetric, thyroid, soft tissue, musculoskeletal and vascular ultrasound. Same-day appointments available.',
    booking: 'appointment',
    bookingNote:
      "For a fast appointment, email us your phone number and doctor's requisition at 849xray@gmail.com.",
    intro:
      'Comprehensive diagnostic ultrasound by appointment, with same-day appointments often available. Ultrasound uses no ionizing radiation, making it safe for patients of all ages.',
    list: {
      title: 'Ultrasound exams we offer',
      items: [
        'Abdominal',
        'Pelvic',
        'Obstetric (pregnancy)',
        'Thyroid and neck',
        'Soft tissue',
        'Musculoskeletal',
        'Vascular (as referred)',
      ],
    },
    steps: [
      {
        title: 'Before your exam',
        items: [
          "Follow your physician's preparation instructions",
          "Bring your OHIP card and doctor's requisition",
          'Arrive early for registration',
        ],
      },
      {
        title: 'During your exam',
        items: [
          'A water-based gel is applied to the skin',
          'A transducer is gently moved over the area being examined',
          'Images are captured in real time',
        ],
      },
      {
        title: 'After your exam',
        items: [
          'Resume normal activities right away',
          'A radiologist reviews your images',
          'Results are sent to your referring physician',
        ],
      },
    ],
    duration: 'Most ultrasound exams take 20–45 minutes.',
    facts: [
      {
        title: 'OHIP coverage',
        body: "Most medically necessary ultrasound exams are covered by OHIP when accompanied by a valid physician's requisition.",
      },
      {
        title: 'Appointments required',
        body: "Ultrasound is by appointment, and a valid physician's requisition is required for all exams.",
      },
    ],
  },
  {
    slug: 'mammogram',
    name: 'OBSP & Diagnostic Mammogram',
    shortName: 'Mammogram',
    icon: 'mammogram',
    tagline: 'OBSP now open to age 40+',
    highlight: 'Age 40+',
    summary:
      'Ontario Breast Screening Program mammograms, now open to age 40+. No referral needed for screening. Saturday appointments available.',
    booking: 'appointment',
    bookingNote: 'Fast, convenient appointments, including Saturdays. No doctor’s referral needed for OBSP screening.',
    intro:
      'Early detection is one of the most effective tools in the fight against breast cancer. We are a participating Ontario Breast Screening Program (OBSP) site, offering screening and diagnostic mammography with fast, convenient appointments.',
    list: {
      title: 'Who is eligible for OBSP screening',
      items: [
        'Aged 40–74',
        'Living in Ontario with a valid OHIP card',
        'No breast cancer symptoms or personal history of breast cancer',
        'No current breast implants (some exceptions apply)',
        'Not currently in diagnostic breast follow-up',
      ],
      footnote:
        'Women aged 40–49 can self-refer. Women aged 50–74 are encouraged to screen regularly. Screening every 2 years is recommended for average-risk women; your physician may advise more frequent screening if you are at higher risk.',
    },
    steps: [
      {
        title: 'Before your exam',
        items: [
          'Wear a two-piece outfit',
          'Avoid deodorant, powder and lotion on the day',
          'Bring your OHIP card — no doctor’s referral needed for screening',
        ],
      },
      {
        title: 'During your exam',
        items: [
          'A certified technologist positions you',
          'Gentle compression is applied for a few seconds',
          'Images are taken from different angles',
        ],
      },
      {
        title: 'After your exam',
        items: [
          'Return to normal activities right away',
          'Results are sent to you and your healthcare provider',
        ],
      },
    ],
    duration: 'The exam takes 10–15 minutes.',
    facts: [
      {
        title: 'No cost with OHIP',
        body: 'For eligible participants, OBSP covers screening mammograms, radiologist interpretation, follow-up coordination and reminder notifications.',
      },
      {
        title: 'Safety',
        body: 'Mammography uses very low levels of radiation and is considered extremely safe.',
      },
    ],
  },
  {
    slug: 'bone-density',
    name: 'Bone Mineral Density (BMD)',
    shortName: 'Bone Density',
    icon: 'bone',
    tagline: 'Monday to Saturday appointments',
    highlight: 'Saturdays',
    summary:
      'DEXA bone density scans for early osteoporosis detection and fracture-risk assessment. Appointments Monday to Saturday.',
    booking: 'appointment',
    bookingNote: 'Convenient BMD appointments available Monday to Saturday.',
    intro:
      'Bone Mineral Density (BMD) testing, also known as a DEXA scan, assesses bone health and detects osteoporosis early. Bone loss often develops silently, without noticeable symptoms, until a fracture occurs — early detection makes prevention possible.',
    list: {
      title: 'Physicians often recommend BMD testing for',
      items: [
        'Women aged 65+ and men aged 70+',
        'Postmenopausal individuals with risk factors',
        'A family history of osteoporosis',
        'Fractures from minor falls',
        'Long-term corticosteroid use',
        'Calcium absorption issues or low body weight',
      ],
    },
    steps: [
      {
        title: 'Before your exam',
        items: [
          'Wear metal-free clothing',
          'Avoid calcium supplements for 24 hours beforehand',
          "Bring your OHIP card and doctor's requisition",
        ],
      },
      {
        title: 'During your exam',
        items: [
          'You lie comfortably on an exam table',
          'The scanner passes over the lower spine, hip and sometimes forearm',
          'No injections are required',
        ],
      },
      {
        title: 'After your exam',
        items: ['Resume normal activities right away', 'Results are sent to your referring physician'],
      },
    ],
    duration: 'The scan takes 10–15 minutes.',
    facts: [
      {
        title: 'Understanding results',
        body: 'Normal: T-score above −1. Osteopenia: between −1 and −2.5. Osteoporosis: below −2.5. Your physician will explain what your results mean for you.',
      },
      {
        title: 'Safety & frequency',
        body: 'BMD testing uses minimal radiation — significantly less than a standard X-ray. Your physician decides how often to repeat it, typically every 1–2 years.',
      },
      {
        title: 'OHIP coverage',
        body: 'Many BMD tests are covered by OHIP when medically indicated with a physician’s requisition.',
      },
    ],
  },
];

export const getService = (slug: string | undefined) => services.find((s) => s.slug === slug);

export const testimonial = {
  quote:
    'I visited Limeworth X-ray and ultrasound today and I was very impressed with the overall experience. From the moment I walked in, the staff was welcoming, professional, and efficient. The receptionist was helpful and quick to process my paperwork, minimizing any wait time. The technicians who performed my x-rays were both knowledgeable and kind. They explained the procedures clearly, ensuring I felt comfortable throughout the process. Overall, I highly recommend Limeworth for anyone needing x-ray or ultrasound services.',
  author: 'Yvette Emefa Awuah-Gyau',
  source: 'Google Review',
};

export const serviceAreas = [
  'Hamilton',
  'Ancaster',
  'Dundas',
  'Stoney Creek',
  'Waterdown',
  'Flamborough',
  'Binbrook',
  'Burlington',
  'Brantford',
  'Paris',
];

export const documents = [
  {
    title: 'Requisition Form',
    description: 'Have your doctor complete and sign this form before your visit.',
    href: '/docs/requisition-form.pdf',
  },
  {
    title: 'Patient Test Preparation',
    description: 'How to prepare for each type of exam.',
    href: '/docs/patient-test-preparation.pdf',
  },
  {
    title: 'Cash Fee Schedule',
    description: 'Self-pay prices for exams not covered by OHIP.',
    href: '/docs/cash-fee-schedule.pdf',
  },
];

export const cancellationPolicy = {
  fee: '$50',
  notice: 'Please call or email at least 24 hours in advance to cancel or change your appointment.',
  summary:
    'A $50 fee applies to missed appointments and to arrivals more than 10 minutes late. Your first late cancellation may be waived at the clinic’s discretion; subsequent fees cannot be waived.',
};

const FULL_BLADDER =
  'Drink 4 large glasses of water (1 litre), finished 1 hour before your exam. Do not empty your bladder.';
const TRANSVAGINAL_NOTE = 'A female pelvic exam may require a transvaginal study for optimum diagnostic results.';

/** Exam preparation, from the clinic's Patient Test Preparation sheet. */
export const examPrep: { exam: string; steps: string[] }[] = [
  {
    exam: 'Abdominal ultrasound',
    steps: [
      'Nothing to eat or drink after midnight.',
      'Do not chew gum or drink coffee/tea the morning of the exam.',
      'Children under 10: nothing to eat or drink for 4 hours before the exam.',
    ],
  },
  {
    exam: 'Abdominal and pelvic ultrasound (combined)',
    steps: [
      'Nothing to eat after midnight.',
      'Do not chew gum or drink coffee/tea the morning of the exam.',
      FULL_BLADDER,
    ],
  },
  { exam: 'Pelvic ultrasound (male and female)', steps: [FULL_BLADDER, TRANSVAGINAL_NOTE] },
  {
    exam: 'Male pelvic and transrectal ultrasound',
    steps: ['Fast for 8 hours.', 'Take a laxative the night before.', FULL_BLADDER],
  },
  { exam: 'Kidney and bladder (KUB) ultrasound', steps: ['Fast for 8 hours.', FULL_BLADDER] },
  {
    exam: 'Obstetrical or IPS ultrasound',
    steps: [
      `Dating, 6–13 weeks: ${FULL_BLADDER}`,
      'Pregnancy, 18–21 weeks: drink 2 large glasses of water, finished 1 hour before your exam. Do not empty your bladder.',
      TRANSVAGINAL_NOTE,
    ],
  },
  {
    exam: 'Thyroid, scrotum, breast, small parts & MSK ultrasound',
    steps: ['No preparation needed.'],
  },
  {
    exam: 'Mammogram / OBSP screening',
    steps: [
      'On the day of your exam, avoid deodorant, antiperspirant, lotions, creams, powders or perfume under your arms or on your breasts.',
    ],
  },
  { exam: 'Bone mineral density (BMD)', steps: ['Wear clothing with no buttons or zippers.'] },
  { exam: 'X-ray', steps: ['Wear metal-free clothing when possible.'] },
];
