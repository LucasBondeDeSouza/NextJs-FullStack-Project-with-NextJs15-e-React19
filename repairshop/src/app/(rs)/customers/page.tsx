import CustomerSearch from "@/app/(rs)/customers/CustomerSearch"
import { getCustomerSearchResult } from "@/lib/queries/getCustomerSearchResults"

export const metadata = {
    title: "Customers Search",
}

export default async function Customers({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { searchText } = await searchParams

    if (!searchText) return <CustomerSearch />

    // query database
    const results = await getCustomerSearchResult(searchText)

    // return results
    return (
        <>
            <CustomerSearch />
            <p>{JSON.stringify(results)}</p>
        </>
    )
}