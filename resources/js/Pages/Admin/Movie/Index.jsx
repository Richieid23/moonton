import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import { Link, Head } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({auth, flashMessage}) {
    return (
        <>
            <Head title="Admin - Movie"/>
            <Authenticated auth={auth}>
                <Link href={route('admin.dashboard.movie.create')}>
                    <Button type="button" className="w-40 mb-4">
                        Insert New Movie
                    </Button>
                </Link>
                {flashMessage?.message && (<FlashMessage message={flashMessage.message} />)}
            </Authenticated>
        </>
    )
}
