import { useLanguage } from '@/i18n/LanguageProvider'

import { PhilosophyExample } from './PhilosophyExample'
import styles from './style.module.scss'

export const EssencePhilosophyContent = () => {
  const { t } = useLanguage()
  return (
  <div className={styles.articleContent}>
    <section aria-labelledby="essence-intent">
      <h3 id="essence-intent">{t("言葉の先にある「意図」を考える")}</h3>
      <p>{t("仕事では、依頼されたことや周囲の言葉をそのまま受け取るのではなく、「なぜそれが必要なのか」「何を解決したいのか」という背景や意図まで理解することを大切にしています。")}</p>
      <p>{t("同じ言葉でも、立場や持っている情報によって意味や捉え方は変わります。表面的な言葉だけで判断せず、その先にある目的まで考えることで、本当に必要な仕事が見えてくると考えています。")}</p>
    </section>

    <section aria-labelledby="essence-perspectives">
      <h3 id="essence-perspectives">{t("違いを、より良い答えにつなげる")}</h3>
      <p>{t("人にはそれぞれの立場や考えがあり、同じゴールを目指していても、そこに至るまでの考え方やアプローチが異なることがあります。")}</p>
      <p>{t("自分と異なる意見に出会ったときも、「なぜそう考えたのか」という意図や背景を理解することを意識しています。")}</p>
      <p>{t("どちらが正しいかを決めることを目的にするのではなく、それぞれの視点を持ち寄り、チームとして目指すゴールにとって何が最適なのかを考えることを大切にしています。")}</p>
    </section>

    <section aria-labelledby="essence-context">
      <h3 id="essence-context">{t("現状を捉えてから、答えを考える")}</h3>
      <p>{t("理想的な方法が、必ずしもその状況で最適とは限りません。")}</p>
      <p>{t("現在の仕様、技術的な制約、スケジュール、チームの状況など、置かれている環境を理解したうえで、今何を優先すべきなのかを考えます。")}</p>
      <p>{t("「一般的に正しいこと」ではなく、目的と現状の両方を捉え、")}<strong>{t("その状況にとって本当に必要なことを選択すること")}</strong>{t("を意識しています。")}</p>
      <PhilosophyExample kind="essence" />
    </section>

    <section aria-labelledby="essence-goal">
      <h3 id="essence-goal">{t("ゴールから逆算する")}</h3>
      <p>{t("実装することやタスクを完了すること自体をゴールにはしません。")}</p>
      <p>{t("その先に「何を実現したいのか」があり、技術やタスクはそのための手段だと考えています。")}</p>
      <p>{t("迷ったときほど目的に立ち返り、チームが目指すゴールから逆算して、次に何をするべきかを判断することを大切にしています。")}</p>
    </section>
  </div>
  )
}

export const ChangePhilosophyContent = () => {
  const { t } = useLanguage()
  return (
  <div className={styles.articleContent}>
    <section aria-labelledby="change-possibility">
      <h3 id="change-possibility">{t("知らないことを、可能性として捉える")}</h3>
      <p>{t("技術の世界は常に変化し、新しい技術や開発方法が生まれ続けています。")}</p>
      <p>{t("知らない技術に出会ったとき、「自分の領域ではない」と線を引くのではなく、「これを知れば何ができるようになるだろう」と考えることを大切にしています。")}</p>
      <p>{t("分からないことがある状態を恐れるのではなく、")}<strong>{t("知らないことが、次に成長できる余白になる")}</strong>{t("と捉えています。")}</p>
      <PhilosophyExample kind="change" />
    </section>

    <section aria-labelledby="change-beyond-code">
      <h3 id="change-beyond-code">{t("コーディングの外側まで理解する")}</h3>
      <p>{t("これまではReact / Next.js / TypeScriptを中心に、フロントエンドからバックエンドへと扱える領域を広げてきました。")}</p>
      <p>{t("これからはさらに、AWSやGCP、Dockerなどのインフラ領域や、セキュリティについても理解を深めていきたいと考えています。")}</p>
      <p>{t("コードを書くだけではなく、「どのように動き、どのように届けられ、どのように守られているのか」まで理解することで、アプリケーション全体を見ながら判断できるエンジニアを目指しています。")}</p>
    </section>

    <section aria-labelledby="change-with-ai">
      <h3 id="change-with-ai">{t("AIによる変化も、自分の成長につなげる")}</h3>
      <p>{t("AIによって、エンジニアの仕事や開発方法そのものも大きく変わり始めています。")}</p>
      <p>{t("これまでのやり方に固執するのではなく、新しい技術やツールを実際に試し、自分の仕事にどう活かせるのかを考える。")}</p>
      <p>{t("変化によって自分の仕事がどう変わるかを恐れるのではなく、")}<strong>{t("変化によって自分に何ができるようになるのか")}</strong>{t("を考えたいと思っています。")}</p>
    </section>

    <section aria-labelledby="change-growth">
      <h3 id="change-growth">{t("昨日の自分より、一歩先へ")}</h3>
      <p>{t("成長は、何かを一度達成して終わるものではないと考えています。")}</p>
      <p>{t("新しい技術を知る。できなかったことができるようになる。違う考え方に触れて、自分の視点が広がる。")}</p>
      <p>{t("そうした小さな変化を積み重ねながら、昨日の自分より少しでもできることを増やしていく。")}</p>
      <p><strong>{t("変化そのものを楽しみながら、エンジニアとして成長し続けること")}</strong>{t("を大切にしています。")}</p>
    </section>
  </div>
  )
}
