import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';

const UseIncidencias = ({ inicio, fin, estado }) => {
    const { user } = useSelector((state) => state.auth);

    const listaIncidencias = async ({ signal }) => {

        const baseUrl = `${import.meta.env.VITE_APP_ENDPOINT}/api/preincidencias/sereno/${user?.id_sereno}`;

        const params = new URLSearchParams();

        if (inicio) params.append("fecha_inicio", inicio);
        if (fin) params.append("fecha_fin", fin);
        if (estado) params.append("estado", estado);

        const url = `${baseUrl}?${params.toString()}`;

        const response = await axios.get(
            url,
            {
                signal,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data
    }


    const query = useQuery({
        queryKey: ['listaIncidencias'],
        queryFn: listaIncidencias,
        enabled: true,
        refetchOnWindowFocus: false,
        retry: 0,
    })

    return query
}

export default UseIncidencias