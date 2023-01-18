import { AuthProps } from '@whitebeardeveloper/training-logic/dist/auth/types';
import { WithId } from '@whitebeardeveloper/training-logic/dist/common/types';

export interface UserModel extends WithId, AuthProps {}
