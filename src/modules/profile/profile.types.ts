import { ProfileModel } from '@whitebeardeveloper/training-logic/logic/profile/types';
import { WithUserId } from 'src/types/common';

export interface ProfileInterface extends ProfileModel, WithUserId {}
