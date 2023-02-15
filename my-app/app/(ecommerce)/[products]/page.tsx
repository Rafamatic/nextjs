import Link from "next/link"

export default function Home({ params }: { params: { products: string } }) {
    return (

        <main>
            <h1 className="text-red-600 text-2xl font-extrabold">Products</h1>
            <Link href="/">Home</Link>
            <div>
                This is {params.products}
            </div>
        </main>

    )
}
