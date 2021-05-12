import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "src/containers/PaymentForm";

const PUBLIC_KEY = "pk_test_51IkqSgJg8u3w3UyQntWZjxo4SdYN3JED4UhzDX0bedWSxBBpPIET2xBUtrMcfcOx1fpg5ZOJxv04gZ4UjOPJZaym00oQYQhsdE"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
