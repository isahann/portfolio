import {WindowTab} from "./Tab";

export interface ProfessionalExperienceWindowTab extends WindowTab{
  companyName: string,
  location: string,
  workTypes: string[],
  duration: string,
  roles: string[],
  skills: string[],
  descriptions: string[],
}
