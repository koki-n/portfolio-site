<template>
  <div id="study">
    <h1 class="ttl">STUDY-SHARE</h1>
    <h2 class="ttl">機能</h2>
    <div>
      <ul>
        <li>firebaseによるログイン機能</li>
        <li>投稿機能</li>
        <li>それぞれの投稿に対するコメント機能</li>
        <li>プロフィール画像のアップロード（AWS S3）</li>
        <li>ユーザー名、タイトル、投稿内容、それぞれに対しての部分一致検索</li>
      </ul>
    </div>
    <h2 class="ttl">作成に関して</h2>
    <p>
      ・Laravelの検索機能の実装<br />
      Laravelにて検索機能を実装したことがなかったのではじめ、どのように実装すれば良いかいい案が思いつきませんでした。
      はじめif文で全てのパターンを実装することを試みましたが、コードの量が異常に長くなってしまい、他に方法がないかと模索したところemptyとif文で値が入っていたらwhereで検索という方法を思いつき実装することができました。
      <br /><br />
      ・コメントのリレーション<br />
      それぞれの投稿に対しコメントをつけるにはリレーションをくみ表示させるのが一番手っ取り早く実装できるのではないかと思い、　laravelでリレーションを組み実装しました。
      <br /><br />
      ・画像の投稿機能<br />
      画像投稿についての知識が一切なくどのように実装していけば良いかわからず、今回一番苦戦しました。
      シンボリックリンクによりlaravel側に保存した画像を表示。
      Axiosの第二引数でfileの情報を送ろうとするとnullになってしまいファイルの情報がlaravel側に送ることができず、なかなか実装できませんでした。formdataとして送ることによって実装することができました。

      <br /><br />

      ・投稿に対するプロフィール画像の設定<br />
      プロフィール画像を設定したら今までの投稿を全て画像を置き換える動作の実装に苦労しました。
      結果的にlaravelのコントローラにてupdateを使用し、全ての投稿のパスをアップデートすることによって実装を行いました。
      こちらに関してはリレーションなどで処理を軽くすることができると思うので、随時アップデートしていきます。

      <br /><br />
      ・herokuのデプロイ<br />
      Herokuのデプロイ時に今までは画像のアップロードをシンボリックリンクを使用し行っていたが、gitignoreにstorageが指定されており、また、herokuの仕様で１日経つと投稿した画像が消えてしまうとのことなのでaws
      s3 を使用し画像投稿機能を再度作成し直しました。
      Herokuの仕様でclearddbのテーブルに保存される値が10個飛ばしになるとのことだったのでそちらも修正しました。
    </p>
    <h2 class="ttl">改善点</h2>
    <p>
      ・プロフィール画像の表示について<br />
      それぞれのアカウントのプロフィール画像の表示の仕方が規模が大きくなるにつれて重くなるのではないかと思う
      <br /><br />
      ・コードについて<br />
      現状コードが読みづらく無駄が多いので、リファクタリングをしていきます。
      <br /><br />
      ・機能について<br />
      みんなが勉強した内容を共有するアプリを作成しようと試みたのだが見た目的にそこまでよくないのと、本来の目的ではないプロフィール画像の投稿によって動作が少し重くなっている。
    </p>
    <div class="center">
      <a href="https://portfolio-6b7fe.web.app/" target="_blank">アプリへ</a>
    </div>
    <div class="center">
      <Nuxt-link to="/">戻る</Nuxt-link>
    </div>
  </div>
</template>
<style scoped>
.ttl {
  margin-top: 50px;
}
h1 {
  text-align: center;
}
a {
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: gray;
  padding: 5px;
  box-shadow: 0 0 4px white;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
}
.center {
  text-align: center;
}
</style>