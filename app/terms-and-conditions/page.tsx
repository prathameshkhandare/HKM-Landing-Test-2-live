import type { Metadata } from "next"
import TermsConditionsClient from "./TermsClient"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Review the terms and conditions for using the Hare Krishna Movement Chennai website, including guidelines for temple conduct, donations, and content usage.",
}

export default function Page() {
  return <TermsConditionsClient />
}
