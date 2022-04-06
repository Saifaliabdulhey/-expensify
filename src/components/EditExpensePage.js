import React from "react";
import { connect } from "react-redux";
import { setState } from "react"
import ExpenseForm from "./ExpenseForm";
import { startEditExpenses, startRemoveExpenses } from "../actions/expenses";
import Header from "./Header";
import Modal from 'react-modal';

export class EditExpensePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({modal: true});

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onSubmit = (expense) => {
    this.props.startEditExpenses(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemove = () => {
    this.props.startRemoveExpenses({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  // Set up modal style for removeing expense

   openModal() {
     this.setState({ modal: false });
  }



   closeModal() {
    this.setState({ modal: true });
  }


  render() {
    return (
      <div className="genral">
      <Header />
      <div className="page-header">
        <div className="content-container">
          <h1>Edit Expense</h1>
        </div>
      </div>

      <div className="content-container">
      <ExpenseForm
        expense={this.props.expense}
        onSubmit = {this.onSubmit}
      />
      </div>
      <div className="content-container">
      <button className="button btn-c"onClick={this.openModal}>Remove Expense</button>
      </div>
      <Modal
      appElement={document.getElementById('root')}
      isOpen={!this.state.modal}
      onRequestClose={this.closeModal}
      closeTimeoutMS={200}
      className="modal"
      >
      <h3>You sure you want to delete this?</h3>
      <button className="modal__btn" onClick={this.onRemove}>yes</button>
      <button className="modal__btn" onClick={this.closeModal}>no</button>
      </Modal>
    </div>
    );
  }
};


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
    
  };
  
};
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
  startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
