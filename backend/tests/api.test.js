import request from 'supertest';
import app from '../server.js';
import { sequelize } from '../config/db.js';
import { Expense } from '../models/Expense.js';

describe('Expense Tracker API testing', () => {
  // this will run before all tests
  beforeAll(async () => {
    // 1. Check Database connection
    // 2. Sync Tables (Force true will clean older data)
    await sequelize.sync({ force: true });
    console.log('✅ Test Database & Tables Synced!');
  });

  // close DB connection after running test cases
  afterAll(async () => {
    await sequelize.close();
  });

  // --- 0. Error Handling ---
  describe('Handle error cases', () => {
    it('should handle database errors in catch block', async () => {
      // 1. Mocking: Hum Sequelize ke 'create' function ko "Error Thrower" bana denge
      const spy = jest.spyOn(Expense, 'create').mockImplementation(() => {
        throw new Error('Database Crash!');
      });

      const res = await request(app)
        .post('/api/expenses')
        .send({ title: 'Test', amount: 100 });

      // 2. Validation: Check karo ki kya controller ne 500 error diya?
      expect(res.statusCode).toBe(500);
      expect(res.body.message).toContain('error occurred');

      // 3. Cleanup: Mock ko wapas normal kar do warna baaki tests fail ho jayenge
      spy.mockRestore();
    });
  });

  // --- 1. Create Operations ---
  describe('POST /api/expenses (Create)', () => {
    // New Expense should get created
    it('should create a new expense successfully', async () => {
      const newExpense = {
        title: 'Mobile Recharge',
        amount: 199.0,
        category: 'Utility Bills',
      };

      const res = await request(app).post('/api/expenses').send(newExpense);

      expect(res.statusCode).toEqual(201);
      expect(res.body.title).toBe('Mobile Recharge');
      expect(res.body).toHaveProperty('id');
    });

    it('should return 400 if amount is missing', async () => {
      const invalidExpense = { title: 'Expense without amount' };

      const res = await request(app).post('/api/expenses').send(invalidExpense);

      expect(res.statusCode).toEqual(400);
      expect(res.body.message).toContain('amount');
    });
  });

  // --- 2. Read Operations ---
  describe('GET /api/expenses (Read)', () => {
    it('should fetch all expenses from the database', async () => {
      const res = await request(app).get('/api/expenses');

      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it('should fetch a single expense by ID', async () => {
      const res = await request(app).get('/api/expenses/1');

      expect(res.statusCode).toEqual(200);
      expect(res.body.title).toBe('Mobile Recharge');
      expect(res.body.id).toBe(1);
    });
  });

  // --- 3. UPDATE Operations ---
  describe('PUT /api/expenses/:id (Update)', () => {
    it('should update an existing expense', async () => {
      const res = await request(app)
        .put('/api/expenses/1')
        .send({ amount: 2500 });

      expect(res.statusCode).toBe(200);
      expect(res.body.amount).toBe(2500);
    });
  });

  // --- 4. PATCH Operations ---
  describe('PATCH /api/expenses/:id (Patch)', () => {
    it('should update a field of expense successfully', async () => {
      const res = await request(app).patch('/api/expenses/1').send({
        amount: 299.99,
      });

      expect(res.statusCode).toBe(200);
      expect(res.body.amount).toEqual(299.99);
    });
  });

  // --- 5. DELETE Operations ---
  describe('DELETE /api/expenses/:id (Delete)', () => {
    it('should delete an expense successfully', async () => {
      const res = await request(app).delete('/api/expenses/1');
      expect(res.statusCode).toBe(204);
    });
  });
});
