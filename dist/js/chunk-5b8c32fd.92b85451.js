(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b8c32fd"],{"07d2":function(a,e,t){"use strict";var n;(function(i){if("function"!==typeof s){var s=function(a){return a};s.nonNative=!0}const r=s("plaintext"),o=s("html"),c=s("comment"),l=/<(\w*)>/g,d=/<\/?([^\s\/>]+)/;function h(a,e,t){a=a||"",e=e||[],t=t||"";let n=u(e,t);return g(a,n)}function p(a,e){a=a||[],e=e||"";let t=u(a,e);return function(a){return g(a||"",t)}}function u(a,e){return a=b(a),{allowable_tags:a,tag_replacement:e,state:r,tag_buffer:"",depth:0,in_quote_char:""}}function g(a,e){if("string"!=typeof a)throw new TypeError("'html' parameter must be a string");let t=e.allowable_tags,n=e.tag_replacement,i=e.state,s=e.tag_buffer,l=e.depth,d=e.in_quote_char,h="";for(let p=0,u=a.length;p<u;p++){let e=a[p];if(i===r)switch(e){case"<":i=o,s+=e;break;default:h+=e;break}else if(i===o)switch(e){case"<":if(d)break;l++;break;case">":if(d)break;if(l){l--;break}d="",i=r,s+=">",t.has(m(s))?h+=s:h+=n,s="";break;case'"':case"'":d=e===d?"":d||e,s+=e;break;case"-":"<!-"===s&&(i=c),s+=e;break;case" ":case"\n":if("<"===s){i=r,h+="< ",s="";break}s+=e;break;default:s+=e;break}else if(i===c)switch(e){case">":"--"==s.slice(-2)&&(i=r),s="";break;default:s+=e;break}}return e.state=i,e.tag_buffer=s,e.depth=l,e.in_quote_char=d,h}function b(a){let e=new Set;if("string"===typeof a){let t;while(t=l.exec(a))e.add(t[1])}else s.nonNative||"function"!==typeof a[s.iterator]?"function"===typeof a.forEach&&a.forEach(e.add,e):e=new Set(a);return e}function m(a){let e=d.exec(a);return e?e[1].toLowerCase():null}h.init_streaming_mode=p,n=function(){return h}.call(e,t,e,a),void 0===n||(a.exports=n)})()},"58a84":function(a,e,t){},"65a5":function(a,e,t){"use strict";t.r(e);var n=t("7a23"),i=function(a){return Object(n["pushScopeId"])("data-v-5982bd9a"),a=a(),Object(n["popScopeId"])(),a},s={class:"wrapper"},r={class:"content-header"},o={class:"row"},c={class:"col-md-3",style:{"margin-right":"40px"}},l=["src"],d={class:"col-md-6"},h={style:{"text-align":"center",position:"absolute",top:"30%","margin-top":"20%",bottom:"0",left:"0",right:"0",width:"90%"}},p=i((function(){return Object(n["createElementVNode"])("h2",null,"Syarat Berperkara di PA Tulungagung",-1)})),u=i((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),g={class:"card card-danger direct-chat direct-chat-danger chat",style:{display:"none",top:"10%",width:"100%","margin-bottom":"100px"}},b={class:"card-header"},m={class:"chat_option"},A={class:"header_img"},k=["src"],y=Object(n["createStaticVNode"])('<span id="chat_head" data-v-5982bd9a>ANYA</span> <br data-v-5982bd9a><span class="agent" data-v-5982bd9a>Pengadilan Agama Tulungagung</span><span class="online" data-v-5982bd9a> (Online)</span><span id="chat_fullscreen_loader" class="chat_fullscreen_loader" data-v-5982bd9a><i class="fullscreen zmdi zmdi-window-maximize" data-v-5982bd9a></i></span>',6),f=i((function(){return Object(n["createElementVNode"])("span",{"aria-hidden":"true"},"×",-1)})),_=[f],v=Object(n["createStaticVNode"])('<div class="chat_body" id="msgs" data-v-5982bd9a></div><div id="chat_form" class="chat_converse chat_form" data-v-5982bd9a><a id="chat_fourth_screen" class="fab" data-v-5982bd9a><i class="zmdi zmdi-arrow-right" data-v-5982bd9a></i></a><span class="chat_msg_item chat_msg_item_admin" data-v-5982bd9a><div class="chat_avatar" data-v-5982bd9a><img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" data-v-5982bd9a></div> Hey there! Any question?</span><span class="chat_msg_item chat_msg_item_user" data-v-5982bd9a> Hello!</span><span class="status" data-v-5982bd9a>20m ago</span><span class="chat_msg_item chat_msg_item_admin" data-v-5982bd9a><div class="chat_avatar" data-v-5982bd9a><img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" data-v-5982bd9a></div> Agent typically replies in a few hours. Don&#39;t miss their reply. <div data-v-5982bd9a><br data-v-5982bd9a><form class="get-notified" data-v-5982bd9a><label for="chat_log_email" data-v-5982bd9a>Get notified by email</label><input id="chat_log_email" placeholder="Enter your email" data-v-5982bd9a><i class="zmdi zmdi-chevron-right" data-v-5982bd9a></i></form></div></span><span class="chat_msg_item chat_msg_item_admin" data-v-5982bd9a><div class="chat_avatar" data-v-5982bd9a><img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" data-v-5982bd9a></div> Send message to agent. <div data-v-5982bd9a><form class="message_form" data-v-5982bd9a><input placeholder="Your email" data-v-5982bd9a><input placeholder="Technical issue" data-v-5982bd9a><textarea rows="4" placeholder="Your message" data-v-5982bd9a></textarea><button data-v-5982bd9a>Send</button></form></div></span></div><span style="display:none;" class="waiting" title="Petunjuk sedang dibacakan, mohon tunggu terlebih dahulu sampai selesai!" data-v-5982bd9a></span>',3),w={class:"fab_field"},V=i((function(){return Object(n["createElementVNode"])("i",{class:"fa fa-microphone icon-to-change"},null,-1)})),x=[V],S=["placeholder"],T={class:"col-md-1 anya",style:{"margin-left":"100px"}},B=["src"];function C(a,e,t,i,f,V){var C=Object(n["resolveComponent"])("Nav");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(C),Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("img",{style:{"margin-left":"15px",width:"100%",height:"auto"},src:"".concat(f.publicPath,"sidebar-left.png")},null,8,l)]),Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",h,[p,u,Object(n["createElementVNode"])("h3",null,[Object(n["createElementVNode"])("a",{href:"",id:"change_address",onClick:e[0]||(e[0]=Object(n["withModifiers"])((function(a){return V.toggleFab()}),["stop","prevent"]))},"Klik di sini untuk memulai")])]),Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("div",m,[Object(n["createElementVNode"])("div",A,[Object(n["createElementVNode"])("img",{src:"".concat(f.publicPath,"pp-anya.png")},null,8,k)]),y,Object(n["createElementVNode"])("button",{type:"button",style:{"margin-top":"-15px","margin-right":"20px"},class:"close","data-dismiss":"modal","aria-label":"Close",onClick:e[1]||(e[1]=Object(n["withModifiers"])((function(a){return V.closeChat()}),["stop","prevent"]))},_)])]),v,Object(n["createElementVNode"])("div",w,[Object(n["createElementVNode"])("a",{id:"fab_send",onClick:e[2]||(e[2]=Object(n["withModifiers"])((function(a){return V.microphoneClick()}),["stop","prevent"])),class:"fab"},x),Object(n["createElementVNode"])("textarea",{id:"chatSend",name:"chat_message",placeholder:f.placeholderValue,class:"chat_field chat_message",style:{"margin-top":"10px",width:"75%","font-size":"12px"},disabled:""},null,8,S)])])]),Object(n["createElementVNode"])("div",T,[Object(n["createElementVNode"])("img",{style:{"min-height":"85vh",width:"120px","max-width":"400px",height:"auto"},src:"".concat(f.publicPath,"anya.png")},null,8,B)])])])])])])],64)}t("a15b"),t("d81d"),t("a630"),t("3ca3"),t("ac1f"),t("5319");var j=t("1157"),E=t.n(j),N=t("07d2"),O=t.n(N),F=t("e7a5"),P=t("6c02"),U=E.a;window.$=U;var M={beforeCreate:function(){document.body.className="home-staff"},components:{Nav:F["a"]},data:function(){return{publicPath:"/",staffData:"",runtimeTranscription_:"",transcription_:[],lang_:"id-ID",synth:window.speechSynthesis,voiceList:[],botSpeech:new window.SpeechSynthesisUtterance,placeholderValue:"Klik microphone untuk memulai!",isClicked:!1,currentRec:"",indexChatUser:0,indexChatBot:0,countOpenFab:0,voiceTimeout:0,router:Object(P["c"])()}},methods:{closeChat:function(){U(".chat").hide(),U(".anya").hide(),U(".chat").toggleClass("is-visible"),U(".fab").toggleClass("is-visible"),this.synth.cancel()},toggleFab:function(){if(U(".prime").toggleClass("zmdi-comment-outline"),U(".prime").toggleClass("zmdi-close"),U(".prime").toggleClass("is-active"),U(".prime").toggleClass("is-visible"),U("#prime").toggleClass("is-float"),U(".chat").toggleClass("is-visible"),U(".fab").toggleClass("is-visible"),this.hideChat(0),U(".is-visible").is(":hidden")?(U(".chat").show(),U(".anya").show()):(U(".chat").hide(),U(".anya").hide()),this.countOpenFab=this.countOpenFab+1,U(".is-visible").is(":hidden")&&1===this.countOpenFab){var a="Selamat datang di halaman Syarat Berperkara. <br>\n        <ul>\n           <li>Untuk mendapatkan informasi mengenai syarat-syarat berperkara, ucapkan <b>syarat-syarat berperkara</b>.</li>\n           <li>Untuk mengakses Halaman Utama, ucapkan <b>halaman utama</b>.</li>\n           <li>Untuk mengakses Halaman Gugatan Mandiri, ucapkan <b>gugatan mandiri</b>.</li>\n        </ul>\n        ";this.greeting(a)}else this.synth.cancel()},hideChat:function(a){switch(a){case 0:U("#chat_converse").css("display","none"),U("#chat_body").css("display","none"),U("#chat_form").css("display","none"),U(".chat_login").css("display","block"),U(".chat_fullscreen_loader").css("display","none"),U("#chat_fullscreen").css("display","none");break;case 1:U("#chat_converse").css("display","block"),U("#chat_body").css("display","none"),U("#chat_form").css("display","none"),U(".chat_login").css("display","none"),U(".chat_fullscreen_loader").css("display","block");break;case 2:U("#chat_converse").css("display","none"),U("#chat_body").css("display","block"),U("#chat_form").css("display","none"),U(".chat_login").css("display","none"),U(".chat_fullscreen_loader").css("display","block");break;case 3:U("#chat_converse").css("display","none"),U("#chat_body").css("display","none"),U("#chat_form").css("display","block"),U(".chat_login").css("display","none"),U(".chat_fullscreen_loader").css("display","block");break;case 4:U("#chat_converse").css("display","none"),U("#chat_body").css("display","none"),U("#chat_form").css("display","none"),U(".chat_login").css("display","none"),U(".chat_fullscreen_loader").css("display","block"),U("#chat_fullscreen").css("display","block");break}},microphoneClick:function(){if("Klik microphone untuk memulai!"===this.placeholderValue){this.synth.cancel(),this.isClicked=!0,U("#fab_send").css({"background-color":"#42A5F5"}),U(".icon-to-change").css({color:"white"}),this.recognizeVoice(),this.placeholderValue="Mohon tunggu sebentar...",U(".chat_field").addClass("user_waiting");var a=this;setTimeout((function(){a.placeholderValue="ANYA sedang mendengar... Silahkan berbicara!",U(".chat_field").removeClass("user_waiting"),U(".chat_field").addClass("anya_listening")}),2e3)}else this.synth.speaking?(console.log("still speaking"),U(".waiting").show(),U(".waiting").tooltip("show"),setInterval((function(){U(".waiting").tooltip("hide").fadeOut(9e3).delay(1e3)}),1500)):(U("#fab_send").css({"background-color":"white"}),U(".icon-to-change").css({color:"#42A5F5"}),this.placeholderValue="Klik microphone untuk memulai!",U(".chat_field").removeClass("user_waiting"),U(".chat_field").removeClass("anya_listening"),U(".chat_field").addClass("anya_speaking"),this.synth.cancel(),this.currentRec.stop())},voiceTimer:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(this.synth.resume(),this.voiceTimeout=setTimeout(this.voiceTimer,1e4)):(this.synth.pause(),this.synth.resume(),this.voiceTimeout=setTimeout(this.voiceTimer,1e4))},greeting:function(a){var e=this;this.synth.cancel(),this.voiceTimeout=setTimeout(this.voiceTimer,1e4),this.voiceList=this.synth.getVoices(),this.synth.onvoiceschanged=function(){e.voiceList=e.synth.getVoices()},this.botSpeech.text=O()(a);var t=window.speechSynthesis.getVoices();this.botSpeech.voice=t[11],this.botSpeech.lang="id-ID",this.botSpeech.voiceURI="native",this.synth.speak(this.botSpeech),this.botSpeech.onend&&(this.botSpeech.onend=function(){clearTimeout(this.voiceTimeout)}),this.indexChatBot=this.indexChatBot+1,U(".chat_body").append('<div class="chat-default" style="width: 80%; margin-left: 5px; text-align: left;"></div>'),U(".chat-default").append('<img class="direct-chat-img" src=\''.concat(this.publicPath,"pp-anya.png'>")),U(".chat-default").append('<div class="direct-chat-text greeting">'.concat(a,"</div>"))},recognizeVoice:function(){var a=this;window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;var e=new window.SpeechRecognition;e.lang=this.lang_,e.interimResults=!0,e.addEventListener("result",(function(e){var t=Array.from(e.results).map((function(a){return a[0]})).map((function(a){return a.transcript})).join("");a.runtimeTranscription_=t})),this.currentRec=e,this.startSpeechToTxt()},startSpeechToTxt:function(){var a=this;console.log("listening...");var e=this;this.currentRec.addEventListener("end",(function(){if(a.transcription_=[],a.transcription_.push(a.runtimeTranscription_),""!==a.transcription_[0]){if(a.voiceList=a.synth.getVoices(),a.synth.onvoiceschanged=function(){a.voiceList=a.synth.getVoices()},a.botSpeech.text="".concat(a.transcription_[0]),a.botSpeech.voice=a.voiceList[11],"cerai gugat"!==a.transcription_[0]&&"cerai talak"!==a.transcription_[0]&&"harta bersama"!==a.transcription_[0]&&"waris"!==a.transcription_[0]&&"dispensasi kawin"!==a.transcription_[0]&&"perwalian"!==a.transcription_[0]&&"izin poligami"!==a.transcription_[0]&&"penetapan ahli waris"!==a.transcription_[0]&&"isbat nikah"!==a.transcription_[0]&&"pengangkatan anak"!==a.transcription_[0]&&"syarat-syarat berperkara"!==a.transcription_[0]&&"halaman utama"!==a.transcription_[0]&&"gugatan Mandiri"!==a.transcription_[0]&&(a.placeholderValue="ANYA sedang berbicara... Silahkan dengarkan!",U(".chat_field").removeClass("user_waiting"),U(".chat_field").removeClass("anya_listening"),U(".chat_field").addClass("anya_speaking"),a.synth.cancel(),a.botSpeech.text="Maaf, pilihan Anda tidak tersedia, silahkan pilih opsi lain!",a.synth.speak(a.botSpeech),a.botSpeech.onend=function(){e.recognizeVoice(),e.placeholderValue="ANYA sedang mendengar... Silahkan berbicara!",U(".chat_field").removeClass("anya_speaking"),U(".chat_field").removeClass("user_waiting"),U(".chat_field").addClass("anya_listening")}),"cerai talak"===a.transcription_[0]){var t="Berikut syarat-syarat pengajuan cerai talak: <br>\n              1. Surat permohonan rangkap 4. <br>\n              2. Fotokopi KTP asli pemohon. <br>\n              3. Fotocopy buku nikah. <br>\n              4. Membayar panjar biaya perkara.";a.showBotVoice(t),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(t)}else if("cerai gugat"===a.transcription_[0]){var n="Berikut syarat-syarat pengajuan cerai gugat: <br>\n              1. Surat gugatan rangkap 4. <br>\n              2. Fotocopy KTP asli penggugat. <br>\n              3. Fotocopy buku nikah. <br>\n              4. Membayar panjar biaya perkara. ";a.showBotVoice(n),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(n)}else if("harta bersama"===a.transcription_[0]){var i="Berikut syarat-syarat gugatan harta bersama: <br>\n              1. Surat gugatan rangkap sesuai dengan jumlah para pihak. <br>\n              2. Fotocopy KTP surat cerai. <br>\n              3. Fotocopy KTP penggugat. <br>\n              4. Membayar panjar biaya perkara. ";a.showBotVoice(i),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(i)}else if("waris"===a.transcription_[0]){var s="Berikut syarat-syarat gugatan waris: <br>\n            1. Surat gugatan rangkap sesuai dengan jumlah para pihak. <br>\n            2. Membayar panjar biaya perkara.";a.showBotVoice(s),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(s)}else if("dispensasi kawin"===a.transcription_[0]){var r="Berikut syarat-syarat dispensasi kawin: <br>\n            1. N-P/Penolakan KUA. <br>\n            2. KTP pemohon. <br>\n            3. Fotocopy surat nikah pemohon. <br>\n            4. KTP calon suami dan istri. <br> \n            5. Fotocopy kartu keluarga. <br> \n            6. Fotocopy akta kelahiran suami dan istri. <br>\n            7. Fotocopy ijazah calon suami dan istri.";a.showBotVoice(r),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(r)}else if("perwalian"===a.transcription_[0]){var o="Berikut syarat-syarat perwalian: <br>\n            1. Fotocopy surat nikah. <br> \n            2. Fotocopy akta kelahiran anak. <br>\n            3. Fotocopy surat kematian ibu / bapak. <br> \n            4. KTP asli dan fotocopy pemohon. ";a.showBotVoice(o),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(o)}else if("izin poligami"===a.transcription_[0]){var c="Berikut syarat-syarat izin poligami: <br>\n            1. Surat permohonan rangkap 4. <br>\n            2. Fotocopy KTP pemohon dan calon istri beserta istri pertama. <br>\n            3. Fotocopy buku nikah pemohon. <br> \n            4. Fotocopy kartu keluarga pemohon. <br> \n            5. Surat keterangan status calon istri dari desa, bila belum pernah menikah (apabila pernah terjadi perceraian, melampirkan fotocopy akta cerai dan apabila meninggal dunia, melampirkan surat kematian). <br>\n            6. Surat pernyataan berlaku adil. <br> \n            7. Surat keterangan penghasilan diketahui desa / instansi. <br>\n            8. Surat ijin atasan bila PNS. <br>\n            9. Surat pernyataan tidak keberatan dimadu dari calon istri. <br>\n            10. Surat pernyataan tidak keberatan dimadu dari istri pertama. <br>\n            11. Surat keterangan pemisahan harta kekayaan. <br> \n            12. Membayar panjar biaya perkara. ";a.showBotVoice(c),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(c)}else if("penetapan ahli waris"===a.transcription_[0]){var l="Berikut syarat-syarat penetapan ahli waris: <br>\n            1. Surat permohonan rangkap 4. <br>\n            2. Fotocopy KTP pemohon / para pemohon. <br>\n            3. Fotocopy kartu keluarga pewaris. <br>\n            4. Fotocopy kartu keluarga orang tua pewaris. <br>\n            5. Fotocopy surat nikah pewaris. <br> \n            6. Fotocopy surat nikah orang tua pewaris. <br>\n            7. Fotocopy surat kematian orang tua pewaris. <br>\n            8. Surat keterangan ahli waris dari desa yang diketahui camat. <br>\n            9. Membayar panjar biaya perkara. ";a.showBotVoice(l),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(l)}else if("isbat nikah"===a.transcription_[0]){var d="Berikut syarat-syarat isbat nikah: <br>\n            1. Surat permohonan rangkap 4. <br> \n            2. Fotocopy KTP suami istri. <br>\n            3. Fotocopy kartu keluarga. <br>\n            4. Surat keterangan dari desa tentang status suami dan istri waktu menikah. <br>\n            5. Surat keterangan dari KUA (asli) tentang tidak tercatatnya pernikahan pada registrasi KUA. <br>\n            6. Membayar panjar biaya perkara. ";a.showBotVoice(d),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(d)}else if("pengangkatan anak"===a.transcription_[0]){var h="Berikut syarat-syarat pengangkatan anak: <br>\n            1. Surat nikah orang tua anak. <br>\n            2. Akta kelahiran / surat kelahiran anak. <br>\n            3. Surat nikah calon orang tua angkat. <br>\n            4. KTP suami-istri calon orang tua angkat. <br>\n            5. Surat keterangan sehat calon orang tua angkat. <br> \n            6. SKCK calon orang tua angkat. <br>\n            7. KTP orang tua anak. <br>\n            8. Suket penghasilan orang tua angkat. <br>\n            9. Super penyerahan anak. <br> \n            10. Suket hubungan keluarga / orang lain. ";a.showBotVoice(h),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(h)}else if("syarat-syarat berperkara"===a.transcription_[0]){var p="Syarat perkara apa yang ingin anda ketahui? <br>\n            - Cerai talak. <br>\n            - Cerai gugat. <br>\n            - Harta bersama. <br>\n            - Waris. <br>\n            - Dispensasi kawin. <br>\n            - Perwalian. <br>\n            - Izin poligami. <br>\n            - Penetapan ahli waris. <br>\n            - Isbat nikah.  <br>\n            - Pengangkatan anak. <br>\n            ";a.showBotVoice(p),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(p)}else if("gugatan Mandiri"===a.transcription_[0]){var u="Mohon tunggu sebentar, kami akan mengantarkan Anda ke Halaman Gugatan Mandiri.";a.showBotVoice(u),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(u)}else if("halaman utama"===a.transcription_[0]){var g="Mohon tunggu sebentar, kami akan mengantarkan Anda ke Halaman Utama.";a.showBotVoice(g),a.showUserVoiceAsText(a.transcription_[0]),a.showBotVoiceAsText(g)}}else""===a.transcription_[0]&&"ANYA sedang mendengar... Silahkan berbicara!"===a.placeholderValue&&(a.placeholderValue="ANYA sedang berbicara... Silahkan dengarkan!",U(".chat_field").removeClass("user_waiting"),U(".chat_field").removeClass("anya_listening"),U(".chat_field").addClass("anya_speaking"),a.synth.cancel(),a.botSpeech.text="Maaf, kami tidak mendengar suara Anda. Silahkan coba lagi!",a.synth.speak(a.botSpeech),a.botSpeech.onend=function(){e.recognizeVoice(),e.placeholderValue="ANYA sedang mendengar... Silahkan berbicara!",U(".chat_field").removeClass("anya_speaking"),U(".chat_field").removeClass("user_waiting"),U(".chat_field").addClass("anya_listening")});a.runtimeTranscription_="",a.currentRec.stop()})),this.currentRec.start()},showBotVoice:function(a){this.placeholderValue="ANYA sedang berbicara... Silahkan dengarkan!",U(".chat_field").removeClass("user_waiting"),U(".chat_field").removeClass("anya_listening"),U(".chat_field").addClass("anya_speaking"),this.synth.cancel(),this.voiceTimeout=setTimeout(this.voiceTimer,1e5),this.botSpeech.text=O()(a),this.synth.speak(this.botSpeech),this.botSpeech.onend&&(this.botSpeech.onend=function(){clearTimeout(this.voiceTimeout)});var e=this.voiceList[this.voiceList.length-1];if(e){var t=this;this.botSpeech.onend=function(){t.goToTheCertainPage()}}},showUserVoiceAsText:function(a){this.indexChatUser=this.indexChatUser+1,U(".chat_body").append("<div class='direct-chat-msg right user-chat-".concat(this.indexChatUser+1,'\' style="width: 98%; text-align: left;"></div>')),U(".user-chat-".concat(this.indexChatUser+1)).append("<img class='direct-chat-img' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIADwAPAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgn/2gAIAQEAAAAA+lYAj8cy5ndHO8VNN0IFrk62gjEYudH9iLQPN6lec+0VmtG038L9UpWh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAhAAAAAAAP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAAAD/xAAuEAABAwMACAUEAwAAAAAAAAABAgMEAAURBhASEyAhQVEiMmKRwSNxcoExQqH/2gAIAQEAAT8A14PHdbuuMvcMY2wPGs88Z6ClT5qzlUh0n8qjXmawoFay8jqlfwaZebkNIdbOUrGRwCpxJmySf53qtdgJNu+zq+G7N7u4yPUoK9xrsyC3bWfUVL9zw6QxiS1IA5Y2F/Gpplb7qGkeZasCkNpabQhPlQkJH64CMDJ5DvWkk+Gu3uRm3wp5ak42Dkp2TnJNC4S2hhyPvT0Wg4z9xVqmuN3SNJl/TabUcITzxkY2j3piRHkjLLrbg9Ks1gjVL0nnvLVuAllHTllf7Jp+VKknLz7jn5K+KAAGNY8JykkHuDg0xe7rG5JkqUB/VY2x/tR9LkBvEmMsud2/KfeumrtXSu9dKFZNf//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AB//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AB//Z'/>"),U(".user-chat-".concat(this.indexChatUser+1)).append('<div class="direct-chat-text user-text" style="margin-left:55px;">'.concat(a,"</div>"))},showBotVoiceAsText:function(a){this.indexChatBot=this.indexChatBot+1,U(".chat_body").append("<div class='direct-chat-msg chat-default-".concat(this.indexChatBot+1,'\' style="width: 80%; margin-left: 5px; text-align: left;"></div>')),U(".chat-default-".concat(this.indexChatBot+1)).append('<img class="direct-chat-img" src=\''.concat(this.publicPath,"pp-anya.png'>")),U(".chat-default-".concat(this.indexChatBot+1)).append('<div class="direct-chat-text bot-voice">'.concat(a,"</div>"));var e=U(".chat_body");e.scrollTop(e.prop("scrollHeight"))},goToTheCertainPage:function(){if("halaman utama"===this.transcription_[0])return this.router.push({name:"welcome"});"gugatan Mandiri"===this.transcription_[0]?window.location.replace("https://anya.pa-tulungagung.go.id/user/perceraian"):(this.recognizeVoice(),this.placeholderValue="ANYA sedang mendengar... Silahkan berbicara!",U(".chat_field").removeClass("anya_speaking"),U(".chat_field").removeClass("user_waiting"),U(".chat_field").addClass("anya_listening"))}},watch:{},created:function(){},mounted:function(){U(".direct-chat-msg").remove(),U(".icon-to-change").css({color:""}),this.toggleFab()}};t("dcc7");M.render=C,M.__scopeId="data-v-5982bd9a";e["default"]=M},dcc7:function(a,e,t){"use strict";t("58a84")}}]);
//# sourceMappingURL=chunk-5b8c32fd.92b85451.js.map