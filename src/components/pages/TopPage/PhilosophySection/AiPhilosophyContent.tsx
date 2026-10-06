import { useLanguage } from '@/i18n/LanguageProvider'

import { PhilosophyExample } from './PhilosophyExample'
import styles from './style.module.scss'

const aiTools = [
  {
    name: 'Claude Code',
    identity: 'プロジェクトの中に入り、一緒に作業するAI',
    usage: 'コード調査・実装・修正・レビュー',
  },
  {
    name: 'Codex',
    identity: '調査・実装・レビューを任せる、もう一人のエンジニア',
    usage: 'コード調査・実装・リファクタリング・レビュー',
  },
  {
    name: 'ChatGPT',
    identity: '考えを広げ、整理する壁打ち相手',
    usage: '技術調査・設計検討・比較・情報整理',
  },
  {
    name: 'Cursor',
    identity: 'AIとコードを書くためのエディタ',
    usage: '実装・コード修正',
  },
  {
    name: 'GitHub Copilot',
    identity: '日々のコーディングを支えるアシスタント',
    usage: 'コード補完・実装支援',
  },
]

export const AiPhilosophyContent = () => {
  const { t } = useLanguage()
  return (
  <div className={styles.articleContent}>
    <section aria-labelledby="ai-partner">
      <h3 id="ai-partner">{t("AIを、開発のパートナーとして")}</h3>
      <p>{t("Claude Code、Codex、ChatGPT、Cursor、GitHub Copilotなどを活用し、コーディングだけでなく、コードベースの調査、設計の検討、実装、リファクタリング、レビューなど、開発のさまざまな工程でAIを取り入れています。")}</p>
      <p>{t("AIを使うことで、これまで時間をかけていた作業を効率化できるだけでなく、自分だけでは気づかなかった視点や選択肢に触れられるようになりました。")}</p>
      <p>{t("AIは単に作業を速くするためのツールではなく、自分が考えられる範囲そのものを広げてくれる存在だと考えています。")}</p>
    </section>

    <section aria-labelledby="ai-tools">
      <h3 id="ai-tools">{t("ツールの特性を理解して使い分ける")}</h3>
      <p>{t("複数のAIツールを使う中で、それぞれ得意なことや開発体験には違いがあると感じています。")}</p>
      <p>{t("一つのツールに依存するのではなく、目的や状況に応じて使い分けることを意識しています。")}</p>
      <table className={styles.toolTable} aria-label={t("AIツールの役割と主な用途")}>
        <thead><tr><th scope="col">{t('Tool')}</th><th scope="col">{t("自分にとっての役割")}</th><th scope="col">{t("主な用途")}</th></tr></thead>
        <tbody>{aiTools.map(tool => <tr key={tool.name}>
          <th scope="row">{tool.name}</th>
          <td>{t(tool.identity)}</td>
          <td>{t(tool.usage)}</td>
        </tr>)}</tbody>
      </table>
      <dl className={styles.toolCards} aria-label={t("AIツールの役割と主な用途")}>
        {aiTools.map(tool => <div key={tool.name}>
          <dt>{tool.name}</dt>
          <dd><span>{t("自分にとっての役割")}</span>{t(tool.identity)}</dd>
          <dd><span>{t("主な用途")}</span>{t(tool.usage)}</dd>
        </div>)}
      </dl>
    </section>

    <section aria-labelledby="ai-questions">
      <h3 id="ai-questions">{t("AIができることが増えるからこそ、問いを広げる")}</h3>
      <p>{t("AIによる作業サポートが充実するほど、人が一つひとつの作業を行う負担は小さくなっていきます。")}</p>
      <p>{t("だからこそ、「この実装で動くか」だけではなく、「他に考慮すべきケースはないか」「影響範囲に漏れはないか」「別の選択肢はないか」「既存の仕様と矛盾していないか」と、疑問の幅と抜け漏れを意識することを大切にしています。")}</p>
      <p>{t("AIから答えを得ること以上に、")}<strong>{t("どのような問いを持つか")}</strong>{t("が重要になると考えています。")}</p>
    </section>

    <section aria-labelledby="ai-judgment">
      <h3 id="ai-judgment">{t("「何をもって正しいか」を明確にする")}</h3>
      <p>{t("AIが提示した回答が、そのプロジェクトにとって正しいとは限りません。")}</p>
      <p>{t("要件、仕様、既存実装、テスト、設計方針、プロジェクト固有のルールなど、「何をもって正しいと判断するのか」を明確にすることを意識しています。")}</p>
      <p><code>CLAUDE.md</code>{t("や")}<code>AGENTS.md</code>{t("などを利用して、ルールやレビュー観点、前提となる情報をAIと共有することもその一つです。")}</p>
      <p>{t("AIの回答そのものを判断基準にするのではなく、")}<strong>{t("AIと人が同じ判断基準を参照できる環境をつくること")}</strong>{t("も、AIを活用するエンジニアリングの一部だと考えています。")}</p>
      <PhilosophyExample kind="ai" />
    </section>
  </div>
  )
}
