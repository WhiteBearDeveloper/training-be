import {
  WithId,
  SexEnum,
} from '@whitebeardeveloper/training-logic/dist/common/types';
import { WithUserId } from 'src/types/common';

export interface ProfileCreationProps {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  sex: SexEnum;
}

export interface ProfileInterface
  extends ProfileCreationProps,
    WithId,
    WithUserId {}
