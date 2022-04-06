import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';

 let editExpense,startRemoveExpense, history, wrapper;
 beforeEach(() => {
     editExpense = jest.fn();
     startRemoveExpense = jest.fn();
     history = { push: jest.fn() };
     wrapper = shallow(
         <EditExpensePage
        editExpense={editExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expenses={expenses[2]} />);
 })

 test('should render EditExpensePage correctly', () => {
     expect(wrapper).toMatchSnapshot();
 })


//  test('should handle editExpense', () => {
//      wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//      expect(history.push).toHaveBeenLastCalledWith('/');
//      expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
//  })

//  test('should handle startRemoveExpense', () => {
//      wrapper.find('button').simulate('click');
//      expect(history.push).toHaveBeenLastCalledWith('/');
//      expect(startRemoveExpense).toHaveBeenLastCalledWith({
//          id: expenses[2].id
//      });
//  })
