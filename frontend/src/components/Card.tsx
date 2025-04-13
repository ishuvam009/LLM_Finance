interface cardProps{
    image: string,
    title: string,
    subtitle: string
}

export const Card = ({image, title, subtitle}: cardProps) => {
    return (
        <div className="w-full max-w-sm">
            <div className="relative p-8 rounded-[2rem] border border-gray-200 bg-white shadow-lg">
                <div className="flex flex-col items-start gap-4">
                    <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center">
                        <img className="h-8 w-8" src={image} alt="" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                        <p className="text-lg text-gray-500">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}