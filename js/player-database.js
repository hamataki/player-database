//1．選手の名前のリスト
//2. for文で選手の名前

//リストの作成
let player = [
  "冨安 健洋", //0
  "三笘 薫", //1
  "遠藤 航", //2
  "橋岡 大樹", //3
  "三好 康児", //4
  "坂元 達裕", //5
  "中山 雄太", //6
  "松坂 暖", //7
  "橋井モリソン", //8
  "ターナー比邑郁", //9
  "前田ハドー慈英", //10
  "タクリストファーズ玲生ウィリアム", //11
  "小橋エンスリン海", //12
];
let country = ["イングランド", "スコットランド"];
let team = [
  "Arsenal FC", //0
  "Brighton & Hove Albion FC", //1
  "Liverpool FC", //2
  "Luton Town", //3
  "Birmingham City", //4
  "Coventry City", //5
  "Coventry City", //6
  "Hendon FC", //7
  "Basingstoke Town", //8
  "Longridge Town", //9
  "Blackburn Rovers U21", //10
  "FC Southampton Academy", //11
  "Charlton Athletic U18", //12
];
let birth = [
  "1998/11/05", //0
  "1997/05/20", //1
  "1993/02/09", //2
  "1999/05/17", //3
  "1997/03/26", //4
  "1996/10/22", //5
  "1997/02/16", //6
  "1997/08/13", //7
  "2001/05/21", //8
  "1997/04/15", //9
  "2004/04/02", //10
  "2007/11/04", //11
  "2005/10/22", //12
];
let url = [
  "https://www.transfermarkt.jp/takehiro-tomiyasu/profil/spieler/331560", //0
  "https://www.transfermarkt.jp/kaoru-mitoma/profil/spieler/504849", //1
  "https://www.transfermarkt.jp/wataru-endo/profil/spieler/146310", //2
  "https://www.transfermarkt.jp/daiki-hashioka/profil/spieler/387191", //3
  "https://www.transfermarkt.jp/koji-miyoshi/profil/spieler/295060", //4
  "https://www.transfermarkt.jp/tatsuhiro-sakamoto/profil/spieler/617408", //5
  "https://www.transfermarkt.jp/yuta-nakayama/profil/spieler/346647", //6
  "https://www.transfermarkt.jp/daniel-matsuzaka/profil/spieler/347437", //7
  "https://www.transfermarkt.jp/morrison-hashii/profil/spieler/860659", //8
  "https://www.transfermarkt.jp/hyuga-tanner/profil/spieler/315606", //9
  "https://www.transfermarkt.jp/jay-haddow/profil/spieler/791690", //10
  "https://www.transfermarkt.jp/leo-christophers/profil/spieler/1131906", //11
  "https://www.transfermarkt.com/kai-enslin/profil/spieler/1085239", //12
];

for (let i = 0; i < 13; i++) {
  const nam = player[i];
  const con = country[0];
  const tem = team[i];
  const bth = birth[i];

  //名前，国，チーム，生年月日
  const html = `
    <div class="scroll-m-1 rounded-3xl p-5 shadow-lg grid-cols-3">
        <li class="p-5">
          <p>${"Name:" + nam}</p>
          <p>${"Country:" + con}</p>
          <p>${"Team:" + tem}</p>
          <p>${"Birth:" + bth}</p>
        </li>
        <input
          id="in"
          type="text"
          placeholder="タイトルを入力"
          class="flex justify-center items-center p-5 w-1/2"
        />
        <textarea
         id="bun"
         placeholder="本文を入力"
         class="justify-center items-center p-5 w-full"></textarea>
        <button id="save">セーブ</button>
        <button id="clear">全て削除</button>
    </div>
          `;
  $("#list").append(html);

  // //1.Save クリックイベント
  // $("#save").on("click", function () {
  //   const key = $("#title").val();
  //   const value = $("#text").val();

  //   localStorage.setItem(key, value);
  //   const html = `
  //       <li>
  //         <p>${key}</p>
  //         <p>${value}</p>
  //       </li>
  //       `;
  //   $("#list").append(html);
  // });

  // //2.clear クリックイベント
  // $("#clear").on("click", function () {
  //   localStorage.clear();
  //   $("#list").empty();
  // });

  // //3.ページ読み込み：保存データ取得表示
  // for (let i = 0; i < localStorage.length; i++) {
  //   const key = localStorage.key(i);
  //   console.log(key, "鍵の名前");
  //   const value = localStorage.getItem(key);
  //   const h = `
  //       <li>
  //         <p>${key}</p>
  //         <p>${value}</p>
  //       </li>
  //       `;
  //   $("#nemo").append(h);
  // }
}


