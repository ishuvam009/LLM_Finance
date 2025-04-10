interface cardProps{
    image: string,
    title: string,
    subtitle: string
}

export const Card = ({image, title, subtitle}: cardProps) => {

    return (
        <>
            <div>
                <div className="border-2 border-slate-400 rounded-2xl p-4 w-60 shadow-2xl">
                    <div className="mx-5 text-center">
                        <img className="h-15 w-15 mx-auto bg-slate-200 rounded-4xl" src={image} alt="" />
                        <p className="text-xl font-medium pt-4 pb-4">{title}</p>
                        <p className="text-gray-500">{subtitle}</p>
                    </div>
                </div>
            </div>
        </>
    )
}