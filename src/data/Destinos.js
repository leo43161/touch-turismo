const Destinos = [
    {
        "id": 1,
        "titulo": "El Cadillal",
        "linea": "Buscor",
        "nodos": [],
        "costo": "$230",
        "parada": "Boletería Nº 03 - Plataforma Nº 12 y 13 terminal de Ómnibus.",
        "indicaciones": "",
        "horarios": [
            {
                dias: "Lunes a sabados",
                ida: ["07:00", "09:00", "11:30", "14:30", "17:00", "19:00"],
                vuelta: ['8:00', '10:15', '12:30', '16:00', '18:00', '20:00']
            },
            {
                dias: "Domingos y feriados",
                ida: ["09:00", "11.30", "14:30", "17:00", "19:00"],
                vuelta: ['10:15', '12:30', '16:00', '18:00', '20:00']
            }

        ],
        "icono": "cadillal-2-1.jpg",
        "visible": true,
        "activo": true
    },
    {
        "id": 2,
        "titulo": "San Javier",
        "linea": "118",
        "nodos": [],
        "costo": "Cristo $240.- Cascada $341.-  Portezuelo $419",
        "parada": " Plataforma Nº 57 a Nº 58 de Terminal de Ómnibus.",
        "indicaciones": "La vuelta es desde El Portezuelo",
        "horarios": [
            {
                dias: "Lunes a viernes",
                ida: ["12:30", "16:00"],
                vuelta: ['06:00', '14:15', '18:00']
            },
            {
                dias: "Sábados",
                ida: ["12:00", "16:00"],
                vuelta: ['07:00', '14:00', '18:00']
            },
            {
                dias: "Domingos y feriados",
                ida: ["8:00", "12:00", "16:00"],
                vuelta: ['10:00', '14:00', '18:00']
            }

        ],
        "icono": "sanjavier-1-1.jpg",
        "visible": true,
        "activo": true
    },
    {
        "id": 3,
        "titulo": "Simoca",
        "linea": "Tradio o El Simoqueño",
        "nodos": [],
        "costo": "$395 ida/ ida y vuelta: $700.",
        "parada": " Plataforma Nº 57 a Nº 58 de Terminal de Ómnibus.",
        "indicaciones": "La vuelta es desde El Portezuelo",
        "horarios": [
            {
                dias: "Lunes a viernes",
                ida: [
                    "05:00",
                    "06:00",
                    "07:00",
                    "08:00",
                    "09:00",
                    "10:00",
                    "11:00",
                    "12:00",
                    "12:40",
                    "13:15",
                    "14:00",
                    "14:30",
                    "15:30",
                    "16:30",
                    "17:30",
                    "18:30",
                    "19:00",
                    "20:00",
                    "21:00",
                    "22:00",
                    "23:00"
                ],
                vuelta: [
                    "04:55",
                    "5:45",
                    "06:00",
                    "06:30",
                    "06:50",
                    "07:10",
                    "8:00",
                    "09:00",
                    "10:00",
                    "11:30",
                    "12:15",
                    "12:30",
                    "13:30",
                    "14:30",
                    "15:00",
                    "16:00",
                    "16:30",
                    "17:30",
                    "18:15",
                    "18:40",
                    "20:00",
                    "20:40"
                ]
            },
            {
                dias: "Sábados",
                ida: [
                    "06:00",
                    "07:00",
                    "08:00",
                    "09:00",
                    "10:00",
                    "11:00",
                    "12:40",
                    "12:40",
                    "14:30",
                    "15:30",
                    "16:30",
                    "17:30",
                    "18:10",
                    "18:30",
                    "20:00",
                    "21:00",
                    "22:00"
                ],
                vuelta: [
                    "06:00",
                    "6:50",
                    "07:20",
                    "08:00",
                    "08:30",
                    "9:00",
                    "10:00",
                    "11:30",
                    "12:30",
                    "14:30",
                    "16:00",
                    "16:30",
                    "17:30",
                    "18:30",
                    "20:00",
                    "21:00"
                ]
            },
            {
                dias: "Domingos y feriados",
                ida: [
                    "6:30",
                    "8:00",
                    "09:00",
                    "10:00",
                    "11:00",
                    "12:30",
                    "14:00",
                    "15:30",
                    "16:30",
                    "17:30",
                    "18:30",
                    "20:00",
                    "21:00",
                    "22:00"
                ],
                vuelta: [
                    "6:45",
                    "08:00",
                    "09:00",
                    "10:00",
                    "11:00",
                    "12:30",
                    "14:30",
                    "16:30",
                    "17:30",
                    "18:30",
                    "20:00",
                    "20:30"
                ]
            }

        ],
        "icono": "sanjavier-1-1.jpg",
        "visible": true,
        "activo": true
    }
];

export default Destinos;