import { Module } from '@nestjs/common';
import { ResolverModule } from './resolver/resolver.module';
import { UsersService } from './users.service';

@Module({
  imports: [ResolverModule],
  providers: [UsersService]
})
export class UsersModule {}
