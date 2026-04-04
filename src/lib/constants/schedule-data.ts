export interface ScheduleSessionType {
  time: string;
  title: string;
  speaker?: string;
  chairperson?: string;
  additionalSpeakers?: string[];
  type?:
    | "inauguration"
    | "session"
    | "slide-seminar"
    | "lunch"
    | "tea-break"
    | "poster-review";
}

export interface DayScheduleType {
  day: string;
  date: string;
  sessions: ScheduleSessionType[];
}

export const CONFERENCE_SCHEDULE: DayScheduleType[] = [
  {
    day: "DAY 1",
    date: "April 10th 2026 - Friday",
    sessions: [
      {
        time: "04:00–04:20 PM",
        title: "Rituximab in MN",
        speaker: "Dr Avichal Rajpal, PGIMER, Chandigarh",
        chairperson:
          "Prof Dipankar Bhowmik, Dr Dilip Bhalla, Prof Lalit K Pursnani, Dr Shobha Sharma, Prof S C Tiwari, Dr Vijay Kumar Binwal",
        type: "session",
      },
      {
        time: "04:20–04:40 PM",
        title: "Thymoglobulin in Kidney Transplant",
        speaker: "Dr Vinant Bhargava, SGRH, New Delhi",
        chairperson:
          "Prof Dipankar Bhowmik, Dr Dilip Bhalla, Prof Lalit K Pursnani, Dr Shobha Sharma, Prof S C Tiwari, Dr Vijay Kumar Binwal",
        type: "session",
      },
      {
        time: "04:40–05:00 PM",
        title: "Multiplex PCR in Post-Kidney Transplant Diarrhoea",
        speaker: "Dr Anurag Gupta, SGRH, New Delhi",
        chairperson:
          "Prof Dipankar Bhowmik, Dr Dilip Bhalla, Prof Lalit K Pursnani, Dr Shobha Sharma, Prof S C Tiwari, Dr Vijay Kumar Binwal",
        type: "session",
      },
      {
        time: "05:00–05:20 PM",
        title: "START Trial",
        speaker: "Dr Arun Prabhahar, PGIMER, Chandigarh",
        chairperson:
          "Prof Dipankar Bhowmik, Dr Dilip Bhalla, Prof Lalit K Pursnani, Dr Shobha Sharma, Prof S C Tiwari, Dr Vijay Kumar Binwal",
        type: "session",
      },
      {
        time: "05:20–05:40 PM",
        title: "Crescentic IgA Nephropathy",
        speaker: "Dr Pallavi Prasad, VMMC, New Delhi",
        chairperson:
          "Prof Dipankar Bhowmik, Dr Dilip Bhalla, Prof Lalit K Pursnani, Dr Shobha Sharma, Prof S C Tiwari, Dr Vijay Kumar Binwal",
        type: "session",
      },
      {
        time: "05:40–06:00 PM",
        title:
          "Phenotype and Genotype Correlation in Indian Children with Renal Tubular Acidosis",
        speaker: "Dr Suprita Kalra, Base Hospital, Delhi Cant.",
        chairperson:
          "Prof Dipankar Bhowmik, Dr Dilip Bhalla, Prof Lalit K Pursnani, Dr Shobha Sharma, Prof S C Tiwari, Dr Vijay Kumar Binwal",
        type: "session",
      },
      {
        time: "06:00–06:20 PM",
        title: "AVF Angioplasty",
        speaker: "Dr Manas Patel, SGPGIMS, Lucknow",
        chairperson:
          "Prof Dipankar Bhowmik, Dr Dilip Bhalla, Prof Lalit K Pursnani, Dr Shobha Sharma, Prof S C Tiwari, Dr Vijay Kumar Binwal",
        type: "session",
      },
      {
        time: "06:20–06:40 PM",
        title: "Hepatitis B — Post Kidney Transplant",
        speaker: "Dr Manas Behra, SGPGIMS, Lucknow",
        chairperson:
          "Prof Dipankar Bhowmik, Dr Dilip Bhalla, Prof Lalit K Pursnani, Dr Shobha Sharma, Prof S C Tiwari, Dr Vijay Kumar Binwal",
        type: "session",
      },
      {
        time: "06:40–07:00 PM",
        title: "Management of Central Venous Stenosis",
        speaker: "Dr Santosh Kumar, SGPGIMS, Lucknow",
        chairperson:
          "Prof Dipankar Bhowmik, Dr Dilip Bhalla, Prof Lalit K Pursnani, Dr Shobha Sharma, Prof S C Tiwari, Dr Vijay Kumar Binwal",
        type: "session",
      },
    ],
  },
  {
    day: "DAY 2",
    date: "April 11th 2026 - Saturday",
    sessions: [
      {
        time: "8:00–8:15 AM",
        title: "Welcome Address",
        speaker: "Dr Puneet Arora",
        additionalSpeakers: ["Dr Raja Ramachandran"],
        type: "inauguration",
      },
      {
        time: "8:15–9:00 AM",
        title: "Slippery Slopes of Nephrology",
        speaker: "Dr Ajit Singh Narula",
        additionalSpeakers: [
          "Prof Anil Bhalla",
          "Prof Dinesh Khuller",
          "Prof Harbir Singh Kohli",
          "Dr Urmila Anandh",
          "Prof Vijay Kher",
          "Prof Vinay Sakhuja",
          "Prof Vivekanand Jha",
        ],
        type: "session",
      },
      {
        time: "9:00–9:45 AM",
        title:
          "Case Discussion: ABOi Kidney Transplant with TMA & Sensitised Recipient Evaluation",
        speaker: "Dr Ajay Kher",
        additionalSpeakers: [
          "Dr Jyoti Agarwal",
          "Dr Kajaree Giri",
          "Dr Lekha Rani",
          "Prof Muzafar Wani",
          "Dr Namrata Rao",
          "Dr Tarun Mittal",
          "Dr Uma Kanga",
          "Resident Representative (RML)",
        ],
        type: "slide-seminar",
      },
      {
        time: "9:45–10:30 AM",
        title: "Management of Anaemia — Role of HIF-PHI in CKD",
        speaker: "Dr Ajay Goyal",
        additionalSpeakers: [
          "Dr Chandani Bhagat",
          "Dr Neeru Aggarwal",
          "Dr Piyush Mathur",
          "Dr PP Varma",
          "Dr Sanjiv Saxena",
          "Dr Vikram Singh",
        ],
        type: "session",
      },
      {
        time: "10:30–10:45 AM",
        title: "Tea Break",
        type: "tea-break",
      },
      {
        time: "10:45–11:30 AM",
        title:
          "Case Discussion: IgA Nephropathy — Role of Controlled-Release Budesonide",
        speaker: "Prof Amit Gupta (Moderator)",
        additionalSpeakers: [
          "Dr Anuja Porwal",
          "Dr Alok Kumar",
          "Dr Reetesh Sharma",
          "Dr RK Yadav",
          "Prof Sanjeev Gulati",
          "Dr Vijay Kumar Sinha",
        ],
        type: "slide-seminar",
      },
      {
        time: "11:30–12:00 PM",
        title: "Management of Vasculitis — ANCA",
        speaker: "Prof Aman Sharma",
        chairperson:
          "Dr Alok Kumar Pandey, Dr Jayant Hota, Prof Ritambhra Nada, Dr SNS Yadav",
        type: "session",
      },
      {
        time: "12:00–12:30 PM",
        title: "Management of Multiple Myeloma — What Nephrologist Should Know",
        speaker: "Prof Pankaj Malhotra",
        chairperson:
          "Prof Dhananjai Aggarwal, Dr DK Sinha, Prof Ritambhra Nada, Dr Sandeep Mahajan",
        type: "session",
      },
      {
        time: "12:30–1:30 PM",
        title:
          "Debate: Climate Change is Real — But Our (Global and Not India) Approach is Hypocritical",
        speaker: "Dr (Maj. Gen.) Ranjith Nair",
        additionalSpeakers: ["Dr Urmila Anandh"],
        type: "session",
      },
      {
        time: "1:30–2:15 PM",
        title:
          "Lunch Symposium: Newer Potassium Binders in Hyperkalemia Management — Are They Worth the Debate in Indian Scenario?",
        speaker: "Dr Ajit Singh Narula",
        additionalSpeakers: [
          "Dr Deepak Diwan",
          "Dr Raka Kaushal",
          "Dr Salil Jain",
          "Dr Sanjiv Jasuja",
          "Prof Vijay Kher",
        ],
        type: "lunch",
      },
      {
        time: "2:15–2:30 PM",
        title: "Break",
        type: "tea-break",
      },
      {
        time: "2:30–3:15 PM",
        title: "A Challenging Case of Complement-Mediated TMA",
        speaker: "Prof Aditi Sinha (Moderator)",
        additionalSpeakers: [
          "Dr Arun Prabhahar",
          "Dr Gaurav Sharma",
          "Dr Rajesh Jhorwat",
          "Dr Sharon Kandari",
          "Dr Shubham Shukla",
          "Dr Srinivasa Vardhan",
          "Dr M.L Patel",
        ],
        type: "slide-seminar",
      },
      {
        time: "3:15–4:00 PM",
        title: "Two Lectures by ICMR Scientist: How to Write Proposals",
        speaker: "Dr Harpreet Singh",
        additionalSpeakers: ["Dr Sudipta Roy"],
        type: "session",
      },
      {
        time: "4:00–4:15 PM",
        title: "Tea Break",
        type: "tea-break",
      },
      {
        time: "4:15–5:15 PM",
        title:
          "Case Discussion: Elderly Dialysis Patient — HDF, Pruritus, Secondary Hyperparathyroidism & Vascular Access",
        speaker: "Dr Aakanksha Sharma",
        additionalSpeakers: [
          "Prof Dinesh Khuller",
          "Dr Munish Chauhan",
          "Prof PP Varma",
          "Dr Ritika Bansal",
          "Dr Saurabh Nayak",
          "Dr Simran Kaur",
        ],
        type: "slide-seminar",
      },
      {
        time: "5:15–5:45 PM",
        title: "Esaxerenone — An Antihypertensive and Anti-Proteinuric Therapy",
        speaker: "Prof Amit Gupta",
        additionalSpeakers: [
          "Prof P P Varma",
          "Dr Raka Kaushal",
          "Dr Sanjiv Saxena",
          "Prof Vijay Kher",
        ],
        type: "session",
      },
      {
        time: "6:00 PM",
        title: "General Body Meeting (GBM)",
        type: "session",
      },
      {
        time: "7:30 PM",
        title: "Inauguration and Dinner",
        type: "inauguration",
      },
    ],
  },
  {
    day: "DAY 3",
    date: "April 12th 2026 - Sunday",
    sessions: [
      {
        time: "8:00–8:30 AM",
        title:
          "A Challenging Case — Peritoneal Dialysis (4–5 Clinical Scenarios)",
        speaker: "Prof Anil Bhalla",
        additionalSpeakers: [
          "Prof Himanshu Mahapatra",
          "Prof (Brig) Pavitra Manu Dogra",
          "Dr Vikas Makkar",
        ],
        type: "slide-seminar",
      },
      {
        time: "8:30–9:15 AM",
        title:
          "Case Discussion: Immunological Risk Stratification & Induction Immunosuppression in Kidney Transplant",
        speaker: "Dr Deepak Pathania",
        additionalSpeakers: [
          "Dr Manish Jain",
          "Dr Manish Singla",
          "Dr Manoj Singhal",
          "Dr Suman Lata",
          "Prof Vinay Malhotra",
          "Prof Vikas Makkar",
        ],
        type: "slide-seminar",
      },
      {
        time: "9:15–10:00 AM",
        title: "Debate: AI Will Take Away Our Prescription Job",
        speaker: "Dr Arun Kumar",
        additionalSpeakers: ["Dr Gagandeep Chhabra", "Dr Sanjiv Saxena"],
        chairperson: "Prof Amit Gupta, Dr Santosh Kumar",
        type: "session",
      },
      {
        time: "10:00–10:15 AM",
        title: "Tea Break",
        type: "tea-break",
      },
      {
        time: "10:15–10:45 AM",
        title:
          "Prof KK Malhotra Oration — Prof Narayan Prasad, SGPGIMS, Lucknow",
        speaker: "Prof Narayan Prasad",
        chairperson:
          "Prof Ashwini Gupta (President ISN), Prof Sanjay D Cruz (President NZ-ISN)",
        type: "inauguration",
      },
      {
        time: "10:45–11:15 AM",
        title: "Presidential Oration",
        speaker: "Prof Sanjay D Cruz",
        chairperson: "Prof Dipankar Bhowmik, Dr K N Singh",
        type: "inauguration",
      },
      {
        time: "11:15–11:30 AM",
        title: "ATG-Grafalon in Kidney Transplant",
        speaker: "Dr Manish Malik",
        type: "session",
      },
      {
        time: "11:30 AM–12:10 PM",
        title:
          "Case Discussion: Diuretic Management in Heart Failure & Nephrotic Syndrome",
        speaker: "Prof Anupama Kaul (Moderator)",
        additionalSpeakers: [
          "Prof Himanshu Varma",
          "Prof Muthu Kumar",
          "Dr Nishant Nadda",
          "Dr Sahil Garg",
          "Prof Shivendra Singh",
        ],
        chairperson:
          "Dr Ankur Chaudhary, Prof K L Gupta, Dr Mohit Khirbat, Dr Sourya Sourabh Mohakuda",
        type: "slide-seminar",
      },
      {
        time: "12:10–12:40 PM",
        title: "Vaccine in Kidney Diseases",
        speaker: "Prof RK Sharma",
        additionalSpeakers: [
          "Dr Raghuvendra Singh",
          "Dr Rajiv Kumar Bhatia",
          "Dr Manju Aggarwal",
          "Dr Vishal Saxena",
          "Dr Vivek Ruhela",
        ],
        type: "session",
      },
      {
        time: "12:45 PM",
        title: "Valedictory Function, Lunch and Departure",
        type: "lunch",
      },
    ],
  },
];

// Session highlights for quick overview
export const SESSION_HIGHLIGHTS = [
  {
    title: "Clinical Nephrology",
    topics: [
      "IgA Nephropathy & Vasculitis",
      "Complement-Mediated TMA",
      "CKD Anaemia Management",
      "Renal Tubular Acidosis",
    ],
  },
  {
    title: "Dialysis & Extracorporeal Therapies",
    topics: [
      "Haemodialysis Optimisation (HDF)",
      "Peritoneal Dialysis Challenges",
      "Vascular Access & AVF Angioplasty",
      "Hyperkalemia Management",
    ],
  },
  {
    title: "Kidney Transplantation",
    topics: [
      "ABOi Transplantation",
      "Induction Immunosuppression",
      "Post-Transplant Complications",
      "Sensitised Recipient Evaluation",
    ],
  },
  {
    title: "Special Topics & Debates",
    topics: [
      "Multiple Myeloma in Nephrology",
      "AI in Nephrology Practice",
      "Vaccine in Kidney Disease",
      "Esaxerenone Therapy",
    ],
  },
  {
    title: "Research & Education",
    topics: [
      "How to Write Research Proposals",
      "Climate Change & Nephrology",
      "Oration & Presidential Address",
      "General Body Meeting",
    ],
  },
  {
    title: "Pharmacotherapy",
    topics: [
      "Esaxerenone in Hypertension",
      "Newer Potassium Binders",
      "ATG & Grafalon in Transplant",
      "Rituximab in Membranous Nephropathy",
    ],
  },
];
