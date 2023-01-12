export enum SexEnum {
  'male' = 1,
  'female' = 2,
}

export interface ProfileCreationProps {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  sex: SexEnum;
}
