import Image from "next/image";
import "../../styles/globals.css";
import Link from "next/link";

export default function Apps() {
  return (
    <div className="container flex flex-row justify-center items-center mx-[10%] w-full">
      <div className="z-10 flex flex-col justify-start items-start pb-8 text-gray-800 font-light mx-[10%] overflow-ellipsis">
        <div className="flex items-center justify-center">
          <Image
            src="/images/3devices.png"
            alt="３デバイス使用見本"
            width={540}
            height={250}
            className="opacity-100"
          />
        </div>
        <span className="font-medium text-sm text-left">
          <h3 className="font-bold text-2xl">WORDIFY</h3> <br />
          概要
          <br />
          Django+Next.jsを使ったWebアプリケーション。LexicalエディタでMarkdownを保存・表示できます。
          <br />
          個人開発の際に頻繁に技術を検索したり生成AIに質問したりすることから、自分用にわかったことを保存する目的で作りました。
          <br />
          <Link href={"https://wordifyapp.xyz/"}>https://wordifyapp.xyz/</Link>
          <br />
          <br />
          技術スタック
          <br />
          バックエンド: Django, PostgreSQL
          <br />
          フロントエンド: Next.js, TypeScript
          <br />
          認証: NextAuth
          <br />
          本番環境: Docker,Nginx, Certbot
        </span>
        <br />
        <div className="flex flex-col justify-start">
          <p className="text-left font-medium text-sm">主な機能</p>
          <table className="border-collapse border-black font-medium text-sm text-left">
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center">機能</td>
                <td className="border px-4 py-2 text-center">説明</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Markdownエディタ</td>
                <td className="border px-4 py-2">
                  Lexicalエディタを使用し、Markdown形式でテキストを保存・表示
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">検索機能</td>
                <td className="border px-4 py-2">
                  use server を活用し、サーバーサイドで高速検索
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">認証機能</td>
                <td className="border px-4 py-2">
                  NextAuth + djoser を用いたJWT認証
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Cloudinary連携</td>
                <td className="border px-4 py-2">
                  画像アップロードをCloudinaryで管理
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">パフォーマンス最適化</td>
                <td className="border px-4 py-2">
                  SSR(Server Side Rendering) を利用し、初回表示速度を向上
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <div className="flex flex-col justify-start items-start font-medium text-sm">
          <span>
            {/* スクリーンショット     */}
            <br />
            <br />
            <p className="">工夫した点</p>
            <br />
            セキュリティ対策
            <br />
            XSS対策:
            <br />
            DjangoのbleachとNext.jsのdompurifyでユーザー入力をサニタイズ
            <br />
            JWT認証: NextAuthでJWTを使用し、セキュアなユーザー管理
            <br />
            <br />
            パフォーマンス改善
            <br />
            SSR (Server Side Rendering) の活用: use
            serverで検索機能を実装し、高速なレスポンスを実現
            <br />
            <br />
            データベースの最適化: JSONFieldを活用し、動的データの処理を簡潔化
            <br />
            <br />
            Dockerの軽量化:
            Dockerイメージのサイズを削減し、本番環境のデプロイ時間を短縮
            <br />
            <br />
            UI/UXの向上
            <br />
            カスタムテーマ:
            Lexicalエディタのスタイルを調整し、読みやすいデザインを実現
            <br />
            <br />
            今後の改善点
            <br />
            機能追加
            <br />
            複数グループ機能:
            <br />
            ワードが複数のグループに登録できるようにし、利便性を向上
            <br />
            ダークモード対応: ユーザー設定でテーマを切り替えられるようにする
            <br />
            共同編集機能: 複数人で一つのワードを編集できるようにする
            <br />
            音声・動画の登録:
            <br />
            より多くのメディアに対応してワードの意味を説明しやすくする
            <br />
            <br />
            技術的な改善
            <br />
            ユニットテストの追加: Jest, Testing
            <br />
            Libraryを導入し、フロントエンドの品質を向上
            <br />
            CI/CDパイプラインの構築: GitHub
            Actionsを導入し、テスト・デプロイを自動化
            <br />
            セキュリティの強化: ２段階認証を導入し、安全性を向上
          </span>
        </div>
      </div>
    </div>
  );
}
