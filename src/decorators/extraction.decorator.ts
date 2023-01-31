import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserIdExtraction = createParamDecorator(
  (data: unknown, req: ExecutionContext) => {
    const request = req.switchToHttp().getRequest();
    return request.user.id;
  },
);
