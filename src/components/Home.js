import React from 'react'
import Header from './Header'
import { Balance } from './Balance'
import { Expenses } from './Expenses'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'
import { GlobalProvider } from '../context/State'


const Home = () => {
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <button className='btn' onClick={logout}>Logout</button>
            <GlobalProvider>
                <Header />
                <div className='container'>
                    <Balance />
                    <Expenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </GlobalProvider>
        </div>
    )
}

export default Home