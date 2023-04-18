import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserIdExtraction = createParamDecorator(
  (data: unknown, req: ExecutionContext): number => {
    const request = req.switchToHttp().getRequest();
    return request.user?.id ? request.user.id : 0;
  },
);
