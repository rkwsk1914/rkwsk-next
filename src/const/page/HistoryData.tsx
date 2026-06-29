import { HistoryList } from '@/components/organisms/HistoryList'

type DataType = React.ComponentProps<typeof HistoryList>['data']

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
          株式会社モードツーへ転職。<br />
          大規模Webサイトの保守運用案件にフロントエンドエンジニアとして参画。
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
          副業でフリーランス活動を開始。
        </>
      },
      {
        month: 9,
        content: <>
          株式会社モードツー 退社。<br /><br />
          資産運用サービス フロントエンド開発支援（2022年9月〜2022年12月）。<br /><br />
          ワインECサイト「Vinarte」制作（2022年9月〜2023年1月）。
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
          保険業界向けWebサービスのフロントエンド開発案件に参画。<br />
          jQuery + Express ベースの既存サイトを Next.js + TypeScript へリニューアルし、
          Storybook 環境再整備、Jest 対応、リファクタリング、コードレビューを担当。
        </>
      },
      {
        month: 10,
        content: <>
          動物病院向けカルテ管理iPadアプリのWebアプリ化プロジェクトに参画。<br />
          React + TypeScript / Chakra UI / React Hook Form を用いた画面実装、フォーム実装、ユニットテストを担当。
        </>
      }
    ]
  },
  {
    year: 2024,
    monthlyDate: [
      {
        month: 1,
        content: <>
          HRテック系新規Webサービス開発プロジェクトに参画。<br />
          Storybook Interaction Test / Chromatic による画面テスト整備、
          React / TypeScript / GraphQL を用いた画面設計・実装、Playwright によるE2Eテスト整備を担当。
        </>
      }
    ]
  },
  {
    year: 2025,
    monthlyDate: [
      {
        month: 4,
        content: <>
          クレーン作業安全支援システムのクラウドアプリケーション開発支援に参画。<br />
          React + TypeScript / AWS Amplify 環境での保守開発、不具合修正、Jest 対応、型定義改善を担当。
        </>
      },
      {
        month: 6,
        content: <>
          デジタルツインプラットフォーム開発案件に参画。<br />
          地方自治体向けの橋梁工事管理プラットフォームにて、Vue 3 / NestJS / GraphQL を用いた
          フロントエンド・バックエンド開発、障害調査、テスト実装、コードレビューを担当。
        </>
      },
    ]
  },
  {
    year: 'now',
    monthlyDate: [
      {
        content: <>
          デジタルツインプラットフォーム開発案件にWebエンジニアとして参画中。<br />
          TypeScript / Vue 3 / NestJS / GraphQL を用いたフルスタック開発と、
          既存機能改善・自動テスト整備・保守性改善に取り組んでいます。
        </>
      }
    ]
  },
]

export default HISTORY_DATA
