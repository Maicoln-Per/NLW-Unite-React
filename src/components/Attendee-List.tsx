import { ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react"
import { IconButton } from "./Icon-button"
import { Table } from "./table/Table"
import { TableHeader } from "./table/Table-header"
import { TableCell } from "./table/Table-cell"

export function AttendeeList() {
    return (
        <div>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border-white/10 bg-transparent rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm" placeholder="Buscar participantes..."/>
                </div>
            </div>

            <Table>
                <thead>
                    <tr className="border-b border-white/10">
                        <TableHeader>
                            <input style={{ width: 64 }} type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participantes</TableHeader>
                        <TableHeader>Data de inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 8 }).map((_, i) => {
                        return (
                            <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                                <TableCell className="py-3 px-4 text-sm text-zinc-300">
                                    <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                                </TableCell>
                                <TableCell className="py-3 px-4 text-sm text-zinc-300">12383</TableCell>
                                <TableCell className="py-3 px-4 text-sm text-zinc-300">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">Maicoln Pereira de Sousa</span>
                                        <span>maicolnlindo@gmail.com</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</TableCell>
                                <TableCell className="py-3 px-4 text-sm text-zinc-300">3 dias atrás</TableCell>
                                <TableCell className="py-3 px-4 text-sm text-zinc-300">
                                    <IconButton transparent={true}>
                                        <MoreHorizontal className="size-4"/>
                                    </IconButton>
                                </TableCell>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr className="border-b border-white/10">
                        <TableCell className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>Mostrando 10 de 228</TableCell>
                        <TableCell className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página 1 de 23</span>
                                <div className="flex gap-1.5">
                                    <IconButton>
                                        <ChevronsLeft className="size-4"/>
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsLeft className="size-4"/>
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className="size-4"/>
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className="size-4"/>
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
        
    )    
}