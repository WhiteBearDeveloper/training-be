import { ProfileModel } from '@whitebeardeveloper/training-logic/dist/profile/types';
import { WithUserId } from 'src/types/common';

export interface ProfileInterface extends ProfileModel, WithUserId {}
