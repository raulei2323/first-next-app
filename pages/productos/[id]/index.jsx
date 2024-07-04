import { useRouter } from "next/router"

export default function ProductDetail() {
    const router = useRouter()
    const { id } = router.query

    return(
        <main>
            <h1>Esta es la pagina de detalle del productocons el id: {id}</h1>
        </main>
    )
}