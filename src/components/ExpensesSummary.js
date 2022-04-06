import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses.total';

export const ExpensesSummary = ({expenseCount, expensesTotal, wholeExpenses}) => {
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0,00');

    return (
        <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">
        Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span></h1>
        <p>you have {expenseCount} visible {expenseWord} of <span>{wholeExpenses}</span> </p>
        <div className="page-header_actions">
        <Link className="button" to="/contact">Add Expense</Link>
        </div>
        </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        wholeExpenses: state.expenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
