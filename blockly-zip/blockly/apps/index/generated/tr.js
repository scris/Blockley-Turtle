// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored) {
  return '<div style="display: none"><span id="subtitle">görsel bir programlama ortamı</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Oluşturulan JavaScript kodunu görüntüle.</span><span id="linkTooltip">Blokları ve bağlantı adresini kaydet.</span><span id="runTooltip">Çalışma alanında bloklar tarafından tanımlanan \\nprogramını çalıştırın. </span><span id="runProgram">Programı Çalıştır</span><span id="resetProgram">Tekrar</span><span id="dialogOk">TAMAM</span><span id="dialogCancel">İptal</span><span id="catLogic">Mantık</span><span id="catLoops">Döngüler</span><span id="catMath">Matematik</span><span id="catText">Metin</span><span id="catLists">Listeler</span><span id="catColour">Renk</span><span id="catVariables">Değişkenler</span><span id="catProcedures">Prosedürler</span><span id="httpRequestError">İstek ile ilgili bir problem var.</span><span id="linkAlert">Bloklarını bu bağlantı ile paylaş:\n\n%1</span><span id="hashError">Üzgünüz, \'%1\' hiç bir kaydedilmiş program ile uyuşmuyor.</span><span id="xmlError">Kaydedilen dosyanız yüklenemiyor\nBlockly\'nin önceki sürümü ile kaydedilmiş olabilir mi?</span><span id="listVariable">liste</span><span id="textVariable">metin</span></div>';
};


apps.dialog = function(opt_data, opt_ignored) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null) + '</div>';
};


apps.ok = function(opt_data, opt_ignored) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">TAMAM</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof appsIndex == 'undefined') { var appsIndex = {}; }


appsIndex.messages = function(opt_data, opt_ignored) {
  return apps.messages(null) + '<div style="display: none"><span id="indexTitle">Blockly uygulamaları</ span><span id="indexFooter">Blockly ücretsiz ve açık kaynaklıdır. Koda veya Blockly çevirilerine katkıda bulunmak, ya da kendi uygulamanızda Blockly\'yi kullanmak için %1 sayfasını ziyaret edin.<span></div>';
};


appsIndex.start = function(opt_data, opt_ignored) {
  return appsIndex.messages(null) + '<table><tr><td><h1><span id="title">Blockly uygulamaları</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr><tr><td>Blockly grafiksel bir programlama ortamıdır. Blockly kullanan bazı örnek uygulamalar aşağıdadır.</td></tr></table><table><tr><td><a href="puzzle/index.html"><img src="index/puzzle.png" height=80 width=100></a></td><td><div><a href="puzzle/index.html">Bulmaca</a></div><div>Blockly\'nın arayüzünü kullanmayı öğrenin.</div></td></tr><tr><td><a href="maze/index.html"><img src="index/maze.png" height=80 width=100></a></td><td><div><a href="maze/index.html">Labirent</a></div><div>Bir labirent çözmek için Blockly\'yi kullanın.</div></td></tr><tr><td><a href="turtle/index.html"><img src="index/turtle.png" height=80 width=100></a></td><td><div><a href="turtle/index.html">Kaplumbağa Grafikler</a></div><div>Çizmek için Blockly\'yi kullanın.</div></td></tr><tr><td><a href="code/index.html"><img src="index/code.png" height=80 width=100></a></td><td><div><a href="code/index.html">Kod</a></div><div>Bir Blockly programını JavaScript, Python ya da XML\'e aktarın.</div></td></tr></table><p><span id="footer_prefix"></span><a href="http://blockly.googlecode.com/">blockly.googlecode.com</a><span id="footer_suffix"></span>';
};
