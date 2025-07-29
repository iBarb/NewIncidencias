import { useEffect, useRef, useState } from "react";

const NuevaIncidencia = () => {
    const sentinelRef = useRef(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => setHasScrolled(!e.isIntersecting),
            { threshold: 0 }
        );
        const current = sentinelRef.current;
        if (current) observer.observe(current);
        return () => current && observer.unobserve(current);
    }, []);


    return (
        <div className="h-full flex flex-col">
            <div ref={sentinelRef} className="h-1" />

            <div className={`px-6 mb-4 sticky top-0 z-10 p-4 transition-all duration-300 ${hasScrolled ? 'shadow-md bg-white' : ' bg-gray-50'}`}>
                <div className='flex items-center justify-between max-w-md container mx-auto'>
                    <h1 className="text-2xl font-bold text-gray-900">Nueva incidencia</h1>
                    <div className="flex gap-2">

                    </div>
                </div>

            </div>
        </div>

    )
}

export default NuevaIncidencia