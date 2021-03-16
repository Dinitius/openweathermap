interface Icard {
    base: string,
    clouds: object,
    cod: number,
    coord: {
        lon: number,
        lat: number
    },
    dt: number,
    id: number,
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number
    },
    name: string,
    sys: {
        country: string,
        id: number,
        sunrise: number,
        sunset: number,
        type: number
    },
    timezone: number,
    visibility: number,
    weather: [
        {
            description: string,
            icon: string,
            id: number,
            main: string
        }
    ],
    wind: {
        deg: number,
        speed: number
    }
}

export interface IInfo {
    current: {
        clouds: number,
        dew_points: number,
        dt: number,
        feels_like: number,
        humidity: number,
        pressure: number,
        snow: object,
        sunrise: number,
        sunset: number,
        temp: number,
        uvi: number,
        visibility: number,
        weather: [
            {
                id: number,
                main: string,
                description: string,
                icon: string
            }
        ]
        wind_deg: number,
        wind_speed: number
    },
    daily: [
        i: {
            clouds: number,
            dew_point: number,
            dt: number,
            feels_like: object,
            humidity: number,
            pop: number,
            pressure: number,
            rain: number,
            snow: number,
            sunrise: number,
            sunset: number
        },
        temp: object,
        uvi: number,
        wheater: [
            {
                description: string,
                icon: string,
                id: number,
                main: string
            }
        ],
        wind_deg: number,
        wind_speed: number
    ],
    name: string
}

export default Icard
