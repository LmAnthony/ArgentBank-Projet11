// React
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DataLine from '../../components/DataLine/DataLine';
import TransTitle from '../../components/TransTitle/TransTitle';

const Transaction = () => {
   const store = useSelector((state) => state);

   // TOOLS
   const navigate = useNavigate();

   useEffect(() => {
      if (store.currentState === 'failed') {
         navigate('/signin');
      }
   }, [store]); // Ajoutez store dans le tableau de dépendances

   return (
      store.token && (
      <HelmetProvider>
         <Helmet>
            <title>Argent Bank - Transactions Page</title>
         </Helmet>
         <div>
            <TransTitle
               title="Argent Bank Checking (x8349)"
               amount="$2,082.79"
               amountDescr="Available Balance"
            />
            <main id="transpage" className="main bg-dark">
               <div className="dataHead">
                  <div id="arrow" className="dataLineItem"></div>
                  <div id="date" className="dataLineItem">
                     DATE
                  </div>
                  <div id="descr" className="dataLineItem">
                     DESCRIPTION
                  </div>
                  <div id="amount" className="dataLineItem">
                     AMOUNT
                  </div>
                  <div id="balance" className="dataLineItem">
                     BALANCE
                  </div>
               </div>
               <DataLine
                  date="June 20th, 2020"
                  descr="Golden Sun Bakery"
                  amount="$5.00"
                  balance="$2082.79"
                  transType="Electronic"
                  category="Food"
               />
               <DataLine
                  date="June 20th, 2020"
                  descr="Golden Sun Bakery"
                  amount="$10.00"
                  balance="$2087.79"
                  transType="Electronic"
                  category="Food"
               />
               <DataLine
                  date="June 20th, 2020"
                  descr="Golden Sun Bakery"
                  amount="$20.00"
                  balance="$2097.79"
                  transType="Electronic"
                  category="Food"
               />
               <DataLine
                  date="June 20th, 2020"
                  descr="Golden Sun Bakery"
                  amount="$30.00"
                  balance="$2117.79"
                  transType="Electronic"
                  category="Food"
               />
               <DataLine
                  date="June 20th, 2020"
                  descr="Golden Sun Bakery"
                  amount="$40.00"
                  balance="$2147.79"
                  transType="Electronic"
                  category="Food"
               />
               <DataLine
                  date="June 20th, 2020"
                  descr="Golden Sun Bakery"
                  amount="$50.00"
                  balance="$2187.79"
                  transType="Electronic"
                  category="Food"
               />
            </main>
         </div>
      </HelmetProvider>
      )
   );
};

export default Transaction;
