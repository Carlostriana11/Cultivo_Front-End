export interface Huerta {
    _id?: any;             // Identificador único
    titulo: string;          // Título de la huerta
    image: string;           // URL de la imagen de la huerta
    description: string;     // Descripción de la huerta
    ubicacion: string;       // Ubicación de la huerta
    climaIdeal: string;      // Clima ideal para la huerta
    motivo: string;          // Motivo del clima ideal
    tiempoDeCrecimiento: string; // Tiempo de crecimiento de la huerta
    momentoDeCosecha: string;    // Momento de cosecha
    frecuenciaDeRiego: string; // Frecuencia de riego

}
export interface ApiResponse {
    data: Huerta[]; // 'data' contiene un arreglo de objetos 'Huerta'
}

