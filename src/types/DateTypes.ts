type DigitString = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

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

export type YYYYType = `${DigitString}${DigitString}${DigitString}${DigitString}`

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

export type SSSType = `${DigitString}${DigitString}${DigitString}`

type MmDdFormatType<M extends string, D extends string> = `${M}-${D}`

export type MmDdType =
  MmDdFormatType<
    '01' | '03' | '05' | '07' | '08'| '10' | '12',
    DDVer31FormatType
  > |
  MmDdFormatType<
    '02' | '04' | '06' | '09' | '11',
    DDVer30FormatType
  >

type DateFormatType<Y extends string> = `${Y}-${MmDdType}`

export type DateType = DateFormatType<`${DigitString}${DigitString}${DigitString}${DigitString}`>

type TimeFormatType<S extends string> = `${HHType}:${HHType}:${S}`;

export type TimeType = TimeFormatType<`${DigitString}${DigitString}${DigitString}`>

type DateAndTimeFormatType<
    D extends string,
    T extends string
  > = `${D}T${T}Z`;

