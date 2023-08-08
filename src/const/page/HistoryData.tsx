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
          富士ソフト株式会社 システム事業本部モビリティ事業部 車載システム開発部 就職。<br />
          開発エンジニアとして配属。
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
          株式会社モードツー コミニュケーションデザイン部 転職。<br />
          フロントエンドエンジニアとして配属。
        </>
      }
    ]
  },
  {
    year: 2022,
    monthlyDate: [
      {
        month: 8,
        content: <>
          副業でフリーランス活動を開始。<br /><br />
          shopifyによるECサイト開発プロジェクトに参画。<br />開発環境の構築・技術コンサル・フロントエンド開発を担当。
        </>
      },
      {
        month: 9,
        content: <>
          web制作会社を退職。フリーランス・フロントエンドエンジニアとして活動を開始。<br /><br />
          React+TypeScriptによる資産運用サービスのwebアプリケーション開発にフロントエンドエンジニアとして参画。
        </>
      },
    ]
  },
  {
    year: 2023,
    monthlyDate: [
      {
        month: 1,
        content: <>
          保険広告会社のjQuery+Express サイトからNext.js+TypeScript サイトへのリファクタリングプロジェクトに参画。
        </>
      }
    ]
  },
  {
    year: 'now',
    monthlyDate: [
      {
        content: <>
          保険広告会社のNext.js+TypeScript サイトのスクラム開発プロジェクトに参画中。
        </>
      }
    ]
  },
]

export default HISTORY_DATA
