import {ActionCreators } from '../app/expensesReducer'

export const GetExpenses =async (dispatch)=>{
    try{

        //api call
        const expenses=[
            {id:1,description : 'Plumber',amount:23.16},
            {id:2,description : 'Gas',amount:60.50},
            {id:3,description : 'Student Loan',amount:600}
        ];
        dispatch(ActionCreators.setExpenses(expenses));
    }
    catch{
        console.log("ERROR !");
    }
}

export const NewExpense= async (dispatch,expense)=>{
    try{
           //api call
           dispatch(ActionCreators.newExpense({id:10,description:expense.description,
        amount:expense.amount}));

    }catch{
        console.log("ERROR !");
    }
}

export const EditExpense = async (dispatch,expense)=>{
    try {
        //api call
        dispatch(ActionCreators.editExpense( expense));
    }
    catch{
        console.log("ERROR !");
    }
}
export const DeleteExpense = async (dispatch,expense)=>{
    try {
        //api call
        dispatch(ActionCreators.deleteExpense(expense));
    }
    catch{
        console.log("ERROR !");
    }
}