// Summaries of the existing skill-sheet content; the full source stays in ProjectData.
export type ProjectSummary = { context: string; role: string; impact: string }

export const PROJECT_SUMMARIES: Record<string, ProjectSummary> = {
  "parking-reservation": {
    "context": "大規模イベント向けの駐車場予約・管理システム。ロール・権限、車両検査枠、予約管理の画面設計を担当。",
    "role": "基本設計・詳細設計、結合試験の観点作成、既存React機能の調査・改修。",
    "impact": "CLAUDE.md・AGENTS.mdにレビュー観点を明文化。人のレビュー前にAIで確認する運用を整え、判断基準の共有と不具合の事前検出につなげた。"
  },
  "digital-twin": {
    "context": "自治体ごとに異なる橋梁工事の管理フォーマットを統一するプラットフォーム。既存機能は複数のページに分かれていた。",
    "role": "Vue 3による画面開発、NestJS・GraphQLによるAPI開発、IAMの詳細設計・実装、画面構成の再設計。",
    "impact": "ページを行き来する構成から、複数の機能を同一画面で操作できる構成へ変更。既存機能との互換性を考慮し、コンポーネント・状態管理の方針をDesign Docに整理した。"
  },
  "crane-safety": {
    "context": "AIカメラを活用したクレーン作業安全支援システムのクラウドアプリケーション。少人数体制で保守・品質改善を担当。",
    "role": "React・TypeScriptによる改修、AWS Amplify環境での保守、ログ解析から再現確認・修正・Jestによるテストまで対応。",
    "impact": "不具合の調査から修正・テストまで一貫して対応。any型の解消や既存コードの整理にも取り組み、保守性を改善した。"
  },
  "hr-tech": {
    "context": "HRテック系新規Webサービスで、労務管理画面のテスト整備と新機能開発を担当。",
    "role": "React・TypeScriptでの画面設計・実装、IAM・RBACの設計・実装、GraphQL連携、UI・E2Eテストの整備。",
    "impact": "全25画面にStorybook Interaction Testを実装し、ChromaticによるUI回帰テストを運用。PlaywrightのE2Eテストとコンポーネントの整理も進めた。"
  },
  "veterinary-records": {
    "context": "獣医療の電子カルテを、既存のiPadアプリからWebアプリへ展開するプロジェクト。",
    "role": "React・TypeScript・Chakra UIによる画面開発、React Hook Formによるフォーム実装、ユニットテスト。",
    "impact": "既存アプリの仕様を踏まえ、ブラウザ向けにUIを実装。フォームやレイアウトを調整し、Web上での操作性を改善した。"
  },
  "insurance-web": {
    "context": "jQuery・Expressを利用していた保険関連サイトを、Next.js・React・TypeScriptへ移行するプロジェクト。",
    "role": "保険比較画面やフォームの実装、Storybookの再構築、コンポーネント整備、テスト・レビュー。",
    "impact": "更新が止まっていたStorybookを再構築し、約50コンポーネントを管理できる状態に整備。比較画面の操作とフォームのエラー表示を見直した。"
  },
  "asset-management": {
    "context": "資産運用サービスのフロントエンド開発・保守。",
    "role": "React・Next.js・Gatsbyでの画面実装、Jestのテスト環境整備、デザイナーと連携したUI開発。",
    "impact": "テスト環境とテストコードを整備。既存コードのリファクタリングとレビューを通じて保守性の改善に取り組んだ。"
  },
  "vinarte": {
    "context": "ワインECサイト「Vinarte」の新規構築。2022年8月に、初めてのShopify実務案件として参画。",
    "role": "エンジニア1名の体制で、仕様調査・Theme Kitの環境構築からLiquid・SCSS・JavaScriptによるカスタマイズまで担当。",
    "impact": "独自デザインに合わせて全ページを実装し、アコーディオンや条件に応じた表示をカスタマイズ。調査から実装まで担い、サイト公開に貢献した。"
  },
  "website-maintenance": {
    "context": "年間400件以上の開発・更新依頼がある大規模Webサイトの保守運用。",
    "role": "実現性確認・見積もり・詳細設計・実装・公開に対応。2021年からサブリーダーとしてタスク配分、進捗管理、レビューも担当。",
    "impact": "画面改修や料金シミュレーター開発、障害調査・再発防止に対応。コードの整理とメンバー支援を通じて、継続的な保守運用を支えた。"
  }
}

export const SELECTED_PROJECTS = [
  {
    "slug": "parking-reservation",
    "area": "AI-assisted Review",
    "title": "AIと人のレビュー基準をそろえる",
    "description": "CLAUDE.md・AGENTS.mdに設計レビューの観点を明文化し、人のレビュー前にAIで確認する運用を整備。"
  },
  {
    "slug": "digital-twin",
    "area": "Full Stack Development",
    "title": "画面からAPI・権限設計まで",
    "description": "Vue 3・NestJS・GraphQLで開発。IAMの設計・実装に加え、複数機能を同一画面で操作できる構成へ再設計。"
  },
  {
    "slug": "hr-tech",
    "area": "Test Automation",
    "title": "全25画面の自動テストを整備",
    "description": "Storybook Interaction TestとChromaticで画面の動作・見た目を検証。PlaywrightによるE2Eテストも実装・保守。"
  }
]

export const PHILOSOPHY_EXAMPLES = {
  "ai": {
    "slug": "parking-reservation",
    "body": "駐車場予約・管理システムでは、Claudeによる設計書レビューの観点をCLAUDE.md・AGENTS.mdに明文化しました。人のレビュー前にAIで確認する運用を整え、人が動作確認に注力できるようにしました。"
  },
  "essence": {
    "slug": "digital-twin",
    "body": "デジタルツインの案件では、既存機能との互換性を考慮しながら、ページを行き来する構成を見直しました。複数機能を同一画面で操作できる構成へ変更し、コンポーネントや状態管理の方針をDesign Docに整理しました。"
  },
  "change": {
    "slug": "vinarte",
    "body": "Vinarteは、2022年8月に初めて実務でShopifyを扱った案件です。仕様の調査や開発環境の構築から始め、Liquid・SCSS・JavaScriptによる独自デザインと機能の実装まで担当しました。"
  }
}
