//1．選手の名前のリスト
//2. for文で選手の名前
const player =["冨安 健洋"]
for (let i = 0; i < player.length; i++) {
  const key = player.key(i);
  console.log(key, "選手の名前");
}

//1.Save クリックイベント
$("#save").on("click", function () {
  const key = $("#title").val();
  const value = $("#text").val();

  localStorage.setItem(key, value);
  const html = `
        <li>
          <p>${key}</p>
          <p>${value}</p>
        </li>
        `;
  $("#list").append(html);
});

//2.clear クリックイベント
$("#clear").on("click", function () {
  localStorage.clear();
  $("#list").empty();
});

//3.ページ読み込み：保存データ取得表示
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key, "鍵の名前");
  const value = localStorage.getItem(key);
  const html = `
        <li>
          <p>${key}</p>
          <p>${value}</p>
        </li>
        `;
  $("#list").append(html);
}
