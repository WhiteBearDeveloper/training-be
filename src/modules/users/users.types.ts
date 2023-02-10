import { AuthProps } from '@whitebeardeveloper/training-logic/logic/types/auth.types';
import { WithId } from '@whitebeardeveloper/training-logic/logic/types/common.types';

export interface UserModel extends WithId, AuthProps {}
