import type { OrganizerPropsType } from "@/types";

/**
 * Comprehensive database of all faculty members for NZ-ISNCON 2026
 */

// ==================== INTERNATIONAL FACULTY ====================

export const internationalFaculty: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "International Faculty",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

// ==================== NATIONAL FACULTY ====================

export const nationalFaculty: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "National Faculty",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

// ==================== PATRONS & ADVISORS ====================

export const patrons: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "Patron",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

export const advisors: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "Advisor",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

// ==================== SCIENTIFIC COMMITTEE ====================

export const scientificCommittee: Record<string, OrganizerPropsType> = {
  tba1: {
    name: "TBA",
    role: "Scientific Committee",
    institution: "To be announced",
    image: "/images/faculty/placeholder.png",
  },
};

// ==================== ORGANIZING COMMITTEE ====================

export const organizingCommittee: Record<string, OrganizerPropsType> = {
  sanjayDCruz: {
    name: "Dr. Sanjay D Cruz",
    role: "Organizing Chairman (ISN-NZ)",
    institution: "Indian Society of Nephrology - North Zone",
    image: "https://avatar.iran.liara.run/public",
  },
  rajaRamachandran: {
    name: "Dr. Raja Ramachandran",
    role: "Organizing Secretary (ISN-NZ)",
    institution: "Dept. of Nephrology, PGIMER, Chandigarh",
    image: "https://avatar.iran.liara.run/public",
  },
  vikramSingh: {
    name: "Dr. Vikram Singh",
    role: "Organizing Chairman (DNA)",
    institution: "Dehradun Nephrology Association",
    image: "https://avatar.iran.liara.run/public",
  },
  puneetArora: {
    name: "Dr. Puneet Arora",
    role: "Organizing Secretary (DNA)",
    institution: "Dept. of Nephrology, Max Super Speciality Hospital Dehradun",
    image: "https://avatar.iran.liara.run/public",
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
  return Object.values(internationalFaculty);
}

export function getAllNationalFaculty(): OrganizerPropsType[] {
  return Object.values(nationalFaculty);
}

export function getAllScientificCommittee(): OrganizerPropsType[] {
  return Object.values(scientificCommittee);
}

export function getAllOrganizingCommittee(): OrganizerPropsType[] {
  return Object.values(organizingCommittee);
}

export function getAllPatrons(): OrganizerPropsType[] {
  return Object.values(patrons);
}

export function getAllAdvisors(): OrganizerPropsType[] {
  return Object.values(advisors);
}
