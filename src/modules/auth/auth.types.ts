import { WithIntegerId } from 'src/types/common';

export interface UserInformation extends WithIntegerId {
  token: string;
}
