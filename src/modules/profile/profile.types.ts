import {
  WithId,
  SexEnum,
} from '@whitebeardeveloper/training-logic/src/common/types';
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
