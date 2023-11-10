import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomersMiddleware } from './middlewares/validate-customers.middlewares';


@Module({
  

  controllers: [CustomersController],
  

  providers: [CustomersService]
})
export class CustomersModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
      consumer.apply(ValidateCustomersMiddleware).forRoutes({
        path: "customers/search/:id",
        method: RequestMethod.GET
      })
  }
}
