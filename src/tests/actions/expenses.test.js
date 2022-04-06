import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    removeExpense, 
    addExpense, 
    setExpenses, 
    editExpense, 
    startSetExpenses,
    startRemoveExpenses,
    startEditExpenses
      } from "../../actions/expenses";
import expenses from '../fixture/expenses';
import database from '../../firebase/firebase'

const uid = 'thisismyuid';
const defaultAuthState = { auth: {uid}}; 
const createMockStore = configureMockStore([thunk]);

// beforeEach((done) => {
//     const expensesData = {};
//     expenses.forEach(({id, description, note, amount, createdAt}) => {
//         expensesData[id] = {description, note, amount, createdAt};
//     });
//     database.ref('expenses').set(expensesData).then(() => done())
// })

test('should set up remove expense action object', ()=> {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    })
})
test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpenses({id})).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
    })
    done();
})

test('should set up edit expense action object', ()=> {
    const edit = editExpense('123abc',{note: 'new note value'});
    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'},
    })
})

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 21045 };
    store.dispatch(startEditExpenses(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
    })
    done();
})

test('should set up add expense action object with the provided values', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    })
})

// test('should add expense to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'Mouse',
//         amount: 3000,
//         note: 'This one is better',
//         createdAt: 1000
//     }

//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });

//        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//             expect(snapshot.val()).toEqual(expenseData);
//             done();
//     })
// })

// test('should add expense with defaults to databse and store', (done) => {
//     const store = createMockStore({});
//     const defaultsDtat = {
//         description: '',
//         amount: 0,
//         note: '',
//         createdAt: 0
//     }

//     store.dispatch(startAddExpense({})).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...defaultsDtat
//             }
//         });

//        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//             expect(snapshot.val()).toEqual(defaultsDtat);
//             done();
//     })
// })


//  test('should setup add expense action object with the default values', () => {
// //     const action = addExpense();
// //     expect(action).toEqual({
// //         type:'ADD_EXPENSE',
// //         expense: {
// //             id: expect.any(String),
// //             description: '',
// //             note:'',
// //             amount: 0,
// //             createdAt: 0,
// //         },
// //     })
// // })

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})


test('should fetch the expenses from the firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
    })
    done();
})


