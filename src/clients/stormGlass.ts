import { AxiosStatic } from 'axios';

export class StormGlass {
    readonly stormGlassAPIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
    readonly stormGlassAPISource = 'noaaa';

    constructor(protected request: AxiosStatic) {}
    
    public async fetchPoints(lat: number, lng: number): Promise<{}> {
        return this.request.get(`https://api.stormglass.io/v2/weather/point?params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}end=1592113802&lat=${lat}&lng=${lng}`)
            }
}
