import { HistoryList } from '@/components/organisms/HistoryList'

import type { Translator } from '@/i18n/translate'


type DataType = React.ComponentProps<typeof HistoryList>['data']

export const getHistoryData = (t: Translator): DataType => ([
  {
    year: 1996,
    monthlyDate: [
      {
        month: 9,
        content: <>{t("誕生日")}</>
      }
    ]
  },
  {
    year: 2015,
    monthlyDate: [
      {
        month: 4,
        content: <>{t("中央大学 経済学部経済学科 入学")}</>
      },
    ]
  },
  {
    year: 2019,
    monthlyDate: [
      {
        month: 3,
        content: <>{t("中央大学 経済学部経済学科 卒業")}</>
      },
      {
        month: 4,
        content: <>{t("富士ソフト株式会社 システム事業本部モビリティ事業部 車載システム開発部 就職。")}<br />{t("開発エンジニアとして配属。")}</>
      }
    ]
  },
  {
    year: 2020,
    monthlyDate: [
      {
        month: 9,
        content: <>{t("株式会社モードツーへ転職。")}<br />{t("大規模Webサイトの保守運用案件にフロントエンドエンジニアとして参画（2020年9月〜2022年9月）。")}<br />{t("年間400件以上の開発・改修案件に対応し、実装可否判断、見積もり、詳細設計、実装、リリースを担当。")}</>
      }
    ]
  },
  {
    year: 2021,
    monthlyDate: [
      {
        content: <>{t("株式会社モードツーでチームサブリーダーを担当。")}<br />{t("タスク振り分け、進捗確認、コードレビュー、メンバーサポートを通じて開発チームの運営を支援。")}</>
      }
    ]
  },
  {
    year: 2022,
    monthlyDate: [
      {
        month: 8,
        content: <>{t("副業でフリーランス活動を開始。")}<br /><br />{t("ワインECサイト「Vinarte」制作（2022年8月〜2023年1月）。")}</>
      },
      {
        month: 9,
        content: <>{t("株式会社モードツー 退社。")}<br /><br />{t("フリーランスとしてWebサービス・業務システム開発を開始。")}<br /><br />{t("資産運用サービス フロントエンド開発支援（2022年9月〜2022年12月）。")}</>
      },
    ]
  },
  {
    year: 2023,
    monthlyDate: [
      {
        month: 1,
        content: <>{t("保険業界向けWebサービスのフロントエンド開発案件に参画（2023年1月〜9月）。")}<br />{t("jQuery + Express ベースの既存サイトを Next.js + TypeScript へリニューアルし、 Storybook 環境再整備、Jest 対応、リファクタリング、コードレビューを担当。")}</>
      },
      {
        month: 10,
        content: <>{t("動物病院向けカルテ管理iPadアプリのWebアプリ化プロジェクトに参画（2023年10月〜12月）。")}<br />{t("React + TypeScript / Chakra UI / React Hook Form を用いた画面実装、フォーム実装、ユニットテストを担当。")}</>
      }
    ]
  },
  {
    year: 2024,
    monthlyDate: [
      {
        month: 1,
        content: <>{t("HRテック系新規Webサービス開発プロジェクトに参画（2024年1月〜2025年3月）。")}<br />{t("Storybook Interaction Test による全25画面の自動テストと、Chromatic によるUI回帰テストを整備。")}<br />{t("React / TypeScript / GraphQL を用いた画面開発、IAM / RBAC の設計・実装、 Playwright によるE2Eテストの実装・保守を担当。")}</>
      }
    ]
  },
  {
    year: 2025,
    monthlyDate: [
      {
        content: <>{t("HRテック系サービスのコンポーネント移設・リファクタリングを担当。")}<br />{t("35ディレクトリ・78ファイル規模のコンポーネント群を別サービスへ展開。 Props設計を整理し、UIロジックとドメインロジックの責務を分離して再利用性・保守性を向上。")}</>
      },
      {
        month: 4,
        content: <>{t("クレーン作業安全支援システムのクラウドアプリケーション開発支援に参画（2025年4月〜6月）。")}<br />{t("React + TypeScript / AWS Amplify 環境での保守開発、不具合修正、Jest 対応、型定義改善を担当。")}</>
      },
      {
        month: 6,
        content: <>{t("デジタルツインプラットフォーム開発案件に参画（2025年6月〜2026年6月）。")}<br />{t("地方自治体向けの橋梁工事管理プラットフォームにて、Vue 3 / NestJS / GraphQL を用いた フルスタック開発と、管理コンソールのIAM / RBAC の詳細設計・実装を担当。")}<br />{t("ViewWinBox による複数機能を1画面で操作できるUIへの再設計、Design Doc による設計方針の整理、 Codex / Claude を活用したコード調査・実装・リファクタリング・コードレビューを実施。")}</>
      },
    ]
  },
  {
    year: 2026,
    monthlyDate: [
      {
        month: 10,
        content: <>{t("大規模イベント向け駐車場予約・管理システムの開発に参画（2026年10月〜現在）。")}<br />{t("ロール・権限管理、車両検査枠管理、予約管理・共通画面の基本設計・詳細設計と、IT工程の試験設計を担当。")}<br />{t("Claude による設計書レビューの観点・ルールを CLAUDE.md / AGENTS.md に明文化し、 人によるレビュー前に潜在的な不具合や命名上の問題を確認する運用を整備。 React による既存フロントエンド機能の改修も担当。")}</>
      }
    ]
  },
  {
    year: 'now',
    monthlyDate: [
      {
        content: <>{t("大規模イベント向け駐車場予約・管理システムの開発にWebエンジニアとして参画中。")}<br />{t("フリーランスのWebエンジニアとして、要件整理・設計・実装・テスト・運用改善まで一貫して対応。")}<br />{t("React / Next.js / TypeScript を主軸に、Vue 3 / NestJS / GraphQL によるフルスタック開発、 認証・認可設計、テスト自動化、AIを活用した開発・品質改善に取り組んでいます。")}<br />{t("AWS Certified Solutions Architect - Associate（SAA-C03）の取得に向けて学習中。")}<br />{t("経歴情報：2026年10月6日時点。")}</>
      }
    ]
  },
])

const HISTORY_DATA = getHistoryData(text => text)

export default HISTORY_DATA
