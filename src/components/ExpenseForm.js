import React, { Component } from 'react'
import 'react-dates/initialize';
import moment from 'moment'
import {  SingleDatePicker } from 'react-dates';


export class ExpenseForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description :'',
            note: props.expense ? props.expense.note :'',
            amount: props.expense ? (props.expense.amount / 100).toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: true,
            error: '',
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         this.setState(() => ({amount})); 
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calanderFocused: focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount'}));
        }else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
  render() {
    return (
          
          <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
              <input
              type="text"
              placeholder="Description"
              className="text-input"
              autoFocus
              value= {this.state.description}
              onChange={this.onDescriptionChange}
              />

              <input 
              type="text"
              className="text-input"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
              />

              <textarea
              className="textarea"
              placeholder="Add a note for your expense (Optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
              >    
              </textarea>

           <div className="extra-changes">
              <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={()=> false}
              />

             <button className="button btn">Save Expense</button>
             </div>
          </form>
    )
  }
}

export default ExpenseForm