export interface CaseStudy {
  context: string;
  problem: string;
  role: string;
  actions: string[];
  results: string[];
  stack: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  highlight?: string;
  color: string;
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "wordify",
    title: "Wordify",
    summary:
      "語彙学習を効率化するWebアプリケーション。スペースド・リピティション(間隔反復)アルゴリズムにより、学習の定着率を向上させる。",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    highlight: "定着率 +35%",
    color: "bg-indigo-500",
    caseStudy: {
      context:
        "語彙学習アプリの個人開発。既存サービスでは学習進捗の可視化が不十分で、モチベーション維持が課題だった。開発期間: 約2ヶ月。",
      problem:
        "既存の語彙学習ツールは単純なフラッシュカード方式が多く、学習者の記憶定着パターンに基づいた出題頻度の最適化がなされていなかった。",
      role: "設計・実装・デプロイまでを単独で担当。",
      actions: [
        "SM-2アルゴリズムをベースにした間隔反復ロジックを実装し、ユーザーごとの正答率に応じて出題間隔を動的に調整",
        "Next.js App Routerを採用し、Server Componentsでの初期表示高速化とClient Componentsでのインタラクティブな学習UIを分離",
        "PostgreSQLで学習履歴を管理し、進捗ダッシュボードをリアルタイムで更新",
      ],
      results: [
        "テストユーザー5名での検証で、従来のフラッシュカード方式と比較して定着率が約35%向上",
        "初期表示のLCPを1.2秒以下に抑え、Lighthouse Performanceスコア95以上を達成",
      ],
      stack: [
        "Next.js 15",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/" },
        { label: "Live Demo", url: "https://example.com" },
      ],
    },
  },
  {
    slug: "task-flow",
    title: "Task Flow",
    summary:
      "チーム向けタスク管理ツール。カンバンボードとガントチャートを統合し、プロジェクトの進捗を一元管理する。",
    tags: ["React", "Django REST Framework", "WebSocket", "Docker"],
    highlight: "タスク完了率 +20%",
    color: "bg-emerald-500",
    caseStudy: {
      context:
        "社内ツールとして開発したプロジェクト管理アプリケーション。チーム規模: 3名。既存のスプレッドシート管理からの脱却が目標。",
      problem:
        "複数のスプレッドシートに分散したタスク情報の同期が煩雑で、進捗の全体像が把握しづらかった。リアルタイムでの共同編集も求められた。",
      role: "フロントエンド全般とWebSocketによるリアルタイム同期機能を担当。バックエンドAPI設計にも参加。",
      actions: [
        "React DnD Kitを用いたカンバンボードUIを構築し、ドラッグ＆ドロップによるステータス変更を実現",
        "Django Channelsを活用したWebSocketサーバーを構築し、複数ユーザー間のリアルタイム同期を実装",
        "Docker Composeで開発環境を統一し、チームメンバーのセットアップ時間を削減",
      ],
      results: [
        "導入後1ヶ月で、チームのタスク完了率が約20%向上",
        "タスク状況の確認にかかる時間を推定で週あたり2時間削減",
      ],
      stack: [
        "React",
        "TypeScript",
        "Django",
        "Django REST Framework",
        "WebSocket",
        "PostgreSQL",
        "Docker",
      ],
      links: [{ label: "GitHub", url: "https://github.com/" }],
    },
  },
  {
    slug: "api-gateway",
    title: "Unified API Gateway",
    summary:
      "マイクロサービス群へのリクエストを統合管理するAPIゲートウェイ。認証・レート制限・ログ集約を一元化。",
    tags: ["Node.js", "Express", "Redis", "AWS"],
    highlight: "レイテンシ -40%",
    color: "bg-amber-500",
    caseStudy: {
      context:
        "複数のマイクロサービスが個別に認証・ログ処理を実装しており、運用コストが増大していた。バックエンドチーム2名で設計・実装。",
      problem:
        "各サービスごとに認証ミドルウェアが重複実装されており、セキュリティポリシーの一貫性が保てなかった。また、サービス間通信のレイテンシが課題だった。",
      role: "ゲートウェイの設計とコア実装を担当。Redis連携のキャッシュ戦略とレート制限を主導。",
      actions: [
        "Express.jsベースのゲートウェイを構築し、JWT検証を一元化。各サービスから認証ロジックを除去",
        "Redisをキャッシュレイヤーとして導入し、頻繁にアクセスされるエンドポイントのレスポンスをキャッシュ",
        "構造化ログをCloudWatch Logsに集約し、リクエストのトレーサビリティを確保",
      ],
      results: [
        "認証処理の一元化により、各サービスのコードベースを平均15%削減",
        "キャッシュ導入により、対象エンドポイントのレイテンシを約40%削減",
      ],
      stack: [
        "Node.js",
        "Express",
        "Redis",
        "AWS Lambda",
        "CloudWatch",
        "JWT",
      ],
      links: [],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
