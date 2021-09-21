import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import { BiPrinter } from "react-icons/bi";
import InvoiceComponent from './InvoiceComponent';


class Invoice extends Component {
    render() {
        return (
            <div>
                <ReactToPrint
          trigger={() => {
            return <p class="btn btn-light text-capitalize border-0 w-100" data-mdb-ripple-color="dark"><BiPrinter/> Print</p>;
          }}
          content={() => this.componentRef}
        />
       <InvoiceComponent ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

export default Invoice;