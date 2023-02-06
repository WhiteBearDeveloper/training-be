import { AuthProps } from '@whitebeardeveloper/training-logic/logic/auth/types';
import { WithId } from '@whitebeardeveloper/training-logic/logic/common/types';

export interface UserModel extends WithId, AuthProps {}
