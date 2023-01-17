import { WithId } from '@whitebeardeveloper/training-logic/src/common/types';

export interface UserInformation extends WithId {
  token: string;
}
