export default function FlashMessage({classname, message = ''}) {
    return (
        <div className={`flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700 ${classname}`}>
            {message}
        </div>
    )
}
