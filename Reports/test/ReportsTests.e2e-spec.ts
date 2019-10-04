import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ReportModule } from './../src/Report/ReportModule';

describe('', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [ReportModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(404);
  });

  it('/report/customer/2019-08-07 (GET)', () => {
    return request(app.getHttpServer())
      .get('/report/customer/2019-08-07')
      .expect({"customerName":"Jane Doe","totalPrice":110});
  });

  it('/report/customer/invalid (GET)', () => {
    return request(app.getHttpServer())
      .get('/report/customer/invalid')
      .expect({});
  });

  it('/report/products/2019-08-07 (GET)', () => {
    return request(app.getHttpServer())
      .get('/report/products/2019-08-07')
      .expect({"productName":"Cotton t-shirt XL","quantity":1,"totalPrice":25.75});
  });

  it('/report/products/invalid (GET)', () => {
    return request(app.getHttpServer())
      .get('/report/products/invalid')
      .expect({});
  });
});
