import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateTransactionRequest } from './create-transaction-request.dto';
import { TransactionCreatedEvent } from './transaciont-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('TRANSACTION_SERVICE')
    private readonly transactionClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createTransaction(createTransactionRequest: CreateTransactionRequest) {
    const {
      accountExternalIdDebit,
      accountExternalIdCredit,
      tranferTypeId,
      value,
    } = createTransactionRequest;

    const transactionCreatedEvent = new TransactionCreatedEvent(
      accountExternalIdDebit,
      accountExternalIdCredit,
      value,
      tranferTypeId,
    );

    this.transactionClient.emit('transaction_created', transactionCreatedEvent);
  }
}
