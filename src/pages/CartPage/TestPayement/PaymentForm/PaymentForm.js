
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import api from 'src/api';
import React, { useState } from 'react';
import moment from 'moment';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#000000",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm({userId, finalPrice, selectedSubMonth, email, password, lastname, firstname, invoiceAddress, invoicePostCode, invoiceCity, deliveryAddress, deliveryPostCode, deliveryCity, role, setStartDate, setEndDate }) {
    const [success, setSuccess ] = useState(false)
    const history = useHistory();
    const stripe = useStripe()
    const elements = useElements()
    console.log(Math.round(finalPrice*100));
    console.log(userId);
    console.log('test:', Number(selectedSubMonth.substring(0, 1)));

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://54.196.211.25/payment", {
                amount: Math.round(finalPrice*100),
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
                moment().locale('fr');
                const point = Number(selectedSubMonth.substring(0, 1))
                const startDate = moment().format('YYYY-MM-DD');
                const endDate = moment(startDate).add(point, 'month').format('YYYY-MM-DD');
                console.log(`
                    "start_subscribe": ${startDate}, 
                    "end_subscribe": ${endDate},
                    "amount": ${finalPrice},
                    "points": ${point},
                    "user_id": ${userId},
                `)
                const order = await api.post('/order', {
                    "start_subscribe": startDate, 
                    "end_subscribe": endDate,
                    "amount": Math.round(finalPrice),
                    "points": point,
                    "user_id": userId,
                });

                const addPoint = await api.put(`/user/${userId}`, {
                    "id": userId,
                    "email": email,
                    "password": password,
                    "last_name": lastname,
                    "first_name": firstname,
                    "delivery_address": deliveryAddress,
                    "invoice_address": invoiceAddress,
                    "delivery_postcode": deliveryPostCode,
                    "invoice_postcode": invoicePostCode,
                    "delivery_city": deliveryCity,
                    "invoice_city": invoiceCity,
                    "status": true,
                    "points": point,
                    "role": role,
                })

                setStartDate(startDate)
                setEndDate(endDate)

                if(addPoint) history.push("/abonnement/commande-validee")

            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button onSubmit={handleSubmit}>Payer</button>
        </form>     
        </>
    )
}
