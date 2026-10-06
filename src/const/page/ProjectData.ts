export type Project = {
  slug: string
  title: string
  shortTitle: string
  period: string
  sections: { title: string; paragraphs: string[] }[]
  historyEntries: { year: number | 'now'; month?: number }[]
}

// Project content transcribed verbatim from the skill sheet dated 2026-09-24.
// Only document layout (table cells, headings, and line breaks) is adapted for the web.
// Parking reservation participation is ongoing, confirmed by the user on 2026-10-06.
// Vinarte's start month is corrected to August 2022 at the user's request.
// Source: https://docs.google.com/document/d/19QrgtQiJKiHKL1X2cozvjQbonkwYdPdbTdZfwnO71u8/edit
// Projects are ordered from newest to oldest for detail-page navigation.
export const PROJECTS: Project[] = [
  {
    "slug": "parking-reservation",
    "title": "大規模イベント向け駐車場予約・管理システム",
    "shortTitle": "駐車場予約・管理システム",
    "period": "2026年8月～現在",
    "sections": [
      {
        "title": "プロジェクト内容",
        "paragraphs": [
          "大規模イベント向け駐車場予約・管理システムの開発"
        ]
      },
      {
        "title": "チーム",
        "paragraphs": [
          "全：5名",
          "PL 1名",
          "エンジニア4名"
        ]
      },
      {
        "title": "担当業務",
        "paragraphs": [
          "ウォーターフォール開発における基本設計・詳細設計を担当。",
          "主に以下の業務に従事。",
          "・ロール・権限管理機能の画面設計",
          "・車両検査枠管理機能の画面設計",
          "・予約管理機能および共通画面の画面設計",
          "・IT工程に向けた試験観点・試験設計の作成",
          "・既存Reactソースの調査・改修",
          "・AIを活用した設計書レビュー環境・レビュー観点の整備"
        ]
      },
      {
        "title": "役割",
        "paragraphs": [
          "Webエンジニア"
        ]
      },
      {
        "title": "成果・実績",
        "paragraphs": [
          "・ロール登録・編集・一覧・CSV登録・駐車場割当・承認依頼送付先設定など、ロール／権限管理機能の画面設計書を作成",
          "・車両検査枠設定・割当・割当状況・空き状況など、車両検査枠管理機能の画面設計書を作成",
          "・予約一覧・登録・編集・状況画面、およびトップページ・ヘッダー・実績一覧などの画面設計書を作成",
          "・予約管理機能のIT工程における試験観点を作成",
          "・Claudeを用いた基本設計・詳細設計レビューの観点・ルールをCLAUDE.md・AGENTS.mdへ明文化し、人によるレビュー前にAIで事前確認する運用を整備。潜在的な不具合の検出やスペル・命名上の問題の指摘に活用し、レビュー基準を統一するとともに、人が動作確認に注力できるようにした",
          "・Reactによる既存フロントエンド機能の改修"
        ]
      },
      {
        "title": "使用言語",
        "paragraphs": [
          "JavaScript、C#、SQL"
        ]
      },
      {
        "title": "フロントエンド",
        "paragraphs": [
          "React 16.4、React Router、React Bootstrap、Axios、jQuery、Backbone.js、webpack、Babel、Less"
        ]
      },
      {
        "title": "バックエンド",
        "paragraphs": [
          "ASP.NET Core 2.0、.NET Framework 4.7.2／4.8、Dapper、SignalR、Swagger"
        ]
      },
      {
        "title": "DB",
        "paragraphs": [
          "Microsoft SQL Server",
          "Azure SQL Database"
        ]
      },
      {
        "title": "インフラ・開発環境",
        "paragraphs": [
          "Azure Blob Storage、IIS、SVN、Swagger、Twilio、SendGrid、Claude"
        ]
      }
    ],
    "historyEntries": [
      {
        "year": 2026,
        "month": 8
      },
      {
        "year": "now"
      }
    ]
  },
  {
    "slug": "digital-twin",
    "title": "地方自治体向けデジタルツインプラットフォーム",
    "shortTitle": "デジタルツインプラットフォーム",
    "period": "2025年6月～2026年6月",
    "sections": [
      {
        "title": "プロジェクト内容",
        "paragraphs": [
          "【TypeScript/Vue.js/NestJS】デジタルツインプラットフォーム開発案件"
        ]
      },
      {
        "title": "チーム",
        "paragraphs": [
          "全：9名",
          "PL 2名",
          "エンジニア 6名",
          "デザイナー1名"
        ]
      },
      {
        "title": "担当業務",
        "paragraphs": [
          "地方自治体向けの橋梁工事管理プラットフォーム開発案件。",
          "自治体ごとに異なる管理フォーマットを統一するサービスにおいて、TypeScript / Vue3 / NestJS / GraphQLを用いたフロントエンドおよびバックエンド開発を担当。",
          "≪担当業務≫",
          "・既存機能がページ単位で分かれていた画面構成の分析",
          "・ViewWinBoxを用いたデスクトップライクなSPAへの再設計",
          "・画面統合、ウィンドウUI、コンポーネント構成、状態管理方針の整理",
          "・コンポーネント設計、ライブラリ選定、Design Doc作成",
          "・管理コンソール向けIAM（認証・認可）機能の詳細設計・実装",
          "・ロール・権限管理、認可制御を含む管理者向けユーザー・権限管理機能の開発",
          "・Vue3 + Vuetifyを用いたフロントエンド開発",
          "・NestJS / GraphQLを用いたAPI開発および保守",
          "・障害調査、原因分析、改修、テスト実施",
          "・自動テスト整備、リファクタリング、コードレビュー",
          "≪習得スキル≫",
          "・Codex / Claudeをコード調査・実装・リファクタリングの各工程に活用するAIペアプログラミング",
          "・AIコードレビューによる実装内容の確認と、レビュー結果を踏まえたコード改善",
          "・ViewWinBoxを用いたデスクトップライクUIへのリアーキテクチャ",
          "・既存機能との互換性を考慮したフロントエンドアーキテクチャ設計",
          "・コンポーネント設計、ライブラリ選定、Design Docによる実装方針策定",
          "・IAM / RBAC / 権限管理機能の設計・実装",
          "・Vue3 / NestJS / GraphQLを用いたフルスタック開発",
          "・障害調査から恒久対応までの一貫対応"
        ]
      },
      {
        "title": "役割",
        "paragraphs": [
          "Webエンジニア"
        ]
      },
      {
        "title": "成果・実績",
        "paragraphs": [
          "ページ単位に分かれていた既存機能を分析し、ViewWinBoxを用いて複数機能を1画面に集約するデスクトップライクUIを設計・実装。機能ごとにページを切り替えていた構成を見直し、複数の操作を同一画面内で行えるようにすることで、画面を行き来する手間を軽減した。既存機能との互換性を考慮し、ウィンドウUI・コンポーネント構成・状態管理方針を整理。Design Docに設計・実装方針を明文化し、機能追加・保守時に参照できる設計基準を整備した。",
          "管理コンソール向けIAM機能では、ロール・権限管理、認可制御の詳細設計から実装まで担当し、管理者向けユーザー・権限管理機能の開発に貢献。",
          "GraphQL / NestJSによるAPI開発から障害調査・改修・テストまで対応。Codex / Claudeをコード調査・実装・リファクタリングに組み込み、AIコードレビューによる実装品質の確認・改善にも活用した。"
        ]
      },
      {
        "title": "使用言語",
        "paragraphs": [
          "TypeScript"
        ]
      },
      {
        "title": "フロントエンド",
        "paragraphs": [
          "Vue 3、Vuetify、GraphQL"
        ]
      },
      {
        "title": "バックエンド",
        "paragraphs": [
          "NestJS、GraphQL"
        ]
      },
      {
        "title": "DB",
        "paragraphs": [
          "PostgreSQL"
        ]
      },
      {
        "title": "インフラ・開発環境",
        "paragraphs": [
          "Docker、Linux"
        ]
      },
      {
        "title": "ツール",
        "paragraphs": [
          "GitHub、Figma、Jira、Notion、Claude、Codex、ChatGPT、Gemini"
        ]
      }
    ],
    "historyEntries": [
      {
        "year": 2025,
        "month": 6
      }
    ]
  },
  {
    "slug": "crane-safety",
    "title": "クレーン作業安全支援システム",
    "shortTitle": "クレーン作業安全支援システム",
    "period": "2025年4月～2025年6月",
    "sections": [
      {
        "title": "プロジェクト内容",
        "paragraphs": [
          "クレーン作業安全支援システム クラウドアプリケーション（Webベース）"
        ]
      },
      {
        "title": "チーム",
        "paragraphs": [
          "全：3名",
          "PL 1名",
          "エンジニア2名"
        ]
      },
      {
        "title": "担当業務",
        "paragraphs": [
          "クレーン作業安全支援システムにおけるクラウドアプリケーション開発支援。",
          "・React + TypeScript を用いたフロントエンド開発",
          "・AWS Amplify 環境での保守開発",
          "・既存機能の改修および不具合修正",
          "・障害発生時のログ解析、原因調査、再現確認",
          "・不具合修正およびテスト実施",
          "・Jest を用いたテスト対応",
          "・既存コードのリファクタリング",
          "・TypeScript の型定義改善（any型の解消等）",
          "・コードレビュー対応"
        ]
      },
      {
        "title": "役割",
        "paragraphs": [
          "Webエンジニア"
        ]
      },
      {
        "title": "成果・実績",
        "paragraphs": [
          "AIカメラを活用したクレーン作業安全支援システムの保守開発に従事。",
          "既存機能の改修や不具合修正に加え、障害発生時にはログ解析、原因調査、再現確認、修正、テストまで一貫して担当し、システムの安定運用に貢献。",
          "また、TypeScript の型定義改善や既存コードの整理を実施し、保守性およびコード品質向上に取り組んだ。",
          "少人数体制のプロジェクトにおいて、キャッチアップを行いながら保守開発を推進し、継続的な品質改善を支援した。"
        ]
      },
      {
        "title": "使用言語",
        "paragraphs": [
          "JavaScript、TypeScript"
        ]
      },
      {
        "title": "フロントエンド",
        "paragraphs": [
          "React、Jest"
        ]
      },
      {
        "title": "バックエンド",
        "paragraphs": [
          "AWS Lambda"
        ]
      },
      {
        "title": "DB",
        "paragraphs": [
          "Amazon DynamoDB"
        ]
      },
      {
        "title": "インフラ・開発環境",
        "paragraphs": [
          "Windows、AWS、AWS Amplify"
        ]
      }
    ],
    "historyEntries": [
      {
        "year": 2025,
        "month": 4
      }
    ]
  },
  {
    "slug": "hr-tech",
    "title": "HRテック系新規Webサービス",
    "shortTitle": "HRテック系Webサービス",
    "period": "2024年1月～2025年3月",
    "sections": [
      {
        "title": "プロジェクト内容",
        "paragraphs": [
          "HRテック系新規Webサービス開発プロジェクトにおいて、フロントエンド開発および品質改善施策を担当。"
        ]
      },
      {
        "title": "チーム",
        "paragraphs": [
          "全：8名",
          "PdM 1名",
          "エンジニアリーダー1名",
          "デザイナー 1名",
          "スクラムマスター 1名",
          "エンジニア4名"
        ]
      },
      {
        "title": "担当業務",
        "paragraphs": [
          "HRテック系新規Webサービス開発プロジェクトにおけるフロントエンド開発およびE2Eテスト整備。",
          "◆2024年1月～2024年4月",
          "・労務管理サービスの画面テスト整備",
          "・Storybook Interaction Test を活用した自動テスト実装",
          "・Chromatic を利用したUI回帰テスト運用",
          "・テスト観点整理および品質向上対応",
          "◆2024年4月～2025年3月",
          "・スクラム開発メンバーとして新規機能開発に従事",
          "・React / TypeScript を用いた画面設計・実装",
          "・労務管理システムにおけるIAM（認証・認可）機能の設計・実装",
          "・権限管理モデルの設計およびロールベースアクセス制御（RBAC）の実装",
          "・GraphQL を用いたAPI連携実装",
          "・Playwright を用いたE2Eテスト実装・保守",
          "・Atomic Design をベースとしたコンポーネント設計",
          "・コードレビュー",
          "・既存コンポーネント移設およびリファクタリング",
          "・エラーハンドリング改善およびUI品質向上対応"
        ]
      },
      {
        "title": "役割",
        "paragraphs": [
          "フロントエンドエンジニア"
        ]
      },
      {
        "title": "成果・実績",
        "paragraphs": [
          "Storybook Interaction Testを活用した全25画面の自動テスト整備と、ChromaticによるUI回帰テスト運用を担当。画面の動作確認を自動実行し、UIの表示差分を検出する仕組みを整備した。改修後も既存機能の動作とUIの変更箇所を継続的に検証できるようにし、回帰確認を通じて既存機能の品質を担保する環境を構築した。",
          "また、PlaywrightによるE2Eテストの実装・保守を担当。1画面あたり5〜10ケースのテストシナリオを整備し、同じ操作・確認手順を繰り返し実行できる形にすることで、改修後の動作検証を自動化した。",
          "GraphQL を利用した API 連携や Atomic Design をベースとしたコンポーネント設計に加え、労務管理領域におけるIAM（認証・認可）機能、権限管理モデル、RBACの設計・実装を担当し、再利用性・保守性・認可制御を考慮した開発基盤整備を推進。",
          "2025年、既存サービスのモーダルコンポーネント群を別サービスへ展開するため、35ディレクトリ・78ファイル規模の移設およびリファクタリングを担当。",
          "描画コンポーネントを共通化し、Props設計を整理。UIロジックとドメインロジックの責務を分離し、画面描画と業務処理を切り分けた構成へ再整理した。サービス固有の業務処理と共通の描画部分を分けることで、別サービスへの展開時に再利用する部分と調整する部分を明確にし、コンポーネントの再利用性・保守性を高めた。"
        ]
      },
      {
        "title": "使用言語",
        "paragraphs": [
          "JavaScript、TypeScript"
        ]
      },
      {
        "title": "フロントエンド",
        "paragraphs": [
          "・React",
          "・React Hooks",
          "・React Hook Form",
          "・React Router",
          "・Storybook",
          "・Jest",
          "・GraphQL",
          "・Apollo Studio"
        ]
      },
      {
        "title": "インフラ・開発環境",
        "paragraphs": [
          "macOS、GCP"
        ]
      },
      {
        "title": "ツール",
        "paragraphs": [
          "GitHub、Figma、FigJam、Asana、Discord"
        ]
      }
    ],
    "historyEntries": [
      {
        "year": 2024,
        "month": 1
      },
      {
        "year": 2025
      }
    ]
  },
  {
    "slug": "veterinary-records",
    "title": "動物病院向けカルテ管理アプリのWebアプリ化",
    "shortTitle": "動物病院向けカルテ管理アプリ",
    "period": "2023年10月～2023年12月",
    "sections": [
      {
        "title": "プロジェクト内容",
        "paragraphs": [
          "動物病院のカルテ管理iPadアプリのWebアプリ化フロントエンド開発"
        ]
      },
      {
        "title": "チーム",
        "paragraphs": [
          "全：6名",
          "PL 2名",
          "エンジニア4名"
        ]
      },
      {
        "title": "担当業務",
        "paragraphs": [
          "動物病院向けカルテ管理iPadアプリのWebアプリ化プロジェクトにおけるフロントエンド開発。",
          "・React + TypeScript を用いた画面実装",
          "・Chakra UI を用いたUI構築",
          "・React Hook Form を用いたフォーム実装",
          "・ユニットテストケース作成および実施",
          "・既存iPadアプリ仕様を踏まえたWeb向けUI設計・調整",
          "・画面レイアウト調整およびユーザビリティ改善対応",
          "・デザイナーと連携した画面実装"
        ]
      },
      {
        "title": "役割",
        "paragraphs": [
          "フロントエンドエンジニア"
        ]
      },
      {
        "title": "成果・実績",
        "paragraphs": [
          "動物病院向けカルテ管理iPadアプリのWebアプリ化プロジェクトに参画し、フロントエンド開発を担当。",
          "既存iPadアプリの操作性や画面仕様を踏まえながら、Webブラウザ向けのUI最適化およびフォーム実装を実施。",
          "また、ユニットテスト作成や画面レイアウト改善を通じて品質向上に取り組み、短期間での開発およびリリース対応に貢献した。"
        ]
      },
      {
        "title": "使用言語",
        "paragraphs": [
          "JavaScript、TypeScript"
        ]
      },
      {
        "title": "フロントエンド",
        "paragraphs": [
          "React、React Hooks、React Hook Form、Jest、Chakra UI"
        ]
      },
      {
        "title": "インフラ・開発環境",
        "paragraphs": [
          "macOS"
        ]
      },
      {
        "title": "ツール",
        "paragraphs": [
          "GitHub、microCMS、Figma"
        ]
      }
    ],
    "historyEntries": [
      {
        "year": 2023,
        "month": 10
      }
    ]
  },
  {
    "slug": "insurance-web",
    "title": "保険業界向けWebサービスのリニューアル",
    "shortTitle": "保険業界向けWebサービス",
    "period": "2023年1月～2023年9月",
    "sections": [
      {
        "title": "プロジェクト内容",
        "paragraphs": [
          "保険業界向けフロントエンド開発案件",
          "https://konohoken.com"
        ]
      },
      {
        "title": "チーム",
        "paragraphs": [
          "全：8名",
          "ディレクター1名",
          "エンジニア7名（3～4名×2チーム）"
        ]
      },
      {
        "title": "担当業務",
        "paragraphs": [
          "保険業界向けWebサービスにおけるフロントエンド開発および既存システムのモダナイズ対応。",
          "・jQuery + Express による既存サイトの Next.js + TypeScript へのリニューアル対応",
          "・Next.js + React を用いた画面開発",
          "・React Hook Form を用いたフォーム実装",
          "・Storybook 環境の再整備およびコンポーネント管理",
          "・Jest を用いたテスト対応",
          "・UI改善対応",
          "・既存コードのリファクタリング",
          "・コードレビュー",
          "・タスクプランニング",
          "・スクラム開発対応"
        ]
      },
      {
        "title": "役割",
        "paragraphs": [
          "フロントエンドエンジニア"
        ]
      },
      {
        "title": "成果・実績",
        "paragraphs": [
          "既存の jQuery + Express ベースで構築された保険比較サイトの Next.js + TypeScript へのリニューアルプロジェクトに参画。",
          "比較ページを中心とした既存画面のモダナイズ対応を担当し、画面実装に加えて既存コードの整理およびリファクタリングを実施。保守性向上および開発効率改善に貢献した。",
          "また、運用が停滞していた Storybook 環境を最新バージョンへ刷新し、約50コンポーネントの管理基盤を再整備。コンポーネントの可視化・再利用促進・開発効率向上に貢献した。",
          "React Hook Form を利用したフォーム実装では、バリデーション表示タイミングやエラーメッセージ表示位置の調整を行い、ユーザビリティ向上に貢献。",
          "さらに、保険会社比較画面において、横スクロール・折りたたみ・モーダル表示が複雑に組み合わさっていたUIを整理し、操作性向上および視認性改善を実施した。"
        ]
      },
      {
        "title": "使用言語",
        "paragraphs": [
          "JavaScript、TypeScript"
        ]
      },
      {
        "title": "フロントエンド",
        "paragraphs": [
          "・jQuery",
          "・Next.js",
          "・React",
          "・React Hooks",
          "・React Hook Form",
          "・Sass",
          "・Storybook",
          "・Jest"
        ]
      },
      {
        "title": "バックエンド",
        "paragraphs": [
          "Express"
        ]
      },
      {
        "title": "インフラ・開発環境",
        "paragraphs": [
          "macOS、AWS"
        ]
      },
      {
        "title": "ツール",
        "paragraphs": [
          "GitHub、microCMS、Figma"
        ]
      }
    ],
    "historyEntries": [
      {
        "year": 2023,
        "month": 1
      }
    ]
  },
  {
    "slug": "asset-management",
    "title": "資産運用サービスのフロントエンド開発支援",
    "shortTitle": "資産運用サービス",
    "period": "2022年9月～2022年12月",
    "sections": [
      {
        "title": "プロジェクト内容",
        "paragraphs": [
          "資産運用サービスにおけるフロントエンド開発支援。"
        ]
      },
      {
        "title": "チーム",
        "paragraphs": [
          "全：8名",
          "ディレクター1名",
          "デザイナー1名",
          "エンジニア6名"
        ]
      },
      {
        "title": "担当業務",
        "paragraphs": [
          "・React を用いた画面実装",
          "・Next.js / Gatsby 環境でのフロントエンド開発",
          "・追加機能開発および既存機能改修",
          "・Jest を利用したテスト環境整備およびテスト実装",
          "・コードレビュー対応",
          "・既存コードの保守改善およびリファクタリング",
          "・デザイナーと連携したUI実装"
        ]
      },
      {
        "title": "役割",
        "paragraphs": [
          "フロントエンドエンジニア"
        ]
      },
      {
        "title": "成果・実績",
        "paragraphs": [
          "資産運用サービスにおける追加機能開発および保守開発を担当。",
          "React / Next.js / Gatsby を用いた画面開発に加え、Jest を利用したテスト環境整備を実施し、品質向上および開発効率改善に貢献。",
          "また、既存コードの改修やリファクタリングを通じて保守性向上に取り組み、チーム開発におけるレビュー対応にも継続的に参加した。"
        ]
      },
      {
        "title": "使用言語",
        "paragraphs": [
          "JavaScript、TypeScript"
        ]
      },
      {
        "title": "フロントエンド",
        "paragraphs": [
          "React",
          "Next.js",
          "Gatsby",
          "React Hook Form",
          "Jest",
          "SCSS"
        ]
      },
      {
        "title": "インフラ・開発環境",
        "paragraphs": [
          "AWS",
          "GitHub",
          "Figma"
        ]
      }
    ],
    "historyEntries": [
      {
        "year": 2022,
        "month": 9
      }
    ]
  },
  {
    "slug": "vinarte",
    "title": "ワインECサイト「Vinarte」制作",
    "shortTitle": "ワインECサイト「Vinarte」",
    "period": "2022年8月～2023年1月",
    "sections": [
      {
        "title": "プロジェクト内容",
        "paragraphs": [
          "新規顧客からのワインECサイト「Vinarte」の制作。",
          "CMS「Shopify」を用いたECサイトの新規開発。",
          "https://vinarte.jp/"
        ]
      },
      {
        "title": "チーム",
        "paragraphs": [
          "全：3名",
          "ディレクター1名",
          "デザイナー1名",
          "エンジニア1名"
        ]
      },
      {
        "title": "担当業務",
        "paragraphs": [
          "・Shopify 導入に伴う仕様調査",
          "・Shopify Theme Kit を利用した開発環境構築",
          "・Liquid を用いたテンプレート実装",
          "・SCSS / JavaScript による画面実装",
          "・アコーディオン機能の独自実装",
          "・コンテンツ出し分け機能の独自実装",
          "・全ページの独自デザイン実装",
          "・webpack を利用したフロントエンド開発"
        ]
      },
      {
        "title": "役割",
        "paragraphs": [
          "フロントエンドエンジニア"
        ]
      },
      {
        "title": "成果・実績",
        "paragraphs": [
          "未経験領域であった Shopify 案件に参画し、",
          "仕様調査から実装まで一貫して対応。",
          "独自デザイン実装およびカスタマイズ開発を通じて、",
          "ECサイト公開に貢献。"
        ]
      },
      {
        "title": "使用言語",
        "paragraphs": [
          "Liquid、JavaScript"
        ]
      },
      {
        "title": "フロントエンド",
        "paragraphs": [
          "SCSS、CSS、webpack"
        ]
      },
      {
        "title": "インフラ・開発環境",
        "paragraphs": [
          "macOS、Shopify Theme Kit"
        ]
      }
    ],
    "historyEntries": [
      {
        "year": 2022,
        "month": 8
      }
    ]
  },
  {
    "slug": "website-maintenance",
    "title": "大規模Webサイトの保守運用",
    "shortTitle": "大規模Webサイトの保守運用",
    "period": "2020年9月～2022年9月",
    "sections": [
      {
        "title": "プロジェクト内容",
        "paragraphs": [
          "大規模サイトの保守運用",
          "https://www.softbank.jp/"
        ]
      },
      {
        "title": "チーム",
        "paragraphs": [
          "全：30名",
          "ディレクター10名",
          "デザイナー10名",
          "エンジニア10名"
        ]
      },
      {
        "title": "担当業務",
        "paragraphs": [
          "・更新依頼の実装可否判断",
          "・工数見積",
          "・詳細設計作成",
          "・HTML / CSS / JavaScript による画面実装",
          "・React / Vue2 を用いたフロントエンド開発",
          "・LPページ実装",
          "・料金シミュレーター実装",
          "・既存コード改修",
          "・障害発生時の原因調査および再発防止対応",
          "・客先独自CMSへのソースコード投入",
          "・保守運用対応"
        ]
      },
      {
        "title": "役割",
        "paragraphs": [
          "・フロントエンドエンジニア",
          "・チームサブリーダー"
        ]
      },
      {
        "title": "成果・実績",
        "paragraphs": [
          "大規模Webサイト保守運用案件に参画し、年間400件以上の開発・改修案件に対応。",
          "更新依頼に対する実装可否判断、工数見積、詳細設計、実装、リリースまで一貫して担当し、安定したサイト運用を支援した。",
          "また、料金シミュレーター開発や既存コード改修に加え、障害発生時の原因調査および再発防止対応にも従事。",
          "2021年からはチームサブリーダーとして、タスク振り分け、進捗確認、コードレビュー、メンバーサポートを担当し、開発チームの円滑な運営を支援。",
          "JavaScriptのオブジェクト化やUI改善を通じて保守性向上および運用効率改善を実施し、品質向上に貢献した。"
        ]
      },
      {
        "title": "使用言語",
        "paragraphs": [
          "HTML、JavaScript、TypeScript"
        ]
      },
      {
        "title": "フロントエンド",
        "paragraphs": [
          "React、jQuery、Vue 2、CSS、SCSS"
        ]
      },
      {
        "title": "インフラ・開発環境",
        "paragraphs": [
          "Windows OS"
        ]
      },
      {
        "title": "ツール",
        "paragraphs": [
          "Photoshop、Adobe XD、ChatWork、Backlog"
        ]
      }
    ],
    "historyEntries": [
      {
        "year": 2020,
        "month": 9
      },
      {
        "year": 2021
      }
    ]
  }
]

export const projectPath = (slug: string) => `/history/${slug}`
