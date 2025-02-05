import { Column } from "@tanstack/react-table";
import { DebouncedInput } from "@/components/react-table/DebouncedInput";

type Props<T> = {
    column: Column<T, unknown>
}

export default function Filter<T>({ column }: Props<T>) {
    const columnFilterValue = column.getFilterValue()

    const sortedUniueValues = Array.from(column.getFacetedUniqueValues().keys()).sort()

    return (
        <>
            <datalist id={column.id + 'list'} >
                {sortedUniueValues.map((value, i) => (
                    <option key={`${i}-${column.id}`} value={value} />
                ))}
            </datalist>

            <DebouncedInput
                type="text"
                value={(columnFilterValue ?? '') as string}
                onChange={value => column.setFilterValue(value)}
                placeholder={`Search... (${[...column.getFacetedUniqueValues()].filter(arr => arr[0]).length})`}
                className="w-full border shadow rounded bg-card"
                list={column.id + 'list'}
            />
        </>
    )
}