import type { OrganizerPropsType } from "@/types";
import {
  getAllAdvisors,
  getAllInternationalFaculty,
  getAllNationalFaculty,
  getAllOrganizingCommittee,
  getAllPatrons,
  getAllScientificCommittee,
} from "./facultyDatabase";

/**
 * Organizing Committee Members
 * These are the key organizers responsible for planning and executing NZ-ISNCON 2026
 */
export const patronsData: OrganizerPropsType[] = getAllPatrons();
export const advisorsData: OrganizerPropsType[] = getAllAdvisors();
export const organizersData: OrganizerPropsType[] = getAllOrganizingCommittee();
export const scientificCommitteeData: OrganizerPropsType[] =
  getAllScientificCommittee();
export const internationalFacultyData: OrganizerPropsType[] =
  getAllInternationalFaculty();
export const nationalFacultyData: OrganizerPropsType[] =
  getAllNationalFaculty();
