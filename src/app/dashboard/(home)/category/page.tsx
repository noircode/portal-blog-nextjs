"use client"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function CategoryPage() {
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Kategori</div>
                <Button asChild>
                    <Link href={"/dashboard/category/create"}>
                        <Plus className="mr-2 w-4 h-4" />
                        Tambah Data
                    </Link>
                </Button>
            </div>
            <DataTable columns={[]} data={[]} />
        </>
    )
}