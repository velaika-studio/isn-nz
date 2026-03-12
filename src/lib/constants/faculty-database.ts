import type { OrganizerPropsType } from "@/types";

/**
 * Comprehensive database of all faculty members for NZ-ISNCON 2026
 */

// ==================== INTERNATIONAL FACULTY ====================

export const INTERNATIONAL_FACULTY: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "International Faculty",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

// ==================== NATIONAL FACULTY ====================

export const NATIONAL_FACULTY: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "National Faculty",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

// ==================== PATRONS & ADVISORS ====================

export const PATRONS: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "Patron",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

export const ADVISORS: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "Advisor",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

// ==================== SCIENTIFIC COMMITTEE ====================

export const SCIENTIFIC_COMMITTEE: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "Scientific Committee",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

// ==================== ORGANIZING COMMITTEE ====================

export const ORGANIZING_COMMITTEE: Record<string, OrganizerPropsType> = {
  rajaRamachandran: {
    name: "Dr. Raja Ramachandran",
    role: "General Secretary (ISN-NZ)",
    institution: "Indian Society of Nephrology - North Zone",
    image: "/images/faculty/raja.png",
  },
  puneetArora: {
    name: "Dr. Puneet Arora",
    role: "Organizing Secretary (DNA)",
    institution: "Dehradun Nephrology Association",
    image: "/images/faculty/puneet.png",
  },
  sanjayDCruz: {
    name: "Dr. Sanjay D Cruz",
    role: "President (ISN-NZ)",
    institution: "Indian Society of Nephrology - North Zone",
    image: "/images/faculty/sanjay.png",
  },
  vikramSingh: {
    name: "Dr. Vikram Singh",
    role: "President (DNA)",
    institution: "Dehradun Nephrology Association",
    image: "/images/faculty/vikram.png",
  },
  kailashNathSingh: {
    name: "Dr. Kailash Nath Singh",
    role: "Vice-President (ISN-NZ)",
    institution: "Indian Society of Nephrology - North Zone",
    image: "/images/faculty/kailash.png",
  },
  pavitraManuDogra: {
    name: "Dr. Pavitra Manu Dogra",
    role: "Treasurer (ISN-NZ)",
    institution: "Indian Society of Nephrology - North Zone",
    image: "/images/faculty/pavitra.png",
  },
};

// ==================== HELPER FUNCTIONS ====================

export function getFacultyByKeys(
  database: Record<string, OrganizerPropsType>,
  keys: string[],
): OrganizerPropsType[] {
  return keys.map((key) => database[key]).filter(Boolean);
}

export function getAllInternationalFaculty(): OrganizerPropsType[] {
  return Object.values(INTERNATIONAL_FACULTY);
}

export function getAllNationalFaculty(): OrganizerPropsType[] {
  return Object.values(NATIONAL_FACULTY);
}

export function getAllScientificCommittee(): OrganizerPropsType[] {
  return Object.values(SCIENTIFIC_COMMITTEE);
}

export function getAllOrganizingCommittee(): OrganizerPropsType[] {
  return Object.values(ORGANIZING_COMMITTEE);
}

export function getAllPatrons(): OrganizerPropsType[] {
  return Object.values(PATRONS);
}

export function getAllAdvisors(): OrganizerPropsType[] {
  return Object.values(ADVISORS);
}
