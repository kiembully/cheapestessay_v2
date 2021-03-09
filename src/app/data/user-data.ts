import { Injectable } from "@angular/core";
export interface all_orders {
    order_id: number;
    order_no_custom: number;
    date_added: string;
    total: number;
    order_status_description_id: number;
    status_name: string;
    payment_status: number;
}

export interface balances {
    order_number:number,
    date:string,
    transaction_text:string,
    journal_text:string,
    transaction_amount:string,
    current_wallet_balance:string,
}

export interface topWriters {
    completed_order: number,
    description: string,
    joined: string,
    profile_pic: string,
    review_count: number,
    review_rate: string,
    user_name: string,
}

@Injectable()
export class user_functions {
    getUserStatus() {
        let status:number = 0;
        const user = localStorage.getItem('user_token');
        status = (!user) ? 0 : 1;
        return status;
    }
    getCurrentPath() {
        let path: string;
        path = window.location.pathname;
        return path.replace(/\//, "")
    }
}