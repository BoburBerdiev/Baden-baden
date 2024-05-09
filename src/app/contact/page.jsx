
import {ContactContent} from "@/components/Pages";
async function getContact() {
  const res = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/contact`, { cache: 'no-store' })
  const contact = await res.json()
  return contact
}
export default async function Page  () {
  const contact = await getContact()
  return (
      <ContactContent contact={contact} />     )
}

