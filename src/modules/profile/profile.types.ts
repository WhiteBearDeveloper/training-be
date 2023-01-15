import { WithIntegerId, WithIntegerUserId } from 'src/types/common';

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

export interface ProfileInterface
  extends ProfileCreationProps,
    WithIntegerId,
    WithIntegerUserId {}
