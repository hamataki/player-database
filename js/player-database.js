//1．選手の名前のリスト
//2. for文で選手の名前

//リストの作成
let player = [
  "冨安 健洋",
  "三笘 薫",
  "遠藤 航",
  "橋岡 大樹",
  "三好 康児",
  "坂元 達裕",
  "中山 雄太",
  "松坂 暖",
  "橋井モリソン",
  "ターナー比邑郁",
  "前田ハドー慈英",
  "タクリストファーズ玲生ウィリアム ",
  "小橋エンスリン海",
];
let country = ["イングランド", "スコットランド"];

let str = "";
let con = "";
for (let i = 0; i < player.length; i++) {
  str += `NAME:${player[i]}<br>`;
  con += `COUNTRY:${country[0]}<br>`;
  const key = str;
  const value = con;

  const html = `
          <li>
            <p>${key}</p>
            <p>${value}</p>
          </li>
          `;
  $("#name").html(html);

  console.dir([i] + ";" + player[i]);
  console.dir([i] + ";" + country[0]);
}

// for (let i = 0; i < 13; i++) {
//   con += `COUNTRY:${country[0]}<br>`;
//   console.dir([i] + ";" + country[0]);
// }
// $("#plofile").html(str + con);

// //1.Save クリックイベント
// $("#save").on("click", function () {
//   const key = $("#title").val();
//   const value = $("#text").val();

//   localStorage.setItem(key, value);
//   const html = `
//         <li>
//           <p>${key}</p>
//           <p>${value}</p>
//         </li>
//         `;
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
//   const html = `
//         <li>
//           <p>${key}</p>
//           <p>${value}</p>
//         </li>
//         `;
//   $("#list").append(html);
// }
