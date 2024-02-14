import { Test, TestingModule } from '@nestjs/testing';
import { TithesResolver } from './tithes.resolver';
import { TithesService } from './tithes.service';

describe('TithesResolver', () => {
  let resolver: TithesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TithesResolver, TithesService],
    }).compile();

    resolver = module.get<TithesResolver>(TithesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
