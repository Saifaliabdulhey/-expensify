import moment from "moment";
import selectExpense from '../../selectors/expenses'
import expenses from '../fixture/expenses'



test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpense(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('should be filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined ,
        endDate: moment(0).add(2, 'days')
    }
const result = selectExpense(expenses, filters);
expect(result).toEqual([expenses[0], expenses[1]])
})
test('should be filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined ,
        endDate: undefined
    }
const result = selectExpense(expenses, filters);
expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})
test('should be filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined ,
        endDate: undefined
    }
const result = selectExpense(expenses, filters);
expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})
