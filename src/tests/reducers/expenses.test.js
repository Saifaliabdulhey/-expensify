import expensesReducer from '../../reducers/expenses'
import expenses from '../fixture/expenses'

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})
test('should remove expense if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Gas',
        note: '',
        amount: 500,
        createdAt: 10000     
    }
    const action = {

        type: 'ADD_EXPENSE', 
        expense
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        expense
    ])
})

test('should edit an expeense', () => {

    const updates = {
        id: '188',
        description: 'water',
        note: '',
        amount: 8968,
        createdAt: 1234   
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:updates
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        updates,
        expenses[2]
    ])
})
test('should edit an expeense if id not found', () => {

    const updates = {
        id: '188',
        description: 'water',
        note: '',
        amount: 8968,
        createdAt: 1234   
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-7',
        updates:updates
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]])
    
})