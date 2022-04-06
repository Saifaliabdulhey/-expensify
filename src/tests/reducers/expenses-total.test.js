import selectExoensesTotal from '../../selectors/expenses.total';
import expenses from '../fixture/expenses';

test('should return 0 if no expenses', ()=> {
    const res = selectExoensesTotal([]);
    expect(res).toBe(0)
})

test('should correctly add up a single expense', ()=> {
    const res = selectExoensesTotal([expenses[0]]);
    expect(res).toBe(100)
})

test('should correctly add up a multiple expenses', ()=> {
    const res = selectExoensesTotal(expenses);
    expect(res).toBe(114100)
})