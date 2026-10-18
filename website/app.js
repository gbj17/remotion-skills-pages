function filterCards(q) {
  q = (q || "").trim().toLowerCase();
  var cards = document.querySelectorAll("#grid .card");
  var shown = 0;
  cards.forEach(function (c) {
    var hit = !q || (c.getAttribute("data-search") || "").indexOf(q) !== -1;
    c.style.display = hit ? "" : "none";
    if (hit) shown++;
  });
  document.getElementById("count").textContent = shown + " 个技能";
  document.getElementById("empty").style.display = shown === 0 ? "" : "none";
}

function copyCmd(btn) {
  var text = document.getElementById("cmd").textContent;
  function done() {
    var old = btn.textContent;
    btn.textContent = "已复制 ✓";
    setTimeout(function () { btn.textContent = old; }, 1600);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, done);
  } else {
    var ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }
}
