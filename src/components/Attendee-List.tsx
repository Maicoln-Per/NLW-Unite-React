import { ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react"
import { IconButton } from "./Icon-button"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Table } from "./table/Table"
import { TableHeader } from "./table/Table-header"
import { TableCell } from "./table/Table-cell"
import { TableRow } from "./table/Table-row"
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendees"

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)

    const totalPages = Math.ceil(attendees.length / 10)

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    function goToNextPage() {
        setPage(page + 1);
    }

    function goToPreviusPage() {
        setPage(page - 1);
    }

    function goToFirstPage() {
        setPage(1);
    }

    function goToLastPage() {
        setPage(totalPages);
    }

    return (
        <div>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border-white/10 bg-transparent rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm" placeholder="Buscar participantes..."/>
                </div>

                {search}
            </div>

            <Table>
                <thead>
                    <TableRow>
                        <TableHeader>
                            <input style={{ width: 64 }} type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participantes</TableHeader>
                        <TableHeader>Data de inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                        return (
                            <TableRow key={attendee.id}>
                                <TableCell>
                                    <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{dayjs().to(attendee.createAt)}</TableCell>
                                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
                                <TableCell>
                                    <IconButton transparent={true}>
                                        <MoreHorizontal className="size-4"/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <TableRow>
                        <TableCell colSpan={3}>
                            Mostrando 10 de {attendees.length} itens
                        </TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página {page} de {totalPages}</span>
                                <div className="flex gap-1.5">
                                    <IconButton onClick={goToFirstPage}>
                                        <ChevronsLeft className="size-4"/>
                                    </IconButton>
                                    <IconButton onClick={goToPreviusPage}>
                                        <ChevronsLeft className="size-4"/>
                                    </IconButton>
                                    <IconButton onClick={goToNextPage}>
                                        <ChevronsRight className="size-4"/>
                                    </IconButton>
                                    <IconButton onClick={goToLastPage}>
                                        <ChevronsRight className="size-4"/>
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                </tfoot>
            </Table>
        </div>
        
    )    
}