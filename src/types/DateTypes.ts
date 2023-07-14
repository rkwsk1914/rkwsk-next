type DDVer31FormatType =
  '01' |
  '02' |
  '03' |
  '04' |
  '05' |
  '06' |
  '07' |
  '08' |
  '09' |
  '10' |
  '11' |
  '12' |
  '13' |
  '14' |
  '15' |
  '16' |
  '17' |
  '18' |
  '19' |
  '20' |
  '21' |
  '22' |
  '23' |
  '24' |
  '25' |
  '26' |
  '27' |
  '28' |
  '29' |
  '30' |
  '31'

type DDVer30FormatType =
  '01' |
  '02' |
  '03' |
  '04' |
  '05' |
  '06' |
  '07' |
  '08' |
  '09' |
  '10' |
  '11' |
  '12' |
  '13' |
  '14' |
  '15' |
  '16' |
  '17' |
  '18' |
  '19' |
  '20' |
  '21' |
  '22' |
  '23' |
  '24' |
  '25' |
  '26' |
  '27' |
  '28' |
  '29' |
  '30'

type TimeFormatType<H extends string, M extends string, S extends number> = `${H}:${M}:${S}`;

type DateFormatType<M extends string, D extends string> = `${M}-${D}`

export type YYYYType = number  & { length: 4 }

export type MonthMMType =
  '01' |
  '02' |
  '03' |
  '04' |
  '05' |
  '06' |
  '07' |
  '08' |
  '09' |
  '10' |
  '11' |
  '12'

export type DDType = DDVer31FormatType

export type HHType =
  '01' |
  '02' |
  '03' |
  '04' |
  '05' |
  '06' |
  '07' |
  '08' |
  '09' |
  '10' |
  '11' |
  '12' |
  '13' |
  '14' |
  '15' |
  '16' |
  '17' |
  '18' |
  '19' |
  '20' |
  '21' |
  '22' |
  '23' |
  '24' |
  '25' |
  '26' |
  '27' |
  '28' |
  '29' |
  '30' |
  '31' |
  '32' |
  '33' |
  '34' |
  '35' |
  '36' |
  '37' |
  '38' |
  '39' |
  '40' |
  '41' |
  '42' |
  '43' |
  '44' |
  '45' |
  '46' |
  '47' |
  '48' |
  '49' |
  '50' |
  '51' |
  '52' |
  '53' |
  '54' |
  '55' |
  '56' |
  '57' |
  '58' |
  '59'

export type MinuitMMType = HHType

export type SSSType = number  & { length: 3 }

export type DateType =
  DateFormatType<
    '01' | '03' | '05' | '07' | '08'| '10' | '12',
    DDVer31FormatType
  > |
  DateFormatType<
    '02' | '04' | '06' | '09' | '11',
    DDVer30FormatType
  >

export type TimeType = TimeFormatType<HHType, MinuitMMType, SSSType>

type DateAndTimeFormatType<
    H extends string,
    MM extends string,
    S extends number
  > = `${YYYYType}-${DateType}T${H}:${MM}:${S}Z`;

export type DateAndTimeType =
  DateAndTimeFormatType<
    HHType,
    HHType,
    SSSType
  >
