//1．選手の名前のリスト
//2. for文で選手の名前

//リストの作成
let imge = [
  "https://img.a.transfermarkt.technology/portrait/header/331560-1682591217.jpg?lm=1", //0
  "https://img.a.transfermarkt.technology/portrait/header/504849-1642264453.jpg?lm=1", //1
  "https://img.a.transfermarkt.technology/portrait/header/146310-1657181542.jpg?lm=1", //2
  "https://img.a.transfermarkt.technology/portrait/header/387191-1693899437.jpg?lm=1", //3
  "https://img.a.transfermarkt.technology/portrait/header/295060-1671479611.jpg?lm=1", //4
  "https://img.a.transfermarkt.technology/portrait/header/617408-1709162238.jpg?lm=1", //5
  "https://img.a.transfermarkt.technology/portrait/header/346647-1547463086.jpg?lm=1", //6
  "https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1", //7
  "https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1", //8
  "https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1", //9
  "https://img.a.transfermarkt.technology/portrait/header/791690-1649401563.jpg?lm=1", //10
  "https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1", //11
  "https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1", //12
];

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
  const img = imge[i];
  const nam = player[i];
  const con = country[0];
  const tem = team[i];
  const bth = birth[i];
  const profileUrl = url[i];

  //名前，国，チーム，生年月日
  const html = `
    <div class="mx-1 my-4 p-5 border-2 rounded-3xl shadow-md grid-cols-3 md:w-5/12 hover:scale-105">
      <li class="p-5">
        <img src="${img}" alt="" class="w-1/4">
        <p id="name-${i}">${"Name:" + nam}</p>
        <p>${"Country:" + con}</p>
        <p>${"Team:" + tem}</p>
        <p>${"Birth:" + bth}</p>
        <a href="${profileUrl}" target="_blank">プロフィールを見る</a>
      </li>
      </li>
      <input
        id="title-${i}"
        type="text"
        placeholder="タイトルを入力"
        class="flex justify-center items-center p-5 w-1/2"
      />
      <textarea
        id="text-${i}"
        placeholder="本文を入力"
        class="justify-center items-center p-5 w-full"></textarea>
      <div class="flex justify-end m-2">
      <div class="p-2 hover:-translate-y-1 hover:scale-110">
        <button class="save-btn" data-index="${i}">セーブ</button>
      </div>
      <div class="p-2 hover:-translate-y-1 hover:scale-110">
        <button class="clear-btn" data-index="${i}">削除</button>
      </div>
      </div>
    </div>
          `;
  $("#list").append(html);
}

// Save クリックイベント
$(document).on("click", ".save-btn", function () {
  const index = $(this).data("index");
  const key = $("#name-" + index).text();
  const value = [$("#title-" + index).val() + ":" + $("#text-" + index).val()];

  if (key && value) {
    localStorage.setItem(key, value);
    $("#memo").append(
      `
    <div class="border-2 scroll-m-1 rounded-3xl p-5 w-2/5 shadow-lg grid-cols-3">
    <li class="p-2">
    <p>${key}</p>
    <p>${value}</p>
    </li>
    </div>
    `
    );
  } else {
    alert("タイトルと本文を入力してください。");
  }
});

// Clear クリックイベント
$(document).on("click", ".clear-btn", function () {
  const index = $(this).data("index");
  const key = $("#name-" + index).text();
  const value = [$("#title-" + index).val() + ":" + $("#text-" + index).val()];

  localStorage.removeItem(key, value);
  location.reload(); // ページをリロードして表示を更新
});

// ページ読み込み：保存データ取得表示
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const html2 = `
    <div class="border-2 scroll-m-1 rounded-3xl p-5 w-2/5 shadow-lg grid-cols-3 hover:scale-105">
    <li class="p-2">
    <p>${key}</p>
    <P>${value}</p>
    </li>
    </div>
    `;
  $("#memo").append(html2);
}

// 全てClear クリックイベント
$("#clear").on("click", function () {
  localStorage.clear();
  $("#memo").empty();
});
