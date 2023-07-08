import { HistoryListYearItem } from '@/components/molecules/HistoryListYearItem'

type DataType = Array<Omit<React.ComponentProps<typeof HistoryListYearItem>, 'yearPos'>>

const HISTORY_DATA: DataType =[
  {
    year: 1996,
    monthlyDate: [
      {
        month: 9,
        content: <>
          誕生日
        </>
      }
    ]
  },
  {
    year: 2015,
    monthlyDate: [
      {
        month: 4,
        content: <>
          中央大学 経済学部経済学科 入学
        </>
      },
    ]
  },
  {
    year: 2019,
    monthlyDate: [
      {
        month: 3,
        content: <>
          中央大学 経済学部経済学科 卒業
        </>
      },
      {
        month: 4,
        content: <>
          富士ソフト株式会社 システム事業本部モビリティ事業部 車載システム開発部<br />
          開発エンジニアとして就職
        </>
      }
    ]
  },
  {
    year: 2020,
    monthlyDate: [
      {
        month: 9,
        content: <>
          株式会社モードツー コミニュケーションデザイン部<br />
          フロントエンドエンジニアに転職
        </>
      }
    ]
  },
  {
    year: 2022,
    monthlyDate: [
      {
        month: 9,
        content: <>
          フリーランスに転向<br />
          フロントエンドエンジニアとして活動を開始
        </>
      }
    ]
  },
  {
    year: 'now',
    monthlyDate: [
      {
        month: 9,
        content: <>
          フリーランスに転向<br />
          フロントエンドエンジニアとして活動を開始
        </>
      }
    ]
  },
]

export default HISTORY_DATA
