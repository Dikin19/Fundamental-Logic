## Context
### `airportByCountry.json`
An array of commercial airports with valid IATA codes, grouped by country.

### `airportByICAOCode.json`
A dictionary of airports (both commercial and non-commercial) indexed by ICAO code. Some airports may not have IATA codes.


## Tasks
### #1: Transform `airportByICAOCode.json` into Array
Convert the dictionary into an array of airport objects.

### #2: Group `airportByICAOCode.json` by Timezone
Group all airports from the dictionary by their timezone (`tz`).

### #3: Merge Commercial Airports Data
Combine data from both sources to create a comprehensive list of commercial airports with the following attributes:
```ts
type Airport = {
  iata_code: string, // e.g. "CGK"
  active: boolean,
  name: string,
  city: string,
  state: string,
  country: string,
  elevation: number,
  latitude: number,
  longitude: number,
  tz: string, // e.g. "Asia/Jakarta"
  tz_offset: number, // e.g. 7.0 for "Asia/Jakarta" (GMT+7)
}
```
