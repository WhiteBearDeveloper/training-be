import { WithId } from '@whitebeardeveloper/training-logic/dist/common/types';

export interface UserInformation extends WithId {
  token: string;
}
